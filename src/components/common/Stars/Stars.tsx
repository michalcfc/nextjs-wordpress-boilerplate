// icons
import { BsStarFill } from 'react-icons/bs';

// components
import { Flex } from '@chakra-ui/react';

// types
import { StarsD } from './Stars.d';

const Stars = ({ nbOfStars }: StarsD) => (
  <Flex alignItems="center" color="yellow">
    {Array(5)
      .fill('')
      .map((item, i) => (
        <BsStarFill
          color={i <= Number(nbOfStars) - 1 ? 'brand' : 'lightGray'}
        />
      ))}
  </Flex>
);

export default Stars;
