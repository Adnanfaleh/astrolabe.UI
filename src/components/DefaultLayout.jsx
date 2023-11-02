import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

export default function DefaultLayout() {
    return (
        <div id="defaultLayout">
            <Header />
            <Outlet />
        </div>
    )
}