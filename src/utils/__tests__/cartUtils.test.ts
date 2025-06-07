import { describe, test, expect } from 'vitest';
import { extractNumber, maskCardNumber } from '../card';

describe('extractNumber > ', () => {
  // 엣지 케이스를 10개정도 더 만들어줘.
  test.each([
    { input: '123abc456789', expected: '123456789' },
    { input: 'abc123def456ghi789', expected: '123456789' },
    { input: 'abc', expected: '' },
    { input: '123-456-7890', expected: '1234567890' },
    { input: '12.34.56', expected: '123456' },
    { input: '12,34,56', expected: '123456' },
    { input: '12/34/56', expected: '123456' },
    { input: '12 34 56', expected: '123456' },
    { input: '12a34b56c', expected: '123456' },
    { input: '12!@#$34%^56&*()', expected: '123456' },
    { input: 'ㅁㅇㄴㄹ234ㅃㄲㄹ324ㅂㅇ', expected: '234324' },
  ])(
    '문자열 $input 에서 숫자만 추출하여 $expected 라는 값을 얻는다.',
    ({ input, expected }) => {
      const result = extractNumber(input);
      expect(result).toBe(expected);
    },
  );
});

describe('maskCardNumber > ', () => {
  test.each([
    { input: '1234-5678-9012-3456', expected: '1234 5678 **** ****' },
    { input: '1234-5678-9012', expected: '1234 5678 ****' },
    { input: '1234-5678', expected: '1234 5678' },
    { input: '1234', expected: '1234' },
    { input: '12345-67890-12345', expected: '12345 67890 *****' },
    { input: '123-456-789-012-345', expected: '123 456 *** *** ***' },
    { input: '12-34-56-78', expected: '12 34 ** **' },
    { input: '1234-56-7890', expected: '1234 56 ****' },
    { input: '1-2-3-4', expected: '1 2 * *' },
    { input: '', expected: '' },
  ])('카드번호 "$input"이 "$expected"로 마스킹된다.', ({ input, expected }) => {
    const result = maskCardNumber(input);
    expect(result).toBe(expected);
  });
});
