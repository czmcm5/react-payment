import styled from "styled-components";

const CardComponent = () => {
  return (
    <CardBox>
      <div className="card-nickname">현석카드</div>
      <div className="chip" />
      <div className="card-number">1111 2222 **** ****</div>
      <div className="card-name">SSS</div>
    </CardBox>
  );
};

export default CardComponent;

const CardBox = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: 9rem;
  margin: auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: #85dec8;
  box-shadow: 2px 2px 4px 2px #bbbbbb;
  .card-nickname {
    font-size: 12px;
  }
  .chip {
    width: 2.5rem;
    height: 1.7rem;
    margin: 1rem 0;
    border-radius: 4px;
    background-color: #ccb76c;
  }
  .card-number {
    text-align: center;
  }
`;
