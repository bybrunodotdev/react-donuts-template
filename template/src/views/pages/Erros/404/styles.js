import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 1rem;
    font-size: 4rem;
    font-weight: 100;
  }
`;
