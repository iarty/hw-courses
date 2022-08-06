import React,{Fragment} from 'react'

export default function SelectItem({text}) {
  return (
    <Fragment>
      <option value={text}>{text}</option>
    </Fragment>
  )
}
