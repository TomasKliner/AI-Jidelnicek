import {NextRequest, NextResponse} from "next/server";
import {OpenAI} from "openai";

export async function POST(req: NextRequest) {
    const body = await req.json()
    if (!body?.prompt || body.prompt !== 'string' || body.prompt.length < 1)
    {
        return new Response('Bad Request', {status: 400})
    }


    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })

    try {
        let result = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: 'user', content: body?.prompt}],
        })
        return new Response(JSON.stringify(result), {status: 200})
    } catch (e) {
        console.log(e)
        return new Response('Internal Server Error', {status: 500})
    }
}