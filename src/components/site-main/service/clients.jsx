import { useEffect, useState } from "react"
import ClientImg1 from "../../../assets/images/clients-1.png"
import ClientImg2 from "../../../assets/images/clients-2.png"
import ClientImg3 from "../../../assets/images/clients-3.png"
import ClientImg4 from "../../../assets/images/clients-4.png"

const Clients = () => {

    const [client,setClient] = useState([
        {
            id: 1,
            img: ClientImg1,
            alt: "client"
        },
        {
            id: 2,
            img: ClientImg2,
            alt: "client"
        },
        {
            id: 3,
            img: ClientImg3,
            alt: "client"
        },
        {
            id: 4,
            img: ClientImg4,
            alt: "client"
        },
    ])

    useEffect(()=>{
        const clientSlider = setInterval(()=>{
            setClient([...client.slice(1),client[0]])
        },3000)

        return () => clearInterval(clientSlider)
    },[client])

    return (
        <div className="main-service__clients">
            <h2 className="service-help__title">Наши клиенты</h2>
            <div className="service-clients__list">
                {
                    client.map(client => (
                        <div className="service-clients__item" key={client.id}>
                            <img src={ client.img } alt={ client.alt } />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Clients;