/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useGetCardList from '../useGetCardList';
import { SaveCardInfo } from '../../model/card';

const mockCardList: SaveCardInfo[] = [
  {
    color: 'blue',
    cardNum: '1111-2222-3333-4444',
    MM: '12',
    YY: '25',
    name: 'JOHN DOE',
    CVCcode: '123',
    nickname: 'My Card 1',
  },
  {
    color: 'red',
    cardNum: '5555-6666-7777-8888',
    MM: '06',
    YY: '27',
    name: 'JANE DOE',
    CVCcode: '456',
    nickname: 'My Card 2',
  },
];

describe('useGetCardList >', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  test('localStorage가 비어있을 때 빈 배열을 반환한다', () => {
    const { result } = renderHook(() => useGetCardList());

    expect(result.current.list).toEqual([]);
    expect(result.current.info).toBeUndefined();
  });

  test('localStorage에 카드 리스트가 있을 때 정상적으로 로드한다', () => {
    localStorage.setItem('cardList', JSON.stringify(mockCardList));

    const { result } = renderHook(() => useGetCardList());

    expect(result.current.list).toEqual(mockCardList);
    expect(result.current.info).toEqual(mockCardList[0]);
  });

  test('nextPage 함수가 정상적으로 작동한다', () => {
    localStorage.setItem('cardList', JSON.stringify(mockCardList));

    const { result } = renderHook(() => useGetCardList());

    expect(result.current.info).toEqual(mockCardList[0]);

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.info).toEqual(mockCardList[1]);
  });

  test('마지막 페이지에서 nextPage를 호출해도 페이지가 변경되지 않는다', () => {
    localStorage.setItem('cardList', JSON.stringify(mockCardList));

    const { result } = renderHook(() => useGetCardList());

    expect(result.current.info).toEqual(mockCardList[0]);

    // 다음 페이지로 이동
    act(() => {
      result.current.nextPage();
    });

    expect(result.current.info).toEqual(mockCardList[1]);
    // 마지막 페이지에서 nextPage 호출
    act(() => {
      result.current.nextPage();
    });

    expect(result.current.info).toEqual(mockCardList[1]);
  });

  test('prePage 함수가 정상적으로 작동한다', () => {
    localStorage.setItem('cardList', JSON.stringify(mockCardList));

    const { result } = renderHook(() => useGetCardList());

    // 두 번째 페이지로 이동
    act(() => {
      result.current.nextPage();
    });

    expect(result.current.info).toEqual(mockCardList[1]);

    // 이전 페이지로 이동
    act(() => {
      result.current.prePage();
    });

    expect(result.current.info).toEqual(mockCardList[0]);
  });

  test('첫 번째 페이지에서 prePage를 호출해도 페이지가 변경되지 않는다', () => {
    localStorage.setItem('cardList', JSON.stringify(mockCardList));

    const { result } = renderHook(() => useGetCardList());

    expect(result.current.info).toEqual(mockCardList[0]);

    act(() => {
      result.current.prePage();
    });

    expect(result.current.info).toEqual(mockCardList[0]);
  });

  test('카드가 1개일 때 정상적으로 작동한다', () => {
    const singleCard = [mockCardList[0]];
    localStorage.setItem('cardList', JSON.stringify(singleCard));

    const { result } = renderHook(() => useGetCardList());

    expect(result.current.list).toEqual(singleCard);
    expect(result.current.info).toEqual(singleCard[0]);

    // nextPage, prePage 호출해도 변경되지 않음
    act(() => {
      result.current.nextPage();
    });

    expect(result.current.info).toEqual(singleCard[0]);

    act(() => {
      result.current.prePage();
    });

    expect(result.current.info).toEqual(singleCard[0]);
  });
});
