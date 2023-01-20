import React from 'react';

export default function Profile(props) {
    const date = new Date(props.date.substr(0,4),props.date.substr(4,2)-1,props.date.substr(6,2));
    const today = new Date();
    console.log(props.name);
    console.log(date);
    console.log(today);
    var isNew = false;
    if((today.getTime()-date.getTime())/(1000*60*60*24) < 60) {
        isNew = true;
    } else {
        isNew = false;
    }
    return (
    <div className='profile'>
        <img className='photo'
            src={props.image}
            alt='avatar'
        />
        {
            isNew && <span className ='new'>New</span>
        }
        <h1>{props.name}</h1>
        <p>{props.title}</p>
    </div>
    )
}