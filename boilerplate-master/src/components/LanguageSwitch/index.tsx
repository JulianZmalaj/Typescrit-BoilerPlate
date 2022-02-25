import React, { ReactElement, useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import style from "./styles.module.scss";
import setLanguage from "../../services/i18n";

interface Props {
  language?: string;
  options?: Array<string>;
}

export default function LanguageSwitch(props: Props): ReactElement {
  const defaultLanguage = navigator.language.substring(0, 2) || "en";
  const [language, changeLanguage] = useState(
    props.language || defaultLanguage
  );
  function handleChange(event: SelectChangeEvent) {
    changeLanguage(event.target.value);
    setLanguage(event.target.value);
  }
  return (
    <Select
      value={language}
      onChange={handleChange}
      label="Age"
      variant="standard"
      disableUnderline
      className={`${style.selectColor}`}
    >
      <MenuItem value={"en"}>English</MenuItem>
      <MenuItem value={"it"}>Italiano</MenuItem>
    </Select>
  );
}
