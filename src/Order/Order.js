import React from 'react'
import styled from 'styled-components';
import { DialogContent, DialogFooter } from '../FoodDialog/FoodDialog';
import { Button } from '../Button/Button';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';

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

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({editable}) =>
    editable
    ? `
      &:hover {
        cursor: pointer;
        background-color: #e7e7e7;
      }`
    :`
      &:hover {
        cursor-events: none;
      }
    `
  }
`
const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const Checkoutbutton = styled(Button)`
  padding: 0.7em 3em;
`;

const DetailItem = styled.div`
  color: grey;
  font-size: 0.75rem;
`;

export function Order({ orders, setOrders, setOpenFood }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order)
  }, 0)
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  }

  return <OrderStyled>
    {orders.length === 0
      ? <OrderContent>Your're order is empty.</OrderContent>
      : <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map((order, index) => (
            <OrderContainer editable>
              <OrderItem
                onClick = {() => {
                  setOpenFood({...order, index})
                }}
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div style={{cursor: 'pointer'}} onClick={(e) => {
                    deleteItem(index);
                    e.stopPropagation();
                  }}>X</div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                  .filter(t => t.checked)
                  .map(topping => topping.name)
                  .join(", ")
                }
              </DetailItem>
              <DetailItem>
                {order.choice && order.choice}
              </DetailItem>
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub Total:</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Tax:</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total:</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
    }
    <DialogFooter>
      <Checkoutbutton>Checkout</Checkoutbutton>
    </DialogFooter>
  </OrderStyled>
}
