import Avatar  from "../avatar";
import {SidebarItem} from "./SidebarItem";

export function Sidebar() {
    return (
        <>
        <aside className="h-screen w-64">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex flex-col justify-between items-start">
                <div className="flex px-3 gap-1 cursor-pointer">
                    <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="currentColor"></path></svg>
                    <p className="pt-1 font-semibold text-14px"> Boards </p>
                </div>
                <div className="flex px-3  gap-1 items-center cursor-pointer bg-gray-200  rounded py-0 mb-2">
                    <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 3C7 2.44772 7.44772 2 8 2H9C9.55228 2 10 2.44772 10 3C10 3.55228 9.55228 4 9 4H8C7.44772 4 7 3.55228 7 3Z" fill="currentColor"></path><path d="M3 7C2.44772 7 2 7.44772 2 8V9C2 9.55228 2.44772 10 3 10C3.55228 10 4 9.55228 4 9V8C4 7.44772 3.55228 7 3 7Z" fill="currentColor"></path><path d="M2 12C2 11.4477 2.44772 11 3 11C3.55228 11 4 11.4477 4 12V13C4 13.5523 3.55228 14 3 14C2.44772 14 2 13.5523 2 13V12Z" fill="currentColor"></path><path d="M2 16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16V19C2.89543 19 2 18.1046 2 17V16Z" fill="currentColor"></path><path d="M12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4H13C13.5523 4 14 3.55228 14 3C14 2.44772 13.5523 2 13 2H12Z" fill="currentColor"></path><path d="M15 3C15 2.44772 15.4477 2 16 2H17C18.1046 2 19 2.89543 19 4H16C15.4477 4 15 3.55228 15 3Z" fill="currentColor"></path><path d="M4 2C2.89543 2 2 2.89543 2 4V5C2 5.55228 2.44772 6 3 6C3.55228 6 4 5.55228 4 5V4H5C5.55228 4 6 3.55228 6 3C6 2.44772 5.55228 2 5 2H4Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H7ZM8 7C7.44772 7 7 7.44771 7 8V17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17V8C12 7.44772 11.5523 7 11 7H8ZM14 8C14 7.44772 14.4477 7 15 7H18C18.5523 7 19 7.44772 19 8V13C19 13.5523 18.5523 14 18 14H15C14.4477 14 14 13.5523 14 13V8Z" fill="currentColor"></path></svg>
                    <ul className="pt-3 font-semibold active active:bg-slate-500"> Templates </ul>
                </div>
                <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                    <SidebarItem title="Workspace 1"/>
                <div className="flex flex-row gap-1 cursor-pointer">
                    <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0151 5.00012C14.4511 5.00672 14.8325 5.29503 14.9578 5.71265L17.2333 13.2974L18.1056 11.5528C18.275 11.214 18.6212 11 19 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H19.618L17.8944 16.4472C17.7111 16.8139 17.3225 17.0316 16.914 16.9963C16.5055 16.961 16.16 16.68 16.0422 16.2873L13.9498 9.31283L10.9487 18.3162C10.8108 18.7299 10.4208 19.0065 9.98485 18.9999C9.54889 18.9933 9.16746 18.705 9.04217 18.2873L6.76674 10.7026L5.89443 12.4472C5.72504 12.786 5.37877 13 5 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H4.38197L6.10557 7.55279C6.28892 7.18609 6.67753 6.96845 7.08599 7.00371C7.49445 7.03896 7.84002 7.31996 7.95783 7.71265L10.0502 14.6872L13.0513 5.68377C13.1892 5.27014 13.5792 4.99351 14.0151 5.00012Z" fill="currentColor"></path></svg>
                    <p className="pt-1 font-semibold"> Home </p>
                </div>
                <div className="border-t flex flex-col">
                    <h1 className="font-bold text-sm pt-4 text-gray-600"> Workspaces</h1>
                    <div className ="flex flex-row gap-3  items-center ">
                        <Avatar/>
                        <p className="font-semibold pt-3 text-md">Your Workspace </p>
                        
                    </div>
                    
                </div>
            </div>
            </nav>
        </aside>
        </>
    )
}