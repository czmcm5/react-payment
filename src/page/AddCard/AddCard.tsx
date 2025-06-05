import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../component/Button';
import ModalLayout from '../../component/Modal';
import useAddCard from '../../hook/useAddCard';
import AddCardForm from './compoent/addCardForm';
import AddCardColor from './compoent/addCardColor';

const AddCard = () => {
  const Navigation = useNavigate();
  const { form, update, submit } = useAddCard();

  return (
    <ModalLayout>
      <Topbar onClick={() => Navigation(-1)}>
        <span>{'<'}</span>
        <span>카드추가</span>
      </Topbar>

      <AddCardColor form={form} updateColor={update.color} />
      <AddCardForm form={form} update={update} />

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
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
