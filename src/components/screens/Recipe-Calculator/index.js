import React, { Component } from 'react';
import {Col, Button, Row, Input, Card, CardTitle, CardPanel, Icon} from 'react-materialize';

class Calculator extends Component {
  render () {
    return (
      <div>
      <Card className="">
        <div className="row">
          <h5 className="center-align">Recipe Builder</h5>
          <div className="col s7">
          <Input type="" label="Recipe Name" s={12}></Input>
          </div>

          <div className="col s5">
          <Input label="Author/Source:"></Input>
          </div>
       </div>

       <hr style={{borderWidth:'2px'}}> </hr>

        <div className="row" >
          <div className="col s6">
            <h5>Recipe</h5>
            
            <Row>
              <Input className="browser-default" s={12} type='select' label="Brew Method" defaultValue='1'>
                <option value='1' disabled selected >Select Method</option>
                <option value='2'>All Grain</option>
                <option value='3'>BIAB</option>
                <option value='4'>Extract</option>
                <option value='5'>Partial Mash</option>
              </Input>
            </Row>

            <Input className="browser-default" s={12} type='select' label="Units" defaultValue='2'>
                <option value='2'>US-(Gallons, lbs, oz)</option>
                <option value='3'>Metric-(liters, kg, g)</option>
            </Input >
            <Input label="Batch Size:" placeholder="5.5 (gallons)"></Input>
            <Input label="Est. Boil Size:" placeholder="7.5 (gallons)"><a href="https://www.brewersfriend.com/faq/#recipes17"><Icon>info_outline</Icon></a></Input>
            
            
            
            <Input label="Date Brewed" name='on' type='date' onChange={function(e, value) {}} />
            <textarea name="Text1" cols="40" rows="40"></textarea>
            <Button>Save Notes</Button>
            </div>
         
          
          <div className="col s6" style={{borderLeft: '1px solid grey'}}>
            <h5>ABV Calculator</h5>
            
            <Row>
            <div>
                <Input name='group1' className='with-gap'  type='radio' value='1.050' label='SG(1.xxx)' />
                <Input name='group1' className='with-gap'  type='radio' value='1.010' label='Plato ˚P' />
            </div>
            </Row>
                        
            <div className="row">
              <Input label="Original Gravity" defaultValue='1.050'/>
              <Input label="Final Gravity" defaultValue='1.010'/>
            </div>

            <Row>
              <div className="col">Equation: </div>
              <div className="col">
                <Input className='with-gap' name='SG(1.xxx)' type='radio' label='Standard' defaultValue='1.050'/>
                <Input className='with-gap' name='Plato ˚P' type='radio' label='Alternate' />
              </div>

              <div className="col"><font size="4" color='green'> Alcohol By Volume:</font> <font size="3">5.25%</font> </div>
              <div className="col"><h6>Apparent Attenuation:</h6> <div>79%</div> </div>
              <div className="col"><h6>Calories:</h6> <div>163.7 per 12oz</div> </div>

            </Row>
            <div className="row" >
              <Button className="col offset-s7">Update</Button>        
            </div>
          </div>
        </div>
      </Card>
      

      <Row>
       <Col s={12} m={6}>
				<CardPanel className="teal lighten-4 black-text">
         <h5>Fermentables</h5>
         <Row>
         <Col>  
          <Input className="browser-default" s={4} type='select' label="Units" defaultValue='2'>
                <option value='2'>US-(Gallons, lbs, oz)</option>
                <option value='3'>Metric-(liters, kg, g)</option>
            </Input >
             <Input className="browser-default" s={4} type='select' label="Units" defaultValue='2'>
                <option value='2'>US-(Gallons, lbs, oz)</option>
                <option value='3'>Metric-(liters, kg, g)</option>
            </Input >
         </Col>
          
         </Row>
						
				</CardPanel>
		  </Col>

        <Col m={6} s={6}>
        <Card className='small'
          header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
          actions={[<a href='#'>This is a Link</a>]}>
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
        </Card>
        </Col>
      </Row>

     </div>
     
    )
  }
}

export default Calculator;