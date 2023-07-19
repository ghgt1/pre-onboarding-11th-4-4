import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

export const HomeHeader = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const SearchAreaContainer = styled.form`
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

export const SearchAreaInput = styled.input`
  margin-left: 16px;
  width: 100%;
`;

export const SearchButton = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  padding: 1px 10px;
  display: flex;
  align-items: center;
  background-color: #007be9;
  cursor: pointer;
`;

export const ResultAreaContainer = styled.div`
  padding: 20px 0;
  margin-top: 5px;
  width: 490px;
  border-radius: 15px;
  background-color: #ffffff;
`;

export const ResultRecentArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.2);
`;

export const ResultSectionTitle = styled.p`
  padding: 0 25px;
  margin: 8px 0 8px 0;
  font-size: 14px;
  font-weight: 700;
  color: #53585d;
`;

export const NoResultText = styled.span`
  margin: 10px 0;
  color: #a7afb7;
  margin-left: 25px;
`;

export const ResultRecommendArea = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const BlockContainer = styled.div`
  padding: 0 25px;
  display: flex;
  gap: 10px;
`;
