import { Separator } from "./ui/separator"

const Footer=()=>{
    const year = new Date().getFullYear()

    return(
        <div className="flex flex-col justify-center items-center text-center">
            <Separator/>
            <p className="text-2xl font-bold tracking-tight text-balance m-7">AUTOMATIC</p>
            <p className="text-muted-foreground text-sm font-semibold">Your AI-first development partner building high-quality, scalable platforms.</p>
            <p className="m-7 text-muted-foreground text-sm font-medium">© {year} Automatic. All rights reserved.</p>
        </div>
    )
}
export default Footer