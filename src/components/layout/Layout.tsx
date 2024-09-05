import { PropsWithChildren } from "react"
import Header from "../ui/Header"
import Footer from "../ui/Footer"
import Container from "../globals/Container"

interface props extends PropsWithChildren {
    className?: string;
}

const Layout = ({ children,className }: props) => {
    return (<>
        <Header />
        <main>
            <Container className={className}>
                {children}
            </Container>
        </main>
        <Footer />
    </>
    )
}

export default Layout
