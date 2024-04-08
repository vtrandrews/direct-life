import styled from "styled-components";

type StyledProps = {
  $isMatch: boolean;
};

const BoxItem = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0.3rem 1rem;
  border-right: ${(props) => (props.$isMatch ? "3px solid #101525" : "none")};
  margin-right: ${(props) => (props.$isMatch ? "0" : "3px")};
  transition: all ease-in-out 0.3s;

  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    right: -20%;
    top: 50%;
    transform: translateX(100%) translateY(-50%);
    background-color: #101525;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    opacity: 1;
    visibility: visible;
    white-space: nowrap;
    z-index: 1;
    transition: opacity 0.3s;
  }

  &::after {
    content: "";
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s;
  }
`;

type Props = {
  path: string;
  tooltip: string;
  children: React.ReactNode;
};

export const AsideMenuItem = (props: Props) => {
  const { path, children, tooltip } = props;
  const urlPath = window.location.pathname;
  const isPathMatch = urlPath === path;

  return (
    <BoxItem data-tooltip={tooltip} $isMatch={isPathMatch}>
      <a href={path}>{children}</a>
    </BoxItem>
  );
};

export default AsideMenuItem;
