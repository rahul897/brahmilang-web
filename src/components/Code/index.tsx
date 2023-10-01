import React, { useEffect, useState } from "react";

import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";
import { usePython } from "react-py";


const initialCode = `
excuse me
    ipudu a = 10
    a = a+3
    # e line unna lekapoina okate
    aa chupentra idi chudu("ipudu a value ochesi:")
    aa chupentra idi chudu(a+5)
    aa chupentra idi chudu("____________")

    idi ok antaventra a==13 {
        aa chupentra idi chudu(a)
    }

    nuv line lo undu a>0 {
        a = a - 1
        idi ok antaventra a==7 {
            nannu involve cheyakandi
        }
        kaneesam idi a==5{
            aapandroi
        }
        inka ide {
            aa chupentra idi chudu(a*2)
        }
    }
  # aa chupentra idi chudu(a/0)
nen vastanu babu
`;

const Code = () => {
  const [prev, setPrev] = useState('');

  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython()

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/rahul897/brahmilang/main/main.py')
    .then(response => response.text())
    .then(content => {
      setPrev(content);
    })
    .catch(error => {
      console.error('Error fetching file:', error);
    });
  }, []);

  useEffect(() => {
    if(!isRunning){
      setIsSuccess(null);
      const err = stderr;
      if(err){
        console.log("current stdout is :", stderr,";");
      }
      const outputs = stdout.split("@#@%@error: ");
      const error = outputs.length>1? outputs[1]: '';
      const outputLines = outputs[0].split('\n');
      let isExecusionSuccess = true;
      if(error.length>0){
        isExecusionSuccess = false;
      }
      if (stdout.trim().length>0) {
        // console.log("current stdout is :", stdout,";");
        const outputList = [];
        for(const op of outputLines.slice(0)){
          outputList.push({ value: op, isError: false });
        }
        if(isExecusionSuccess){
          outputList.pop();outputList.pop();  
        } else {
          const errorLines = error.split('\n');
          // console.log(errorLines);
          for(const op of errorLines.slice(0,-2)){
            outputList.push({ value: op.replace(/ /g, "\u00A0"), isError: true });
          }
        }
        setOutput(outputList);
        // console.log(isExecusionSuccess);
        setIsSuccess(isExecusionSuccess);
      }
    }
  }, [stdout,!isRunning]);

  
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<{ value: string; isError: boolean }[]>(
    []
  );
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleChange = (newCode: string) => {
    setCode(newCode);
  };

  const executeCode = () => {

    const cod = prev.trimEnd()+"\n\nprint(run_code('''"+code+"'''))";
    // console.log(cod.slice(-100));
    runPython(cod);

  };

  const clearCode = () => {
    setCode("");
    setIsSuccess(null);
    setOutput([]);
  };

  return (
    <div id="playground" className="mx-4 sm:mx-12">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl my-4">
          Playground
        </h2>
        <div className="flex justify-end">
          <button
            disabled={!code || isLoading}
            onClick={executeCode}
            className="border border-transparent rounded text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:text-lg md:px-10 my-4 sm:my-8 sm:py-3 disabled:opacity-30"
          >
            Run
          </button>

          <button
            onClick={clearCode}
            className="border border-transparent rounded text-base font-medium rounded-md text-green-700 bg-green-300 hover:bg-green-400 md:text-lg md:px-10 my-4 sm:my-8 sm:py-3"
          >
            Clear
          </button>
        </div>
      </div>
      <CodeEditor handleChange={handleChange} code={code} />
      <Terminal output={output} isSuccess={isSuccess} />
    </div>
  );
};
export default React.memo(Code);
