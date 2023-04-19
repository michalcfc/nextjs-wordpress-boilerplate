import { Button } from '@chakra-ui/react';
import { BiArrowToTop } from 'react-icons/bi';
import {
  useEffect,
  useState,
} from 'react';

const GoToTop = () => {
  const [isBottom, setIsBottom] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = function () {
      if (
        window.innerHeight + window.scrollY
                >= document.documentElement.clientHeight
      ) {
        setIsBottom(true);
      }
      if (window.scrollY < 500) {
        setIsBottom(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isBottom]);

  return (
    <div>
      {isBottom && (
        <Button
          w="60px"
          h="60px"
          right={10}
          bottom={10}
          bg="brand"
          zIndex={999}
          rounded="full"
          color="black"
          position="fixed"
          transition="all 0.3s"
          _hover={{
            bg: 'black',
            color: 'white',
          }}
          onClick={() => window.scroll(0, 0)}
        >
          <BiArrowToTop size="md" />
        </Button>
      )}
    </div>
  );
};

export default GoToTop;
