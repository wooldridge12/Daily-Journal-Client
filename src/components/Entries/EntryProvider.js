import React, { useState } from "react"

export const EntryContext = React.createContext()

export const EntryProvider = (props) => {
    const [ entries, setEntries ] = useState([])

    const getEntries = () => {
        return fetch("http://localhost:8000/journalentries", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("daily_journal_token")}`,
                "Content-type": "apllication/json"
            }
        })
        .then(res => res.json())
        .then(setEntries)
    }

    return (
        <EntryContext.Provider value={{
            entries,
            getEntries,
            }}>
            { props.children }
        </EntryContext.Provider>
    )
}