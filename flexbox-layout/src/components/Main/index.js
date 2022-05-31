import styled from 'styled-components';

const Styled = styled.main`
  height: 50vh;
  background-color: #f5c632;
`;

export const Main = () => {
  return (
    <Styled>
      <h2>Main Content</h2>
      <p>
        **If things doen't look right make sure your browser is in "experimental
        mode"
      </p>
    </Styled>
  );
};
