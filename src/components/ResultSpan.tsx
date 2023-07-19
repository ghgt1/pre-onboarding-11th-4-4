import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

type ResultSpanProps = {
  title: string;
  handleSearchValue: (value: string) => void;
  highlight?: boolean;
};

interface ResultSpanContainerProps {
  $highlight?: boolean;
}

export default function ResultSpan({
  title,
  handleSearchValue,
  highlight = false,
}: ResultSpanProps) {
  const clickSearchValue = () => {
    handleSearchValue(title);
  };

  return (
    <ResultSpanContainer onClick={clickSearchValue} $highlight={highlight}>
      <AiOutlineSearch size="24" color="#A7AFB7" />
      <StyledSpan>{title}</StyledSpan>
    </ResultSpanContainer>
  );
}

const ResultSpanContainer = styled.div<ResultSpanContainerProps>`
  padding: 0 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 700;
  &:hover {
    background-color: rgba(128, 128, 128, 0.1);
  }
  ${(props) => (props.$highlight ? 'background-color: rgba(128, 128, 128, 0.1);' : '')}
`;

const StyledSpan = styled.span`
  margin: 8px 0;
  margin-left: 15px;
`;
