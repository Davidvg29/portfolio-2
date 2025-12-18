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

const ContactSection = ()=>{
    return(
        <div className="flex justify-center p-8">
            <Card className="w-full max-w-6xl shadow-lg">
                <div className="flex flex-col md:flex-row justify-center p-8 sm:pl-14 sm:pr-14">
                    <div className="w-full md:w-1/2">
                        <CardHeader className="text-4xl md:text-5xl font-bold p-0">Your Next Big Idea Starts Here</CardHeader>
                        <CardDescription className="mb-8">Have an idea or a problem that needs solving? <br /> Let's chat. We'll help you explore the best approach, map out a plan, and see if we're the right fit.</CardDescription>
                        <CardContent className="p-0 flex flex-col md:flex-row gap-4 md:items-center">
                            <Link to="/" className="pr-2 flex items-center"><Button>Schedule Discovery Call</Button></Link>
                        </CardContent>
                    </div>
                    <div className=" w-1/2 flex justify-center items-center m-0">
                        <img className="w-60 h-60 max-md:hidden " src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_BDOeBmoJgIDcVbz6Kf1h2fqpgvr5/uMrYbVYunzD2-lMHwTqpjV/public/purple-circle-wave-static.png" alt="" />
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default ContactSection