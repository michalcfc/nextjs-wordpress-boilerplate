import { gql } from '@apollo/client';
import { MENU_FRAGMENT } from './fragments';

export const QUERY_ALL_MENUS = gql`
  ${MENU_FRAGMENT}
  query AllMenus {
    menus {
      edges {
        node {
          id
          ...MenuItems
          name
          slug
          locations
        }
      }
    }
  }
`;
