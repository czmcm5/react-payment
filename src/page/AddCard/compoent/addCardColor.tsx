import styled from "styled-components";
import Card from "../../../component/Card";
import SelectColor from "../../../component/SelectColor";
import useModal from "../../../hook/useModal";
import { InsertPayload } from "../../../model/card";

const AddCardColor = ({
  form,
  updateColor,
}: {
  form: InsertPayload;
  updateColor: (color: string) => void;
}) => {
  const { open, open_modal, close_modal } = useModal();

  const close = (colorname: string) => {
    close_modal();
    updateColor(colorname);
  };

  return (
    <CardBox>
      <Card form={form} onClick={open_modal} />
      <SelectColor open={open} onClick={close} />
    </CardBox>
  );
};

export default AddCardColor;

const CardBox = styled.div`
  margin: 0 1rem;
`;
