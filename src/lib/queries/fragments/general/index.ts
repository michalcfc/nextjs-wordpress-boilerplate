import { gql } from '@apollo/client';

export const GENERAL_FRAGMENT = gql`
  fragment Settings on GeneralSettings {
    dateFormat
    description
    language
    timeFormat
    title
  }
`;
