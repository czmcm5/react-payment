export interface CardInfo {
  cardNum: string;
  MM: string;
  YY: string;
  name: string;
  code: string;
  color: string;
}

export interface InsertPayload extends CardInfo {
  password: [string, string];
}
