import React from 'react';

export default function Word({word})
{
    return (
        <div>
            {isNaN(+word)? <h1>The Word is {word}</h1>:<h1>The Number is {word}</h1>}
        </div>
    );
}