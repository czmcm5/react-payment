import { ReactNode } from "react";
import styled from "styled-components";

const ModalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Background>
      <ModalBox>{children}</ModalBox>
    </Background>
  );
};

export default ModalLayout;

const Background = styled.div`
  z-index: 99;
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #00000085;
`;
const ModalBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 46rem;
  margin: auto 0rem;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  padding: 1.5rem;
`;
