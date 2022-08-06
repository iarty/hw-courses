import React, { Component } from 'react';
import ImputGroup from '../../components/InputGroup/InputGroup';
import CostsList from '../../components/CostsList/CostsList';
import PieChart from '../../components/PieChart/PieChart';

const data = {
  item: '',
  price: '',
  select: '',
}
export default class MoneyKeeper extends Component {
  state = {
    inputGroupData: data,
    costs: [],
    chart: null,
  }

  constructor() {
    super();
    this.state.chart = new PieChart();
  }

  handleInputValue = e => {
    const name = e.target.name;
    const value = e.target.value;
    const inputGroupData = { ...this.state.inputGroupData }
    inputGroupData[name] = value;
    this.setState({ inputGroupData })
  }

  addNewCost = e => {
    e.preventDefault();
    const costs = this.state.costs;
    costs.push(this.state.inputGroupData);
    this.setState({ costs, inputGroupData: data });
  }


  selector = e => {
    const value = e.target.value;
    const inputGroupData = { ...this.state.inputGroupData };
    inputGroupData.select = value;
    this.setState({ inputGroupData });
  }

  removeCostsItem = index => {
    this.setState(prevState => prevState.costs.splice(index, 1));
  }

  changeStat = () => {
    let arr = [...this.state.costs];
    return arr = arr.reduce((accum, el) => {
      if (el.select === 'Car') {
        accum[0] += +el.price;
        return accum;
      } else {
        if (el.select === 'Food') {
          accum[1] += +el.price;
          return accum;
        } else {
          accum[2] += +el.price;
          return accum;
        }
      }
    }, [0, 0, 0])
  }

  render() {
    const pieChart = new PieChart(this.changeStat())
    return (
      <div>
        <h1 className="text-center my-5">Money Keeper</h1>
        <div className='row justify-content-center'>
          <div className="d-flex flex-column align-items-center">
            <ImputGroup handleInputValue={this.handleInputValue} addNewCost={this.addNewCost} selector={this.selector} inputValue={this.state.inputGroupData} />
            {pieChart.render()}
          </div>
          <CostsList costs={this.state.costs} removeCostsItem={this.removeCostsItem} />
        </div>
      </div>
    )
  }
}
