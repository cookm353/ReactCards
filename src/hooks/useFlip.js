import { useState } from "react"

const useFlip = () => {
    const [ isFacingUp, setIsFacingUp ] = useState()

    const flip = () => {
        setIsFacingUp(isUp => !isUp)
    }

    return [ isFacingUp, flip ]
}

export default useFlip