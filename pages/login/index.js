import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import styles from '/styles/Home.module.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Login(props) {
  return (
      <>
            <MDBContainer>
                <div className={styles.container}>
                    <MDBRow>
                        <MDBCol size='md' className='col-example'>
                            <img
                            src='https://dz2cdn1.dzone.com/storage/temp/12334613-971.jpg'
                            className='picture'
                            alt='...'
                            style={{ maxWidth: '67vh' }}
                            />
                        </MDBCol>
                        <MDBCol size='md' className='col-example'>
                                LOGOWANKO
                        </MDBCol>
                    </MDBRow>
                    Go to {' '}
                    <Link href="/">
                        <a className='text-danger'> Main page</a>
                    </Link>
                </div>
            </MDBContainer>
      </>
  )
}
