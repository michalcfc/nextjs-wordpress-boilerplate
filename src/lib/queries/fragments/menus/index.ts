import { gql } from '@apollo/client';

export const MENU_FRAGMENT = gql`
  fragment MenuItems on Menu {
     menuItems {
            edges {
              node {
                cssClasses
                id
                parentId
                label
                title
                target
                path
              }
            }
          }
  }
`;
