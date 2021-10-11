import React, { useState } from "react"

export const EntryContext = React.createContext()

export const EntryProvider = (props) => {
    const [ entries, setEntries ] = useState([]);
    const [ moods, setMoods ] = useState([]);

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

    const getMoods = () => {
        return fetch("http://localhost:8000/moods", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("daily_journal_token")}`,
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(setMoods)
    }

    return (
        <EntryContext.Provider value={{
            entries,
            moods,
            getEntries,
            getMoods,
            createEntry,
            }}>
            { props.children }
        </EntryContext.Provider>
    )
}