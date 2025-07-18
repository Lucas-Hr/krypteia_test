import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";



export const breweryContext = createContext();

export const BreweryProvider = ({children}) => {
    const [brewery, setBrewery] = useState([]);
    useEffect(() => {
        axios.get("https://api.openbrewerydb.org/v1/breweries?per_page=20")
        .then(response => {
            setBrewery(response.data);            
        })
        .catch(err => console.log("Error fetching data ", err))
    }, [])
    
    useEffect(() => {
        console.log("brewery : ", brewery)
    })
    return (
        <breweryContext.Provider value={{brewery, setBrewery}}>
            {children}
        </breweryContext.Provider>
    )
}

export const useBrewery = () => useContext(breweryContext);