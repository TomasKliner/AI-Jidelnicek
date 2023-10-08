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
        <div>
            <h1>Preferences</h1>
            {preferences?.map((preference, index) => {
                return (
                    <div key={index}>
                        <input placeholder={"food name"} type="text" value={preference.title}
                               onChange={(e) => handlePreferenceTitleChange(e, index)}/>
                        <input placeholder={"suroviny"} type="text" value={preference.contains}/>
                    </div>
                )
            })}
            <button onClick={() => {
                setPreferences(last => {
                    if (last) {
                        return [...last, {title: '', contains: ''}]
                    } else {
                        return [{title: '', contains: ''}]
                    }
                })
            }}>
                Add Preference
            </button>
        </div>
    )
}
