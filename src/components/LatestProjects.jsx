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

import { ArrowUpRight } from 'lucide-react';
import { Link } from "react-router-dom";

const LatestProjects = ()=>{
    return(
        <div className="mt-5  p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Explore Our <br /> Latest Projects</h2>
            <h3 className="pr-5 mt-10">From AI-driven automation to custom marketplaces, our work helps businesses scale smarter. <br />Explore some of the platforms, tools, and solutions we've created for our clients and ourselves.</h3>
            <div className=" mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 place-items-center">
                <Card className="w-full pt-0 rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent className="p-0 rounded-3xl">
                    <img className="w-full h-48 object-cover rounded-t-3xl" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_BDOeBmoJgIDcVbz6Kf1h2fqpgvr5/jn0f6UOr9f8xg10KfPyS65/public/portfolio-images/saas-dashboard-1.jpg" alt="" />
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">TaskFlow Pro</CardTitle>
                    <CardDescription>
                    AI-powered task management platform for teams
                    </CardDescription>
                </CardHeader>
                <CardFooter className="mb-5">
                   <Link to="/" className="flex items-center text-sm font-semibold">View Project <ArrowUpRight size={16} className="ml-1"/></Link>
                </CardFooter>
                </Card>

                <Card className="w-full pt-0 rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent className=" p-0 rounded-3xl">
                    <img className="w-full h-48 object-cover rounded-t-3xl" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_BDOeBmoJgIDcVbz6Kf1h2fqpgvr5/QQVJbQJpP-Bjlq6xAq1yw1/public/portfolio-images/ecommerce-interface-1.jpg" alt="" />
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">TaskFlow Pro</CardTitle>
                    <CardDescription>
                    AI-powered task management platform for teams
                    </CardDescription>
                </CardHeader>
                <CardFooter className="mb-5">
                   <Link to="/" className="flex items-center text-sm font-semibold">View Project <ArrowUpRight size={16} className="ml-1"/></Link>
                </CardFooter>
                </Card>

                <Card className="w-full pt-0 rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent className="p-0 rounded-3xl">
                    <img className="w-full h-48 object-cover rounded-t-3xl" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_BDOeBmoJgIDcVbz6Kf1h2fqpgvr5/VWI5MQ00_q-9xymy9n1TcF/public/portfolio-images/ai-platform-1.jpg" alt="" />
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">TaskFlow Pro</CardTitle>
                    <CardDescription>
                    AI-powered task management platform for teams
                    </CardDescription>
                </CardHeader>
                <CardFooter className="mb-5">
                   <Link to="/" className="flex items-center text-sm font-semibold">View Project <ArrowUpRight size={16} className="ml-1"/></Link>
                </CardFooter>
                </Card>
            </div>
            <div className="flex justify-center mt-10">
                <Link to="/portfolio"><Button className="cursor-pointer">View All Projects</Button></Link>
            </div>
        </div>
    )
}
export default LatestProjects;