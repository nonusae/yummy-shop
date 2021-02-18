import React from 'react'
import styled from 'styled-components';
import { DialogContent, DialogFooter } from '../FoodDialog/FoodDialog';
import { Button } from '../Button/Button';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const Checkoutbutton = styled(Button)`
  padding: 0.7em 3em;
  /* width: 100%; */
`;

export function Order() {
  return <OrderStyled>
    <OrderContent>
      Your're order is empty.
    </OrderContent>
    <DialogFooter>
      <Checkoutbutton>Checkout</Checkoutbutton>
    </DialogFooter>
  </OrderStyled>
}
