import React, { ReactElement } from "react";
import { Box } from "@mui/material";

interface Props {
  name: string;
  style?: "fas" | "far" | "fal" | "fad" | "fab";
}

FontAwesomeIcon.defaultProps = {
  style: "fas",
};

export default function FontAwesomeIcon(props: Props): ReactElement {
  return <Box className={`${props.style} fa-${props.name}`}></Box>;
}
