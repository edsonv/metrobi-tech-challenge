import styled from 'styled-components';

const Styled = styled.header`
  height: 15vh;
  background-color: #54d5eb;
  border: 1px solid #54d5eb;
  width: 100%;
`;

export const Header = () => {
  return (
    <Styled>
      <h1>Header</h1>
    </Styled>
  );
};
