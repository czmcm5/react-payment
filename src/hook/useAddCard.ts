import { useState } from "react";

interface InsertPayload {
  cardNum: string;
  MM: string;
  YY: string;
  name: string;
  code: string;
  password: string;
}

const useAddCard = () => {
  const [form, setForm] = useState<InsertPayload>(INITIAL_STATE);

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = () => {
    console.log(form);
  };

  return { form, updateField, submit };
};

export default useAddCard;

const INITIAL_STATE: InsertPayload = {
  cardNum: "",
  MM: "",
  YY: "",
  name: "",
  code: "",
  password: "",
};
