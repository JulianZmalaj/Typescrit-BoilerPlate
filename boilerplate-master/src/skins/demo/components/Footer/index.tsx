import React, { ReactElement } from "react";
import styles from "./styles.module.scss";
import { Link, Stack, Typography } from "@mui/material";

interface Props {
  websiteName: string;
  website?: string;
}

Footer.defaultProps = {
  website: window.location.href,
};

export default function Footer(props: Props): ReactElement {
  return (
      <Stack direction="row" className={styles.footer}>
        <Typography variant="caption" color="white">
          {"Copyright © "}
          <Link href={props.website} color="#FFF">
            {props.websiteName}
          </Link>
          {` ${new Date().getFullYear()}`}
        </Typography>
      </Stack>
  );
}
