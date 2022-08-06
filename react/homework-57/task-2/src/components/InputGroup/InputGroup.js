import React from 'react';
import Button from './Button/Button';
import Input from './Input/Input';
import Select from './Select/Select'

export default function InputGroup({ handleInputValue, addNewCost, selector, inputValue }) {
  return (
    <div className="p-4" style={{
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: 3
    }}>
      <form action="#" onSubmit={addNewCost}>
        <Input type="text" name="item" label="Item name" handleInputValue={handleInputValue} value={inputValue.item} />
        <Input type="number" name="price" label="Cost" handleInputValue={handleInputValue} value={inputValue.price} />
        <Select selector={selector} inputValue={inputValue} />
        <Button />
      </form>
    </div>
  )
}
