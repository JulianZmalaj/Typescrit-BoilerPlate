import React, { ReactElement } from "react";
import styles from "./styles.module.scss";
import { Button, ButtonGroup, Typography } from "@mui/material";
import FontAwesomeIcon from "components/FontAwesomeIcon";
import { Link } from "react-router-dom";
import { Translate } from "react-redux-i18n";

interface Props {
  items?: NavigationButton[];
}

interface NavigationButton {
  path: string;
  section: string;
  iconName: string;
  iconStyle?: string;
}

Navigation.defaultProps = {
  items: [
    {
      path: "/",
      section: "home",
      iconName: "home",
    },
    {
      path: "/shopping-cart",
      section: "cart",
      iconName: "shopping-cart",
    },
  ],
};

export default function Navigation(props: Props): ReactElement {
  return (
    <ButtonGroup
      orientation="vertical"
      variant="text"
      aria-label="navigation menu"
      className={styles.navigation}
    >
      {props.items?.map((item, index) => {
        return (
          <Button
            key={index}
            component={Link}
            to={item.path}
            variant="text"
            color="primary"
            fullWidth
            startIcon={<FontAwesomeIcon name={item.iconName}></FontAwesomeIcon>}
          >
            <Typography
              variant="button"
              sx={{ width: "50%", textAlign: "left", paddingLeft: "10%" }}
            >
              <Translate value={`navbar.${item.section}`} />
            </Typography>
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
