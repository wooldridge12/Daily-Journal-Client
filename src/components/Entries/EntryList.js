import React, { useContext, useEffect } from "react"
import { EntryContext } from "./EntryProvider"
import { useHistory } from "react-router-dom"
import "./EntryList.css"

export const EntryList = () => {
    // const history = useHistory()
    // const { entries, getEntries } = useContext(EntryContext)

    // useEffect(() => {
    //     getEntries()
    // }, [])

    return (
        <article>
            <header> DAILY JOURNAL</header>
        </article>
    )
}