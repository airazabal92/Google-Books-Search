import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SavedBooks from "../components/SavedResults";

function Saved() {
  return (
    <div>
      <Header />
      <SavedBooks></SavedBooks>
    </div>
  );
}

export default Saved;
