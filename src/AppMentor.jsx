import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Ellie",
    title: "Developer",
    mentor: {
      name: "Bob",
      title: "Senior Developer",
    },
  });
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>
        {person.name}'s metonr is {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name: name },
          }));
        }}
      >
        Change Mentor's Name
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title: title },
          }));
        }}
      >
        Change Mentor's Title
      </button>
    </div>
  );
}
