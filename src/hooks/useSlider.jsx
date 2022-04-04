import { useEffect, useState } from "react"

export default function useSlider(count){
    
    const [current, setCurrent] = useState(1)

    useEffect(() => {

        const interval = setInterval(()=>{
            if(current < count){
                setCurrent(current + 1)
            }else{
                setCurrent(1)
            }
        },5000)

        return () => clearInterval(interval)

    },[current])
    
    function chooseHandler(num){
        setCurrent(num)
    }

    return {
        current,
        chooseHandler
    }
}