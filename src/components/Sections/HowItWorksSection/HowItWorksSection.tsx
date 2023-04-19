import useSWR from 'swr';
import { Box } from '@chakra-ui/react';
import { fetcher } from '@/lib/jsonFetcher';

// components
import { SectionWrapper } from '../components';
import {
  StepsFooter,
  StepsList,
} from './components';

// types
import { DataD } from '@/types/data';

const HowItWorksSection = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <SectionWrapper
      isBackground
      strap="Proces pracy"
      title="Jak to działa?"
      subtitle="Proces montażu filmu dla klienta składa się z kilku etapów."
    >
      <StepsList steps={data.steps} />
      <StepsFooter />
      <Box
        top="30%"
        width="100%"
        left="0"
        height="50%"
        position="absolute"
        bgRepeat="no-repeat"
        bgImage="url(/img/process/steps.png)"
      />
    </SectionWrapper>

  );
};

export default HowItWorksSection;
