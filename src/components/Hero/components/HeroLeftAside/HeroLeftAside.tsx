import {
  Box,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

// components
import { HeroActionButtons } from '../HeroActionButtons';

// types
import { HeroLeftAsideD } from './HeroLeftAside.d';

const HeroLeftAside = ({
  strap,
  title,
  subtitle,
  primary_cta,
  secondary_cta,
}: HeroLeftAsideD) => (
  <Stack
    spacing={{ base: 8 }}
    maxWidth={{ base: 'xl', md: '100%' }}
    textAlign={{ base: 'center', lg: 'left' }}
    margin={{ base: '0 auto', xl: '0 110px 0 0' }}
    gridColumn={{ base: 'span 12', lg: 'span 5' }}
  >
    <Box>
      {strap && (
      <Text
        py={1}
        px={2}
        as="span"
        fontSize="xs"
        borderWidth="2px"
        fontWeight={600}
        color="lightWhite"
        borderRadius="full"
        width="fit-content"
        borderColor="lightWhite"
        textTransform="uppercase"
      >
        {strap}
      </Text>
      )}
      <Heading
        color="white"
        mt={strap ? 3 : 0}
        lineHeight={1.1}
        fontWeight={600}
        fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}
      >
        <Text
          as="span"
          position="relative"
        >
          {title}
        </Text>
      </Heading>
    </Box>
    <Text color="lightWhite">{subtitle}</Text>
    <HeroActionButtons
      primary_cta={{ name: primary_cta.name, uri: primary_cta.uri }}
      secondary_cta={
                secondary_cta && { name: secondary_cta?.name, uri: secondary_cta?.uri }
            }
    />
  </Stack>
);

export default HeroLeftAside;
