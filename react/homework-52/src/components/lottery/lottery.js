import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import Container from 'reactstrap/lib/Container';

const outputStyle = {
  borderBottom: '2px solid red',
  width: '70px',
  height: '70px'
}

export default (props) => (
  <Fragment>
    <Container>
      <div className="text-center">
        <h1 className="my-5">Lottery</h1>
        <Button color="danger" className="mb-5" onClick={props.genNum}>New numbers!</Button>
        <div className="d-flex mt-5 justify-content-around">
          <span className="display-3" style={outputStyle}>{props.num[0]}</span>
          <span className="display-3" style={outputStyle}>{props.num[1]}</span>
          <span className="display-3" style={outputStyle}>{props.num[2]}</span>
          <span className="display-3" style={outputStyle}>{props.num[3]}</span>
          <span className="display-3" style={outputStyle}>{props.num[4]}</span>
        </div>
      </div>
    </Container>
  </Fragment>
)
