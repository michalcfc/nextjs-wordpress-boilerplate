import client from '@/lib/api';
import { QUERY_ALL_MENUS } from '@/lib/queries/menus';
import {
  Menu,
  MenuItem,
  MenuLocationEnum,
  MenuToMenuItemConnectionEdge,
} from '@/generated/graphql';

export const MENU_LOCATION_NAVIGATION_DEFAULT = 'DEFAULT_NAVIGATION';

/**
 * mapMenuData
 */

export function mapMenuData(menu: Menu) {
  const { node }: any = menu;
  const data = { ...node };

  data.menuItems = (data.menuItems?.edges ?? [])
    .map(({ node }: MenuToMenuItemConnectionEdge) => ({ ...node }));

  return data;
}

/**
 * getAllMenus
 */

export async function getAllMenus() {
  const data = await client.query({
    query: QUERY_ALL_MENUS,
  });

  const menus = data?.data.menus.edges.map(mapMenuData);

  return {
    menus,
  };
}

/**
 * parseHierarchicalMenu
 */
export const parseHierarchicalMenu = (
  data: MenuItem[] = [],
  { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {},
) => {
  const tree = [] as Menu[];
  const childrenOf = {} as any;

  data.forEach((item) => {
    const newItem = { ...item } as any;
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });
  return tree;
};

/**
 * findMenuByLocation
 */

export function findMenuByLocation(menus: Menu[], location: MenuLocationEnum) {
  if (typeof location !== 'string') {
    throw new Error('Failed to find menu by location - location is not a string.');
  }

  const menu = menus?.find(({ locations }) => locations?.map((loc) => loc?.toUpperCase())
    .includes(location.toUpperCase()));

  return menu && Array.isArray(menu.menuItems) && parseHierarchicalMenu(menu.menuItems);
}
