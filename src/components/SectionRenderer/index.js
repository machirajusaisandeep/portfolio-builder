import About from "@/components/Sections/About";
import SkillSet from "@/components/Sections/SkillSet";
import Projects from "@/components/Sections/Projects";
import Experience from "@/components/Sections/Experience";
import Contact from "@/components/Sections/Contact";
import { Heading2 } from "@/styles/atoms/Typography";
import { SectionTitleMap } from "@/constants/SectionConfig";

export default function SectionRenderer({ sectionKey }) {
  const saveChanges = () => {};

  const editSection = () => {};

  const deleteSection = () => {};

  const renderSections = () => {
    switch (sectionKey) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "skillset":
        return <SkillSet />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Heading2>{SectionTitleMap[sectionKey].title}</Heading2>
      {renderSections()}
    </div>
  );
}
