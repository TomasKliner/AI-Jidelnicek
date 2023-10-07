'use client'
import Image from 'next/image'
import {useState} from 'react'

export default function Home() {
    type Preferences = [
        {
            title: string,
            contains: string,
        }
    ]

    const [preferences, setPreferences] = useState<Preferences>();

    function handlePreferenceTitleChange(e: any, id: number) {
        setPreferences(last => {
            return last.map((preference: any, index: number) => {
                if (index === id) {
                    return {...preference, title: e.target.value}
                } else {
                    return preference
                }
            })
        })
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {preferences && preferences.map((preference, id) => (
                <div>
                    <input value={preference.title} onChange={(e) => handlePreferenceTitleChange(e.target.value, id)}>
                    </input>
                    <input value={preference.contains}
                           onChange={(e) => handlePreferenceTitleChange(e.target.value, id)}>
                    </input>
                    <button onClick={}>remove</button>
                </div>
            ))}
            <button onClick={}>add</button>

        </main>
    )
}
