import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';

import { MdOutlineMovieFilter } from 'react-icons/md';
import { BiMoviePlay, BiCameraMovie } from 'react-icons/bi';
import { SiThemoviedatabase } from 'react-icons/si';
import { BsStars } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

import { SidePanelContainer } from './styled';

export function SidePanel() {
  const {
    // header,
    fetchPopular,
    fetchNowPlaying,
    fetchTopRated,
    fetchUncoming,
  } = useContext(MovieContext);
  return (
    <SidePanelContainer>
      <a href="/">
        <SiThemoviedatabase size={36} />
      </a>
      <div>
        <MdOutlineMovieFilter size={28} onClick={() => fetchPopular()} />

        <BiMoviePlay size={28} onClick={() => fetchNowPlaying()} />

        <BsStars size={28} onClick={() => fetchTopRated()} />

        <BiCameraMovie size={28} onClick={() => fetchUncoming()} />
      </div>

      <FaUserCircle size={28} />
    </SidePanelContainer>
  );
}
