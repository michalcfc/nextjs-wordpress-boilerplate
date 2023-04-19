import { gql } from '@apollo/client';
import {
  MENU_FRAGMENT,
  GENERAL_FRAGMENT,
  FEATURED_IMAGE_FRAGMENT,
} from '@/lib/queries/fragments';

export const SINGLE_PAGE_QUERY = gql`
  ${MENU_FRAGMENT}
  ${GENERAL_FRAGMENT}
  ${FEATURED_IMAGE_FRAGMENT}
  query SinglePageQuery($slug: ID!) {
    generalSettings {
      ...Settings
    }
    headerMenu: menu(id: "Header", idType: NAME) {
      ...MenuItems
    }
    footerMenu: menu(id: "Footer", idType: NAME) {
      ...MenuItems
    }
    page(id: $slug, idType: URI) {
      title(format: RENDERED)
      content(format: RENDERED)
      databaseId
      uri
      featuredImage {
        ...FeaturedImageFields
      }
      seo {
        fullHead
        title
        metaDesc
      }
    }
  }
`;
