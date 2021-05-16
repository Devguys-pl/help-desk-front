import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { Button, Container, Card, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export default function Login(props) {
  return (
      <>
        <Container className="themed-container" fluid="md">
            <div className="loginDiv">
                <Row>
                    <Col className="loginContainer" sm="12" md={{ size: 6, offset: 1 }}>
                        <div className="loginImg">
                            
                        </div>
                        <div className="loginForm">
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Hello</Label>
                                </FormGroup>
                                <FormGroup className="loginSpace">
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Your e-mail" />
                                </FormGroup>
                                <FormGroup className="loginSpace">
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Your password" />
                                </FormGroup>
                                <Button className="loginBtn">Submit</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>   
        </Container>
      
      </>
  )
}
