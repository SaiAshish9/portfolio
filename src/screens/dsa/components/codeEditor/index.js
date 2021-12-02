import React, { useState } from "react";
import beautify from "js-beautify";

import { Span } from "..";
import {
  Editor,
  Container,
  Output,
  TagsContainer,
  OptionsContainer,
  ButtonContainer,
  StyledRow,
  OutputEditorContainer,
  OutputLabel,
} from "./styles";

import { useStore } from "store";
import { Theme } from "constants/index";
import { Button } from "screens/dsa/styles";
import { AiOutlineAudio } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
import { BsPlayFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const CodeEditor = ({ options }) => {
  const {
    state: { theme },
  } = useStore();

  const keys = Object.keys(options ? options.codes : []);

  const [selected, setSelected] = useState(keys ? keys[0] : null);

  function handleClick(i) {
    if (keys.includes(i)) setSelected(i);
  }

  return (
    <Span>
      {options && (
        <Container>
          <TagsContainer>
            <ButtonContainer start={1}>
              {[...keys, "Copy", "Download", "Hindi", "English", "Execute"].map(
                (i, k) => (
                  <Button
                    onClick={() => handleClick(i)}
                    active={+(i === selected)}
                    key={k}
                  >
                    {i === "Copy" && (
                      <IoCopyOutline style={{ marginRight: "0.36rem" }} />
                    )}
                    {i === "Execute" && (
                      <BsPlayFill style={{ marginRight: "0.18rem" }} />
                    )}
                    {i === "Download" && (
                      <HiDownload style={{ marginRight: "0.18rem" }} />
                    )}
                    {["English", "Hindi"].includes(i) && (
                      <AiOutlineAudio style={{ marginRight: "0.2rem" }} />
                    )}

                    {i}
                  </Button>
                )
              )}
            </ButtonContainer>

            <OptionsContainer>Output</OptionsContainer>
          </TagsContainer>

          <StyledRow>
            <Editor
              value={
                selected !== "Python"
                  ? beautify.js_beautify(options.codes[selected].code)
                  : options.codes["Python"].code
              }
              options={{
                mode: ["Java", "Kotlin", "C++"].includes(selected)
                  ? "clike"
                  : selected === "Javascript"
                  ? "javascript"
                  : "python",
                theme:
                  theme === Theme.dark
                    ? "material"
                    : [Theme.light, Theme.highContrast].includes(theme)
                    ? "neat"
                    : "light",
                lineNumbers: true,
                json: true,
              }}
            />
            <OutputEditorContainer>
              <OutputLabel>Output</OutputLabel>
              {/* playground */}
              <Output
                value={beautify.html_beautify(options.codes[selected].output ?? options.output)}
                options={{
                  mode: "html",
                  readOnly: true,
                  lineNumbers: true,
                  theme:
                    theme === Theme.dark
                      ? "material"
                      : [Theme.light, Theme.highContrast].includes(theme)
                      ? "neat"
                      : "light",
                }}
              />
            </OutputEditorContainer>
          </StyledRow>
        </Container>
      )}
    </Span>
  );
};

export default CodeEditor;

{
  /* <Span>
<pre
  dangerouslySetInnerHTML={{
    __html: ` 
class Array{   
constructor(){
this.length=0;
this.data={};
}
getElementAtIndex(index){
return this.data[index];
}
push(element){
this.data[this.length]=element;
this.length++;
return this.length;
}
pop(){
const item= this.data[this.length-1];
delete this.data[this.length-1];
this.length--;
return this.data;
}
deleteAt(index){
for(let i=index; i<this.length-1;i++){
this.data[i]=this.data[i+1];
}
delete this.data[this.length-1];
this.length--;
return this.data;
}
insertAt(item, index){
for(let i=this.length;i>=index;i--){
this.data[i]=this.data[i-1];
}
this.data[index]=item;
this.length++;
return this.data;
}
}
const array= new Array(); //we are instantiating an object of Array classs
array.push(12);
array.push(10);
array.push(9);
`,
  }}
/>
</Span> */
}
