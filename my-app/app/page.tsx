import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  type Preferences = [
    {
      title: string,
      contains: string,
    }
  ]

  const [preferences, setPreferences] = useState<Preferences>();

  function handlePreferenceTitleChange(e, id){
      setPreferences(last=>{
          return
        })
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {preferences && preferences.map((preference,id) => {
          return (
            <input value={preference.title} onChange={(e)=> handlePreferenceTitleChange(e.target.value, id)}>
            </input>
          )
      })}
       
    </main>
  )
}
