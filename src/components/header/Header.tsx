import { useEffect, useRef, useState } from "react";
import user from "../../assets/images/owner.png"
type HeaderProps = {
    setSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ setSidebarCollapsed }: HeaderProps) => {

    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 xl:border-b">
            <div className="flex flex-col items-center justify-between grow xl:flex-row xl:px-6">
                <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 xl:justify-normal xl:border-b-0 xl:px-0 lg:py-4">
                    <button type="button" onClick={() => setSidebarCollapsed(prev => !prev)} className="items-center justify-center  w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 flex dark:text-gray-400 lg:h-11 lg:w-11 xl:border " aria-label="Toggle Sidebar" >
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <a className="xl:hidden" href="/" data-discover="true"><img className="dark:hidden" alt="Logo" src="./images/logo/logo.svg" /><img className="hidden dark:block" alt="Logo" src="./images/logo/logo-dark.svg" /></a>
                    <button onClick={() => setShow(!show)} className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 xl:hidden">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z" fill="currentColor"></path>
                        </svg>
                    </button>

                </div>
                <div className={`${show ? "hidden" : "flex"} items-center justify-between w-full gap-4 px-5 py-4 xl:flex shadow-theme-md xl:justify-end xl:px-0 xl:shadow-none`}>
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
                    <div className="relative" ref={dropdownRef}>
                        <button className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400" onClick={() => setOpen(!open)}>
                            <span className="mr-3 overflow-hidden rounded-full h-11 w-11"><img alt="asd" src={user} /></span><span className="block mr-1 font-medium text-theme-sm">Musharof</span>
                            <i className="fa-regular fa-angle-down"></i>
                        </button>
                        {open && (
                            <div
                                x-show="dropdownOpen"
                                className="shadow-theme-lg dark:bg-gray-dark absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-800"
                            >
                                <div>
                                    <span
                                        className="text-theme-sm block font-medium text-gray-700 dark:text-gray-400"
                                    >
                                        Musharof Chowdhury
                                    </span>
                                    <span
                                        className="text-theme-xs mt-0.5 block text-gray-500 dark:text-gray-400"
                                    >
                                        <a href="cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="1260737c767d7f6761776052627b7f787d3c717d7f">[email&#160;protected]</a>
                                    </span>
                                </div>

                                <ul
                                    className="flex flex-col gap-1 border-b border-gray-200 pt-4 pb-3 dark:border-gray-800"
                                >
                                    <li>
                                        <a
                                            href="profile.html"
                                            className="group text-theme-sm flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                        >
                                            <i className="fa-regular fa-circle-user"></i>
                                            Edit profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="chat.html"
                                            className="group text-theme-sm flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                        >
                                            <i className="fa-regular fa-gear"></i>
                                            Account settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="profile.html"
                                            className="group text-theme-sm flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                        >
                                            <i className="fa-regular fa-circle-info"></i>
                                            Support
                                        </a>
                                    </li>
                                </ul>
                                <button
                                    className="group text-theme-sm mt-3 flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                >
                                    <i className="fa-regular fa-arrow-right-from-bracket"></i>

                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header