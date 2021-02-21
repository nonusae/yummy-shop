import React from 'react'
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { brandPrimary } from '../styles/colors'
import { Title } from '../styles/title';
import { Button } from '../Button/Button';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity'
import { Topping } from './Topping'
import { useToppings }  from '../Hooks/useTopping';
import { useChoice } from '../Hooks/useChoice';
import { Choices } from  './Choices'

// TODO: Refactor
const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0 40px 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  text-align: center;
  padding: 0.7em 4em;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${brandPrimary};
  ${({disabled}) => disabled &&
    `
      opacity: .5;
      background-color: grey;
      pointer-events: none;
    `
  }
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 1.25em;
  ${({img}) => (img ?
    `background-image: url(${img});` : `min-height: 75px;`
  )}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 0.1em 1em;
  top: ${({img}) => (img ? `100px` : `20px` )};
`;

const pricePerTopping = 0.5;

export function getPrice(order){
  return order.quantity * (order.price + (order.toppings.filter(t => t.checked).length * pricePerTopping) )
}

function hasTopping(food) {
  return food.section === 'Pizza'
}

const FoodDialogContainer = ({ openFood, setOpenFood, setOrders, orders }) => {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const {selectedChoice, handleSelect} = useChoice();

  function close() {
    setOpenFood();
  }

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: selectedChoice
  }

  function addToOrder() {
    setOrders([...orders, order]);
    close()
  }

  return openFood ? (<div>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity}> </QuantityInput>
          {hasTopping(openFood) && <>
            <h3>Would you like some toppings ?</h3>
            <Topping {...toppings}/>
          </>}
          {
            openFood.choices &&
            <Choices openFood={openFood} selectedChoice={selectedChoice} handleSelect={handleSelect} />
          }
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder} disabled={openFood.choices && !selectedChoice}>
            Add to order: {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </div>)
    : null
}

export function FoodDialog(props) {
  if(!props.openFood) return null;
  return <FoodDialogContainer {...props} />
}
