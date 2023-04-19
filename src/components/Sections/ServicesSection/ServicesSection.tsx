import useSWR from 'swr';
import { fetcher } from '@/lib/jsonFetcher';

// components
import { ServicesList } from '@/components/Services';
import { SectionWrapper } from '../components';

// types
import { DataD } from '@/types/data';

const ServicesSection = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <SectionWrapper title="Design it your way, make it move">
      <ServicesList services={data.services} />
    </SectionWrapper>
  );
};

export default ServicesSection;
