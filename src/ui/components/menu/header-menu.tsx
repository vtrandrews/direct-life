import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #101525;
  color: #fff;
  z-index: 1000;

  > span {
    padding: 0 0 0 1.5rem;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

export const HeaderMenu = () => {
  return (
    <Container>
      <span>DIRECT LIFE</span>
    </Container>
  );
};

export default HeaderMenu;
