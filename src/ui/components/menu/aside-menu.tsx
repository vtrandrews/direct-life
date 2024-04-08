import styled from "styled-components";
import HomeIcon from "../../assets/icons/home-icon";
import ActivityIcon from "../../assets/icons/activity-icon";
import AsideMenuItem from "./aside-menu-item";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: fit-content;
  gap: 1rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e69b2a;
  z-index: 999;

  svg {
    width: 34px;
    height: 34px;
    cursor: pointer;
    color: #101525;
    transition: color 0.3s;
  }
`;

export const AsideMenu = () => {
  return (
    <Container>
      <AsideMenuItem path="/" tooltip="Início">
        <HomeIcon />
      </AsideMenuItem>
      <AsideMenuItem path="/activity" tooltip="Atividade">
        <ActivityIcon />
      </AsideMenuItem>
    </Container>
  );
};

export default AsideMenu;
