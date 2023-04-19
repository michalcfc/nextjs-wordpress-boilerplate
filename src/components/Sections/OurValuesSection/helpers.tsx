import {
  FaGlobe, FaKey, FaRocket, FaStar, FaTrophy, FaUser,
} from 'react-icons/fa';

export const getValuesIcon = (id: number) => {
  const icons = [FaGlobe, FaUser, FaStar, FaRocket, FaKey, FaTrophy];
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
