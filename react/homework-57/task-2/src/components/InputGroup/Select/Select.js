import React, { Fragment } from 'react';
import SelectItem from './SelectItem/SelectItem'

const SelectPage = ({ selector }) => {
  const arr = ['Entertainment', 'Car', 'Food']
  return (
    <Fragment>
      <select className="browser-default custom-select" onChange={selector} required>
        <option hidden></option>
        {arr.map((el, i) => <SelectItem key={el + i} text={el} />)}
      </select>
    </Fragment>
  );
}

export default SelectPage;