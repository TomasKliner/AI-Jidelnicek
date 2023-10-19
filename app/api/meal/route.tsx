import {NextRequest, NextResponse} from "next/server";
import {OpenAI} from "openai";

export async function POST(req: NextRequest) {
    const body = await req.json()
    if (!body?.prompt)
    {
        console.log(body)
        return new Response('Bad Request', {status: 400})
    }


    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })

    try {
        let result = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: 'user', content: body?.prompt}, {role: 'system', content: '1 food, response as only json with foodname and description'}],
        })
        console.log(result)
        return Response.json(result)
    } catch (e) {
        console.log(e)
        return new Response('Internal Server Error', {status: 500})
    }
}