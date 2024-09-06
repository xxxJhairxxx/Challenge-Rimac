
interface props {
    img: string;
    title: string;
    text: string;
    state:boolean;
    onClick : ()=>void;
}

const SeleccionCard = ({ img, title, text,state, onClick }: props) => {
    return (
        <div onClick={onClick} className={`${state ?'border-black ':'border-transparent'} shadow-defaut border-[0.35rem] text-left flex flex-col  w-[30rem] rounded-[2.5rem] pt-[1.5rem] pb-[3rem] px-[2rem] cursor-pointer`}>
            <div className="flex justify-end">
                <button title="circle" className={` ${state?'bg-black': ''} w-[2.5rem] h-[2.5rem] border border-black rounded-full`}>
                    <i className="icon-Checkbox"></i>
                </button>
            </div>
            <img src={img} className="w-[4rem] h-[4rem]" alt="" />
            <h1 className="font-bold ">{title}</h1>
            <p className=" text-[1.2rem] leading-8">{text}</p>

        </div>
    )
}

export default SeleccionCard
