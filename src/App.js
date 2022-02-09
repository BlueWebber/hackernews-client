import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./theme/global";
import { darkTheme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/navBar";
import Links from "./components/links";
import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

const { Suspense } = React;

const LinksQuery = graphql`
  query AppFeedQuery {
    feed {
      links {
        id
        url
        description
        postedBy {
          name
        }
      }
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, LinksQuery);

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App({ preloadedQuery }) {
  const data = usePreloadedQuery(LinksQuery, preloadedQuery);

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <main>
          <GlobalStyle />
          <NavBar />
        </main>
        <Switch>
          <Route exact path="/">
            <Links links={data.feed.links} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
