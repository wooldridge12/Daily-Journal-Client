import React, { useContext, useEffect } from "react"
import { EntryContext } from "./EntryProvider"
import { useHistory } from "react-router-dom"
import "./EntryList.css"

export const EntryList = () => {
    const history = useHistory()
    const { entries, getEntries, deleteEntry } = useContext(EntryContext)

    useEffect(() => {
        getEntries()
    }, [])

    return (
        <article>
            <header className="dailyJournal"> DAILY JOURNAL</header>

            <button className="newEntry"
                onClick={() => {
                    history.push({pathname: "/entries/new"})
                }}>New Note For Today</button>
            {
                entries.map(entry => {
                    return (
                    <section key={`entry--${entry.id}`} className="single_entry">

                        <div className="areaTitle">Concept</div>
                        <div>{entry.concept}</div>
                        <div className="spacer">---------</div>

                        <div className="areaTitle">Entry</div>
                        <div className="entry_entry">{entry.entry}</div>
                        <div className="spacer">---------</div>

                        <div className="areaTitle">Mood</div>
                        <div>{entry.mood.label}</div>
                        <div className="spacer">---------</div>

                        <div className="areaTitle">Date</div>
                        <div className="entryDate">{entry.date}</div>

                        <button className="deleteBtn" onClick={() => deleteEntry(entry.id)}>Delete</button>

                    </section>
                    )
                })
            }
        </article>
    )
}