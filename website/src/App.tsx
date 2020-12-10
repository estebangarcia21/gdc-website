import axios from "axios";
import { useEffect, useState } from "react";
import { Game } from "./utils/api-types";
import { serverConfig } from "./utils/default-axios-config";

function App() {
    const [result, setResult] = useState<Game[]>([]);

    useEffect(() => {
        axios.get("/games", serverConfig).then(res => setResult(res.data));
    });

    return (
        <div className="App" style={{ color: "black" }}>
            {result.map(game => (
                <div key={game.id}>
                    {game.title} + {game.description}
                </div>
            ))}
        </div>
    );
}

export default App;
