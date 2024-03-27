import styled from "styled-components";

export default function DropDown({ isOpen, list = [] }) {
  return list.length && isOpen ? (
    <DropdownContainer>
      {list.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </DropdownContainer>
  ) : null;
}

//styles

const DropdownContainer = styled.div`
  box-shadow: 0px 6px 25px 0px #00000026;
  border: 1px solid #d5d5d5;
  background: #ffffff;
  border-radius: 20px;
`;
