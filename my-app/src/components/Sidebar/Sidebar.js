import React from "react";
import "./Sidebar.scss";
import { ImCancelCircle} from "react-icons/im";
import { useSidebarContext } from "../../context/sidebarContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
     const {isSidebarOpen, closeSidebar}= useSidebarContext();
    
    return (
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}>
            <button type="button" className="nav-bar-btn" onClick={()=>closeSidebar()}>
                <ImCancelCircle size = {24} />
            </button>

        </nav>
    )
};

export default Sidebar;