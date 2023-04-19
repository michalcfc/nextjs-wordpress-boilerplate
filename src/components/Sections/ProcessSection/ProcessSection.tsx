import useSWR from 'swr';
import { fetcher } from '@/lib/jsonFetcher';

// components
import { SectionWrapper } from '../components';
import { ProcessList } from '@/components/Process';

// types
import { DataD } from '@/types/data';

const ProcessSection = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <SectionWrapper
      title="Nasz proces"
    >
      <ProcessList process={data.process} />
    </SectionWrapper>

  );
};

export default ProcessSection;
