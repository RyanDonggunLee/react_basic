import React, { useCallback, useReducer, useMemo, memo } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = useCallback(() => {
    const prev = prompt(`Who's your mentor?`);
    const current = prompt(`Who is your new mentor?`);
    dispatch({ type: "updated", prev, current });
  }, []);
  const handleAdd = useCallback(() => {
    const name = prompt(`Who's your new mentor?`);
    const title = prompt(`What is your mentor's title?`);
    dispatch({ type: "added", name, title });
  }, []);
  const handleDelete = useCallback(() => {
    const name = prompt(`Who do you want to delete?`);
    dispatch({ type: "deleted", name });
  }, []);
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
      <Button text="Change Mentor Name" onClick={handleUpdate} />
      <Button text="Add Mentor" onClick={handleAdd} />
      <Button text="Delete Mentor" onClick={handleDelete} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log("Button", text, "re-rendering 😜");
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log("😆");
  }
  return 10;
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
