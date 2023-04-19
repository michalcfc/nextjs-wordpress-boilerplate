// components
import { FaqItem } from '../FaqItem';
import { FaqListD } from '@/components/Faq/FaqList/FaqList.d';

const FaqList = ({ questions }: FaqListD) => (
  <>
    {questions.map(({ name, desc }) => (
      <FaqItem key={name} title={name} desc={desc} />
    ))}
  </>
);

export default FaqList;
