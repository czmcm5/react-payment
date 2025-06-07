/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, test, beforeEach, afterEach, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useNavigate, useLocation } from 'react-router-dom';
import useSaveCard from '../useSaveCard';

// React Router 모킹
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  useLocation: vi.fn(),
}));

const mockNavigate = vi.fn();
// @ts-ignore
const mockUseNavigate = useNavigate as vi.MockedFunction<typeof useNavigate>;
// @ts-ignore
const mockUseLocation = useLocation as vi.MockedFunction<typeof useLocation>;

const mockCardData = {
  color: 'blue',
  cardNum: '1111-2222-3333-4444',
  MM: '12',
  YY: '25',
  name: 'JOHN DOE',
  CVCcode: '123',
};

describe('useSaveCard >', () => {
  beforeEach(() => {
    localStorage.clear();
    mockUseNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  test('state가 없을 때 /add로 리디렉션한다', () => {
    mockUseLocation.mockReturnValue({
      state: null,
      pathname: '/save',
      search: '',
      hash: '',
      key: '',
    });

    renderHook(() => useSaveCard());

    expect(mockNavigate).toHaveBeenCalledWith('/add');
  });

  test('state가 있을 때 정상적으로 초기화된다', () => {
    const mockState = {
      card: mockCardData,
    };

    mockUseLocation.mockReturnValue({
      state: mockState,
      pathname: '/save',
      search: '',
      hash: '',
      key: '',
    });

    const { result } = renderHook(() => useSaveCard());

    expect(result.current.form).toEqual({
      ...mockCardData,
      cardNick: '',
    });
    expect(mockNavigate).not.toHaveBeenCalledWith('/add');
  });

  test('updateCardNick이 정상적으로 작동한다', () => {
    const mockState = {
      card: mockCardData,
    };

    mockUseLocation.mockReturnValue({
      state: mockState,
      pathname: '/save',
      search: '',
      hash: '',
      key: '',
    });

    const { result } = renderHook(() => useSaveCard());

    const mockEvent = {
      target: { value: '  My Favorite Card  ' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.updateCardNick(mockEvent);
    });

    expect(result.current.form.cardNick).toBe('My Favorite Card');
  });

  test('cardNick이 비어있을 때 카드 name을 nickname으로 사용한다', () => {
    const mockState = {
      card: mockCardData,
    };

    mockUseLocation.mockReturnValue({
      state: mockState,
      pathname: '/save',
      search: '',
      hash: '',
      key: '',
    });

    const { result } = renderHook(() => useSaveCard());

    act(() => {
      result.current.saveCard();
    });

    const savedCards = JSON.parse(localStorage.getItem('cardList') || '[]');
    expect(savedCards).toHaveLength(1);
    expect(savedCards[0]).toEqual({
      ...mockCardData,
      nickname: mockCardData.name,
    });
    expect(mockNavigate).toHaveBeenCalledWith('/list');
  });

  test('cardNick이 있을 때 해당 값을 nickname으로 사용한다', () => {
    const mockState = {
      card: mockCardData,
    };

    mockUseLocation.mockReturnValue({
      state: mockState,
      pathname: '/save',
      search: '',
      hash: '',
      key: '',
    });

    const { result } = renderHook(() => useSaveCard());

    const mockEvent = {
      target: { value: 'Custom Nickname' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.updateCardNick(mockEvent);
    });

    act(() => {
      result.current.saveCard();
    });

    const savedCards = JSON.parse(localStorage.getItem('cardList') || '[]');
    expect(savedCards).toHaveLength(1);
    expect(savedCards[0]).toEqual({
      ...mockCardData,
      nickname: 'Custom Nickname',
    });
    expect(mockNavigate).toHaveBeenCalledWith('/list');
  });

  test('기존 카드 리스트에 새 카드를 추가한다', () => {
    const existingCard = {
      ...mockCardData,
      cardNum: '9999-8888-7777-6666',
      nickname: 'Existing Card',
    };

    localStorage.setItem('cardList', JSON.stringify([existingCard]));

    const mockState = {
      card: mockCardData,
    };

    mockUseLocation.mockReturnValue({
      state: mockState,
      pathname: '/save',
      search: '',
      hash: '',
      key: '',
    });

    const { result } = renderHook(() => useSaveCard());

    const mockEvent = {
      target: { value: 'New Card' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.updateCardNick(mockEvent);
    });

    act(() => {
      result.current.saveCard();
    });

    const savedCards = JSON.parse(localStorage.getItem('cardList') || '[]');
    expect(savedCards).toHaveLength(2);
    expect(savedCards[0]).toEqual(existingCard);
    expect(savedCards[1]).toEqual({
      ...mockCardData,
      nickname: 'New Card',
    });
    expect(mockNavigate).toHaveBeenCalledWith('/list');
  });

  test('localStorage 파싱 에러 시 에러를 throw한다', () => {
    localStorage.setItem('cardList', 'invalid json');

    const mockState = {
      card: mockCardData,
    };

    mockUseLocation.mockReturnValue({
      state: mockState,
      pathname: '/save',
      search: '',
      hash: '',
      key: '',
    });

    const { result } = renderHook(() => useSaveCard());

    expect(() => {
      act(() => {
        result.current.saveCard();
      });
    }).toThrow('cardList 파싱에 에러:');
  });

  test('updateCardNick에서 공백이 제거된다', () => {
    const mockState = {
      card: mockCardData,
    };

    mockUseLocation.mockReturnValue({
      state: mockState,
      pathname: '/save',
      search: '',
      hash: '',
      key: '',
    });

    const { result } = renderHook(() => useSaveCard());

    const mockEvent = {
      target: { value: '   Test Card   ' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.updateCardNick(mockEvent);
    });

    expect(result.current.form.cardNick).toBe('Test Card');
  });
});
