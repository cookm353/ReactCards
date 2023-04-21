import { useState } from "react"
import uuid from "uuid"
import axios from "axios"

/* Hook to make an AJAX request using Axios */
const useAxios = (url) => {
    const [ cards, setCards ] = useState([])

    const addCard = async () => {
        const response = await axios.get(url)
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }

    return [ cards, addCard ]
}

export default useAxios