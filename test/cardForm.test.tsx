import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

const CardOwnerInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <>
    <label>카드 소유자 이름(선택)</label>
    <div>
      <input
        value={value}
        onChange={onChange}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </div>
  </>
);

describe("CardOwnerInput", () => {
  test("라벨과 placeholder가 렌더링된다", () => {
    render(<CardOwnerInput value="" onChange={() => {}} />);
    expect(screen.getByText("카드 소유자 이름(선택)")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("카드에 표시된 이름과 동일하게 입력하세요.")
    ).toBeInTheDocument();
  });

  test("사용자가 입력하면 onChange가 호출된다", () => {
    const mockChange = jest.fn();
    render(<CardOwnerInput value="" onChange={mockChange} />);

    const input = screen.getByPlaceholderText(
      "카드에 표시된 이름과 동일하게 입력하세요."
    );
    fireEvent.change(input, { target: { value: "홍길동" } });

    expect(mockChange).toHaveBeenCalled();
    expect(mockChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: expect.any(Object) })
    );
  });
});
