import axios from "../api/axios";

// Importation des types d'actions
import { 
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_ERROR,
    FETCH_MEALS_SUCCESS,
    FETCH_SINGLE_MEAL_BEGIN,
    FETCH_SINGLE_MEAL_ERROR,
    FETCH_SINGLE_MEAL_SUCCESS,
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_ERROR,
    FETCH_CATEGORY_MEALS_SUCCESS,
 } from "./actions";

// Importation de la variable CATEGORIES_URL depuis le fichier utils/constants.js
import { CATEGORIES_URL, MEAL_SINGLE_URL, SEARCH_URL } from "../utils/constants";

// Fonction pour récupérer les catégories depuis l'API
export const startFetchCategories = async(dispatch) => {
    try {
        // Début de la requête, envoi de l'action FETCH_CATEGORY_BEGIN
        dispatch({type: FETCH_CATEGORY_BEGIN});
        
        // Effectuer une requête GET à l'URL CATEGORIES_URL
        const response = await axios.get(`${CATEGORIES_URL}`);
        console.log(response.data);
        // Récupération des données de la réponse et envoi de l'action FETCH_CATEGORY_SUCCESS
        dispatch({type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories});
    } catch(error) {
        // En cas d'erreur, envoi de l'action FETCH_CATEGORY_ERROR avec le message d'erreur
        dispatch({type: FETCH_CATEGORY_ERROR, payload: error.message});
    }
};

export const startFetchMealsBySearch = async(dispatch,searchTerm) => {
    try{
        dispatch({type:FETCH_MEALS_BEGIN});
        const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
        dispatch({type:FETCH_MEALS_SUCCESS, payload:response.data.meals});
    }catch(error){
        dispatch({type:FETCH_MEALS_ERROR,payload:error.message})
    }
}

export const startFetchSingleMeal = async (dispatch,id) => {
    try{
        dispatch({type: FETCH_SINGLE_MEAL_BEGIN});
        const response =  await axios.get(`${MEAL_SINGLE_URL}${id}`);
        dispatch({type:FETCH_SINGLE_MEAL_SUCCESS,payload:response.data.meals});
    }catch(error){
        dispatch({type:FETCH_SINGLE_MEAL_ERROR,payload:error.message});
    }
}
