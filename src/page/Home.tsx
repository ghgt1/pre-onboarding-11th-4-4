import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import useDebounce from '../hooks/useDebounce';
import { getSickList } from '../api/search';
import { Sick } from '../types/SickType';

export default function Home() {
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState<Sick[]>([]);
  const [onFocus, setOnFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clickInputFocus = () => {
    setOnFocus(true);
  };

  const clickSection = <T extends Event>(event: T) => {
    const targetNode = event.target as Node;

    if (document.activeElement !== inputRef.current && !sectionRef.current?.contains(targetNode)) {
      setOnFocus(false);
    }
  };

  const clickSectionWrapper: EventListener = (event) => {
    clickSection(event);
  };

  useEffect(() => {
    document.addEventListener('click', clickSectionWrapper);
    return () => {
      document.removeEventListener('click', clickSectionWrapper);
    };
  }, []);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    if (search === '') return;
    const getSick = async () => {
      const res = await getSickList(debouncedSearch);
      setSearchRes(res);
    };
    getSick();
  }, [debouncedSearch]);

  return (
    <HomeContainer>
      <HomeHeader>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </HomeHeader>
      <div ref={sectionRef}>
        <SearchAreaContainer>
          <AiOutlineSearch size="24" color="#A7AFB7" />
          <SearchAreaInput
            ref={inputRef}
            value={search}
            onChange={changeInputValue}
            placeholder="질환명을 입력해 주세요."
            onFocus={clickInputFocus}
          />
          <SearchButton>
            <AiOutlineSearch size="30" color="#ffffff" />
          </SearchButton>
        </SearchAreaContainer>
        {onFocus && (
          <ResultAreaContainer>
            {searchRes.map((search) => {
              return <p key={search.sickCd}>{search.sickNm}</p>;
            })}
          </ResultAreaContainer>
        )}
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
`;

const HomeHeader = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SearchAreaContainer = styled.div`
  width: 490px;
  height: 73px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 20px 10px 20px 24px;
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
`;

const SearchAreaInput = styled.input`
  margin-left: 16px;
  width: 100%;
`;

const SearchButton = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  padding: 1px 10px;
  display: flex;
  align-items: center;
  background-color: #007be9;
  cursor: pointer;
`;

const ResultAreaContainer = styled.div`
  padding: 20px 25px;
  margin-top: 5px;
  width: 490px;
  border-radius: 15px;
  background-color: #ffffff;
`;
