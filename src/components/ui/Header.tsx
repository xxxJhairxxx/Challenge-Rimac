import Container from "../globals/Container"
import logo from '@/assets/img/logo.png'

const Header = () => {
    return (
        <header >
            <Container className=" h-[6.8rem] flex justify-between items-center"> 
                
                <img src={logo} className="w-[7.3rem] h-[3.6rem]" alt="" />

                <div className="font-bold flex gap-4 items-center">
                    <span className="text-[1.2rem] ">¡Compra por este medio!</span>
                    <a href="/" className="flex gap-3 items-center">
                        <i className="icon-phone text-[2.2rem]"/> <span>(01) 411 6001</span>
                    </a>
                </div>

            </Container>

        </header>
    )
}

export default Header
