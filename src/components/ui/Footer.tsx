import Container from "../globals/Container"
import logo_2 from '@/assets/img/Logo_2.png'

const Footer = () => {
    return (
        <footer className="bg-dark-100 h-[10.6rem] flex items-center text-white">
            <Container className="flex justify-between items-center">
                <img src={logo_2} alt="" />
                
                <p className="text-[1.4rem]">© 2023 RIMAC Seguros y Reaseguros.</p>
            </Container>
        </footer>
    )
}

export default Footer
