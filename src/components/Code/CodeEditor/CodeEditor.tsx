import Editor from "react-simple-code-editor";
import { highlight } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { brahmiLangSyntax } from "../../common/syntax";
import CopyToClipboard from "../../CopyToClipboard";

const CodeEditor = (props: Props) => {
  const { handleChange, code } = props;

  const highlightWithLineNumbers = (input: string) =>
    highlight(input, brahmiLangSyntax, "brahmiLang")
      .split("\n")
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join("\n");

  return (
    <div className="playground-editor group">
      {/* Wrapping Editor component in a separate div to control its height and overflow */}
      <div className="editor-container">
        <Editor
          value={code}
          onValueChange={(code) => handleChange(code)}
          highlight={(code) => highlightWithLineNumbers(code)}
          padding={10}
          textareaClassName="codeArea"
          className="editor"
          id="codeEditor"
          style={{
            fontFamily: "monospace",
            fontSize: 16,
          }}
        />
      </div>
      <CopyToClipboard text={code} />
    </div>
  );
};
type Props = {
  handleChange: (newCode: string) => void;
  code: string;
};
export default CodeEditor;


