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

import axios from "axios";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const CodeEditor = ({ options }) => {
  const {
    state: { theme },
  } = useStore();

  const keys = Object.keys(options ? options.codes : []);

  const [selected, setSelected] = useState(keys ? keys[0] : null);

  const [copied, setIsCopied] = useState(false);

  const [copiedOutput, setIsCopiedOutput] = useState(false);

  async function executeCode() {
    try {
      // https://ce.judge0.com/submissions/?base64_encoded=false&wait=false
      var options = {
        method: "POST",
        url: "https://judge0-ce.p.rapidapi.com/submissions",
        params: { base64_encoded: "true", wait: "true", fields: "*" },
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": "api_9670a081-5ce5-4931-809e-35f267d86a75",
        },
        data: {
          language_id: 63,
          source_code: `// class Array will override default Array class
            class CustomArray {
                constructor() {
                    this.length = 0;
                    this.data = {};
                }
                len() {
                    return this.length;
                }
                print() {
                    console.log(Object.values(this.data))
                }
                get(index) {
                    return this.data[index];
                }
                push(element) {
                    this.data[this.length] = element;
                    this.length++;
                    return this.length;
                }
                pop() {
                    const item = this.data[this.length - 1];
                    delete this.data[this.length - 1];
                    this.length--;
                    return this.data;
                }
                enqueue(element) {
                    return this.insert(element, 0);
                }
                dequeue() {
                    return this.delete(0);
                }
                delete(index) {
                    for (let i = index; i < this.length - 1; i++) {
                        this.data[i] = this.data[i + 1];
                    }
                    delete this.data[this.length - 1];
                    this.length--;
                    return this.data;
                }
                insert(item, index) {
                    for (let i = this.length; i >= index; i--) {
                        this.data[i] = this.data[i - 1];
                    }
                    this.data[index] = item;
                    this.length++;
                    return this.data;
                }
            }
            const array = new CustomArray();
            
            console.log("Custom Array Operations:")
            
            array.push(12);
            array.push(10);
            array.push(9);
            array.push(14);
            array.push(10);
            array.push(989);
            
            console.log("Push: ")
            array.print()
            console.log("Length: " + array.len())
            // array.length gives the same output
            // array.length() will thrown an error 
            console.log("Get (index: 1 ): " + array.get(1))
            console.log("Pop: ")
            const data = array.pop()
            let res = []
            for (let key in data) {
                res.push(data[key])
            }
            console.log(res)
            console.log("Delete: " + array.delete(1))
            array.print()
            console.log("Insert: " + array.insert(2))
            array.print()
            console.log("Enqueue: " + array.insert(2))
            array.print()
            console.log("Dequeue: " + array.insert(2))
            array.print()
            
            console.log("Javascript Array Operations:")
            
            let j_arr = [1, 2, 3]
            
            console.log("1. push: " + j_arr.push(5))
            console.log(j_arr)
            console.log("2. pop: " + j_arr.pop())
            console.log(j_arr)
            console.log("3. length: " + j_arr.length)
            console.log(j_arr)
            console.log("4. unshift (enqueue): " + j_arr.unshift(7, 8))
            console.log(j_arr)
            console.log("5. shift (dequeue): " + j_arr.shift(2))
            console.log(j_arr)
            let j = j_arr.reduce((acc, curr) => {
                acc[curr] = (acc[curr] || 0) + 1
                return acc
            }, {})
            console.log("6. reduce: " + JSON.stringify(j))
            j = j_arr.reduceRight((acc, curr) => {
                acc[curr] = (acc[curr] || 0) + 1
                return acc
            }, {})
            // traverse from right
            console.log("7. reduceRight: " + JSON.stringify(j))
            console.log("8. forEach: ")
            j_arr.forEach((x, _) => console.log(x))
            console.log("9. map: " + j_arr.map(x => x * 2))
            console.log("10. filter: " + j_arr.filter(x => x * 2))
            console.log("11a. slice: " + j_arr.slice(2))
            console.log("11b. slice: " + j_arr.slice(-1))
            console.log(j_arr)
            console.log("12. splice: " + j_arr.splice(2))
            // overwrites the original array
            // add 1 remove 0 "a" (1,0,"a")
            // splice(2) remove elements from 2
            // splice(2,2) remove 2 elements starting from index 2
            // splice() adds and/or removes array elements.
            console.log(j_arr)
            console.log("13. sort: " + j_arr.sort())
            // sort((a,b)=>a-b)
            console.log(j_arr)
            console.log("14. reverse: " + j_arr.reverse())
            console.log(j_arr)
            console.log("15. toString: " + j_arr.toString())
            console.log(j_arr)
            console.log("16. indexOf: " + j_arr.indexOf(9))
            console.log(j_arr)
            console.log("17. lastIndexOf: " + j_arr.lastIndexOf(1))
            console.log(j_arr)
            console.log("18. every: " + j_arr.every(x => x === 1))
            console.log(j_arr)
            console.log("19. some: " + j_arr.some(x => x === 1))
            console.log(j_arr)
            console.log("20 join: " + j_arr.join(","))
            console.log(j_arr)
            console.log("21. find: " + j_arr.find(x => x === 2))
            console.log(j_arr)
            console.log("22. findIndex: " + j_arr.find(x => x === 2))
            console.log(j_arr)
            console.log("23. fill: " + j_arr.fill(2))
            console.log(j_arr)
            console.log("24. includes: " + j_arr.includes(2))
            console.log(j_arr)
            console.log("25. concat: " + j_arr.concat([1, 2]))
            j_arr.push([3, 4])
            console.log(j_arr)
            console.log("25. flat: " + j_arr.flat())
            console.log(j_arr)
            j_arr.fill(2)
            console.log("26. flatMap: " + j_arr.flatMap(x => [x, x * 2]))
            console.log(j_arr)
            console.log("27. entries iterator")
            for (const [index, element] of j_arr.entries())
                console.log(index, element);
            // keys values at(0)
            
            console.log("static methods: ")
            let numbers = new Array(2)
            console.log("Array(): " + numbers)
            console.log("Array(): " + numbers.fill(2))
            console.log("Array(): " + numbers.fill(new Array(2).fill(false)))
            // If you execute the JavaScript in the environment that doesn’t support
            // the  Array.of() method, you can use the following polyfill:
            // if (!Array.of) {
            //     Array.of = function() {
            //         return Array.prototype.slice.call(arguments);
            //     };
            // }
            numbers = Array.of(3);
            console.log("Array.of(): " + numbers)
            console.log("Array.from(): " + Array.from("anc"))
            console.log("Array.from(): " + Array.from({
                length: 5
            }, (v, i) => i))
            console.log("Array.from(): " + Array.from([1, 2, 3], x => x + x))
            console.log("Array.from(): " + Array.from({
                length: 1
            }, () => Array(2).fill(false)))
            console.log("Array.isArray(): " + Array.isArray(j_arr))
            console.log(j_arr instanceof Array)
            
            const myRe = /d(b+)(d)/i
            // 1d 1 or more b d ignore case
            const myArray = myRe.exec('cdbBdbsbz')
            console.log("myRe: " + myArray)
            
            
            console.log("array destructuring: ")
            let x, y[x = 10, y = 20] = j_arr
            console.log(x, y)
            
            // bind, apply, call ->
            // https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
            // var pokemon = {
            //     firstname: 'Pika',
            //     lastname: 'Chu ',
            //     getPokeName: function() {
            //         var fullname = this.firstname + ' ' + this.lastname;
            //         return fullname;
            //     }
            // };
            // var pokemonName = function() {
            //     console.log(this.getPokeName() + 'I choose you!');
            // };
            // var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon.
            // 'this' of pokemon === pokemon now
            // pokemonName.call(pokemon,'sushi', 'algorithms');
            // Pika Chu  loves sushi and algorithms
            // pokemonName.apply(pokemon,['sushi', 'algorithms']) 
            // Pika Chu  loves sushi and algorithms
            // logPokemon();
            
            
            // Object.keys Object.entries Object.values
            
            // const {a :{ b } } = {a :{ b: 10 } } => { b :10 }`,
          stdin: "world",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (e) {
      console.log(e);
    }
  }

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
            ? beautify.js_beautify(options.codes[selected]?.code)
            : options.codes["Python"]?.code,
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
          options.codes[selected]?.output ?? options.output
        ),
        alignment: "left",
      },
      // { columnd: [] },
    ],
  };

  function downloadPDF() {
    pdfMake
      .createPdf(docDefinition)
      // .open()
      .download(`${options.title}(${selected}).pdf`);
  }

  function handleClick(i) {
    if (keys.includes(i)) {
      if (i !== selected) {
        setIsCopied(false);
        setIsCopiedOutput(false);
      }
      if (!["Execute", "Copy I/P", "Copy O/P", "Copied"].includes(i))
        setSelected(i);
    }
    if (i.includes("I/P")) {
      if (!copied) setIsCopied(true);
      if (copiedOutput) setIsCopiedOutput(false);
      navigator.clipboard.writeText(
        selected !== "Python"
          ? beautify.js_beautify(options.codes[selected]?.code)
          : options.codes["Python"]?.code
      );
    }
    if (i.includes("O/P")) {
      if (!copiedOutput) setIsCopiedOutput(true);
      if (copied) setIsCopied(false);
      navigator.clipboard.writeText(
        beautify.html_beautify(options.codes[selected]?.output ?? options.output)
      );
    }
    if (i === "Download") downloadPDF();
    // if (i === "Execute") executeCode();
  }

  const outputCheck = options.codes[selected]?.output || options.output;

  return (
    <Span>
      {options && (
        <Container>
          <TagsContainer>
            <ButtonContainer start={1}>
              {[
                ...keys,
                copied ? "Copied I/P" : "Copy I/P",
                !copiedOutput ? "Copy O/P" : "Copied O/P",
                "Download",
                "Hindi",
                "English",
                "Execute",
              ].map((i, k) => (
                <Button
                  onClick={() => handleClick(i)}
                  active={
                    +(
                      [selected].includes(i) ||
                      (copied && i === "Copied I/P" && !copiedOutput) ||
                      (copiedOutput && i === "Copied O/P" && !copied)
                    )
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
                  ? beautify.js_beautify(options.codes[selected]?.code)
                  : options.codes["Python"]?.code
              }
              options={{
                mode: ["Java", "Kotlin", "C++", "C"].includes(selected)
                  ? "clike"
                  : selected === "Javascript"
                  ? "javascript"
                  : selected === "Mysql"
                  ? "sql"
                  : selected === "Shell"
                  ? "shell"
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
                  ? beautify.js_beautify(options.codes[selected]?.code)
                  : options.codes["Python"]?.code
              }
              options={{
                mode: ["Java", "Kotlin", "C++", "C"].includes(selected)
                  ? "clike"
                  : selected === "Javascript"
                  ? "javascript"
                  : selected === "Mysql"
                  ? "sql"
                  : selected === "Shell"
                  ? "shell"
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
                      options.codes[selected]?.output ?? options.output
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
                      options.codes[selected]?.output ?? options.output
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
