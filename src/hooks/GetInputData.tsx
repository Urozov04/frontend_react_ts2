import React,{ useState } from "react"
import type { IData } from "../types/../types"

export const useGetValue = (intialState: IData) => {

    const [formData, setFormData] = useState(intialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target

        setFormData((prev) => ({...prev, [name]: value}))
    }

    return {formData, handleChange, setFormData}
}