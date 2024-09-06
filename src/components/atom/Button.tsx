import { PropsWithChildren } from "react"

interface props extends PropsWithChildren{
    onClick: ()=>void;
}

const Button = ({onClick,children}:props) => {
  return (
    <button onClick={onClick} className="flex items-center gap-3 font-semibold text-success">
        <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center border-[0.3rem] border-success rounded-full">
            <i className="icon-arrow rotate-90 text-[0.7rem]  mr-1" /></div> {children}
    </button>
  )
}

export default Button
