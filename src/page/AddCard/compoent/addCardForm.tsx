import styled from "styled-components";
import { InsertPayload } from "../../../model/card";

interface UpdateForm {
  color: (color: string) => void;
  cardNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
  MM: (e: React.ChangeEvent<HTMLInputElement>) => void;
  YY: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: (e: React.ChangeEvent<HTMLInputElement>) => void;
  CVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardpw1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardpw2: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const AddCardForm = ({
  form,
  update,
}: {
  form: InsertPayload;
  update: UpdateForm;
}) => {
  return (
    <FormBox>
      <label>카드 번호</label>
      <InputBox>
        <input maxLength={20} value={form.cardNum} onChange={update.cardNum} />
      </InputBox>

      <label>만료일</label>
      <InputBox width={10}>
        <input
          value={form.MM}
          onChange={update.MM}
          maxLength={2}
          placeholder="MM"
        />
        <SpanBox>/</SpanBox>
        <input
          value={form.YY}
          onChange={update.YY}
          maxLength={2}
          placeholder="YY"
        />
      </InputBox>

      <label>카드 소유자 이름(선택)</label>
      <InputBox>
        <input
          value={form.name}
          onChange={update.name}
          max={30}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </InputBox>

      <label>보안코드(CVC/CVV)</label>
      <InputBox width={6}>
        <input
          type="password"
          maxLength={3}
          value={form.CVCcode}
          onChange={update.CVC}
        />
      </InputBox>

      <label>카드 비밀번호</label>
      <PasswordBox>
        <input
          type="password"
          maxLength={1}
          value={form.cardPw1}
          onChange={update.cardpw1}
        />
        <input
          type="password"
          maxLength={1}
          value={form.cardPw2}
          onChange={update.cardpw2}
        />
        <SpanBox>*</SpanBox>
        <SpanBox>*</SpanBox>
      </PasswordBox>
    </FormBox>
  );
};

export default AddCardForm;

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
    box-sizing: border-box;
    width: 100%;
    padding: 0 1rem;
    font-size: 18px;
    background-color: #ecebf1;
    border-radius: 8px;
  }
`;
const PasswordBox = styled.div`
  display: flex;
  height: 3rem;

  input {
    width: 2.5rem;
    box-sizing: border-box;
    margin-right: 0.5rem;
    font-size: 18px;
    text-align: center;
    background-color: #ecebf1;
    border-radius: 8px;
  }
`;
const SpanBox = styled.span`
  display: flex;
  margin: 0 0.5rem;
  align-items: center;
  justify-items: center;
  font-size: 18px;
`;
