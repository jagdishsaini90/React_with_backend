import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { useHistory } from 'react-router-dom'

const Signup = ({ signUp, errMess }) => {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleSignup = (e) => {
        e.preventDefault();
        signUp({ username, email, password });
        history.push('/home');
    }

    if(errMess) {
      setError(errMess)
    }

    return (
      <>
        <div className="container mb-4">
            {error && <Alert color="danger">{error}</Alert>}
            <h1>Sign Up</h1>
            <Form onSubmit={handleSignup}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                    type="name"
                    name="name"
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="name...."
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@example.com"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password..."
                    />
                </FormGroup>
                <Button type="submit" className="btn mt-4" color="primary"z>Sign Up</Button>
            </Form>
        </div>
      </>   
    )
}

export default Signup;
