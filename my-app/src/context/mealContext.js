
import React, {createContext, useContext, useEffect, useReducer} from "react";
import { initialState, mealReducer } from "../reducers/mealReducer";
import { startFetchCategories } from "../actions/mealsActions";

const MealContext = createContext({});

export const MealProvider = ({children})=> {
    const [state, dispatch] = useReducer(mealReducer,initialState);

    useEffect(()=> {
        startFetchCategories(dispatch);
    }, [])

    return (
        <MealContext.Provider value={{
            ...state,
            dispatch,
            startFetchCategories
        }}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = () => {
    return useContext(MealContext);
}