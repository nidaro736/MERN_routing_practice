import React from 'react';

export default function WordColor({word, color, bg_color})
{
    return (
        <div>
            <h1 style = {{color:color, backgroundColor:bg_color}}>The Word is {word}</h1>
        </div>
    );
}