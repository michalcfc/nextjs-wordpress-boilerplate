import { RiCompassDiscoverLine, RiDraftLine, RiKakaoTalkLine } from 'react-icons/ri';
import { RxMagicWand } from 'react-icons/rx';
import { BiRocket } from 'react-icons/bi';
import { MdOutlineCelebration } from 'react-icons/md';

export const getIcon = (id: number) => {
  const icons = [
    RiKakaoTalkLine,
    RiCompassDiscoverLine,
    RiDraftLine,
    RxMagicWand,
    BiRocket,
    MdOutlineCelebration,
  ];
  return icons[id - 1];
};

export const getIconColor = (id: number) => {
  const icons = [
    'purple',
    'orange',
    'blue',
    'green',
    'red',
    'purple',
    'orange',
    'blue',
  ];
  return icons[id - 1];
};

export const getIconBg = (id: number) => {
  const icons = [
    'lightPurple',
    'lightOrange',
    'lightBlue',
    'lightGreen',
    'lightRed',
    'lightPurple',
    'lightOrange',
    'lightBlue',
  ];
  return icons[id - 1];
};
