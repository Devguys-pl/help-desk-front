import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';


export default function Login() {
  return (
      <>
        <h1> Hello devguys this is /login</h1>
        <div>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </div>
            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                </MDBCardBody>
        </MDBCard>
      </>
  )
}
