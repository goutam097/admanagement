import { Outlet, useNavigate } from "react-router-dom";
import Header from "./header/Header";
import "../assets/style.scss";
import LeftSideBar from "./leftsidebar/LeftSideBar";


const MainLayout = () => {
    
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <LeftSideBar />
                <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                    <Header />

                    {/* Page Content */}
                    <main style={{ padding: "20px" }}>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>

    );
};

export default MainLayout;