'use client'

import {Icon} from "@iconify/react";
import {useState} from "react";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {TextField} from "@mui/material";

export default function Plan() {
    const today = new Date()
    const [chosenDate, setChosenDate] = useState<Date>(today)
    const daysSections = [
        "Breakfast",
        "Snack",
        "Lunch",
        "Snack",
        "Dinner",
    ] //TODO : user editable

    return (
        <div>
            <h1 className={"text-4xl font-black text-center p-4 mt-8"}>Plan</h1>
            <DateSelector date={chosenDate} setDate={setChosenDate}/>
            <section className={"flex flex-col  gap-2 p-4"}>
                {daysSections.map((section, index) => {
                    return <Section key={index} title={section}/>
                })}
            </section>
        </div>
    )
}


function Section({title, children}) {
    return (
        <section id={"title"} className={"rounded-box bg-slate-200 p-2"}>
            <div className={"flex flex-col md:flex-row gap-2 justify-between"}>
                <h2 className={"text-2xl font-bold text-left p-2"}>{title}</h2>
                <div className={"flex gap-2 justify-end"}>
                    <div className={"btn btn-sm md:btn-md btn-ghost tooltip tooltip-primary flex justify-center items-center"}
                         data-tip={"Generate food idea"}>
                        <Icon icon={"openmoji:light-bulb"} className={"w-6 h-6"}/>
                    </div>
                    <div className={"btn btn-sm md:btn-md btn-ghost tooltip tooltip-primary flex justify-center items-center"}
                         data-tip={"Choose from preferences"}>
                        <Icon icon={"game-icons:card-random"} className={"w-6 h-6"}/>
                    </div>
                    <div className={"btn btn-sm md:btn-md btn-ghost tooltip tooltip-primary flex justify-center items-center"}
                         data-tip={"Random from preferences"}>
                        <Icon icon={"game-icons:perspective-dice-six-faces-random"} className={"w-6 h-6"}/>
                    </div>
                    <div className={"btn btn-sm md:btn-md btn-ghost tooltip tooltip-primary flex justify-center items-center"}
                         data-tip={"Create instructions"}>
                        <Icon icon={"clarity:list-solid"} className={"w-6 h-6"}/>
                    </div>
                    <div className={"btn btn-sm md:btn-md btn-ghost tooltip tooltip-primary flex justify-center items-center"}
                         data-tip={"what will i need?"}>
                        <Icon icon={"ep:food"} className={"w-6 h-6"}/>
                    </div>

                </div>
            </div>

            <div className={"w-full flex flex-col gap-2"}>
                {/*<TextField id="label" variant="outlined" label={"name:"}*/}
                {/*           className={"w-full bg-white"}/>*/}
                <input className={"input input-bordered input-primary w-full"}
                          placeholder={"food name"}/>
                <textarea className={"textarea textarea-bordered textarea-secondary w-full"}
                            placeholder={"food description"}/>
            </div>
        </section>
    )
}


function DateSelector({date, setDate}) {
    const today = new Date()
    const [openCalendar, setOpenCalendar] = useState<Boolean>(false)

    function displayChoosenDateFormatInText(date: Date): any {
        if (date === today) {
            return "Today"
        } else if (date === today.setDate(today.getDate() + 1)) {
            return "Tomorrow"
        } else if (date === today.setDate(today.getDate() - 1)) {
            return "Yesterday"
        } else {
            return date.toLocaleDateString()
        }
    }

    function addDaysToChoosenDate(days) {
        setDate(last => {
            return new Date(last.setDate(last.getDate() + days))
        })
    }

    return (
        <>
            <section className={"flex justify-center items-center font-bold gap-2"}>
                <span className={"btn btn-ghost"} onClick={() => addDaysToChoosenDate(-1)}> <Icon
                    icon={"ic:round-arrow-back-ios"}/></span>
                <span className={"btn btn-ghost"}
                      onClick={() => setOpenCalendar(true)}>{displayChoosenDateFormatInText(date)}</span>
                {/*<span className={"btn btn-ghost"}*/}
                {/*      onClick={() => setOpenCalendar(true)}>{chosenDate.getDate()}</span>*/}
                <span className={"btn btn-ghost"} onClick={() => addDaysToChoosenDate(1)}> <Icon
                    icon={"ic:round-arrow-forward-ios"}/></span>
            </section>
            {
                openCalendar &&
                <div className={"fixed bg-lime-200 rounded shadow p-4 top-32 left-1/2 -translate-x-1/2"}>
                    <div className={"flex justify-end"}>
                        <button className={"btn flex items-center gap-2 btn-outline"}
                                onClick={() => setOpenCalendar(false)}>
                            Close
                            <Icon className={"w-6 h-6"} icon={"ic:round-close"}/>
                        </button>
                    </div>
                    <div className={"bg-white bg-opacity-80 backdrop-blur-sm rounded m-2"}>
                        <LocalizationProvider label={"choose day"} dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                date={date}
                                onChange={(newDate) => {
                                    setDate(newDate.toDate())
                                    setOpenCalendar(false)
                                }}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
            }
        </>
    )
}