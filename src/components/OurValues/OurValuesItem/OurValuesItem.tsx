// components
import { Grid, Heading, Text } from '@chakra-ui/react';
import { SectionCard, SectionCardIcon } from '@/components/common/SectionCard';

// items
import { OurValuesItemD } from './OurValuesItem.d';
import { getIconBg, getIconColor, getValuesIcon } from '../helpers';

const OurValuesItem = ({ id, name, desc }: OurValuesItemD) => (
  <SectionCard
    variant="light"
    bg={getIconBg(id)}
  >
    <Grid gap={4}>
      <Grid gap={3}>
        <SectionCardIcon
          bg={getIconBg(id)}
          color={getIconColor(id)}
          icon={getValuesIcon(id)}
        />
        <Heading
          as="h4"
          fontSize="lg"
          fontWeight={600}
        >
          {name}
        </Heading>
      </Grid>
      <Text color="muted">{desc}</Text>
    </Grid>
  </SectionCard>
);

export default OurValuesItem;
