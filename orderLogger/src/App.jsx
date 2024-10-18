import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./NavBar";
import OrderLogger from "./OrderLogger";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <CssBaseline />
            <NavBar />
            <OrderLogger />
        </>
    );
}

export default App;
