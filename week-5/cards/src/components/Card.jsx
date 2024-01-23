import React from "react";

export default function Card({ name, desc, linkedin, twitter, interests }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>About: {desc}</p>
      <p>LinkedIn: {linkedin}</p>
      <p>Twitter: {twitter}</p>
      <p>Interests: {interests}</p>
    </div>
  );
}
