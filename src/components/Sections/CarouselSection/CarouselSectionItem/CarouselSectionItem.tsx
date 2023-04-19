// components
import {
  Box,
  Img,
  Link,
  Text,
} from '@chakra-ui/react';

// types
import { CarouselSectionItemD } from './CarouselSectionItem.d';

const CarouselSectionItem = ({ img, title }: CarouselSectionItemD) => (
  <Box
    role="group"
    width="100%"
    height="510px"
    overflow="hidden"
    borderRadius="xl"
  >
    <Img
      src={img}
      alt={title}
      width="100%"
      height="100%"
      objectFit="cover"
      position="relative"
      backgroundSize="cover"
      transition="transform .3s ease-out"
      _groupHover={{
        transform: 'scale(1.1)',
        transition: 'all .5s ease',
      }}
    />
    <Box
      inset="0%"
      borderRadius="xl"
      position="absolute"
      bgImage="linear-gradient(180deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.45))"
    />
    <Box
      left={5}
      bottom={5}
      position="absolute"
    >
      <Text
        mb={2}
        color="white"
        fontSize={22}
        fontWeight={600}
        width="fit-content"
        display="inline"
        textDecoration="none"
        backgroundSize="0% 2px"
        backgroundPosition=" 0 1em"
        transition="all .3s ease 0s"
        backgroundRepeat="no-repeat"
        backgroundImage="linear-gradient(to right,#9ca3af 20%,#9ca3af 100%)"
        _groupHover={{
          color: 'brand',
          backgroundSize: '100% 2px',
          backgroundImage:
                        'linear-gradient(to right,#c8ff62 20%, #c8ff62 100%)',
        }}
      >
        {title}
      </Text>
      {/* <Text */}
      {/*  color="lightGray" */}
      {/*  textTransform="uppercase" */}
      {/* > */}
      {/*  {desc} */}
      {/* </Text> */}
    </Box>
    <Link
      top={0}
      href="/offer"
      width="100%"
      height="100%"
      overflow="hidden"
      position="absolute"
    />
  </Box>
);

export default CarouselSectionItem;
