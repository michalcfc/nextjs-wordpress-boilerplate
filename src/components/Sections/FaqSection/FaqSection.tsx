import useSWR from 'swr';
import { fetcher } from '@/lib/jsonFetcher';

// components
import { FaqList } from '@/components/Faq';
import { SectionWrapper } from '@/components/Sections/components';

// types
import { FaqSectionD } from './FaqSection.d';
import { DataD } from '@/types/data';

const FaqSection = ({ title, subtitle, questions }: FaqSectionD) => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <SectionWrapper
      title={title}
      subtitle={subtitle}
      customWidth="5xl"
    >
      <FaqList questions={questions || data.questions} />
    </SectionWrapper>

  );
};

export default FaqSection;
