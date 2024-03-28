import AddSection from "@/components/AddSection/AddSection";
import { SectionSpacer } from "@/styles/atoms/Layout";
import SectionRenderer from "@/components/SectionRenderer";
import { useUserContext } from "@/context/builderContext";
import React from "react";

export default function Sections() {
  const { builderConfig } = useUserContext();

  return (
    <>
      <AddSection />
      {builderConfig?.sections?.map((sectionKey) => {
        return (
          <React.Fragment key={sectionKey}>
            <SectionRenderer sectionKey={sectionKey} key={sectionKey} />
            <SectionSpacer />
          </React.Fragment>
        );
      })}
    </>
  );
}
