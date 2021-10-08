import React from "react"
import { Route } from "react-router-dom"
import { EntryList } from "./Entries/EntryList"
import { EntryProvider } from "./Entries/EntryProvider"

export const ApplicationViews = () => {
    return (
    <>
       <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      ></main>
        <EntryProvider>
            
            <Route exact path="/">
                <EntryList />
            </Route>

        </EntryProvider>
        
    </>
    )
}