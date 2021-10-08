import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { EntryContext } from "./EntryProvider"
import "./EntryForm.css"

export const EntryForm = () => {
    const history = useHistory()
    const { createEntry } = useContext(EntryContext)

    const [ currentEntry, setCurrentEntry ] = useState({
        concept: "",
        entry: "",
        mood: 0,
        date: ""
    })

    // useEffect(() => {
    //     getMoods()
    // }, [])

    const changeEntryConceptState = (event) => {
        const newEntryState = { ...currentEntry }
        newEntryState.concept = event.target.value
        setCurrentEntry(newEntryState)
    }

    const changeEntryEntryState = (event) => {
        const newEntryState = { ...currentEntry }
        newEntryState.entry = event.target.value
        setCurrentEntry(newEntryState)
    }

    const changeEntryMoodState = (event) => {
        const newEntryState = { ...currentEntry }
        newEntryState.mood = event.target.value
        setCurrentEntry(newEntryState)
    }

    const changeEntryDateState = (event) => {
        const newEntryState = { ...currentEntry }
        newEntryState.date = event.target.value
        setCurrentEntry(newEntryState)
    }

    return (
        <form className="entryForm">
            <fieldset>
                <div className="form-group">
                    <label></label>
                    <input type="text" name="concept" required auto focus className="form=control"
                        value={currentEntry.concept}
                        onChange={changeEntryConceptState}
                    />
                </div>
            </fieldset>
        </form>
    )
}