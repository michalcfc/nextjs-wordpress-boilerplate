// components
import { Flex, Text } from '@chakra-ui/react';

// types
import { ProjectDetailsRowD } from './ProjectDetailsRow.d';

const ProjectDetailsRow = ({ label, value }: ProjectDetailsRowD) => (
  <Flex
    px={2}
    justifyContent="center"
    _notLast={{ borderRight: '1px solid #A1C60A4D' }}
  >
    <Flex flexDirection="column">
      <Text fontSize="md">{label}</Text>
      <Text fontSize="lg" fontWeight={600}>
        {value}
      </Text>
    </Flex>
  </Flex>
);

export default ProjectDetailsRow;
