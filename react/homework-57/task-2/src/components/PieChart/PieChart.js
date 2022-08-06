import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataPie: {
      labels: ["Car", "Food", "Entertainment"],
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
          ]
        }
      ]
    }
  }

  constructor(props) {
    super(props);
    this.state.dataPie = this.StateChange()
  }

  StateChange = () => {
    const dataPie = { ...this.state.dataPie }
    dataPie.datasets[0].data = this.props;
    return dataPie;
  }


  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5 text-center">Pie chart</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;