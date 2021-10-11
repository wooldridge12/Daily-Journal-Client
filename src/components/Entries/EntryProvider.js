import React, { useState } from "react"

export const EntryContext = React.createContext()

export const EntryProvider = (props) => {
    const [ entries, setEntries ] = useState([])

    const getEntries = () => {
        return fetch("http://localhost:8000/journalentries", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("daily_journal_token")}`,
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(setEntries)
    }

    const createEntry = (entry) => {
        return fetch("http://localhost:8000/journalentries", {
            method:"POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("daily_journal_token")}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(entry)
        })
        .then(res => res.json())
        .then(getEntries)
    }

    return (
        <EntryContext.Provider value={{
            entries,
            getEntries,
            createEntry,
            }}>
            { props.children }
        </EntryContext.Provider>
    )
}