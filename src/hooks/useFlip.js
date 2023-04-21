import { useState } from "react"

const useFlip = (initialVal = false) => {
    const [ isFacingUp, setIsFacingUp ] = useState(initialVal)

    const flip = () => {
        setIsFacingUp(isUp => !isUp)
    }

    return [ isFacingUp, flip ]
}

export default useFlip