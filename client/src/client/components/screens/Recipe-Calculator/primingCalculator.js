import React, { Component } from 'react'
import {Col, Button, Row, Input, Card, CardTitle, CardPanel, Icon} from 'react-materialize';

class PrimingCalculator extends Component {
  constructor(props){
    super(props);
    this.state={ count : 1 , temp: 0, gallons: 0, volume: 0}
    console.log(this.state)
  }

  
  calculate() {
     var total = this.state.volume +  this.state.gallons
     console.log(total)
  }

  onChangeHandler(e) {
     this.setState({gallons: e.target.value});
     console.log(this.state.gallons)
  }

  onChangeCO2(e) {
     this.setState({volume: e.target.value});
     console.log(this.state.volume)
  }
 
  render () {
    return (
      <div >
        <h4>Beer Priming Calculator</h4>
        <p>Calculates how much priming sugar to add at bottling time for home brewed beer. Includes the residual amount of CO2 present in the beer due to fermentation. Works for Corn Sugar (Dextrose), Table Sugar (Sucrose), and Dry Malt Extract (DME). Also known as bottle priming. Sugar is added at bottling time. The remaining yeast ferment the sugar and this produces CO2.</p>

        <Card>
          <Row>
             <Col><Input type="text" label="Units Being Packaged:" onChange={this.onChangeHandler.bind(this)}></Input><Col className="valign-wrapper" style={{paddingTop:'5px'}} >(Gallons)</Col></Col>
             {this.state.value}
          </Row>

          <Row>
            <Input label="Volumes of CO2:" onChange={this.onChangeCO2.bind(this)}></Input>
          </Row>
          <Row>
            <Input label="Temperature of Beer:"></Input>
          </Row>
          <Row>
            <Button onClick={() => {this.calculate()}}>Update</Button>
          </Row>
          <Row>
            <Col>Co2 in Beer:</Col><Col>{this.state.volume - this.state.gallons}</Col>
          </Row>
          <Row>
            <Col>Priming Sugar Options:</Col><Col><Row>Table Sugar: {this.state.gallons/ 2}</Row> <Row>Corn Sugar</Row> <Row>DME</Row></Col>
          </Row>
          <Row></Row>
        </Card>
        
      </div>
    )
  }
}

export default PrimingCalculator;