// app/auth/signin/page.js
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import "./SignIn.css";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false, // Prevents automatic redirect
      username,
      password,
    });

    if (result.error) {
      setError("Invalid username or password."); // Show error message
    } else {
      window.location.href = "/"; // Redirect after successful login
    }
  };

  return (
    <div className="signin_container">
      <h1 className="signin_title">Sign In</h1>
      <div className="signin_form">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <input
            className="signin_input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="signin_input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p>{error}</p>}
          <button type="submit" className="signin_btn">
            Sign In
          </button>
        </form>
        <div className="signin_github_container">
          <h2 className="signin_github_title">OR</h2>
          <button
            className="signin_github_btn"
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            Sign In With Github
          </button>
        </div>
      </div>
    </div>
  );
}
