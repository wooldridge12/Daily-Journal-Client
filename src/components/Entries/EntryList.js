import React, { useContext, useEffect } from "react"
import { EntryContext } from "./EntryProvider"
import { useHistory } from "react-router-dom"
import "./EntryList.css"

export const EntryList = () => {
    const history = useHistory()
    const { entries, getEntries } = useContext(EntryContext)

    useEffect(() => {
        getEntries()
    }, [])

    return (
        <article>
            <header> DAILY JOURNAL</header>

            <button className="newEntry"
                onClick={() => {
                    history.push({pathname: "/entries/new"})
                }}>New Note For Today</button>
            {
                entries.map(entry => {
                    return (
                    <section key={`entry--${entry.id}`} className="single_entry">
                        <div>{entry.concept}</div>

                        <div className="entry_entry">{entry.entry}</div>

                        <div>{entry.mood.label}</div>

                        <div>{entry.date}</div>


                    </section>
                    )
                })
            }
        </article>
    )
}