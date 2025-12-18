import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

const HeroSection = ()=>{
    return(
        <div className="flex justify-center p-8">
            <Card className="w-full max-w-6xl">
                <div className="flex flex-col md:flex-row justify-center p-8 sm:pl-14 sm:pr-14">
                    <div className="w-full md:w-1/2">
                        <CardHeader className="p-0 text-4xl md:text-6xl font-bold mb-8">Your AI-first <br /> Development <br /> Partner</CardHeader>
                        <CardDescription className="mb-8">We build high-quality, scalable platforms—client portals, <br /> marketplaces, AI automations, and SaaS—using the best tools <br /> for the job, no shortcuts.</CardDescription>
                        <CardContent className="p-0 flex flex-col md:flex-row gap-4 md:items-center">
                            <Link to="/" className="pr-2 flex items-center"><Button>Schedule Discovery Call</Button></Link>
                            <Link to="/" className="pl-2 text-sm font-semibold">Learn more</Link>
                        </CardContent>
                    </div>
                    <div className=" w-1/2 flex justify-center items-center ">
                        <img className="w-82 h-82 max-md:hidden" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_BDOeBmoJgIDcVbz6Kf1h2fqpgvr5/uMrYbVYunzD2-lMHwTqpjV/public/purple-circle-wave-static.png" alt="" />
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default HeroSection