import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import useDebounce from '../hooks/useDebounce';
import { getSickList } from '../api/search';
import { Sick } from '../types/SickType';
import ResultSpan from '../components/ResultSpan';
import RecommendBlock from '../components/RecommendBlock';
import { maxShowNum, recommendArray } from '../constants/constant';

export default function Home() {
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState<Sick[]>([]);
  const [onFocus, setOnFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  let arr = sessionStorage.getItem('recentSearch');
  let recentSearchArr = arr ? JSON.parse(arr) : [];

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (search.length === 0) setSearchRes([]);
    setSearch(e.target.value);
  };

  const handleSearchValue = (value: string) => {
    setSearch(value);
  };

  //ref
  const clickInputFocus = () => {
    setOnFocus(true);
  };

  const clickSection = <T extends Event>(event: T) => {
    const targetNode = event.target as Node;
    if (document.activeElement !== inputRef.current && !sectionRef.current?.contains(targetNode)) {
      setOnFocus(false);
      setSearchRes([]);
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

  //debounce
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    if (search === '') return;
    const getSick = async () => {
      const res = await getSickList(debouncedSearch);
      if (res.length > maxShowNum) {
        const tmpArr = res.slice(0, maxShowNum);
        setSearchRes(tmpArr);
      } else {
        setSearchRes(res);
      }
    };
    getSick();
  }, [debouncedSearch]);

  //sessionStorage
  const addRecentSearch = (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault();
    const arr = sessionStorage.getItem('recentSearch');
    if (arr) {
      const recentArr = JSON.parse(arr);
      const index = recentArr.indexOf(search);
      if (index > -1) {
        recentArr.splice(index, 1);
      }
      if (recentArr.length === maxShowNum) recentArr.splice(-1, 1);
      sessionStorage.setItem('recentSearch', JSON.stringify([search, ...recentArr]));
    } else sessionStorage.setItem('recentSearch', JSON.stringify([search]));
  };

  useEffect(() => {
    arr = sessionStorage.getItem('recentSearch');
    recentSearchArr = arr ? JSON.parse(arr) : [];
  }, []);

  return (
    <HomeContainer>
      <HomeHeader>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </HomeHeader>
      <div ref={sectionRef}>
        <SearchAreaContainer onSubmit={addRecentSearch}>
          <AiOutlineSearch size="24" color="#A7AFB7" />
          <SearchAreaInput
            ref={inputRef}
            value={search}
            onChange={changeInputValue}
            placeholder="질환명을 입력해 주세요."
            onFocus={clickInputFocus}
          />
          <SearchButton onClick={addRecentSearch}>
            <AiOutlineSearch size="30" color="#ffffff" />
          </SearchButton>
        </SearchAreaContainer>
        {onFocus && (
          <ResultAreaContainer>
            {search ? (
              searchRes.map((search) => {
                return (
                  <ResultSpan
                    key={search.sickCd}
                    title={search.sickNm}
                    handleSearchValue={handleSearchValue}
                  />
                );
              })
            ) : (
              <>
                <ResultRecentArea>
                  <ResultSectionTitle>최근검색어</ResultSectionTitle>
                  {recentSearchArr.length === 0 ? (
                    <NoResultText>최근검색어가 없습니다</NoResultText>
                  ) : (
                    recentSearchArr.map((result: string) => {
                      return (
                        <ResultSpan
                          title={result}
                          handleSearchValue={handleSearchValue}
                          key={result}
                        />
                      );
                    })
                  )}
                </ResultRecentArea>
                <ResultRecommendArea>
                  <>
                    <ResultSectionTitle>추천 검색어로 검색해보세요</ResultSectionTitle>
                    <BlockContainer>
                      {recommendArray.map((result: string) => {
                        return (
                          <RecommendBlock
                            title={result}
                            handleSearchValue={handleSearchValue}
                            key={result}
                          />
                        );
                      })}
                    </BlockContainer>
                  </>
                </ResultRecommendArea>
              </>
            )}
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
  margin-top: 200px;
`;

const HomeHeader = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SearchAreaContainer = styled.form`
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
  padding: 20px 0;
  margin-top: 5px;
  width: 490px;
  border-radius: 15px;
  background-color: #ffffff;
`;

const ResultRecentArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.2);
`;

const ResultSectionTitle = styled.span`
  padding: 0 25px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #6a737b;
`;

const NoResultText = styled.span`
  margin-top: 10px;
  color: #a7afb7;
`;

const ResultRecommendArea = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

const BlockContainer = styled.div`
  padding: 0 25px;
  display: flex;
  gap: 10px;
`;
