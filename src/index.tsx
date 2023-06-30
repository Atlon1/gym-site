import ReactDOM from 'react-dom/client'
import "./tailwind.css";
import App from "./App";
import React from 'react';


import global_eng from '../src/translations/eng/data'
import global_pl from '../src/translations/pl/data'
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

i18next.init({
    interpolation:{escapeValue: false},
    lng: "pl",
    resources: {
        pl: {
            global: global_pl
        },
        eng: {
            global: global_eng
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(

    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>

)


