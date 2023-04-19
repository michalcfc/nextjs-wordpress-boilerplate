// icons
import { FaPlay } from 'react-icons/fa';
import { keyframes } from '@emotion/react';
import {
  Button,
  Flex,
} from '@chakra-ui/react';

// types
import { PulseBtnD } from './PulseBtn.d';

const pulseBorder = keyframes`

  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const PulseBtn = ({ onClick }: PulseBtnD) => (
  <Button
    p={0}
    variant="text"
    onClick={onClick}
    _before={{
      content: "''",
      top: '50%',
      zIndex: 1,
      left: '50%',
      width: '80px',
      height: '80px',
      display: 'block',
      borderRadius: '50%',
      position: 'absolute',
      background: 'lightGray',
      transform: 'translateX(-50%) translateY(-50%)',
      animation: `${pulseBorder} 1500ms ease-out infinite`,
    }}
    _after={{
      content: "''",
      zIndex: 1,
      left: '50%',
      top: '50%',
      width: '80px',
      height: '80px',
      display: 'block',
      borderRadius: '50%',
      background: '#fff',
      position: 'absolute',
      transition: 'all 200ms',
      transform: 'translateX(-50%) translateY(-50%)',
    }}
  >
    <Flex
      width={12}
      height={12}
      zIndex={99}
      alignItems="center"
      justifyContent="center"
    >
      <FaPlay fill="black" />
    </Flex>
  </Button>
);

export default PulseBtn;
