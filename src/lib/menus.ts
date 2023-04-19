import client from "@/lib/api";
import { QUERY_ALL_MENUS } from "@/lib/queries/menus";
import {
  Menu,
  MenuConnectionEdge,
  MenuItem,
  MenuItemToMenuItemConnection,
  MenuToMenuItemConnection,
  MenuToMenuItemConnectionEdge,
  RootQuery
} from "@/generated/graphql";

export const MENU_LOCATION_NAVIGATION_DEFAULT = 'DEFAULT_NAVIGATION';


/**
 * mapMenuData
 */


export function mapMenuData(menu: Menu) {
  const { node }: any = menu;
  const data = { ...node};

  data.menuItems = (data.menuItems?.edges ?? [])
    .map(({ node }: MenuToMenuItemConnectionEdge) => {
    return { ...node };
  });

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
