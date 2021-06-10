import {Container,Row,Col,Card,CardBody,CardText} from 'reactstrap';


import Imgw from '../media/mash/Roni.jpg';
import Imge from '../media/mash/Xabib.jpg';
import Imgr from '../media/mash/Musk.jpg';

import Imgy from '../media/mash/Jobs.jpg';

const Vizitka =()=>{

    return(
<>
<Container className='p-2'>
    <Row className='p-2'>
        <h3 className='text-center py-3'>Testimonials</h3>
       
        <Col md='3' className='Cristiano border shadow px-2'>
<Row className='px-2 b'>
    <Col md='6'>
        <h2 className='defaultColor'>Cristiano Ronaldo</h2>
        <p>football Player</p>
    </Col>
    <Col md='6'>
    <Card className='py-2'>
  
<img className='bor' width='100%' src={Imgw}  alt='n'/>
     
  
   

</Card>
    </Col>
</Row>
<CardText>Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaɫdu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time</CardText>       

</Col>
<Col md='3' className='Xabib border shadow '>
<Row className='px-2 b'>
    <Col md='6'><h2 className='defaultColor'>Khabib Nurmagomedov</h2><p>MMA Fighter</p></Col>
    <Col md='6'><Card  className='py-2'>
   
<img className='bor' width='100%' src={Imge}  alt='n'/>
     
   
   

</Card></Col>
</Row>
<CardText>Khabib Abdulmanapovich Nurmagomedov[a][6] (born 20 September 1988) is a Russian mixed martial arts (MMA) promoter and retired professional mixed martial artist He notably competed in the lightweight division of the Ultimate Fighting Championship (UFC), where he was the longest-reigning UFC Lightweight Champion</CardText>         

</Col>
<Col md='3' className='Musk border shadow px-2'>
<Row className='px-2 b'>
    <Col md='6'>
<h2 className='defaultColor'>ILon Musk</h2 > <p>Owner of company Tesla</p>
    </Col>
    <Col md='6'>
    <Card  className='py-2'>
 
<img className='bor' width='100%' src={Imgr}  alt='n'/>
     


</Card>

        </Col>
</Row>
<CardText>Elon Reeve Musk FRS (/ˈiːlɒn/ EE-lon; born June 28, 1971) is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early stage investor,[note 1] CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company;</CardText>
            

</Col>

<Col md='3' className='Gates border shadow px-2'>

            

<Row className='px-2 b'>
<Col md='6'><h2 className='defaultColor'>Bill Gates</h2><p className='text-dark'>Software Engineer</p></Col>
 <Col md='6'>
   <Card  className='py-2'>   
<img className='bor' width='100%' src={Imgy}  alt='n'/>
  
</Card>
 </Col>
</Row>

 <CardText>William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is the co-founder of Microsoft Corporation.[4][5] During his career at Microsoft</CardText>


</Col>
    </Row>
</Container>

</>


    )

} 
export default Vizitka ;