import { useNavigate } from "react-router-dom";
import Header from "./header/Header";
import "../assets/style.scss";
import user from "../assets/images/owner.png"


const MainLayout = ({ children }: { children: any }) => {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ width: "100%", height: "100vh", }} className="hidden">

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
                        {children}
                    </main>

                </div>
            </div>

            <div className="flex h-screen overflow-hidden">
                <aside className="sidebar fixed top-0 left-0 z-9999 flex h-screen w-[290px] flex-col overflow-y-auto border-r border-gray-200 bg-white px-5 transition-all duration-300 xl:static xl:translate-x-0 dark:border-gray-800 ">

                    <div className="py-8  flex justify-start"><a href="/" data-discover="true"><img className="https://react-demo.tailadmin.com/images/logo/logo.svg" alt="Logo" width="150" height="40" src="https://react-demo.tailadmin.com/images/logo/logo.svg" /><img className="hidden dark:block" alt="Logo" width="150" height="40" src="/images/logo/logo-dark.svg" /></a></div>

                    <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                        <nav className="mb-3">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h2 className="mb-4 text-xs uppercase flex leading-[20px] text-gray-400 justify-start">Menu</h2>
                                    <ul className="flex flex-col gap-1">
                                        {/* <li>
            <button className="menu-item group menu-item-inactive cursor-pointer xl:justify-start">
               <span className="menu-item-icon-size  menu-item-icon-inactive">
                 <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V8.99998C3.25 10.2426 4.25736 11.25 5.5 11.25H9C10.2426 11.25 11.25 10.2426 11.25 8.99998V5.5C11.25 4.25736 10.2426 3.25 9 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H9C9.41421 4.75 9.75 5.08579 9.75 5.5V8.99998C9.75 9.41419 9.41421 9.74998 9 9.74998H5.5C5.08579 9.74998 4.75 9.41419 4.75 8.99998V5.5ZM5.5 12.75C4.25736 12.75 3.25 13.7574 3.25 15V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H9C10.2426 20.75 11.25 19.7427 11.25 18.5V15C11.25 13.7574 10.2426 12.75 9 12.75H5.5ZM4.75 15C4.75 14.5858 5.08579 14.25 5.5 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15V18.5C9.75 18.9142 9.41421 19.25 9 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V15ZM12.75 5.5C12.75 4.25736 13.7574 3.25 15 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V8.99998C20.75 10.2426 19.7426 11.25 18.5 11.25H15C13.7574 11.25 12.75 10.2426 12.75 8.99998V5.5ZM15 4.75C14.5858 4.75 14.25 5.08579 14.25 5.5V8.99998C14.25 9.41419 14.5858 9.74998 15 9.74998H18.5C18.9142 9.74998 19.25 9.41419 19.25 8.99998V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H15ZM15 12.75C13.7574 12.75 12.75 13.7574 12.75 15V18.5C12.75 19.7426 13.7574 20.75 15 20.75H18.5C19.7426 20.75 20.75 19.7427 20.75 18.5V15C20.75 13.7574 19.7426 12.75 18.5 12.75H15ZM14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15C14.5858 19.25 14.25 18.9142 14.25 18.5V15Z" fill="currentColor"></path></svg>
               </span>
               <span className="menu-item-text">Dashboard</span>
               <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto w-5 h-5 transition-transform duration-200 ">
                  <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               </svg>
            </button>
            <div className="overflow-hidden transition-all duration-300">
               <ul className="mt-2 space-y-1 ml-9">
                  <li><a className="menu-dropdown-item menu-dropdown-item-active" href="/" data-discover="true">Ecommerce<span className="flex items-center gap-1 ml-auto"></span></a></li>
                  <li><a className="menu-dropdown-item menu-dropdown-item-inactive" href="/analytics" data-discover="true">Analytics<span className="flex items-center gap-1 ml-auto"></span></a></li>
                  <li><a className="menu-dropdown-item menu-dropdown-item-inactive" href="/marketing" data-discover="true">Marketing<span className="flex items-center gap-1 ml-auto"></span></a></li>
                  <li><a className="menu-dropdown-item menu-dropdown-item-inactive" href="/crm" data-discover="true">CRM<span className="flex items-center gap-1 ml-auto"></span></a></li>
                  <li><a className="menu-dropdown-item menu-dropdown-item-inactive" href="/stocks" data-discover="true">Stocks<span className="flex items-center gap-1 ml-auto"></span></a></li>
                  <li><a className="menu-dropdown-item menu-dropdown-item-inactive" href="/saas" data-discover="true">SaaS<span className="flex items-center gap-1 ml-auto"><span className="ml-auto menu-dropdown-badge-inactive menu-dropdown-badge">new</span></span></a></li>
                  <li><a className="menu-dropdown-item menu-dropdown-item-inactive" href="/logistics" data-discover="true">Logistics<span className="flex items-center gap-1 ml-auto"><span className="ml-auto menu-dropdown-badge-inactive menu-dropdown-badge">new</span></span></a></li>
               </ul>
            </div>
         </li> */}

                                        <li>
                                            <a className="menu-item group menu-item-inactive" href="/calendar" data-discover="true">
                                                <span className="menu-item-icon-size menu-item-icon-inactive">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.75H15.25V2.75C15.25 2.33579 15.5858 2 16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.75H18.5C19.7426 3.75 20.75 4.75736 20.75 6V9V19C20.75 20.2426 19.7426 21.25 18.5 21.25H5.5C4.25736 21.25 3.25 20.2426 3.25 19V9V6C3.25 4.75736 4.25736 3.75 5.5 3.75H7.25V2.75C7.25 2.33579 7.58579 2 8 2ZM8 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6V8.25H19.25V6C19.25 5.58579 18.9142 5.25 18.5 5.25H16H8ZM19.25 9.75H4.75V19C4.75 19.4142 5.08579 19.75 5.5 19.75H18.5C18.9142 19.75 19.25 19.4142 19.25 19V9.75Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                <span className="menu-item-text">My App





                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item group menu-item-inactive" href="/profile" data-discover="true">
                                                <span className="menu-item-icon-size menu-item-icon-inactive">
                                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                <span className="menu-item-text">Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item group menu-item-inactive" href="/profile" data-discover="true">
                                                <span className="menu-item-icon-size menu-item-icon-inactive">
                                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                <span className="menu-item-text">User Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item group menu-item-inactive" href="/profile" data-discover="true">
                                                <span className="menu-item-icon-size menu-item-icon-inactive">
                                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                <span className="menu-item-text">Advertisee</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item group menu-item-inactive" href="/profile" data-discover="true">
                                                <span className="menu-item-icon-size menu-item-icon-inactive">
                                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                <span className="menu-item-text">Wallet</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item group menu-item-inactive" href="/profile" data-discover="true">
                                                <span className="menu-item-icon-size menu-item-icon-inactive">
                                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z" fill="currentColor"></path>
                                                    </svg>
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
                <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 xl:border-b">
                        <div className="flex flex-col items-center justify-between grow xl:flex-row xl:px-6">
                            <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 xl:justify-normal xl:border-b-0 xl:px-0 lg:py-4">
                                <button className="items-center justify-center  w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 flex dark:text-gray-400 lg:h-11 lg:w-11 xl:border " aria-label="Toggle Sidebar" >
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                                <a className="xl:hidden" href="/" data-discover="true"><img className="dark:hidden" alt="Logo" src="./images/logo/logo.svg" /><img className="hidden dark:block" alt="Logo" src="./images/logo/logo-dark.svg" /></a>
                                <button className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 xl:hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z" fill="currentColor"></path>
                                    </svg>
                                </button>

                            </div>
                            <div className="hidden items-center justify-between w-full gap-4 px-5 py-4 xl:flex shadow-theme-md xl:justify-end xl:px-0 xl:shadow-none">
                                <div className="flex items-center gap-2 2xsm:gap-3">

                                    <div className="relative">
                                        <button className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full dropdown-toggle hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                                            <span className="absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 flex"><span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span></span>
                                            <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z" fill="currentColor"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400">
                                        <span className="mr-3 overflow-hidden rounded-full h-11 w-11"><img alt="asd" src={user} /></span><span className="block mr-1 font-medium text-theme-sm">Musharof</span>
                                        <svg className="stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 " width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.3125 8.65625L9 13.3437L13.6875 8.65625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="p-4 pb-20 mx-full">
                        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
                            <div className="px-6 py-5"><h3 className="text-base font-medium text-gray-800 dark:text-white/90">Ad Creative</h3></div>
                            <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                                <div className="mb-3">
                                    <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">How do you want your ad to look?
                                    </label>
                                        <div className="relative">
                                            <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                                </div>

                                <div className="mb-3">
                                    <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Headline
                                    </label>
                                        <div className="relative">
                                            <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                                </div>

                                <div className="mb-3">
                                    <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Description
                                    </label>
                                        <div className="relative">
                                            <textarea placeholder="Enter your message" rows="3" className="w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden   bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Ad Format <span>*</span>
                                    </label>
                                        <div className="relative">
                                            <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                                </div>
                                <div className="mb-3">
                                    <label> Media 0/5 upload multiple images or videos (2-5 files)</label>
                                    <div className="flex">
                                        <div className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500 py-5 upload-box
      ">                                    <input type="file" />
                                            <div className="dz-message flex flex-col items-center m-0!">
                                                <div className="mb-[22px] flex justify-center">
                                                    <div className="flex h-[68px] w-[68px]  items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                                                        <svg className="fill-current" width="29" height="28" viewBox="0 0 29 28" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className=" text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">Drag and drop your PNG, JPG, WebP, SVG images here or browse</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Button <span>*</span>
                                    </label>
                                        <div className="relative">
                                            <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                                <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Select Option</option>
                                                <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Marketing</option>
                                                <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Template</option>
                                                <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Website URL
                                    </label>
                                        <div className="relative">
                                            <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                                </div>

                            </div>

                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
                            <div className="px-6 py-5"><h3 className="text-base font-medium text-gray-800 dark:text-white/90">Audience</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Who should see your ad?</p>
                            </div>
                            <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                                <div className="mb-3">
                                    <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Location
                                    </label>
                                        <div className="relative">
                                            <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                                </div>

                                <div className="grid grid-flow-col gap-4">
                                    <div className="mb-3">
                                        <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Age <span>*</span>
                                        </label>
                                            <div className="relative">
                                                <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                                    <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                                    <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                                    <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                                    <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Age <span>*</span>
                                        </label>
                                            <div className="relative">
                                                <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                                    <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                                    <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                                    <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Age</option>
                                                    <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Gender
                                    </label>
                                        <div className="flex flex-wrap items-center gap-8">
                                            <label for="radio1" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                                <input id="radio1" className="" type="radio" />All</label>
                                            <label for="radio2"
                                                className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                                <input id="radio2" className="" type="radio" />

                                                Men</label>
                                            <label for="radio3" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                                <input id="radio3" className="" type="radio" value="option3" name="group1" />Women</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Membership Type
                                    </label>
                                        <div className="relative">
                                            <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                                <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Select Option</option>
                                                <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Marketing</option>
                                                <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Template</option>
                                                <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>






                            </div>

                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
                            <div className="px-6 py-5"><h3 className="text-base font-medium text-gray-800 dark:text-white/90">Duration</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Who should see your ad?</p>
                            </div>
                            <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">




                                <div className="mb-3">

                                    <div className="items-center mb-3">
                                        <label for="radio1" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                            <input id="radio1" className="" type="radio" /></label>
                                        <h4>Run this ad continuously</h4>
                                        <small>Your add will continue to run on a daily budged unless you pause it, which you can do at any time</small>
                                    </div>
                                    <div className="items-center mb-3">
                                        <label for="radio3" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                            <input id="radio3" className="" type="radio" value="option3" name="group1" /></label>
                                        <h4>Run this ad between specific dates</h4>
                                        <small>Your add will continue to run on a daily budged unless you pause it, which you can do at any time</small>
                                    </div>


                                </div>

                                <div className="mb-3">
                                    <h3 className="text-base font-medium text-gray-800 dark:text-white/90">Daily budget</h3>

                                    <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-800 dark:bg-white/[0.03] xl:py-[27px]">
                                        <h2 className="text-center">$ 67.00 USD</h2>
                                    </div>

                                    <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
                                </div>






                            </div>

                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
                            <div className="px-6 py-5"><h3 className="text-base font-medium text-gray-800 dark:text-white/90">Placement</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Placement are where your ad will be shown and can include indivisual and multi-seller ad format</p>
                            </div>
                            <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">

                                <p>Choose where you want to show your ad.The more placements you select, the more opportunities you'll have to reach your target audience</p>


                                <div className="mb-3">
                                    <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                        <label for="check1" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                            <input id="check1" className="" type="checkbox" />General wall</label>
                                            <div>
                                        
                                        <small>Show your ad on general wall placement</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                        <label for="check2" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                            <input id="check2" className="" type="checkbox" />Fan wall</label>
                                        <div>
                                        
                                        <small>Show your ad on general wall placement</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                        <label for="check3" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                            <input id="check3" className="" type="checkbox" />Favourite wall</label>
                                        <div>
                                        <small>Show your ad on general wall placement</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                        <label for="check4" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                            <input id="check4" className="" type="checkbox" />Prayer wall</label>
                                        <div>
                                        <small>Show your ad on general wall placement</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                        <label for="check5" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                            <input id="check5" className="" type="checkbox" />Physical wall</label>
                                        <div>
                                        <small>Show your ad on general wall placement</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-100 ">
                                        <label for="check6" className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                            <input id="check6" className="" type="checkbox" />Virtual church wall</label>
                                        <div>
                                        <small>Show your ad on general wall placement</small>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-span-full"><button className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">Create ad</button></div>

                            </div>

                            

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MainLayout;