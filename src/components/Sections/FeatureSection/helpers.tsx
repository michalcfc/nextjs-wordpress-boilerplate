import {
  FaCode, FaHeart, FaMoneyBill, FaPencilAlt, FaPhotoVideo, FaSmile, FaThumbsUp, FaUsers,
} from 'react-icons/fa';

export const getFeatureIcon = (id: number) => {
  const icons = [
    FaCode,
    FaHeart,
    FaSmile,
    FaUsers,
    FaThumbsUp,
    FaPencilAlt,
    FaMoneyBill,
    FaPhotoVideo,
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
