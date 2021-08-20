import React from "react";
import { useSelector } from "react-redux";
import InputWrapper from "../InputWrapper";
import {
  RelevantItem,
  RelevantWords,
  ResultItem,
  ResultList,
  Results,
  ResultWrapper,
} from "./Result.element";

const SearchResults = () => {
  const dictionaryResult = useSelector((state) => state.dictionary.dictionary);

  const birlesiklerArray = [];

  return (
    <ResultWrapper>
      <div className="container">
        <InputWrapper
          padding="p-2"
          title="Kelime"
          placeholder="Kelime Ara..."
        />
        <a href="/" className="my-3">
          <i className="bi bi-arrow-left"></i> Ana sayfaya dön
        </a>
        <Results>
          {dictionaryResult.map((item) =>
            item.map((result) => (
              <>
                <h3 key={result.madde_id} className="color-secondary">{result.madde}</h3>
                <ResultList key={Math.random()}>
                  {result.anlamlarListe.map((listItem) => (
                    <ResultItem key={listItem.anlam_id}>
                      <span className="color-light">{listItem.anlam_sira} - </span>
                      {listItem.anlam}
                    </ResultItem>
                  ))}
                </ResultList>
                <RelevantWords key={Math.random()}>
                  {result.birlesikler === null ? (
                    <div></div>
                  ) : (
                    result.birlesikler
                      .split(", ")
                      .forEach((element) =>
                        birlesiklerArray.push(
                          <RelevantItem key={Math.random()}>
                            {element}
                          </RelevantItem>
                        )
                      )
                  )}
                  {result.birlesikler === null ? null : birlesiklerArray}
                </RelevantWords>
              </>
            ))
          )}
        </Results>
      </div>
    </ResultWrapper>
  );
};

export default SearchResults;
