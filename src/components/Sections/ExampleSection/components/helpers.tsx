import {
  GiShakingHands,
  GiStarsStack,
} from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';

export const getFeatureIcon = (id: number) => {
  const icons = [
    GiStarsStack,
    AiOutlineFileDone,
    GiShakingHands,
    GiStarsStack,
  ];
  return icons[id - 1];
};
