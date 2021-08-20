import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchDictionary } from "../../redux/dictionarySlice";
import { Form, Input, PrimaryButton } from "../CommonComponents.element";
import { Wrapper, WrapperTitle } from "./InputWrapper.element";

const InputWrapper = ({ title, placeholder, padding, background }) => {
  const [word, setWord] = useState("");
  const [idiom, setIdiom] = useState("");

  let sendData = {
    dictionaryType: "gts",
    searchTerm: "veri",
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const dictionaryType = title === "Kelime" ? "gts" : "atasozu";
    const searchTerm = title === "Kelime" ? word : idiom;

    sendData = {
      dictionaryType,
      searchTerm,
    };

    console.log(sendData);

    dispatch(fetchDictionary(sendData));
    history.push("/result");


  };
  
  return (
    <Wrapper className={padding}>
      <div className="container">
        <WrapperTitle>{title}</WrapperTitle>
        <Form className="flex-row" onSubmit={handleSubmit}>
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
          <PrimaryButton className="mx-2" onSubmit={handleSubmit}>
            <i className="bi bi-search"></i>
          </PrimaryButton>
        </Form>
      </div>
    </Wrapper>
  );
};

export default InputWrapper;
