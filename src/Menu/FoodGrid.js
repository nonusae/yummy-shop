import styled from 'styled-components';
import { Title } from '../styles/title'

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`

export const Food = styled.div`
  height: 100px;
  font-size: 1.25 rem;
  background-image: ${({img}) => `url(${img});`}
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  padding: 10px;
  transform: translateY(0px);
  transition-property: box-shadow transform contrast;
  transition-duration: .2s;
  border-radius: 7px;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px 0px grey;
  }
`

