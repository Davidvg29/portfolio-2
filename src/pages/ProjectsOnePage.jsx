import MainLayout from "@/Layouts/MainLayout"
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
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProjectOnePage = ()=>{
    return ( 
        <MainLayout>
            <div className="flex justify-center">
                <Card className="w-3xl pt-0 rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                    <CardContent className="p-0 rounded-3xl">
                        <img className="w-full h-100 p-5  object-contain rounded-t-3xl" src="https://res.cloudinary.com/dxxte9caz/image/upload/v1761350923/Macbook-Air-aguasdeltucuman.com.ar_rt2anc.png" alt="" />
                    </CardContent>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">TaskFlow Pro</CardTitle>
                        <p>AI-powered task management platform for teams</p>
                        <CardDescription>Project Overview
TaskFlow Pro is a comprehensive task management platform that leverages AI to help teams prioritize work and optimize productivity. Built with modern web technologies, it features real-time collaboration, intelligent task suggestions, and advanced analytics.

Key Features
AI-powered task prioritization
Real-time team collaboration
Advanced project analytics
Custom workflow automation
Mobile-responsive design
Technologies Used
This project was built using React, Node.js, PostgreSQL, and OpenAI's API for intelligent task suggestions. The platform handles over 10,000 active users and processes millions of tasks monthly.</CardDescription>
                    </CardHeader>
                    <CardFooter className="mb-5">
                    <Button>
                        <Link to={""} className="flex items-center text-sm font-semibold">View Project <ArrowUpRight size={16} className="ml-1"/></Link>
                    </Button>
                    </CardFooter>
                    </Card>
            </div>
        </MainLayout>
    )
}
export default ProjectOnePage