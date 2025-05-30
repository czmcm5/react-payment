import { useState } from "react";
import { InsertPayload } from "../interface/card";
import { useNavigate } from "react-router-dom";

const useAddCard = () => {
  const Navigate = useNavigate();
  const [form, setForm] = useState<InsertPayload>(INITIAL_STATE);

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateFieldPW = (index: number, value: string) => {
    const updated = [...form.password];
    updated[index] = value;

    setForm((prev) => ({
      ...prev,
      password: updated as [string, string],
    }));
  };

  const updateColor = (color: string) => {
    setForm((prev) => ({
      ...prev,
      color: color,
    }));
  };

  const submit = () => {
    console.log(form);
    if (Object.values(form).some((value) => value === "")) {
      return alert("모든 항목을 채워주세요.");
    }
    Navigate("/add-sucess", {
      state: { card: form },
    });
  };

  return {
    form,
    update: {
      filed: updateField,
      pw: updateFieldPW,
      color: updateColor,
    },
    submit,
  };
};

export default useAddCard;

const INITIAL_STATE: InsertPayload = {
  cardNum: "",
  MM: "",
  YY: "",
  name: "",
  code: "",
  password: ["", ""],
  color: "gray",
};
