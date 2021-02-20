import styled from 'styled-components';
import React from 'react';

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const  CheckBoxLabel = styled.label`
  cursor: pointer;
`


export function Topping({toppings, checkTopping}) {
  return <ToppingGrid>
    {toppings.map((topping, index) =>(
      <CheckBoxLabel>
        <ToppingCheckbox
          type="checkbox"
          checked={topping.checked}
          onClick={() => checkTopping(index)}
        />
        {topping.name}
      </CheckBoxLabel>
    ))}
  </ToppingGrid>
}
