import React, { Component } from "react";
import Keyboard from "../../components/Keyboard/Keyboard";
import Input from "../../components/Input/Input";
import { connect } from "react-redux";
import { keyPressed } from "../../store/actions/calc";
import { bindActionCreators } from "redux";

class Calc extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex flex-column align-items-center mt-5">
          <h1>Calculator</h1>
          <div style={{ width: "35%" }} className=" border rounded p-2">
            <Input value={this.props.value} />
            <Keyboard clickHandler={this.props.keyPressed} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ keyPressed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
