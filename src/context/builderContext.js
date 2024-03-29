import BuilderConfigTemplate from "@/constants/BuilderConfigTemplate";
import { useState, createContext, useContext } from "react";
const BuilderContext = createContext();

function BuilderProvider({ children }) {
  const [isEditorMode, setIsEditorMode] = useState();
  const [builderConfig, setBuilderConfig] = useState(BuilderConfigTemplate);

  return (
    <BuilderContext.Provider
      value={{ isEditorMode, setIsEditorMode, builderConfig, setBuilderConfig }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

function useUserContext() {
  return useContext(BuilderContext);
}

const withBuilder = (Child) => {
  const WithHoc = (props) => {
    return (
      <BuilderContext.Consumer>
        {(context) => <Child {...props} {...context} />}
      </BuilderContext.Consumer>
    );
  };
  return WithHoc;
};

export { BuilderProvider, useUserContext, withBuilder };
