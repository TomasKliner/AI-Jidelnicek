import {NextRequest, NextResponse} from "next/server";



export default function Meal(request: NextRequest, response: NextResponse){
    if (request.method === "POST") {

    }
    else {
        return NextResponse.next()
    }

}