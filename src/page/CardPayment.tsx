import styled from "styled-components";
import { Button } from "../component/Button";
import Card from "../component/Card";
import { PageTitle } from "../component/PageTitle";
import ModalLayout from "../component/Modal";

const CardSlide = () => {
  return (
    <>
      <PageTitle text="보유카드" line="short-line" />

      <SlideBpx>
        <div className="slide-arrow">{"<"}</div>
        <div className="cardBox">
          <Card color="mint" size="small" />
          <div className="card-nickname">엄카</div>
        </div>
        <div className="slide-arrow">{">"}</div>
      </SlideBpx>

      <MiniText>
        계좌정보 변경은
        <span> 설정{">"}계좌정보 </span>
        에서 확인하실 수 있습니다.
      </MiniText>
    </>
  );
};
const TotalAmount = () => {
  return (
    <>
      <PageTitle text="결제금액" line="line" />
      <AmountBox>
        <div>총 결제금액</div>
        <div>325,600원</div>
      </AmountBox>
    </>
  );
};

const TermsItem = () => {
  return (
    <>
      <PageTitle text="약관 이용 및 동의" line="line" />
      <TermsBox>
        <span>거래정보 제공 동의: NEXTSTEP</span>
        <span className="line">상세보기</span>
      </TermsBox>
      <TermsBox>
        <span>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</span>
        <input type="checkbox" />
      </TermsBox>
    </>
  );
};

const CardPayment = () => {
  return (
    <ModalLayout>
      <Topbar>
        <span>Pay</span>
        <div className="bar" />
        <span>결제</span>
      </Topbar>

      <ContentBox>
        <CardSlide />
        <TotalAmount />
        <TermsItem />
      </ContentBox>

      <ButtonGroup>
        <Button shape="square" label="결제하기" />
        <Button shape="square" label="취소하기" />
      </ButtonGroup>
    </ModalLayout>
  );
};

export default CardPayment;

const Topbar = styled.div`
  display: flex;
  font-size: 18px;
  > div,
  > span {
    margin-right: 0.5rem;
  }
  .bar {
    width: 3px;
    height: 20px;
    background-color: #2ac1bc;
  }
`;
const ContentBox = styled.div`
  flex: 1;
  padding: 1rem;
  margin-bottom: 1rem;
`;
const SlideBpx = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  > div.slide-arrow {
    margin: 0 1rem;
    cursor: pointer;
  }
  > div.cardBox {
    flex: 1;
    padding: 1.5rem 1.8rem;
    background-color: #f6f6f6;
  }
  div.card-nickname {
    margin-top: 0.5rem;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #333333;
  }
`;
const AmountBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  font-weight: bold;
  > div {
    padding: 0 5px;
    box-shadow: inset 0 -0.4rem 0 #aee8e6;
  }
`;
const TermsBox = styled.div`
  margin-bottom: 1rem;
  font-size: 12px;
  font-weight: bold;
  span.line {
    margin-left: 1rem;
    font-weight: normal;
    text-decoration: underline;
    cursor: pointer;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const MiniText = styled.div`
  text-align: right;
  font-size: 12px;
  span {
    font-weight: bold;
  }
`;
