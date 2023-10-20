'use client'

import {Icon} from "@iconify/react";
import {useState} from "react";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {TextField} from "@mui/material";
import Section from "../../components/Section";

export default function Plan() {
    const today = new Date()
    const [chosenDate, setChosenDate] = useState<Date>(today)
    const daysSections = [
        "Breakfast",
        "Morning Snack",
        "Lunch",
        "Afternoon Snack",
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