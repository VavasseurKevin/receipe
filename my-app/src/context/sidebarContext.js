import React, {createContext, useContext, useReducer} from "react";
import reducer from "../reducers/sidebarReducer";
import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../actions/actions";

// Init state
const initialState = {
    isSidebarOpen: false
}

// Create the context for sidebar
const SidebarContext = createContext({});

// Provider sidebar : send actions to reducer with dispatch
export const SidebarProvider = ({children}) => { 
    // Use useReducer to manage state sidebar
    const [state, dispatch] = useReducer(reducer, initialState);

    // Function Open and Close sidebar (send actions to reducer et update state)
     const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR});
     }

     const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR});
     }
     return(
        // Provides the state and associated functions via the context
        <SidebarContext.Provider value={{
            ...state,
            openSidebar,
            closeSidebar
        }}>
            {children}
        </SidebarContext.Provider>
     )
}

export const useSidebarContext = () => {
    return useContext(SidebarContext);
}