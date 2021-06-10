
import {Row,Container,Col,Card,CardText,CardBody, CardImg} from 'reactstrap';
import Imga from '../media/Новая папка/2.jpg';
import Imgb from '../media/Новая папка/3.jpg';
import Img from '../media/Новая папка/1.jpg';
import Imgw from '../media/mash/Roni.jpg';
const Updates =()=>{
return(
    <>
<Container className='conti py-4'>
    <Row>
        <h2 className='text-start bold'>Blog Updates</h2>
        <p className='text-start'>   Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <Col md='4'><Card><CardBody><img width='100%' src={Imga} /><CardText><p>June 7,2021</p><h4>Google saying telephoto is more important</h4></CardText></CardBody></Card></Col>
        <Col md='4'><Card><CardBody><img width='100%' src={Img} /><CardText><p>June 7,2021</p><h4>Google saying telephoto is more important</h4></CardText></CardBody></Card></Col>
        <Col md='4'><Card><CardBody><img width='100%' src={Imga} /><CardText><p>June 7,2021</p><h4>Google saying telephoto is more important</h4></CardText></CardBody></Card></Col>
    </Row>
</Container>

    </>
)

}
export default Updates;