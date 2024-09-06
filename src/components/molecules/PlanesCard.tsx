import { useNavigate } from "react-router-dom";


interface props {
    name: string;
    description: Array<string>;
    price: number
    img: string
}


const PlanesCard = ({ name, description, price, img }: props) => {

    const navigate = useNavigate()
    return (

        <div className="text-left flex flex-col shadow-defaut w-[28.8rem] h-[63rem] rounded-[2.5rem] py-[7rem]  px-[3rem]">

            <section className="font-bold flex items-start justify-between leading-[3.5rem] border-b pb-[2rem]">
                <div>
                    <h1 className="text-[2.4rem] ">{name}</h1>
                    <p className="text-[1.2rem] text-gris-100 mt-5 leading-6">COSTO DEL PLAN</p>
                    <h3 className="text-[2rem]">${price} al mes</h3>
                </div>

                <img src={img} alt="" />
            </section>

            <ul className="flex flex-col gap-8 py-8">
                {description.map((item, index) => (
                    <li className="leading-10 text-[1.6rem] relative ml-8 before:content-['⚫︎'] before:absolute before:text-[0.5rem] before:left-0 before:ml-[-1.5rem]" key={index} >
                        {item}
                    </li>
                ))}
            </ul>

            <button onClick={()=>navigate('/summary')} className="bg-warning hvr-radial-out  text-white rounded-full mt-auto">Seleccionar Plan</button>

        </div>
    )
}

export default PlanesCard
