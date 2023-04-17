import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentor() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`Who's your mentor?`);
    const current = prompt(`Who is your new mentor?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const newName = prompt(`Who's your new mentor?`);
    const newTitle = prompt(`What is your mentor's title?`);
    updatePerson((person) => {
      person.mentors.push({ name: newName, title: newTitle });
    });
  };
  const handleDelete = () => {
    const name = prompt(`Who do you want to delete?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
  };
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
      <button onClick={handleUpdate}>Change Mentor's Name</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleDelete}>Delete Mentor</button>
    </div>
  );
}

const initialPerson = {
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
};
