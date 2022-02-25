import React, { ReactElement } from "react";
import styles from "./styles.module.scss";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FontAwesomeIcon from "components/FontAwesomeIcon";
import { useAppDispatch } from "redux/hooks";
import { toggle } from "redux/features/navigation/navigationSlice";
import { Translate } from "react-redux-i18n";
import LanguageSwitch from "components/LanguageSwitch";

interface Props {
  title: string;
}

export default function Header(props: Props): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => dispatch(toggle())}
        >
          <FontAwesomeIcon style="fal" name="bars"></FontAwesomeIcon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {props.title.toUpperCase()}
        </Typography>
        <LanguageSwitch></LanguageSwitch>
        <Button color="inherit">
          <Translate value="header.login" />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
