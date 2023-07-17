import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import useDebounce from '../hooks/useDebounce';
import { getSickList } from '../api/search';
import { Sick } from '../types/SickType';

export default function SearchArea() {
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState<Sick[]>([]);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    if (search === '') return;
    const getSick = async () => {
      const res = await getSickList(debouncedSearch);
      setSearchRes(res);
    };
    getSick();
    // setSearchRes(res);
  }, [debouncedSearch]);

  return (
    <>
      <SearchAreaContainer>
        <AiOutlineSearch size="24" color="#A7AFB7" />
        <SearchAreaInput
          value={search}
          onChange={changeInputValue}
          placeholder="질환명을 입력해 주세요."
        />
        <SearchButton>
          <AiOutlineSearch size="30" color="#ffffff" />
        </SearchButton>
      </SearchAreaContainer>
      {searchRes.map((search) => {
        return <p key={search.sickCd}>{search.sickNm}</p>;
      })}
    </>
  );
}

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
