import {Container,Row,Col,Input,Button} from 'reactstrap';

const Contact=()=>{
    return(
<>

<Container >

    <Row className='py-4'>
    <Col md='6'>
   <Row > <Col md='6' className='py-2'>
        <Input  type='text' className='p-3 text-start' id='input'  placeholder='First name' />

    </Col>


    <Col md='6' className='py-2'> <Input className='p-3 text-start' type='text' id='input'  placeholder='First name' />
    </Col></Row>
    <Row><Col md='12'><Input className='p-3'  type='email' placeholder='Email' /></Col></Row>
    <Row><Col md='12'className='py-2'>


<textarea className='border' name="comments" cols="75" rows="10" placeholder='   Write a message'></textarea></Col></Row>
<Button   className='btn btn-warning ' >Send Message</Button>
    </Col>
   
    <Col md='6' className='dsd p-5'>
       <h2>Contact Info</h2><br></br>
       <p>Adress: Andijan City New Bazaar  </p><br></br>
       <p>Phone:+998990009900</p><br></br>
       <p>Email:Abdulaziz@gmail.com</p><br></br>
    </Col>
    </Row>
</Container>
    </>
)
}


export default Contact;