import ReactDOM from 'react-dom/client'
import "./tailwind.css";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import React from 'react';


ReactDOM.createRoot(document.getElementById('root')!).render(
<Router>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</Router>

)


