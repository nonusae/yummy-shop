import React from 'react';
import styled from 'styled-components';
import {Title} from '../styles/title'
import { brandPrimary } from '../styles/colors';

const QuantityInputStyled = styled.input`
  font-size: 24px;
  width: 20px;
  text-align: center;
  border: none;
  outline: none;
`

const IncrementContatiner = styled(Title)`
  display: flex;
  height: 24px;
`
// Todo: Use flex box instead.
const IncrementButton = styled.div`
  width: 23px;
  color: ${brandPrimary};
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0px 10px;
  border: 1px solid #f44336;
  border: 1px solid ${brandPrimary};
  &:hover {
    background-color: #ffe3e3;
  }
  ${({disabled}) =>
    disabled &&`
      opacity: 0.5;
      pointer-events: none;
    `}
`

export function QuantityInput({quantity}) {
  return <IncrementContatiner>
    <div>QuantityInput:</div>
    <IncrementButton onClick={() => {
      quantity.setValue(quantity.value - 1);
    }} disabled={quantity.value === 1}> - </IncrementButton>
    <QuantityInputStyled {...quantity} />
    <IncrementButton onClick={() => {
      quantity.setValue(quantity.value + 1);
    }}>+</IncrementButton>
  </IncrementContatiner>
}
