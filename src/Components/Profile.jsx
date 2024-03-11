import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Profile.css"

export async function loader() {
    try {
        const result = await fetch('https://api.github.com/users/royderks')
        const profile = await result.json()
        if (profile) {
            return {
                profile,
            }
        }
    }
    catch (error) {
        return {
            error
        }
    }
}

function Profile() {
    const { profile, error = '' } = useLoaderData()

    return (
        <div className="Profile-container">
            <h2>About me</h2>
            {
                error ? (<p>Somthing went wrong...</p>) : (
                    <div>
                        <div className="Profile-avatar">
                            <img src={profile.avatar_url} alt="avatar" />
                        </div>
                        <ul className="Profile-list">
                            <li className="Profile-listitem"><strong>Name:</strong> {profile.login}</li>
                            <li className="Profile-listitem"><strong>location:</strong> {profile.location}</li>
                            <li className="Profile-listitem"><strong>Repos:</strong> {profile.repos_url}</li>
                            <li className="Profile-listitem"><strong>Email:</strong> {profile.email}</li>
                            <li className="Profile-listitem"><strong>Bio:</strong> {profile.bio}</li>
                            <li className="Profile-listitem"><strong>Twitter:</strong> {profile.twitter_username}</li>
                        </ul>
                        <div>
                            <Link to='/projects'>View my projects</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Profile