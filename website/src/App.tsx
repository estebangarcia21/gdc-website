import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ResourceContextProvider } from "../src/contexts/resource-context/ResourceContext";
import "./assets/scss/App.css";
import ScrollToTop from "./components/ScrollToTop";
import { TodoContextProvider } from "./contexts/todo-context/TodoContext";
import Home from "./pages/Home";
import JoinGDC from "./pages/JoinGDC";
import OurGames from "./pages/OurGames";
import Resources from "./pages/Resources";
import Todo from "./pages/Todo";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <ScrollToTop />

                <Switch>
                    <Route path="/todo">
                        <TodoContextProvider>
                            <Todo />
                        </TodoContextProvider>
                    </Route>

                    <Route path="/join-gdc">
                        <JoinGDC />
                    </Route>

                    <Route path="/our-games">
                        <OurGames />
                    </Route>

                    <Route path="/resources">
                        <ResourceContextProvider>
                            <Resources />
                        </ResourceContextProvider>
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>
    );
};

export default App;
