const Sections = ["about", "projects", "experience", "resources", "contact"];

const SectionTitleMap = {
  about: {
    title: "About Us",
    emoji: "📌",
  },
  projects: {
    title: "Projects",
    emoji: "🛠️",
  },
  experience: {
    title: "Experience",
    emoji: "🌐",
  },
  resources: {
    title: "Resources",
    emoji: "💡",
  },
  contact: {
    title: "Lets Connect",
    emoji: "🔗",
  },
};

const sectionYetToAdd = (current) => {
  return Sections.filter((x) => !current.includes(x));
};

export { Sections, SectionTitleMap, sectionYetToAdd };
