
import {Row,Container,Col,Card,CardText,CardBody} from 'reactstrap';



import Imgd from '../media/Новая папка/5.jpg';
import Imge from '../media/Новая папка/6.jpg';



 const Rasm =()=>{
return(
<>
<Container>
<Row>
    <h2 className='text-start py-2'>Portfolio</h2>
    <Col md='4'> 
    <Card>
        <CardBody>
 
        
        </CardBody>
        <img width="100%" src={Imgd} alt="Card image cap" />
        <CardBody>
          
        
        </CardBody>
      </Card></Col>
   
      
      <Col md='4'>
          <Card>
        <CardBody>
 
        
        </CardBody>
        <img width="100%" src={Imge} alt="Card image cap" />
        <CardBody>
          
        
        </CardBody>
      </Card></Col>
  <Col md='4'>   
   <Card>
        <CardBody>
 
        
        </CardBody>
        <img width="100%" src={Imgd} alt="Card image cap" />
        <CardBody>
          
        
        </CardBody>
      </Card></Col>
      <Col md='4'>
          <Card>
        <CardBody>
 
        
        </CardBody>
        <img width="100%" src={Imge} alt="Card image cap" />
        <CardBody>
          
        
        </CardBody>
      </Card></Col>
      <Col md='4'>
          <Card>
        <CardBody>
 
        
        </CardBody>
        <img width="100%" src={Imgd} alt="Card image cap" />
        <CardBody>
          
        
        </CardBody>
      </Card></Col>
    <Col md='4'>
    <Card>
        <CardBody>
 
        
        </CardBody>
        <img width="100%" src={Imge} alt="Card image cap" />
        <CardBody>
          
        
        </CardBody>
      </Card>
        </Col>  
    
</Row>
</Container>

</>

)


}
export default Rasm;