import React from 'react';

// components
import {
  Button,
  useTab,
} from '@chakra-ui/react';

// types
import { ProjectsFiltersItemD } from './ProjectsFiltersItem.d';

// constants
import { CATEGORY_NAME_ALL } from '@/components/Projects/constants';

const ProjectsFiltersItem = React.forwardRef<
HTMLDivElement,
ProjectsFiltersItemD
>((props, ref) => {
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps['aria-selected'];
  const { name, count } = props;
  return (
    <Button
      {...tabProps}
      fontWeight={500}
      borderRadius="full"
      bg={isSelected ? 'black' : 'gray'}
      variant={isSelected ? 'solid' : 'ghost'}
      color={isSelected ? 'brand' : 'black'}
      order={name === CATEGORY_NAME_ALL ? 0 : 1}
      _hover={{
        bg: 'black',
        color: 'brand',
      }}
    >
      {`${name} (${count})`}
    </Button>
  );
});

export default ProjectsFiltersItem;
