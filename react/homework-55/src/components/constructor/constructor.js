import React from 'react';
import IngredientsGroup from './listgroup/listgroup'

export default ({ ingredients, hover, mouseEnter, mouseLeave, burgerName, pickIngredients}) => {
  return (
    <div className="border rounded" style={{ background: '#f2f2f2',overflowY:"scroll",height:398,minWidth: 311}}>
      <div className="form-group d-flex" style={{ width: 264, margin: '10px auto' }}>
        <div>
          <label htmlFor="formGroupExampleInput" >Название бургера</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            onChange={burgerName}
          />
        </div>
      </div>
      <IngredientsGroup pickIngredients={pickIngredients} ingredients={ingredients} hover={hover} mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
    </div>
  )
}

