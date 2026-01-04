import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { alertMessage } from "@/store/action";
import { CircleAlert, CircleCheckBig, X } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { useEffect } from "react";

const AlertMessage = () => {

    const dispatch = useDispatch();
    const {active, status, message} = useSelector((state) => state.alertMessage);

    useEffect(() => {
    if (!active) return

    const timer = setTimeout(() => {
      closeAlert()
    }, 5000)

    return () => clearTimeout(timer)
  }, [active])

    const closeAlert = () => {
        dispatch(alertMessage(false, false, ""))
    }

    if (!active) return null

    return ( 
        <div className=" grid w-full h-auto max-w-xl items-start fixed bottom-10 inset-x-0 mx-auto pl-5 pr-5 z-1000">
            {status ? (
                <Alert className='text-green-900 bg-green-100 border border-green-300 h-18 flex items-center'>
                    <CircleCheckBig  className="h-8! w-8!"/>
                    <AlertDescription className="text-green-900">{message}</AlertDescription>
                    <Button variant="ghost" size="icon" onClick={closeAlert} className="absolute right-1 top-1 text-green-900 hover:bg-green-300 cursor-pointer">
                        <X className="h-5! w-5!" />
                    </Button>
                </Alert>
            ) : (
                <Alert className='text-red-900 bg-red-100 border border-red-300 h-18 flex items-center'>
                    <CircleAlert  className="h-8! w-8!"/>
                    <AlertDescription className="text-red-900">{message}</AlertDescription>
                    <Button variant="ghost" size="icon" onClick={closeAlert} className="absolute right-1 top-1 text-red-900 hover:bg-red-300 cursor-pointer">
                        <X className="h-5! w-5!" />
                    </Button>
                </Alert>
            )}
        </div>
     );
}
 
export default AlertMessage;