import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Routing from "./utils/Routing";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routing/>
        </>
    );
}

export default App;
