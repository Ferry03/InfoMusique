import {useState} from 'react'
import { Form, Button ,Container,Row,Col} from 'react-bootstrap'
import Navigation from './Navigation';

const Login =()=>{

    const [formData, setFormData] = useState({
        email: '', // required
        password: '' // required
    })
    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data.user))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    return(
        // <div className="main">
        //     <div className="form">

        //     </div>
        // </div>


       <>

            <Container>
                <h1 className='shadow-sm text-success mt-5 text-center rounded'>Login</h1>
                <Row>
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm ronded-lg">
                    <Form onSubmit={e => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email"
                            value={formData.email} name='email' onChange={e => handleChange(e)}  />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" 
                            value={formData.password} name='password' onChange={e => handleChange(e)} />
                        </Form.Group>
                        
                        <Button variant="success btn-primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>

       </>
    );
}
export default Login