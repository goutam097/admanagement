import { Outlet, useNavigate } from "react-router-dom";
import Header from "./header/Header";
import "../assets/style.scss";
import LeftSideBar from "./leftsidebar/LeftSideBar";
import { useState } from "react";


const MainLayout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <LeftSideBar  collapsed={sidebarCollapsed}/>
                {/* <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto"> */}
                <div
  className={`relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto ${sidebarCollapsed ? "" : ""}
  `}
>
                    <Header setSidebarCollapsed={setSidebarCollapsed}/>

                    {/* Page Content */}
                    <main className="p-5">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>

    );
};

export default MainLayout;