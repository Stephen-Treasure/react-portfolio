import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./container/Home/Home";
import { useState } from "react";

function App() {
    // const [loading, setLoading] = useState(true);
    // const spinner = document.getElementById("spinner");

    // if (spinner) {
    //     setTimeout(() => {
    //         spinner.style.display = "none";
    //         setLoading(false);
    //     }, 2000);
    // }
    return (
        // !loading && (
        //     <BrowserRouter>
        //         {" "}
        //         <Routes>
        //             <Route path="/" element={<About />} />
        //         </Routes>
        //     </BrowserRouter>
        // )
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            {" "}
            <Routes>
                <Route path="/" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
