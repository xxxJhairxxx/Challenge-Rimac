import { PropsWithChildren } from "react"
import Header from "../ui/Header"
import Footer from "../ui/Footer"

interface props extends PropsWithChildren {
    footer?:boolean;
}

const Layout = ({ children,footer=false }: props) => {
    return (<>
        <Header />
        <main>
            
                {children}
        </main>
        {footer && <Footer />}
    </>
    )
}

export default Layout
