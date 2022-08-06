import React from 'react'
import MenuItems from './menuItem/menuitem'

const menu = ({ MenuItemsArr, addToOrderList }) => {
  return (
    <div className="col-8">
      <div>
        <h4>Menu list:</h4>
      </div>
      <div className="border border-dark rounded d-flex flex-wrap p-3">
        {MenuItemsArr.map((el, i) => <MenuItems key={i} dataItems={el} addToOrderList={addToOrderList} />)}
      </div>
    </div>
  )
}

export default menu;
