import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useGetCardList from "../../../hook/useGetCardList";
import Card from "../../../component/Card";

const CardSlide = () => {
  const card = useGetCardList();
  const Navigate = useNavigate();

  return (
    <SlideBpx>
      <PageNavi onClick={card.prePage}>{"<"}</PageNavi>
      <CardBox>
        {card.info ? (
          <>
            <Card form={card.info} size="small" />
            <div className="nickname">{card.info.nickname}</div>
          </>
        ) : (
          <AddBtn onClick={() => Navigate("/add")}>+</AddBtn>
        )}
      </CardBox>
      <PageNavi onClick={card.nextPage}>{">"}</PageNavi>
    </SlideBpx>
  );
};

export default CardSlide;

const SlideBpx = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
const CardBox = styled.div`
  flex: 1;
  padding: 1.5rem 1.8rem;
  background-color: #f6f6f6;

  .nickname {
    height: 1rem;
    margin-top: 0.5rem;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #333333;
  }
`;
const PageNavi = styled.div`
  margin: 0 1rem;
  cursor: pointer;
`;
const AddBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  max-width: 12rem;
  background-color: lightgray;
  border-radius: 4px;
  cursor: pointer;
`;
