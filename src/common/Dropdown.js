import { useState } from "react";
import styled from "styled-components";

export default function DropDown({ isOpen, list = [], icon, onSelection }) {
  const [selectedItem, setSelectedItem] = useState();

  return list?.length && isOpen ? (
    <DropdownContainer>
      {list?.map(({ sectionKey, item }, index) => {
        return (
          <ListItem
            isActive={selectedItem === sectionKey}
            key={index}
            onClick={() => {
              setSelectedItem(sectionKey);
              if (onSelection) onSelection(sectionKey);
            }}
          >
            {icon ? icon : <PlusIcon>+</PlusIcon>}
            <span>{item}</span>
          </ListItem>
        );
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
  position: absolute;
  padding: 1rem;
  z-index: 999;
`;

const ListItem = styled.li`
  list-style: none;
  text-align: start;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  ${({ isActive }) => {
    return isActive
      ? `
    background-color:#EFEFEF;
    `
      : ``;
  }}
`;

const PlusIcon = styled.span`
  background-color: #fff;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 1.5rem;
  margin-right: 8px;
  display: inline-block;
  text-align: center;
`;
