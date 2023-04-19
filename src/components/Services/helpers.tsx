import {
  BsPersonVideo,
  BsPersonVideo2,
} from 'react-icons/bs';
import {
  ImFilePicture,
  ImFilm,
} from 'react-icons/im';
import {
  GiFilmProjector,
  GiFilmSpool,
  GiFilmStrip,
} from 'react-icons/gi';
import {
  MdMovieEdit,
  MdOutlineMovieFilter,
  MdSlowMotionVideo,
} from 'react-icons/md';
import { TfiVideoClapper } from 'react-icons/tfi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BiCameraMovie } from 'react-icons/bi';
import { GrMicrophone } from 'react-icons/gr';

export const getServiceIcon = (id: number) => {
  const icons = [
    GiFilmStrip,
    ImFilm,
    MdOutlineMovieFilter,
    GiFilmProjector,
    GiFilmSpool,
    MdSlowMotionVideo,
    ImFilm,
    TfiVideoClapper,
    BsPersonVideo,
    GrMicrophone,
    BsPersonVideo2,
    AiOutlineYoutube,
    BiCameraMovie,
    MdMovieEdit,
    ImFilePicture,
  ];
  return icons[id - 1];
};
