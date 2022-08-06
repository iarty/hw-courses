import React from 'react'
import classes from './Header.module.css'
import Button from '../UI/Button/Button';

export default function Header(props) {
  return (
    <div className={classes.Header}>
      <h1 className={classes.HeaderHeadline}>Chuck Norris Jokes Generator</h1>
      <div className={classes.HeaderImg}>
        <img width='20%' src="http://vignette2.wikia.nocookie.net/deathbattle/images/a/a7/Chuck_Norris_BZ_WBK_0005-MasterNorris_com.jpg/revision/latest?cb=20150917035259" alt="ChuckNorrisPhoto" />
      </div>
      <Button showPreloader={props.showPreloader} onClick={props.newJokes} />
    </div >
  )
}
