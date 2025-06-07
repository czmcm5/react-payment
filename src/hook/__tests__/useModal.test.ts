/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, test, vi, afterEach } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useModal from '../useModal';

describe('useModal >', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('모달의 초기 상태는 false이다', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.open).toBe(false);
  });

  test('open_modal을 호출하면 모달이 열린다', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.open).toBe(false);

    act(() => {
      result.current.open_modal();
    });

    expect(result.current.open).toBe(true);
  });

  test('close_modal을 호출하면 모달이 닫힌다', () => {
    const { result } = renderHook(() => useModal());

    // 먼저 모달을 열기
    act(() => {
      result.current.open_modal();
    });

    expect(result.current.open).toBe(true);

    // 모달 닫기
    act(() => {
      result.current.close_modal();
    });

    expect(result.current.open).toBe(false);
  });

  test('close_modal에 콜백 함수를 전달하면 모달이 닫힌 후 콜백이 실행된다', () => {
    const mockCallback = vi.fn();
    const { result } = renderHook(() => useModal());

    // 먼저 모달을 열기
    act(() => {
      result.current.open_modal();
    });

    expect(result.current.open).toBe(true);

    // 콜백과 함께 모달 닫기
    act(() => {
      result.current.close_modal(mockCallback);
    });

    expect(result.current.open).toBe(false);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test('close_modal에 콜백 함수를 전달하지 않아도 정상적으로 작동한다', () => {
    const { result } = renderHook(() => useModal());

    // 먼저 모달을 열기
    act(() => {
      result.current.open_modal();
    });

    expect(result.current.open).toBe(true);

    // 콜백 없이 모달 닫기
    act(() => {
      result.current.close_modal();
    });

    expect(result.current.open).toBe(false);
  });

  test('모달 상태를 여러 번 변경할 수 있다', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.open).toBe(false);

    // 열기
    act(() => {
      result.current.open_modal();
    });

    expect(result.current.open).toBe(true);

    // 닫기
    act(() => {
      result.current.close_modal();
    });

    expect(result.current.open).toBe(false);

    // 다시 열기
    act(() => {
      result.current.open_modal();
    });

    expect(result.current.open).toBe(true);

    // 다시 닫기
    act(() => {
      result.current.close_modal();
    });

    expect(result.current.open).toBe(false);
  });

  test('이미 열린 모달에서 open_modal을 다시 호출해도 상태는 true를 유지한다', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.open_modal();
    });

    expect(result.current.open).toBe(true);

    act(() => {
      result.current.open_modal();
    });

    expect(result.current.open).toBe(true);
  });

  test('이미 닫힌 모달에서 close_modal을 다시 호출해도 상태는 false를 유지한다', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.open).toBe(false);

    act(() => {
      result.current.close_modal();
    });

    expect(result.current.open).toBe(false);
  });
});
