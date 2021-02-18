import styled from 'styled-components';
import { brandPrimary } from '../styles/colors'
import { Title } from '../styles/title'

export const Button = styled(Title)`
  margin: 10px;
  color: white;
  text-align: center;
  min-width: 100px;
  padding: 0.7em 1.5em;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${brandPrimary};
`
