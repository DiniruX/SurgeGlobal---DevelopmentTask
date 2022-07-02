import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

import LoginPage from "./Components/LoginPage";

export default function Router() {
    return (
        <div>
            <Routers>
                <Routes>
                    <Route exact path="/" element={<LoginPage />} />
                </Routes>
            </Routers>
        </div>
    );
}