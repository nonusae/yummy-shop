import {useState} from 'react';

export function useChoice() {
  const [selectedChoice, setSelectedChoice] = useState()

  function handleSelect(e) {
    setSelectedChoice(e.target.value)
  }

  return {
    selectedChoice,
    handleSelect
  }
}
