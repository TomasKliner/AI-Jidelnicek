import {NextRequest, NextResponse} from "next/server";


export default async function Meal(request: NextRequest, response: NextResponse) {
    if (request.method === "POST") {
        fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "prompt": "",
                    "system_prompt": "",
                    "temperature": 0.9
                })
            })
            .then(res => res.json())
            .then(data => {
                    console.log(data)
                    return NextResponse.next()
                }
            )
            .catch(err => console.log(err))
    } else {
        return NextResponse.next()
    }

}