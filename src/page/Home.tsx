import React from 'react';
import styled from 'styled-components';
import SearchArea from '../components/SearchArea';

export default function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </HomeHeader>
      <SearchArea />
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
