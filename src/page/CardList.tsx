import styled from 'styled-components';
import Card from '../component/Card';
import ModalLayout from '../component/Modal';
import useGetCardList from '../hook/useGetCardList';
import { useNavigate } from 'react-router-dom';

const CardList = () => {
  const Navigation = useNavigate();
  const { list } = useGetCardList();

  return (
    <ModalLayout>
      <Topbar onClick={() => Navigation('/')}>
        <span>{'<'}</span>
        <span>처음으로</span>
      </Topbar>

      <ScrollBox>
        {list.map((item, idx) => {
          return (
            <CardBox key={idx}>
              <Card {...item} size="large" />
              <div className="card-name">{item?.name}</div>
            </CardBox>
          );
        })}
      </ScrollBox>
    </ModalLayout>
  );
};

export default CardList;

const Topbar = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  font-size: 18px;
  > span {
    margin-right: 1rem;
  }
`;
const ScrollBox = styled.div`
  flex: 1;
  overflow: auto;
`;
const CardBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    margin: 8rem 0 5rem 0;
    font-size: 26px;
  }
  .card-name {
    margin: 1rem 0 1.5rem 0;
    font-weight: bold;
  }
`;
