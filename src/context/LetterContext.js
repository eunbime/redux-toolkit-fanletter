import { createContext, useState } from "react";

export const LetterContext = createContext();

const jsonData = require("../letterData.json");

export function LetterContextProvider(props) {
  const [letterList, setLetterList] = useState(jsonData);
}
