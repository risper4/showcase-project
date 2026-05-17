import { useEffect, useState } from "react";
export default function useFetchData(url) {

    const [smoothies, setSmoothies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error occurred', response.status)
                } else {
                    return response.json()
                }
            })
            .then((result) => {
                setSmoothies(result)
                setLoading(false)
            })
            .catch(error => alert(error))
    }, [url])

    return {smoothies, loading, setSmoothies}
    
}