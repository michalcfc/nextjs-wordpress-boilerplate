// components
import { GridItem } from '@chakra-ui/react';

// types
import { SectionCardD } from './SectionCard.d';

// utils
import { SPACING } from '@/utils/styles/spacing';
import { BORDER_RADIUS } from '@/utils/styles/borderRadius';

// helpers
import { getBackgroundColorVariant } from './helpers';

const SectionCard = ({
  variant,
  isShadow,
  children,
  customPadding,
  ...rest
}: SectionCardD) => (
  <GridItem
    height="100%"
    position="relative"
    p={customPadding || SPACING.xl}
    borderRadius={BORDER_RADIUS.base}
    boxShadow={isShadow ? 'md' : ''}
    bg={getBackgroundColorVariant(variant)}
    {...rest}
  >
    {children}
  </GridItem>
);

export default SectionCard;
