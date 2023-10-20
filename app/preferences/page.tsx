'use client'
import Image from 'next/image'
import {useState} from 'react'
import {Icon} from '@iconify/react';
import Section from "@/components/Section";
import {Search} from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function Preferences() {
    const daysSections = [
        "Breakfast",
        "Morning Snack",
        "Lunch",
        "Afternoon Snack",
        "Dinner",
    ] //TODO : user editable

    type Preferences = [
        {
            title: string,
            description: string,
            contains: string,
        }
    ]

    const [preferences, setPreferences] = useState<Preferences>();
    const [selectedDaySection, setSelectedDaySection] = useState<string>(daysSections[0])

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
            <div className={"flex items-center justify-center p-4 mt-8"}>
                <h1 className={"text-4xl font-black text-center"}>My preferences</h1>
                <div className={"btn btn-ghost flex justify-centter items-center tooltip"}
                data-tip={"Edit Meal Sections"}>
                    <Icon icon={"fa-solid:edit"} className={"w-6 h-6"}/>
                </div>
            </div>

            <section className={""}>
                <div className={"flex flex-col md:flex-row gap-2 justify-center"}>
                    {daysSections.map((section, index) => {
                        return (
                            <button
                                className={(selectedDaySection === section ? "btn-primary " : " btn-ghost") + " btn"}
                                onClick={() => setSelectedDaySection(section)}
                            >{section}</button>
                        )
                    })}
                </div>
            </section>
            <section id={"search"} className={"w-1/2 mx-auto p-2"}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={preferences ? preferences.map((option) => option.title) : []}
                    renderInput={(params) => <TextField {...params} label="Search your preferences:"/>}
                />
            </section>
            <section className={"flex flex-col gap-2 p-2 "}>
                {preferences?.map((preference, index) => {
                    return (
                        <Section title={selectedDaySection}/>

                    )
                })}
            </section>
            <button onClick={() => {
                setPreferences(last => {
                    if (last) {
                        return [...last, {title: '', contains: '', description: ''}]
                    } else {
                        return [{title: '', contains: '', description: ''}]
                    }
                })
            }}>
                Add Preference
            </button>
        </div>
    )
}
