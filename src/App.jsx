import './style.css'
import React, { useState, useEffect } from 'react'

const apiUrl = 'https://dog.ceo/api/breeds/image/random'

export default function App() {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setImageUrl(data.message))
  }, [])

  return (
    <main>
      <h1>Go fetch!</h1>
      <img width={300} src={imageUrl} />
    </main>
  )
}
