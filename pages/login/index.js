import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Login() {
  return (
      <>
        <h1> Hello devguys this is /login</h1>
        <div>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </div>
      </>
  )
}
