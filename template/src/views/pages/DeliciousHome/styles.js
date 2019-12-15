import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  & span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.link};
  }
`;

export const DonutLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: Donut-logo-spin infinite 20s linear;
  }

  @keyframes Donut-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.3);
  }
`;

export const ContainerCode = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundBrown};
  padding: 2rem;
  border-radius: 0.55rem;
  margin: 0.55rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & code,
  p {
    line-height: 1;
    font-size: 1.2rem;
  }

  & code {
    background-color: ${({ theme }) => theme.colors.brownDark};
    box-shadow: ${({ theme }) => theme.shadows.brown};
    padding: 0.25rem;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
