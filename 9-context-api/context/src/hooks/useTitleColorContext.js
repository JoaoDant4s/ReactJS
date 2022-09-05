import { useContext } from 'react'
import { TitleColorContext } from '../context1/TitleColorContext'

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext)

    if(!context) {
        console.log("Context não encontrado!")

    }
    return context
}