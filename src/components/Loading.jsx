import { Spinner } from "@/components/ui/spinner"

const Loading = ({message}) => {
    return ( 
        <div className="rounded-3xl fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
            <Spinner className="w-12 h-12"/>
            <p className="">{message}</p>
        </div>
     );
}
 
export default Loading;