import { useEffect, useState } from "react"

export default function useSlider(count,time){
    
    const [current, setCurrent] = useState(1)

    useEffect(() => {

        const interval = setInterval(()=>{
            if(current < count){
                setCurrent(current + 1)
            }else{
                setCurrent(1)
            }
        },time)

        return () => clearInterval(interval)

    },[current,count,time])
    
    function chooseHandler(num){
        setCurrent(num)
    }

    return {
        current,
        chooseHandler
    }
}