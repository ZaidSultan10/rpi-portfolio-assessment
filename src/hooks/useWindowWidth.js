import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setInnerWidth(newWidth);
    };

    // Event listener setup
    window.addEventListener('resize', updateWindowDimensions);

    // Cleanup the event listener on component unmount
    return () => {
        window.removeEventListener('resize', updateWindowDimensions);
      };
    }, [innerWidth]); // Empty dependency array to run the effect only once during component mount
  
    return innerWidth;
  };
  
  export default useWindowWidth;