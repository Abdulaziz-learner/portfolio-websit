import { Col, Container, Row } from "reactstrap";


const Services = () => {
    return(
        <>
            <Container>
                <Row className='py-5 my-5'>
                    <Col className='px-5' md='4'>
                        <p className='services_icon'><i className='fas fa-briefcase'></i></p>
                        <p className='services_p_title'>Interface Design</p>
                        <p className='services_p'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius aliquid voluptatem quos nisi esse, ipsam numquam 
                        </p>
                    </Col>
                    <Col className='px-5' md='4'>
                        <p className='services_icon'><i className='fas fa-couch'></i></p>
                        <p className='services_p_title'>Product Design</p>
                        <p className='services_p'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius aliquid voluptatem quos nisi esse, ipsam numquam 
                        </p>
                    </Col>
                    <Col className='px-5' md='4'>
                        <p className='services_icon'><i className='fas fa-lightbulb'></i></p>
                        <p className='services_p_title'>Quality Results</p>
                        <p className='services_p'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius aliquid voluptatem quos nisi esse, ipsam numquam 
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Services;