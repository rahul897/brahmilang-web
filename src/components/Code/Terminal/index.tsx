import React, { useEffect, useRef } from "react";
import successImage from "../../../assets/success.gif";
import errorImage from "../../../assets/error.gif";


const Terminal = (props: Props) => {
  const { output, isSuccess } = props;
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => { 
    if (output.length) {
      setTimeout(() => terminalRef.current?.scrollIntoView(false), 100);
    }
  }, [output]);

  
  return (
    <div
    ref={terminalRef}
      className={`${
        isSuccess !== null ? "terminal" : "terminal-collapsed"
      } bg-black text-white my-6`}
    >
      {isSuccess !== null && !isSuccess ? (
        <div className="text-red-700 output opacity-0 flex justify-start items-center">
        <img src={errorImage} className="h-8" /> <p> code dobbindi ga </p> </div>
      ) : (
        <div className="text-green-700 output opacity-0 flex justify-start items-center"><p> super bro </p>
        <img src={successImage} className="h-8" />
        </div>
      )}
      {output.map((line, i) => {
        return (
          <div
            key={i}
            className={`${line.isError ? "text-red-500" : ""} output opacity-0`}
          >
            &gt; {line.value}
          </div>
        );
      })}
    </div>
  );
};
type Props = {
  output: {
    value: string;
    isError: boolean;
  }[];
  isSuccess: boolean | null;
};
export default React.memo(Terminal);
