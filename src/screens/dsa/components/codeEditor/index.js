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
  SEditor,
  SOutputEditorContainer,
} from "./styles";

import { useStore } from "store";
import { Theme } from "constants/index";
import { Button } from "screens/dsa/styles";
import { AiOutlineAudio } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
import { BsPlayFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const CodeEditor = ({ options }) => {
  const {
    state: { theme },
  } = useStore();

  const keys = Object.keys(options ? options.codes : []);

  const [selected, setSelected] = useState(keys ? keys[0] : null);

  const [copied, setIsCopied] = useState(false);

  var docDefinition = {
    pageSize: "A4",
    pageOrientation: "portrait",
    style: {
      align: {
        lineHeight: 2,
      },
    },
    content: [
      {
        text: options.title,
        alignment: "center",
        bold: true,
        margin: [0, 9, 0, 18],
      },
      {
        text: "Source Code",
        bold: true,
        alignment: "left",
        margin: [0, 27, 0, 18],
      },
      {
        text:
          selected !== "Python"
            ? beautify.js_beautify(options.codes[selected].code)
            : options.codes["Python"].code,
        alignment: "left",
      },
      {
        text: "Output",
        bold: true,
        alignment: "left",
        margin: [0, 27, 0, 9],
      },
      {
        text: beautify.html_beautify(
          options.codes[selected].output ?? options.output
        ),
        alignment: "left",
      },
      // { columnd: [] },
    ],
  };

  function downloadPDF() {
    pdfMake.createPdf(docDefinition)
    // .open()
    .download(`${options.title}(${selected}).pdf`);
  }

  function handleClick(i) {
    if (keys.includes(i)) {
      if (i !== selected) setIsCopied(false);
      setSelected(i);
    }
    if (i === "Copy") {
      if (!copied) setIsCopied(true);
      navigator.clipboard.writeText(
        selected !== "Python"
          ? beautify.js_beautify(options.codes[selected].code)
          : options.codes["Python"].code
      );
    }
    if (i === "Download") downloadPDF();
  }

  const outputCheck = options.codes[selected].output || options.output;

  return (
    <Span>
      {options && (
        <Container>
          <TagsContainer>
            <ButtonContainer start={1}>
              {[
                ...keys,
                copied ? "Copied" : "Copy",
                "Download",
                "Hindi",
                "English",
                "Execute",
              ].map((i, k) => (
                <Button
                  onClick={() => handleClick(i)}
                  active={
                    +([selected].includes(i) || (copied && i === "Copied"))
                  }
                  key={k}
                >
                  {i === "Copy" && !copied && (
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
              ))}
            </ButtonContainer>

            {outputCheck && <OptionsContainer>Output</OptionsContainer>}
          </TagsContainer>

          <StyledRow>
            <Editor
              value={
                selected !== "Python"
                  ? beautify.js_beautify(options.codes[selected].code)
                  : options.codes["Python"].code
              }
              options={{
                mode: ["Java", "Kotlin", "C++", "C"].includes(selected)
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
            <SEditor
              value={
                selected !== "Python"
                  ? beautify.js_beautify(options.codes[selected].code)
                  : options.codes["Python"].code
              }
              options={{
                mode: ["Java", "Kotlin", "C++", "C"].includes(selected)
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
            {outputCheck && (
              <>
                <OutputEditorContainer>
                  <OutputLabel>Output</OutputLabel>
                  {/* playground */}
                  <Output
                    value={beautify.html_beautify(
                      options.codes[selected].output ?? options.output
                    )}
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
                <SOutputEditorContainer>
                  <OutputLabel>Output</OutputLabel>
                  {/* playground */}
                  <Output
                    value={beautify.html_beautify(
                      options.codes[selected].output ?? options.output
                    )}
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
                </SOutputEditorContainer>
              </>
            )}
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
