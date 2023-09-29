import React, { useState } from "react";
import Prompt from "./Prompt";
import { Box } from "@mui/material";
import _ from "lodash";
import classNames from "classnames";
import useConsoleEntry from "./useConsoleEntry";

const MapConsoleOutput = () => {
  const scrollRef = React.useRef();
  const inputText = React.useRef();

  const [value, setValue] = useState("");

  const { input, output, onEnter } = useConsoleEntry();

  React.useEffect(() => {
    if (scrollRef.current) {
      (scrollRef.current as any).scrollTop = (
        scrollRef.current as any
      ).scrollHeight;
    }
  });

  return (
    <Box
      className="flex flex-col justify-start gap-5 h-full  overflow-y-auto"
      ref={scrollRef}
    >
      <Box className="flex flex-col justify-start gap-5 ">
        {_.size(output) > 0 &&
          _.map(output, (out: string, index: number) => (
            <div className={classNames("flex flex-col")} key={index}>
              <Prompt>
                <input
                  type="text"
                  ref={inputText as any}
                  value={`get ${input[index]}`}
                  disabled
                  maxLength={100}
                  style={{
                    fontSize: "1em",
                  }}
                  className="w-full text-wrap bg-transparent border-none outline-none text-white"
                />
              </Prompt>

              <div dangerouslySetInnerHTML={{ __html: out }} />
            </div>
          ))}
      </Box>

      <Box>
        <Prompt>
          <input
            type="text"
            ref={inputText as any}
            onKeyPress={({ target, key }: any) => {
              onEnter((target as any).value, key);
              if (key === "Enter") {
                setValue("");
              }
            }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            maxLength={100}
            style={{
              fontSize: "1em",
            }}
            className="w-full text-wrap bg-transparent border-none outline-none text-white"
            autoFocus
          />
        </Prompt>
      </Box>
    </Box>
  );
};

export default MapConsoleOutput;
