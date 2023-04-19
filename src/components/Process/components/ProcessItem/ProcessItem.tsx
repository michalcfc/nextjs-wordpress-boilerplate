// components
import {
  Flex,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import { SectionCard } from '@/components/common/SectionCard';

// types
import { ProcessItemD } from './ProcessItem.d';

// helpers
import { getIcon } from '../../helpers';

const ProcessItem = ({ id, name, desc }: ProcessItemD) => (
  <SectionCard
    key={id}
    variant="light"
  >
    <Flex
      gap={3}
      height="100%"
      position="relative"
      flexDirection="column"
      _before={{
        content: `"0${id}"`,
        top: -4,
        right: 0,
        fontSize: 46,
        color: 'gray.300',
        fontWeight: '600',
        position: 'absolute',
      }}
    >
      <Icon
        as={getIcon(id)}
        fontSize={42}
      />
      <Heading
        as="h5"
        fontSize={22}
        fontWeight={600}
      >
        {name}
      </Heading>
      <Text color="muted">{desc}</Text>
    </Flex>
  </SectionCard>
);

export default ProcessItem;
