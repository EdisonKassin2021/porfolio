import { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { getOutput } from "./Prompt";

function htmlToString(html: any) {
  const text = ReactDOMServer.renderToString(html);
  return text;
}

export enum CONSOLE_COMMANDS {
  help = "help",
  quit = "quite",
  info = "info",
  language = "language",
  formation = "formation",
}

const useConsoleEntry = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState<string[]>([]);

  const onEnter = (value: string, key: string) => {
    if (key === "Enter") {
      const newConsoleLine: string = htmlToString(getOutput(value));

      setInput((prev: string[]) => {
        return [...prev, value];
      });

      return setOutput((prev: string[]) => {
        return [...prev, newConsoleLine];
      });
    }
  };
  return {
    input,
    output,
    onEnter,
  };
};

export default useConsoleEntry;
