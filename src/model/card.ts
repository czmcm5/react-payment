export interface CardInfo {
  color: string;
  cardNum: string;
  MM: string;
  YY: string;
  name: string;
  CVCcode: string;
}

export interface InsertPayload extends CardInfo {
  cardPw1: string;
  cardPw2: string;
}
