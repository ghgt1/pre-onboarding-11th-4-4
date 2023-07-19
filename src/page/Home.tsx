import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useDebounce from '../hooks/useDebounce';
import { getSickList } from '../api/search';
import { Sick } from '../types/SickType';
import ResultSpan from '../components/ResultSpan';
import RecommendBlock from '../components/RecommendBlock';
import { MAX_SHOW_NUM, RECOMMEND_ARRAY } from '../constants/constant';
import useKeyboard from '../hooks/useKeyboard';
import {
  HomeContainer,
  HomeHeader,
  SearchAreaContainer,
  SearchAreaInput,
  SearchButton,
  ResultAreaContainer,
  ResultSectionTitle,
  NoResultText,
  ResultRecentArea,
  ResultRecommendArea,
  BlockContainer,
} from './styles';

export default function Home() {
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState<Sick[]>([]);
  const [onFocus, setOnFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  let arr = sessionStorage.getItem('recentSearch');
  let recentSearchArr = arr ? JSON.parse(arr) : [];

  //debounce
  const { debouncedValue, setDebouncedValue } = useDebounce(search);

  useEffect(() => {
    if (search === '' || debouncedValue === '') return;

    const getSick = async () => {
      const res = await getSickList(debouncedValue);
      if (res.length > MAX_SHOW_NUM) {
        const tmpArr = res.slice(0, MAX_SHOW_NUM);
        setSearchRes(tmpArr);
      } else {
        setSearchRes(res);
      }
      setLoading(false);
    };
    getSick();
  }, [debouncedValue, onFocus]);

  useEffect(() => {
    if (search.length === 0) {
      setSearchRes([]);
      setDebouncedValue('');
      setLoading(false);
    } else setLoading(true);
  }, [search]);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setSearch(e.target.value);
  };

  const handleSearchValue = (value: string) => {
    setSearch(value);
    addRecentSearch(undefined, value);
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

  //sessionStorage
  const addRecentSearch = (
    event?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
    value?: string,
  ) => {
    event?.preventDefault();
    const arr = sessionStorage.getItem('recentSearch');
    const tmpSearch = value || search;
    if (arr) {
      const recentArr = JSON.parse(arr);
      const index = recentArr.indexOf(tmpSearch);
      if (index > -1) {
        recentArr.splice(index, 1);
      }
      if (recentArr.length === MAX_SHOW_NUM) recentArr.splice(-1, 1);
      sessionStorage.setItem('recentSearch', JSON.stringify([tmpSearch, ...recentArr]));
    } else sessionStorage.setItem('recentSearch', JSON.stringify([tmpSearch]));
  };

  useEffect(() => {
    arr = sessionStorage.getItem('recentSearch');
    recentSearchArr = arr ? JSON.parse(arr) : [];
  }, []);

  //keyboard
  const index = useKeyboard(search, setSearch, searchRes, recentSearchArr);

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
            {loading ? (
              <ResultSectionTitle>검색 중...</ResultSectionTitle>
            ) : search ? (
              <>
                <ResultSpan key={search} title={search} handleSearchValue={handleSearchValue} />
                <ResultSectionTitle>추천 검색어</ResultSectionTitle>
                {searchRes.length === 0 ? (
                  <NoResultText>검색 결과가 없습니다</NoResultText>
                ) : (
                  searchRes.map((search, i: number) => {
                    return (
                      <ResultSpan
                        key={search.sickCd}
                        title={search.sickNm}
                        handleSearchValue={handleSearchValue}
                        highlight={i === index}
                      />
                    );
                  })
                )}
              </>
            ) : (
              <>
                <ResultRecentArea>
                  <ResultSectionTitle>최근검색어</ResultSectionTitle>
                  {recentSearchArr.length === 0 ? (
                    <NoResultText>최근검색어가 없습니다</NoResultText>
                  ) : (
                    recentSearchArr.map((result: string, i: number) => {
                      return (
                        <ResultSpan
                          title={result}
                          handleSearchValue={handleSearchValue}
                          key={result}
                          highlight={i === index}
                        />
                      );
                    })
                  )}
                </ResultRecentArea>
                <ResultRecommendArea>
                  <>
                    <ResultSectionTitle>추천 검색어로 검색해보세요</ResultSectionTitle>
                    <BlockContainer>
                      {RECOMMEND_ARRAY.map((result: string) => {
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
