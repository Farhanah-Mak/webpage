

"use client"
import "../globals.css"
import { signIn } from "next-auth/react";


export default function WelcomePage() {
    return (
        <>
          <h1 className="homepage_title">
            Welcome to the EECC File Management App
          </h1>
          <div className="homepage_section">
            <p className="homepage_text">
              Please sign in to view and manage files.
            </p>
            <button
              className="homepage_signin_btn btn"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </div>
        </>
        )
}
