import { BiHappyHeartEyes } from 'react-icons/bi';
import { GrCompliance } from 'react-icons/gr';
import { BsTrophy } from 'react-icons/bs';
import { GiStarsStack } from 'react-icons/gi';

export const getNumberIcon = (id: number) => {
  const icons = [GiStarsStack, BiHappyHeartEyes, GrCompliance, BsTrophy];
  return icons[id - 1];
};
