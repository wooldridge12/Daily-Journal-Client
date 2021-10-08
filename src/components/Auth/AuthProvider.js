import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState({events:[]})

    const getProfile = () => {
        return fetch("http://localhost:8000/post", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("daily_journal_token")}`
            }
        })
            .then(response => response.json())
            .then(setProfile)
    }

    return (
        <ProfileContext.Provider value={{
            profile, getProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}