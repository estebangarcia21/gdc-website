import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
    const [result, setResult] = useState<{ title: string; content: string }>({
        title: "loading",
        content: "loading",
    });

    useEffect(() => {
        axios.get("http://localhost:4000/api/games").then(res => {
            const { title, content } = res.data;

            setResult({ title, content });
        });
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                {result.title}
                <br />
                <br />
                {result.content}
            </header>
        </div>
    );
}

export default App;
