import {Icon} from "@iconify/react";
export default function Section({title, children}) {
    return (
        <section id={title} className={"rounded-box bg-slate-200 p-2"}>
            <div className={"flex flex-col md:flex-row gap-2 justify-between"}>
                {title && <h2 className={"text-2xl font-bold text-left p-2"}>{title}</h2>}
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