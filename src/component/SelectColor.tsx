import styled from "styled-components";
import useModal from "../hook/useModal";

export const colorList = {
  red: "#e24141",
  blue: "#547ce4",
  green: "#7dbf73",
  coolPink: "#d959b7",
  mint: "#85dec8",
  warmPink: "#E76E9A",
  organge: "#F26D3D",
  yellow: "#F2BC57",
  default: "lightGray",
};

const SelectColor = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: (color: string) => void;
}) => {
  return (
    <Background style={{ display: open ? "" : "none" }}>
      <Box>
        {Object.entries(colorList).map(
          ([name, code]) =>
            name !== "default" && (
              <Color
                key={name}
                style={{ backgroundColor: code }}
                onClick={() => onClick(name)}
              />
            )
        )}
      </Box>
    </Background>
  );
};

export default SelectColor;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000062;
`;
const Box = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  bottom: 0;
  width: 100%;
  padding: 2rem 1rem 1rem 2.5rem;
  background-color: white;
`;
const Color = styled.div`
  display: flex;
  aspect-ratio: 1/1;
  height: 3rem;
  margin-bottom: 1rem;
  border-radius: 100%;
  cursor: pointer;
`;
