import DropDown from "@/common/Dropdown";
import { SectionTitleMap, sectionYetToAdd } from "@/constants/SectionConfig";
import { useUserContext } from "@/context/builderContext";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function AddSection() {
  const [isOpen, setIsOpen] = useState(true);
  const [sectionList, setSectionList] = useState();

  const { builderConfig, setBuilderConfig } = useUserContext();
  const { sections } = builderConfig;

  useEffect(() => {
    const availableSections = sectionYetToAdd(sections);
    console.log(availableSections, "availableSections");
    if (availableSections) {
      setSectionList(generateDropDownList(availableSections));
    }
  }, [sections]);

  const openSectionList = () => {
    setIsOpen(true);
  };

  const generateDropDownList = (availableSections) => {
    return availableSections.map((section) => {
      return {
        sectionKey: section,
        item: `${SectionTitleMap[section].emoji} ${SectionTitleMap[section].title}`,
      };
    });
  };

  const onAddSection = (section) => {
    setBuilderConfig({
      ...builderConfig,
      sections: [...sections, section],
    });
  };

  return sectionYetToAdd(sections)?.length ? (
    <Wrapper>
      <span onClick={openSectionList}>+ Click to Add Sections</span>
      <DropDown onSelection={onAddSection} isOpen={isOpen} list={sectionList} />
    </Wrapper>
  ) : null;
}

//styles

const Wrapper = styled.div`
  background-color: #efefef;
  border: 1.2px dashed #000000;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  position: relative;
`;
