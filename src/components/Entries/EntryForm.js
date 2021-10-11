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

    // const changeEntryMoodState = (event) => {
    //     const newEntryState = { ...currentEntry }
    //     newEntryState.mood = event.target.value
    //     setCurrentEntry(newEntryState)
    // }

    const changeEntryDateState = (event) => {
        const newEntryState = { ...currentEntry }
        newEntryState.date = event.target.value
        setCurrentEntry(newEntryState)
    }

    return (
        <form className="entryForm">
            <fieldset>
                <div className="form-group">
                    <label>Concept</label>
                    <input type="text" name="concept" required auto focus className="form=control"
                        value={currentEntry.concept}
                        onChange={changeEntryConceptState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Entry</label>
                    <input type="text" name="entry" required auto focus className="form=control"
                        value={currentEntry.entry}
                        onChange={changeEntryEntryState}
                    />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label>Mood</label>
                    <select name="mood" id="mood" onChange={changeEntryMoodState}>
                        <option value="0">Select Mood</option>
                        {
                            moods.map(mood => {
                                return(<option value={mood.id}>{mood.label}</option>)
                            })
                        }
                    </select>
                </div>
            </fieldset> */}
            <fieldset>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" name="date" required auto focus className="form=control"
                        value={currentEntry.date}
                        onChange={changeEntryDateState}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn"
                    onClick={evt => {
                        evt.preventDefault()

                        const entryPost = {
                            concept: currentEntry.concept,
                            entry: currentEntry.entry,
                            // mood: currentEntry.mood,
                            date: currentEntry.date
                        }
                        createEntry(entryPost)
                            .then(() => history.push(`/`))
                    }}>Submit</button>
        </form>
    )
}