import React from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/jsonFetcher';

// components
import { SectionWrapper } from '../components';
import { OurValuesList } from '@/components/OurValues';

// types
import { DataD } from '@/types/data';

const OurValuesSection = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <SectionWrapper
      title="Nasze wartości"
    >
      <OurValuesList ourValues={data.values} />
    </SectionWrapper>

  );
};

export default OurValuesSection;
