import { useEffect, useState } from 'react';

export const useScrollHandler = (distance = 10) => {
  // setting initial value to false
  const [scroll, setScroll] = useState(false);

  // running on mounts
  useEffect(() => {
    const onScroll = () => {
      // Logic is false tell user reaches threshold, then true after.
      const scrollCheck = window.scrollY >= distance;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    // setting the event handler from web API
    document.addEventListener('scroll', onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
