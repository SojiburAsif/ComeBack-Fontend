import React from 'react'
import Link from 'next/link'

export default function notfound() {
  return (
    <div>not-found 

        <h1>Page Not Found</h1>

        <Link href="/">Go back to home</Link>
    </div>
  )
}
