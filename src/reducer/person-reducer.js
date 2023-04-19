export default function personReducer(person, action) {
    switch (action.type) {
        case 'updated':
            const { prev, current } = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if (mentor.name === prev) {
                        return { ...mentor, name: current };
                    }
                    return mentor;
                }),
            }
        case 'added':
            const { name, title } = action;
            return {
                ...person,
                mentors: [...person.mentors, { name: name, title: title }],
            }

        case 'deleted':
            return {
                ...person,
                mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
            }

        default: {
            throw Error(`undefined action type: ${action.type}`);
        }

    }
}