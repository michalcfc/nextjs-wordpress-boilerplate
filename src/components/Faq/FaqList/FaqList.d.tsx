export type FaqQuestion = {
  id: number;
  name: string;
  desc: string;
};

export interface FaqListD {
  questions: FaqQuestion[];
}
