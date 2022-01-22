import { Img } from "common/modal/styles";
import React from "react";
import { CodeEditor, Span } from "./components";

const Comp = ({
  title,
  codes,
  tc = "n",
  sc = "n",
  constraints,
  fp,
  content1,
  content2,
  examples,
  img,
}) => {
  return (
    <>
      <Span>
        <b>{title}</b>
      </Span>
      <Span>{content1}</Span>
      {img && <Img left src={img} alt="img" />}
      {content2 && <Span>{content2}</Span>}
      {examples.map((i, k) => (
        <div key={k}>
          <Span>
            <b>Example {k + 1}:</b>
          </Span>
          {i.img && <Img left src={i.img} alt="img" />}
          <Span>{i.content}</Span>
        </div>
      ))}
      <Span>
        <b>Constraints:</b>
      </Span>
      {constraints && <Span>{constraints}</Span>}
      {fp && <Span>{fp}</Span>}
      <Span>
        <b>Complexity:</b>
      </Span>
      <p>
        Time: O({tc})
        <br />
        Space: O({sc})
      </p>
      <CodeEditor
        options={{
          title,
          codes,
        }}
      />
    </>
  );
};

export default Comp;
