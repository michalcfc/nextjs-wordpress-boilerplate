// components
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
} from '@chakra-ui/react';

// items
import { FaqItemD } from './FaqItem.d';

const FaqSection = ({ title, desc }: FaqItemD) => (
  <Accordion allowToggle>
    <AccordionItem borderTopWidth={0}>
      <AccordionButton
        p={5}
        _hover={{ bg: 'none' }}
      >
        <Flex
          width="100%"
          justifyContent="space-between"
        >
          <Heading size="md">{title}</Heading>
          <AccordionIcon />
        </Flex>
      </AccordionButton>
      <AccordionPanel pb={4}>{desc}</AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export default FaqSection;
