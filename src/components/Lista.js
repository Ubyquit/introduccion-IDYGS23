import React from "react";

export const Lista = () => {
  let ramoFloral = [
    "Rosas",
    "Margaritas",
    "Tulipanes",
    "Girasol",
    "Cilantro"];
    
  return ramoFloral.map((ramoFloral, indice) => {
    return <li key={indice}>{ramoFloral}</li>;
  });
};
