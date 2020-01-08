import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  padding: 24px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 24px;
  line-height: 24px;
  word-wrap: break-word;
  color: rgba(0, 0, 0, 0.85);
  margin-left: 5px;
`;

export const TextBlock = styled.div`
  font-size: 12px;
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 24px;
  line-height: 24px;
  word-wrap: break-word;
  color: rgba(0, 0, 0, 0.85);
  margin-left: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  padding: 5px;
  background-color: #f3f4f7;
  margin-bottom: 24px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 14px;
  border: none;
  color: #fff;
  font-weight: 600;
  line-height: 18px;
  background-color: #666b8c
`;
