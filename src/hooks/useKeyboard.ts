import { useState, useEffect } from 'react';
import { Sick } from '../types/SickType';

function useKeyboard(
  value: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  searchRes: Sick[],
  recentSearchArr: string[],
) {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        if (value.length === 0) {
          if (recentSearchArr.length - 1 === index) return;
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          if (searchRes.length - 1 === index) return;
          setIndex((prevIndex) => prevIndex + 1);
        }
      } else if (event.key === 'ArrowUp') {
        if (index === 0) return;
        setIndex((prevIndex) => prevIndex - 1);
      } else if (event.key === 'Enter') {
        if (value.length === 0) setSearch(recentSearchArr[index]);
        else setSearch(searchRes[index].sickNm);
      }
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [searchRes, index]);

  useEffect(() => {
    setIndex(-1);
  }, [value]);

  return index;
}

export default useKeyboard;
