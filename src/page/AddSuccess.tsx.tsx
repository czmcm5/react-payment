import styled from "styled-components";
import { Button } from "../component/Button";
import Card from "../component/Card";
import ModalLayout from "../component/Modal";
import useSaveCard from "../hook/useSaveCard";

const AddSuccess = () => {
  const { color } = useSaveCard();

  return (
    <ModalLayout>
      <ContentBox>
        <div className="title">카드등록이 완료되었습니다.</div>
        <Card color={color} size="large" />
        <input />
      </ContentBox>

      <ButtonBox>
        <Button label="다음" />
      </ButtonBox>
    </ModalLayout>
  );
};

export default AddSuccess;

const ContentBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    margin: 8rem 0 5rem 0;
    font-size: 26px;
  }
  input {
    width: 70%;
    margin-top: 2rem;
    padding-bottom: 3px;
    font-size: 20px;
    text-align: center;
    border-bottom: 2px solid #757575;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
