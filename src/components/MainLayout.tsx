import { Outlet, useNavigate } from "react-router-dom";
import Header from "./header/Header";


const MainLayout = () => {
    const navigate = useNavigate()
    return (
        <div style={{ display: "flex", height: "100vh" }}>

            {/* Sidebar */}
            <aside style={{ width: "220px", background: "#111", color: "#fff", padding: "20px", cursor: "pointer" }}>
                <h2>My App</h2>
                <p onClick={() => { navigate('/') }}>Dashboard</p>
                <p onClick={() => { navigate('/advertise') }}>Advertise</p>
                <p onClick={() => { navigate('/wallet') }}>Wallet</p>
                <p onClick={() => { navigate('/createAd') }}>Create Ad</p>
            </aside>

            {/* Right Side */}
            <div style={{ flex: 1 }}>

                {/* Header */}
                <Header />
                

                {/* Page Content */}
                <main style={{ padding: "20px" }}>
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default MainLayout;