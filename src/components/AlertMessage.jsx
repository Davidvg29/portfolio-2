import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { alertMessage } from "@/store/action";
import { CircleAlert, CircleCheckBig } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";

const AlertMessage = () => {

    const dispatch = useDispatch();
    const alertData = useSelector((state) => state.alertMessage);
    const {active, status, message} = alertData;

    if(active){
        setTimeout(() => {
            dispatch(alertMessage(false, false, "validation"))
        }, 5000);
    }else{
        return null;
    }

    return ( 
        <div className="grid w-full h-auto max-w-xl items-start fixed bottom-10 inset-x-0 mx-auto pl-5 pr-5 z-1000">
            {status ? (
                <Alert className='text-green-900 bg-green-100 border border-green-300 h-18 flex items-center'>
                    <CircleCheckBig  className="h-8! w-8!"/>
                    <AlertDescription className="text-green-900">{message}</AlertDescription>
                </Alert>
            ) : (
                <Alert className='text-red-900 bg-red-100 border border-red-300 h-18 flex items-center'>
                    <CircleAlert  className="h-8! w-8!"/>
                    <AlertDescription className="text-red-900">{message}</AlertDescription>
                </Alert>
            )}
        </div>
     );
}
 
export default AlertMessage;