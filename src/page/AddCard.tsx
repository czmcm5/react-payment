import styled from "styled-components";
import ModalLayout from "../style/ModalLayout";
import { Button } from "../stories/Button";
import useAddCard from "../hook/useAddCard";
import CardComponent from "../component/Card";

const AddCard = () => {
  const { form, updateField, submit } = useAddCard();

  return (
    <ModalLayout>
      <Topbar>
        <span>{"<"}</span>
        <span>카드추가</span>
      </Topbar>

      <CardComponent />

      <FormBox>
        <label>카드 번호</label>
        <InputBox>
          <input name="cardNum" value={form.cardNum} onChange={updateField} />
        </InputBox>

        <label>만료일</label>
        <InputBox width={10}>
          <input
            name="MM"
            value={form.MM}
            onChange={updateField}
            maxLength={2}
            placeholder="MM"
          />
          <span>/</span>
          <input
            name="YY"
            value={form.YY}
            onChange={updateField}
            maxLength={2}
            placeholder="YY"
          />
        </InputBox>

        <label>카드 소유자 이름(선택)</label>
        <InputBox>
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            max={30}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </InputBox>

        <label>보안코드(CVC/CVV)</label>
        <InputBox width={6}>
          <input name="code" value={form.code} onChange={updateField} />
        </InputBox>

        <label>카드 번호</label>
        <InputBox className="back-white">
          <input maxLength={1} />
          <input maxLength={1} />
          <span>*</span>
          <span>*</span>
        </InputBox>
      </FormBox>

      <ButtonBox>
        <Button label="다음" onClick={submit} />
      </ButtonBox>
    </ModalLayout>
  );
};

export default AddCard;

const Topbar = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  font-size: 18px;
  > span {
    margin-right: 1rem;
  }
`;
const FormBox = styled.div`
  flex: 1;
  label {
    display: block;
    margin-top: 1.2rem;
    font-size: 12px;
    color: #525252;
  }
`;
const InputBox = styled.div<{ width?: number }>`
  display: flex;
  width: ${(props) => (props.width ? `${props.width}rem` : "100%")};
  height: 3rem;
  margin-top: 0.5rem;
  background-color: #ecebf1;
  border-radius: 8px;
  input {
    width: 100%;
    font-size: 18px;
    text-align: center;
    color: #2ac1bc;
    background-color: #ecebf1;
    border-radius: 8px;
    caret-color: black;
  }
  span {
    display: flex;
    margin: 0 0.5rem;
    align-items: center;
    justify-items: center;
    font-size: 18px;
  }
  &.back-white {
    background-color: white;
  }
  &.back-white > input {
    width: 2.5rem;
    margin-right: 0.5rem;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
