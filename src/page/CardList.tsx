import styled from "styled-components";
import Card from "../component/Card";
import ModalLayout from "../component/Modal";

const testArr = new Array(22).fill([""]);

const CardList = () => {
  return (
    <ModalLayout>
      <ScrollBox>
        {testArr.map((_, idx) => {
          return (
            <CardBox>
              <Card />
              <div className="card-name">엄카</div>
            </CardBox>
          );
        })}
      </ScrollBox>
    </ModalLayout>
  );
};

export default CardList;

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
