import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import RegisterUser from "./Components/RegisterUser";
import AllUsers from "./Components/AllUsers";
import AllNotes from "./Components/AllNotes";
import UpdatePassword from "./Components/UpdatePassword";
import InsertNote from "./Components/InsertNote";
import UpdateNote from "./Components/UpdateNote";
import Navbar from "./Components/Navbar";

let isAccType = localStorage.getItem('AccountType');

export default function Router() {
    return (
        <div>
            <Routers>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<LoginPage />} />
                    <Route exact path="/register" element={<RegisterUser />} />
                    <Route exact path="/allusers" element={isAccType === "Admin" ? <AllUsers /> : <AllNotes />} />
                    <Route exact path="/allnotes" element={isAccType === "Student" ? <AllNotes /> : <AllUsers />} />
                    <Route exact path="/updatepword/:id" element={ <UpdatePassword /> } />
                    <Route exact path="/addnote" element={isAccType === "Student" ? <InsertNote /> : <AllUsers />} />
                    <Route exact path="/updatenote/:id" element={isAccType === "Student" ? <UpdateNote /> : <AllUsers />} />
                </Routes>
            </Routers>
        </div>
    );
}