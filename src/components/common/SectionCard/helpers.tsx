import { Variant } from './SectionCard.d';

export const getBackgroundColorVariant = (variant?: Variant) => {
  switch (variant) {
    case 'dark':
      return 'lightBlack';
    case 'light':
      return 'gray';
    default:
      return 'white';
  }
};
