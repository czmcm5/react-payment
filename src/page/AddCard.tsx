import styled from "styled-components";
import ModalLayout from "../component/Modal";
import { Button } from "../component/Button";
import useAddCard from "../hook/useAddCard";
import StyledCard from "../component/Card";
import SelectColor from "../component/SelectColor";
import useModal from "../hook/useModal";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const Navigation = useNavigate();
  const { form, update, submit } = useAddCard();
  const { open, open_modal, close_modal } = useModal();

  const closeModal = (color: string) => {
    update.color(color);
    close_modal();
  };

  return (
    <ModalLayout>
      <Topbar onClick={() => Navigation(-1)}>
        <span>{"<"}</span>
        <span>카드추가</span>
      </Topbar>

      <CardBox>
        <StyledCard color={form.color} onClick={open_modal} />
      </CardBox>

      <FormBox>
        <label>카드 번호</label>
        <InputBox>
          <input
            name="cardNum"
            maxLength={16}
            value={form.cardNum}
            onChange={update.filed}
          />
        </InputBox>

        <label>만료일</label>
        <InputBox width={10}>
          <input
            name="MM"
            value={form.MM}
            onChange={update.filed}
            maxLength={2}
            placeholder="MM"
          />
          <span>/</span>
          <input
            name="YY"
            value={form.YY}
            onChange={update.filed}
            maxLength={2}
            placeholder="YY"
          />
        </InputBox>

        <label>카드 소유자 이름(선택)</label>
        <InputBox>
          <input
            name="name"
            value={form.name}
            onChange={update.filed}
            max={30}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </InputBox>

        <label>보안코드(CVC/CVV)</label>
        <InputBox width={6}>
          <input
            type="password"
            name="code"
            maxLength={3}
            value={form.code}
            onChange={update.filed}
          />
        </InputBox>

        <label>카드 비밀번호</label>
        <InputBox className="back-white">
          <input
            type="password"
            name="pw0"
            maxLength={1}
            value={form.password[0]}
            onChange={(e) => update.pw(0, e.target.value)}
          />
          <input
            type="password"
            name="pw1"
            maxLength={1}
            value={form.password[1]}
            onChange={(e) => update.pw(1, e.target.value)}
          />
          <span>*</span>
          <span>*</span>
        </InputBox>
      </FormBox>

      <ButtonBox>
        <Button label="다음" onClick={submit} />
      </ButtonBox>

      <SelectColor open={open} onClick={closeModal} />
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
const CardBox = styled.div`
  margin: 0 1rem;
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
