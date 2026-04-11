import { useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import logoicon from "../../assets/images/logo-icon.svg"

type SidebarProps = {
    collapsed: boolean;
};

const LeftSideBar = ({ collapsed }: SidebarProps) => {
    const navigate = useNavigate()
    
    return (
        <>
            <aside className={`
        sidebar fixed top-0 left-0 z-9999 flex h-screen w-[290px] flex-col overflow-y-auto border-r border-gray-200 bg-white px-5 transition-all duration-300 xl:static xl:translate-x-0 dark:border-gray-800 dark:bg-black -translate-x-full
        ${collapsed ? "translate-x-0 xl:w-[90px]" : "-translate-x-full"}
      `}>

                <div className="py-8  justify-start flex md:justify-center">
                    <a href="/" data-discover="true">
                    <img className={`
    cursor-pointer transition-all duration-300
    ${collapsed ? "hidden" : ""}
  `} alt="Logo" width="150" height="40" src="https://react-demo.tailadmin.com/images/logo/logo.svg" />
                    <img className={`
    transition-all duration-300
    ${collapsed ? "" : "hidden"}
  `} alt="Logo" width="32" height="32" src={logoicon} /></a>
                    </div>

                <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                    <nav className="mb-3">
                        <div className="flex flex-col gap-4">
                            
                            <div>
                                <h2 className="mb-4 text-xs uppercase flex leading-[20px] text-gray-400 justify-start">Menu 

                                   

                                </h2>
                                <ul className="flex flex-col gap-1">
                                    <li onClick={() => { navigate('/') }}>
                                        <a className="menu-item group menu-item-active" data-discover="true">
                                            <span className="menu-item-icon-size menu-item-icon-inactive">
                                                <i className="fa-regular fa-grid-2"></i>
                                            </span>
                                            <span className="menu-item-text">Dashboard</span>
                                        </a>
                                    </li>
                                    <li onClick={() => { navigate('/advertise') }}>
                                        <a className="menu-item group menu-item-inactive" data-discover="true">
                                            <span className="menu-item-icon-size menu-item-icon-inactive">
                                                <i className="fa-regular fa-rectangle-ad"></i>
                                            </span>
                                            <span className="menu-item-text">Advertise</span>
                                        </a>
                                    </li>
                                    <li onClick={() => { navigate('/wallet') }}>
                                        <a className="menu-item group menu-item-inactive" data-discover="true">
                                            <span className="menu-item-icon-size menu-item-icon-inactive">
                                                <i className="fa-regular fa-wallet"></i>
                                            </span>
                                            <span className="menu-item-text">Wallet</span>
                                        </a>
                                    </li>
                                    <li onClick={() => { navigate('/createAd') }}>
                                        <a className="menu-item group menu-item-inactive" data-discover="true">
                                            <span className="menu-item-icon-size menu-item-icon-inactive">
                                                <i className="fa-regular fa-calendar-circle-plus"></i>
                                            </span>
                                            <span className="menu-item-text">Create Ad</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </nav>

                </div>


            </aside>
        </>
    )
}

export default LeftSideBar