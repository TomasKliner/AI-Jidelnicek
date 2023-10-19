'use client'
import {TextareaAutosize, TextField, Button} from "@mui/material";
import {useEffect, useState} from "react";


export default function Meal() {
    const [userText, setUserText] = useState('')
    const [systemText, setSystemText] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setSystemText("loading...")
        fetch('/api/meal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: userText
            })
        }).then(response => response.json())
            .then(data => {
                const response = data?.choices[0]?.message.content
                setSystemText(response)
                console.log(response)
            })
            .catch(error => console.log('error: ', error))
    }

    return (
        <div>
            <h1 className={"text-center text-4xl p-4 font-bold"}>Meal</h1>
            <div className={"flex flex-col gap-4 justify-center items-center w-full p-2 md:w-1/2 mx-auto"}>
                <TextField id="outlined-basic" variant="outlined" label={"What kind of food would you like ?"}
                           value={userText} onChange={(e) => setUserText(e.target.value)}
                           className={"w-full"}/>
                <TextField id="label" variant="outlined" label={"system message:"}
                           value={systemText} onChange={(e) => setSystemText(e.target.value)}
                           className={"w-full"}/>
                <Button type={"submit"} variant={"outlined"} className={"w-full"}
                        onClick={(e) => handleSubmit(e)}>Submit</Button>
            </div>
        </div>
    )
}