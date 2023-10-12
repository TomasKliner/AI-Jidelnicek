import {TextField} from "@mui/material";


export default function Meal() {
    return (
        <div>
            <h1 className={"text-center text-4xl p-2 font-bold"}>Meal</h1>
            <div className={"flex justify-center items-center w-full"}>
                    <TextField id="outlined-basic" label="" variant="outlined" label={"What kind of food would you like ?"} className={"w-1/2"}/>
            </div>
        </div>
    )
}