import React from "react";
import {Link} from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Get Schwifty!</h1>
        <Link className = "links" to = {'./characters'}>Characters</Link>
      
      </header>
    </section>
  );
}
