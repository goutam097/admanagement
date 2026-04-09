
const Header = () => {
    const displayName =  'User';
    const handleLogout = () => {
    
  };
    return (
        <header style={{ background: "#eee", padding: "15px" }}>
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>📊 Ad Manager</h1>
            </div>
            <div className="navbar-content">
                <span className="user-info">Welcome, {displayName}</span>
                <button className="btn-logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
        </header>
    )
}

export default Header
