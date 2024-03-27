import About from "@/components/About";
import SkillSet from "@/components/SkillSet";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
export default function SectionRenderer({ sectionTitle, sectionKey }) {
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

  return <div>{renderSections()}</div>;
}
