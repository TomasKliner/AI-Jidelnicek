'use client'
import Image from 'next/image'
import {useState} from 'react'
import { Icon } from '@iconify/react';
export default function Preferences() {
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
                    <div className={"flex items-center justify-center gap-1"} key={index}>
                        <input className={"input input-primary"} placeholder={"food name"} type="text" value={preference.title}
                               onChange={(e) => handlePreferenceTitleChange(e, index)}/>
                        <input className={"input input-primary"} placeholder={"suroviny"} type="text" value={preference.contains}/>
                        <div className={"cursor-pointer btn btn-error"} onClick={()=>{
                            setPreferences(last => {
                                return last.filter((preference: any, i: number) => {
                                    return i !== index
                                })
                            })
                        }}><Icon icon={"ph:x-bold"}/></div>
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
