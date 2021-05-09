import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1> Hello devguys this is main page </h1>
      <div> 
          Go to {' '}
          <Link href="/login">
            <a> Login page</a>
          </Link>
      </div>
    </>
  )
}
