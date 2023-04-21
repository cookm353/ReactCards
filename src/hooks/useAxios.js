import { useState } from "react"
import uuid from "uuid"
import axios from "axios"

/* Hook to make an AJAX request using Axios */
const useAxios = () => {
    const [ cards, setCards ] = useState([])

    const addCard = async (url) => {
        const response = await axios.get(url)
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }

    return [ cards, addCard ]
}

export default useAxios