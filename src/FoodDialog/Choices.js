import React from 'react';

export function Choices({openFood, selectedChoice, handleSelect}) {
  return (<>
    <h3>Choose Choices:</h3>
    {openFood.choices.map(choice => (
      <>
        <input
          type='radio'
          id={choice}
          name='choice'
          value={choice}
          checked={selectedChoice === choice}
          onChange={handleSelect}
        />
        <label htmlFor={choice}> {choice} </label>
      </>
    ))}
  </>)
}
