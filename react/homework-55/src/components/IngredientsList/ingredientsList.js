import React from 'react';
import IngredientsListComponent from './IngredientsListComponent/IngredientsListComponent'

export default ({ ingredients,onDelete }) => {
  return (
    <div className="border rounded" style={{ background: '#f2f2f2', overflowY:"scroll",height:398,minWidth: 311 }}>
    <p className="ml-3 text-center" style={{margin:'10px 0'}}>Инредиенты:</p>
      <div className="form-group d-flex" style={{ width: 264, margin: '10px auto' }}>
        <IngredientsListComponent ingredients={ingredients} onDelete={onDelete} />
      </div>
    </div>
  )
}

