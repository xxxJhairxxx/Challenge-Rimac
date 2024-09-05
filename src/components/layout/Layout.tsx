import { PropsWithChildren } from "react"
import Header from "../ui/Header"
import Footer from "../ui/Footer"
import Container from "../globals/Container"

interface props extends PropsWithChildren {

}

const Layout = ({ children }: props) => {
    return (<>
        <Header />
        <main>
            <Container>
                {children}
            </Container>
        </main>
        <Footer />
    </>
    )
}

export default Layout
