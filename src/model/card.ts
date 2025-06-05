interface BaseCardInfo {
  color: string;
  cardNum: string;
  MM: string;
  YY: string;
  name: string;
  CVCcode: string;
}

export interface SaveCardInfo extends BaseCardInfo {
  nickname: string;
}

export interface InsertPayload extends BaseCardInfo {
  cardPw1: string;
  cardPw2: string;
}
