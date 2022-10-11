import { HederMain } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";



export default function Layout() {
    return (
      <HederMain>
        <AppBar />
        <Outlet/>
      </HederMain>
      
    );
};
