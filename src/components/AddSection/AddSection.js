import DropDown from "@/common/Dropdown";
import { useState } from "react";
import styled from "styled-components";

export default function AddSection() {
  const [isOpen, setIsOpen] = useState(true);

  const onAddSection = () => {
    setIsOpen(true);
  };

  return (
    <Wrapper>
      <span onClick={onAddSection}>+ Click to Add Sections</span>
      <DropDown />
    </Wrapper>
  );
}

//styles

const Wrapper = styled.div`
  background-color: #efefef;
  border: 1.2px dashed #000000;
  padding: 24px;
  text-align: center;
  cursor: pointer;
`;
