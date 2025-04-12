import styled from "styled-components";
import ModalLayout from "../style/ModalLayout";
import { Button } from "../stories/Button";
import { PageTitle } from "../stories/PageTitle";
import CardComponent from "../component/Card";

const CardSlide = () => {
  return (
    <>
      <PageTitle text="보유카드" line="short-line" />
      <CardComponent />
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
