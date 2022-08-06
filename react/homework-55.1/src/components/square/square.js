import React from 'react';
import classes from './square.module.css'

export default function square({ item, isHide, index, newGame, tries, stopGame }) {
  const clsName = [classes.square, classes.close];
  if (item.show) {
    if (item.hasItem) {
      clsName.splice(1, 1, classes.show, classes.hasItem)
      setTimeout(() => {
        if (window.confirm(`Вы нашли обьект за ${tries} попытки/ок. Хотите начать новую игру?`)) {
          newGame();
        }
      }, 200);
    } else {
      clsName.splice(1, 1, classes.show)
    }
  }
  return <div className={clsName.join(' ')} onClick={item.show || stopGame ? null : () => isHide(index, item.hasItem)} />
}
