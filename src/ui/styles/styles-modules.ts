import styled from "styled-components";
import { colorFadeInUp } from "./keyframes-modules";

type StyledProps = {
  size?: 'sm' | 'md' | 'lg';
  align?: 'center' | 'flex-start' | 'flex-end';
  color?: string;
  gridTemplateColumns?: string;
  variant?: 'primary' | 'secondary';
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
  padding: 1rem;
  background-color: #f0f0f0;
`;

export const Content = styled.div<StyledProps>`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ align }) => align || 'center'};
  padding: ${({ align }) => (align === 'flex-start') ? '5rem 0' : '0'};
`;

export const DirectLifeBanner = styled.div`
  > img {
    width: 450px;
  }
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoLoading = styled.div`
  width: 100px;
  height: 100px;
  background-image: linear-gradient(to top, #000, transparent), url('https://i.imgur.com/LMsxr8e.png');
  background-size: 100% 0%, cover;
  background-repeat: no-repeat;
  animation: ${colorFadeInUp} 3s ease-in-out infinite;
`;

export const CardBackground = styled.div<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  border-radius: 10px;
  justify-content: center;
  max-height: 70vh;
  overflow-y: auto;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;

export const HeaderListTable = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: 1fr 1.3fr 1fr 1.8fr 1fr 0.3fr 0.3fr;
  width: 100%;
  color: #515151;
  border-radius: 10px;
  align-items: center;
  padding: 0 1rem;
  justify-items: flex-start;

  :hover {
    color: #0099ff;
    transition: none;
  };
`;

export const HeaderTableItem = styled.div<StyledProps>`
  display: flex;
  color: ${({ color }) => color || '#515151'};
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
`;

export const BodyListTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr 1fr 1.8fr 1fr 0.3fr 0.3fr;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  padding: 0.1rem 1rem;
  border: 2px solid #f0f0f0;
  justify-items: flex-start;

  & .edit-icon {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }

  & svg {
    cursor: pointer;
  }
 `;

export const TableContent = styled.div<StyledProps>`
  display: flex;
  width: ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'fit-content';
      case 'md':
        return '50%';
      case 'lg':
        return '70%';
    }
  }
  };
  gap: 1rem;
  font-size: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-left: -2rem;
`;

export const Button = styled.button<StyledProps>`
  background-color: ${({ variant }) => variant === 'secondary' ? 'transparent' : '#101525'};
  color: ${({ variant }) => variant === 'secondary' ? '#101525' : '#fff'};
  border: ${({ variant }) => variant === 'secondary' ? '1px solid #101525' : 'none'};
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 14px;
  font-weight: 600;
  transition: all ease-in-out 0.2s;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  
  &:hover {
    cursor: pointer;
    background-color: #383d4d;
    color: #fff;
  }

  &:active {
    background-color: #0b0d14;
  }
`;

export const BoxHeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 10px;
  padding: 0.1rem 1rem;
  background-color: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

export const BoxFormContent = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns || '1fr'};
  gap: 1rem;
  width: 100%;
  margin-bottom: 20px;

  & label {
    font-size: 14px;
    font-weight: 500;
    color: #515151;
  }
`;

export const BoxFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;

  & input {
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid #515151;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
`;

export const BoxButtonContent = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: flex-end;
`;

export const Required = styled.span`
  color: red;
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
`;