// components
import {
  Flex,
  GridItem,
  Img,
} from '@chakra-ui/react';

// types
import { PartnersItemD } from './PartnersItem.d';

const PartnersItem = ({ img, name }: PartnersItemD) => (
  <GridItem
    p="40px"
    width="100%"
    height="full"
    textAlign="center"
    borderTop="1px solid #e9e9e9"
    borderRight="1px solid #e9e9e9"
  >
    <Flex justifyContent="center">
      <Img
        src={img}
        alt={name}
        width="130px"
      />
    </Flex>
  </GridItem>
);

export default PartnersItem;
