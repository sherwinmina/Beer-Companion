import React from 'react'
import Card from 'material-ui/Card'

const card = props => {
  // const {businesses} = props

  // let list = props.breweries.map(item => {return <div>{item.name}</div>})

   let list = props.breweries.map(item => (
     <Card
       key={item.id}
       style={{ width: '400px', padding: '20px', margin: '10px' }}
     >
       <h4>{item.name}</h4>

       <img style={{ width: '100%' }} src={item.image_url} alt="" />
       <div>Rating: {item.rating} Stars</div>
       <div> {item.location.address1} {item.location.city} </div>
       <div>Phone: {item.display_phone}</div>
     </Card>
   ))

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
   
     {list}
    </div>
  )
}

export default card