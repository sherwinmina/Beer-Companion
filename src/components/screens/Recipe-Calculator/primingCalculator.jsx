import React, { Component } from 'react'
import {Col, Button, Row, Input, Card, CardTitle, CardPanel, Icon} from 'react-materialize';

class PrimingCalculator extends Component {
  render () {
    return (
      <div>
        <h4>Beer Priming Calculator</h4>
        <p>Calculates how much priming sugar to add at bottling time for home brewed beer. Includes the residual amount of CO2 present in the beer due to fermentation. Works for Corn Sugar (Dextrose), Table Sugar (Sucrose), and Dry Malt Extract (DME). Also known as bottle priming. Sugar is added at bottling time. The remaining yeast ferment the sugar and this produces CO2.</p>

        <Card>
          <Row>
            <Col>Units Being Packaged:</Col> <Col><Input label="Author/Source:"></Input></Col>
          </Row>

          <Row>
            Units Being Packaged: <Input label="Author/Source:"></Input>
          </Row>
          <Row>
            Units Being Packaged: <Input label="Author/Source:"></Input>
          </Row>
          <Row>
            <Button>Update</Button>
          </Row>
          <Row>
            <Col>Co2:</Col><Col>{2 + 2}</Col>
          </Row>
          <Row>
            <Col>Priming Sugar Options:</Col><Col><Row>f</Row> <Row>f </Row> <Row>f</Row></Col>
          </Row>
          <Row></Row>
        </Card>
        
      </div>
    )
  }
}

export default PrimingCalculator;