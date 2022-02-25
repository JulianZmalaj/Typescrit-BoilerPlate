import React, { ReactElement, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./styles.module.scss";
import { Paper } from "@mui/material";

const Home = lazy(() => import("../../routes/Home"));
const NotFound = lazy(() => import("routes/NotFound"));

export default function Content(): ReactElement {
  return (
    <Paper variant="outlined" className={styles.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Suspense>
    </Paper>
  );
}
