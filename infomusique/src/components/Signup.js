import {useState} from 'react'

import {Routes,Route,Navigate} from 'react-router-dom';
import { Form, Button ,Container,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Signup =()=>{
    const [formData, setFormData] = useState({
        nom: '', // required
        prenom: '', // required
        email: '', // optional
        Date:'',
        mdp:'',
    })

    function handleSubmit(e) {
        e.preventDefault()
        const uti=formData.nom
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        alert(`${uti},a ete enregistrer avec success`)
        console.log();
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }


   

    return(
    

       <>

            <Container>
                <h1 className='shadow-sm text-success mt-5 text-center rounded'>SignUp</h1>
                <Row>
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm ronded-lg">
                    <Form onSubmit={e => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicPrenom">
                      
                            <Form.Control type="text" placeholder="Prenom"
                            value={formData.prenom} name='prenom' onChange={e => handleChange(e)} />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNom">

                            <Form.Control type="text" placeholder="Nom"
                            value={formData.nom} name='nom' onChange={e => handleChange(e)} />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control type="text" placeholder="Nom d'utilisateur" 
                            value={formData.username} name='username' onChange={e => handleChange(e)}/>
                         </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Control type="email"  placeholder="Email"
                            value={formData.email} name='email' onChange={e => handleChange(e)} />
                           
                        </Form.Group>
                           
                        
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Control type="date" 
                            value={formData.date} name='date' onChange={e => handleChange(e)} />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password"
                              value={formData.password} name='password' onChange={e => handleChange(e)} 
                            />
                        </Form.Group>
                        
                        <Button variant="success btn-primary btn-block" type="submit" >
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>

       </>
    );
}
export default Signup