'use client'
import Image from 'next/image'
import {useState} from 'react'
import {Icon} from '@iconify/react';

export default function Home() {
    return (
        <>
            <header className={"flex justify-evenly p-8 mt-4"}>

                <div>
                    <h1 className={"font-black text-4xl"}>Tired trying to figure out, what to eat ?</h1>
                    <p className={"text-2xl"}>Let AI find your perfect food choice.</p>
                    <div className={"flex flex-col w-64 gap-2 p-4"}>
                        <div className={"w-full p-2 bg-indigo-500"}>use Facebook</div>
                        <div className={"w-full p-2 bg-indigo-500"}>use Google</div>
                    </div>
                </div>
                <div className={"w-[35rem] h-[25rem] bg-slate-800 text-center text-white"}>
                    Image placeholder
                </div>
            </header>
            <section>
                <h1 className={"text-center text-4xl p-4 font-bold"}>How does it work ?</h1>

            </section>
        </>
    )
}
