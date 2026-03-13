import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode }) {
  return (
    <Editor
      height="400px"
      defaultLanguage="python"
      value={code}
      onChange={(value) => setCode(value)}
    />
  );
}

export default CodeEditor;