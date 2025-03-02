import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

const MainLayOut = () =>{
    return (
        <>
        <NavBar />
        <Outlet />
        </>
    )
}
export default MainLayOut;