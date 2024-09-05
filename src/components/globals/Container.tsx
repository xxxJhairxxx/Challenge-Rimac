import { PropsWithChildren } from "react"

interface props extends PropsWithChildren{
    className?: string;
}
const Container = ({children,className}:props) => {
  return (
    <div className={`container-general ${className}`}>
      {children}
    </div>
  )
}

export default Container
