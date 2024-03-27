import { useUserContext } from "@/context/builderContext";
import { useContext } from "react";

export default function Intro() {
  const { isEditorMode } = useUserContext();

  return <div>{isEditorMode ? "EDITOR" : "PREVIEW"}</div>;
}
