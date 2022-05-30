import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import {Routes,Route,Navigate} from 'react-router-dom'
import { Form, Button ,Container,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Signup =()=>{

    const navigate=useNavigate()
    const [msgEmailForm, setmsgEmailForm] = useState('')
	const [msgPwdForm, setmsgPwdForm] = useState('')
	const [msgPwdConfirm, setmsgPwdConfirm] = useState('')
	const [submitOk, setsubmitOk] = useState(false)
	const [emailOk, setemailOk] = useState(false)
	const [passwordOk, setpasswordOk] = useState(false)
	const [pwdConfirmOk, setpwdConfirmOk] = useState(false)


    const [formData, setFormData] = useState({
        nom: '', // required
        prenom: '', // required
        email: '', // optional
        Date:'',
        password:'',
    })


    //checkMail 
	const checkEmail=e=>{
		const expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
		const email = e.target.value
		if(expressionReguliere.test(email)) {
		  setmsgEmailForm(null) 
		  setemailOk(true)
		} else {
		  setmsgEmailForm("Votre email doit être au format xxxxxx@xxxx.xxx")
		  setemailOk(false)
		}
		handleChange (e)
	}
    
    const checkPassword = e => {
		const password = e.target.value 
		if (validator.isStrongPassword(password, {
		  minLength: 8, minLowerCase: 1, minUpperCase: 1,
		  minnumbers: 1, minSymbols: 1
		})) {
		  setmsgPwdForm(null)
		  setpasswordOk(true)
		} else {
		  setmsgPwdForm('Votre mot de passe doit avoir au moins 8 caractères, une majuscule, une minuscule et un symbole')
		  setpasswordOk(false)
		}
		handleChange (e)
	  }

      


      //   checkPassewordConfirm
	const checkConfirmPwd = e => {
		const confimPwd = e.target.value
		if ((formData.password !== null) && (formData.password !== confimPwd)) {
		  setmsgPwdConfirm('Le mot de passe ne correspond pas')
		  setpwdConfirmOk(false)
		} else {
		  setmsgPwdConfirm(null)
		  setpwdConfirmOk(true)
		}
	  }


      const signUpErrorMsg = infosLogin => {
		console.log(infosLogin);
		if (infosLogin === 'Email already exists') {
		  setemailOk(false)
		  setmsgEmailForm('Cet email est déja utilisée, veuillez la changer')
		} 
	  }

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordOk && emailOk && pwdConfirmOk) {
            fetch('http://localhost:3000/users', {
                  method: 'POST',
                  headers: {'Content-Type' : 'application/json'},
                  body: JSON.stringify(formData)
              })
              .then(res => res.json())
              .then(data => signUpErrorMsg(data))
            setsubmitOk(true)
          }
          console.log(submitOk);
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


                         { msgEmailForm && <div className="alert alert-warning" role="alert"> {msgEmailForm}</div> }
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Control type="email"  placeholder="name@example.com"
                            value={formData.email} name='email' 
                            // onChange={e => handleChange(e)}
                            onChange={checkEmail}
                             />
                           
                        </Form.Group>
                           
                        
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Control type="date" 
                            value={formData.Date} name='Date' 
                            // onChange={e => handleChange(e)}
                            onChange={handleChange} 
                            requidre
                             />
                           
                        </Form.Group>

                        { msgPwdForm && <div className="alert alert-warning" role="alert"> {msgPwdForm}</div> }
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password"
                              value={formData.password} name='password' 
                            //   onChange={e => handleChange(e)} 
                            onChange={checkPassword}
                            required
                            />
                        </Form.Group>
                        { msgPwdConfirm && <div className="alert alert-warning" role="alert"> {msgPwdConfirm}</div> }
                        <Form.Group className="mb-3" controlId="formBasicConfirPassword">
                            <Form.Control type="password" placeholder="Confirm Password"
                              value={formData.Confirmpassword} name='confirmpassword' 
                            //   onChange={e => handleChange(e)} 
                            onChange={checkConfirmPwd}
                            />
                        </Form.Group>
                        {submitOk && navigate("/login")}
                        <Button variant="success btn-primary btn-block" type="submit">Submit</Button>
                            
                     
                    </Form>
                    </Col>
                </Row>
            </Container>

       </>
    );
}
export default Signup