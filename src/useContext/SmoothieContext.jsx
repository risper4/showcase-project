import { createContext, useContext } from "react";
import useFetchData from "../custom hook/useFetchData";

const SmoothieContext = createContext()

export function SmoothieProvider({children}){

    const {smoothies, loading, setSmoothies} = useFetchData('http://localhost:3001/smoothies')

    return (
        <SmoothieContext.Provider value = {{smoothies, loading, setSmoothies}}>
            {children}
        </SmoothieContext.Provider>
    )
}

export function UseSmoothies() {
    return useContext(SmoothieContext)
}