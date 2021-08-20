import React from "react";
import InputWrapper from "../InputWrapper";

const Header = () => {
  return (
    <div
      className="w-100 primary-bg d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <h1 className="text-center">Güncel Türkçe Sözlük</h1>
        <div className="row mt-5">
          <InputWrapper
            title="Kelime"
            placeholder="Kelime Ara..."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
