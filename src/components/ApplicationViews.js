import React from "react"
import { Route } from "react-router-dom"
import { EntryList } from "./Entries/EntryList"
import { EntryProvider } from "./Entries/EntryProvider"

export const ApplicationViews = () => {
    return (
    <>
       
        <EntryProvider>
            <Route exact path="/Entries">
                <EntryList />
            </Route>
        </EntryProvider>
        
    </>
    )
}