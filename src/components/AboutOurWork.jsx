import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import { CircleDot, Rocket, Layers  } from 'lucide-react';

const AboutOurWork = ()=>{
    return(
        <div className=" mt-5 p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Unleash Your <br /> Business</h2>
            <h3 className="pr-5 mt-10">We build custom platforms and AI-powered tools to simplify your operations and help you scale. <br /> Our process makes it easy to bring your ideas to life.</h3>
            <div className=" mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 place-items-center">
                <Card className="w-full h-full rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent>
                    <div className="bg-violet-400 w-12 h-12 rounded-full flex items-center justify-center">
                        <CircleDot className="text-white" size={26}/>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold ">Discovery</CardTitle>
                    <CardDescription>
                        Share your project details and help us see your vision.
                    </CardDescription>
                </CardHeader>
                </Card>

                <Card className="w-full h-full rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent>
                    <div className="bg-violet-400 w-12 h-12 rounded-full flex items-center justify-center">
                        <Layers className="text-white" size={26}/>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold ">Build</CardTitle>
                    <CardDescription>
                        We craft scalable, reliable solutions using the best tools for the job.
                    </CardDescription>
                </CardHeader>
                </Card>

                <Card className="w-full h-full rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent>
                    <div className="bg-violet-400 w-12 h-12 rounded-full flex items-center justify-center">
                        <Rocket className="text-white" size={26}/>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold ">Launch + Iterate</CardTitle>
                    <CardDescription>
                        Seamlessly integrate, optimize, and expand as your business evolves.
                    </CardDescription>
                </CardHeader>
                </Card>
            </div>
        </div>
    )
}
export default AboutOurWork