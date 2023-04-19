// components
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';

// items
import { FaqItemD } from './FaqItem.d';

const FaqSection = ({ title, desc }: FaqItemD) => (
  <Accordion allowToggle>
    <AccordionItem borderTopWidth={0}>
      <AccordionButton
        p={5}
        width="100%"
        flexWrap="wrap"
        _hover={{ bg: 'none' }}
        justifyContent="space-between"
      >
        <Box
          as="span"
          flex="1"
          textAlign="left"
        >
          <Heading size="md">{title}</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>{desc}</AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export default FaqSection;
