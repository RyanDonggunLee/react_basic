import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Ellie",
    title: "Developer",
    mentors: [
      {
        name: "Bob",
        title: "Senior Developer",
      },
      {
        name: "James",
        title: "senior Developer",
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{person.name}'s metonrs :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`Who's your mentor?`);
          const current = prompt(`Who is your new mentor?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        Change Mentor's Name
      </button>
    </div>
  );
}
