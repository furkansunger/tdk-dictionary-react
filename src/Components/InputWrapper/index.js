import React, { useState } from "react";
import { Form, Input, PrimaryButton } from "../CommonComponents.element";
import { Wrapper, WrapperTitle } from "./InputWrapper.element";

const InputWrapper = ({ title, placeholder }) => {
  const [word, setWord] = useState("");
  const [idiom, setIdiom] = useState("");
  
  return (
    <Wrapper className="light-bg">
      <div className="container">
        <WrapperTitle>{title}</WrapperTitle>
        <Form className="flex-row">
          <Input
            type="text"
            name="text"
            placeholder={placeholder}
            autoComplete="off"
            value={title === "Kelime" ? word : idiom}
            onChange={(e) =>
              title === "Kelime"
                ? setWord(e.target.value)
                : setIdiom(e.target.value)
            }
          />
          <PrimaryButton className="mx-2">
            <i className="bi bi-search"></i>
          </PrimaryButton>
        </Form>
      </div>
    </Wrapper>
  );
};

export default InputWrapper;
