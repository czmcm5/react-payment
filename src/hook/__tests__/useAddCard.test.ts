/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, test, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useAddCard from '../useAddCard';

const handleSubmit = vi.fn();

const originAlert = window.alert;

describe('useAddCard > ', () => {
  beforeAll(() => {
    window.alert = vi.fn();
  });

  afterAll(() => {
    window.alert = originAlert;
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  test('카드의 초기값 검사', () => {
    const { result } = renderHook(() => useAddCard({ onSubmit: handleSubmit }));
    const { form } = result.current;

    expect(form).toEqual({
      CVCcode: '',
      MM: '',
      YY: '',
      cardNum: '',
      cardPw1: '',
      cardPw2: '',
      color: 'gray',
      name: '',
    });
  });

  test('카드의 번호를 변경할 수 있다.', () => {
    const { result } = renderHook(() => useAddCard({ onSubmit: handleSubmit }));

    act(() => {
      // @ts-ignore
      result.current.update.cardNum({ target: { value: '1234' } });
    });

    expect(result.current.form.cardNum).toBe('1234');
  });

  test('카드 번호만 변경하고 submit을 하면 오류가 발생한다.', () => {
    const { result } = renderHook(() => useAddCard({ onSubmit: handleSubmit }));

    act(() => {
      // @ts-ignore
      result.current.update.cardNum({ target: { value: '1234' } });
    });

    expect(result.current.form.cardNum).toBe('1234');

    act(() => {
      result.current.submit();
    });

    expect(window.alert).toHaveBeenCalledWith('모든 항목을 채워주세요.');
  });

  test('카드의 모든 정보를 채우고 전송을 하면, onSubmit이 실행된다.', () => {
    const { result } = renderHook(() => useAddCard({ onSubmit: handleSubmit }));

    act(() => {
      result.current.update.color('color');
      // @ts-ignore
      result.current.update.cardNum({ target: { value: '1111222233334444' } });
      // @ts-ignore
      result.current.update.MM({ target: { value: '12' } });
      // @ts-ignore
      result.current.update.YY({ target: { value: '25' } });
      // @ts-ignore
      result.current.update.name({ target: { value: 'name' } });
      // @ts-ignore
      result.current.update.CVC({ target: { value: '123' } });
      // @ts-ignore
      result.current.update.cardpw1({ target: { value: '1' } });
      // @ts-ignore
      result.current.update.cardpw2({ target: { value: '2' } });
    });

    const expected = {
      CVCcode: '123',
      MM: '12',
      YY: '25',
      cardNum: '1111-2222-3333-4444',
      cardPw1: '1',
      cardPw2: '2',
      color: 'color',
      name: 'name',
    };

    expect(result.current.form).toEqual(expected);

    act(() => {
      result.current.submit();
    });

    expect(window.alert).not.toBeCalled();
    expect(handleSubmit).toHaveBeenCalledWith(expected);
  });
});
