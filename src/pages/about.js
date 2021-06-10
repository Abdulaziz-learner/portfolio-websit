import {Row,Container,Col,Card,CardText,CardBody} from 'reactstrap';
import Imgc from '../media/Новая папка/4.jpg';
const About =()=>{
return(
    <>
    <Container className='py-5'>
        <Row className='py-5' >
            <Col md='6'>
              <Card>
                  <CardBody>
                  <img src={Imgc} width='100%'/>
                  </CardBody>
              </Card>
            </Col>
            <Col md='6' className='px-4'>
                <h1 className='we'>
                    Who we are
                </h1>
                <p className='lorem text-start'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur similique aut eos id eligendi enim natus beatae, autem fugit expedita dicta aliquam quis cumque. Ex rerum cum culpa totam?
                </p> <p className='lorem text-start'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur similique aut eos id eligendi enim natus beatae, autem fugit expedita dicta aliquam quis cumque. Ex rerum cum culpa totam?
                </p>
                <Col md='12' className='py-5'>
                  <span className='do'>  <i className='fab fa-facebook-f '></i></span>
                   <span className='d'> <i className='fab fa-instagram '></i></span>
                   <span className='d'> <i className='fab fa-twitter'></i></span>
                </Col>
            </Col>
        </Row>
    </Container>
    </>
)

}
export default About;