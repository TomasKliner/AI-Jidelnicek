'use client'
import {Icon} from "@iconify/react";
import Link from "next/link";


const pages = [
    {
        title: 'Homepage',
        href: '/',
    },
    {
        title: 'Meal',
        href: '/meal',
    },
    {
        title: 'Preferences',
        href: '/preferences',
    },
    {
        title: 'Plan',
        href: '/plan',
    }
]
export default function Navbar() {
    const user = false;
    return (
        <div className="navbar bg-green-100 shadow-lg rounded-b-box">
            <div className="navbar-start md:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h7"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 shadow">
                        {pages.map((page, index) => <li key={page.href}><Link href={page.href}>{page.title}</Link></li>)}
                    </ul>
                </div>
            </div>
            <div className="lg:navbar-start w-fit">
                <Link href={"/"} className="btn btn-ghost normal-case text-xl">AI Meal Plan</Link>
            </div>
            <div className={"navbar-center hidden lg:flex justify-center text-center"}>
                {pages.map((page, index) => {
                    return (
                        <Link key={page.href} href={page.href} className={"btn btn-ghost"}>{page.title}</Link>
                    )
                })}
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">

                        {!user &&
                            <Link href={"/signIn"}>
                                <Icon icon={"ph:user-circle-fill"} className={"h-8 w-8"}/>
                            </Link>
                        }
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>)
}
