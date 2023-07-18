import React from 'react';
import styled from 'styled-components';

type RecommendBlockProps = {
  title: string;
  handleSearchValue: (value: string) => void;
};

export default function RecommendBlock({ title, handleSearchValue }: RecommendBlockProps) {
  const clickSearchValue = () => {
    handleSearchValue(title);
  };
  return <RecommendContainer onClick={clickSearchValue}>{title}</RecommendContainer>;
}

const RecommendContainer = styled.div`
  cursor: pointer;
  color: #007be9;
  background-color: #eef8ff;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;
`;
