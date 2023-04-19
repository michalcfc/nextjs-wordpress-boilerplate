// components
import { Box, Button } from '@chakra-ui/react';

const PricingItemFooter = () => (
  <Box mt={14}>
    <Button
      as="a"
      w="full"
      variant="brandPrimary"
      href="/contact"
      _hover={{ bg: 'black', color: 'white', textDecoration: 'none' }}
    >
      Subscribe
    </Button>
  </Box>
);

export default PricingItemFooter;
