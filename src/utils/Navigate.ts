import { useNavigate } from "react-router-dom";

export const goPage = (url: string) => {
  const Navigate = useNavigate();
  Navigate(`/${url}`);
};
