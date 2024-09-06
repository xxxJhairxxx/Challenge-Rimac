import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

interface items {
    id: number;
    title: string;
    isActive: boolean;
}

const Navbar = () => {

    const [items, setItems] = useState<Array<items>>([
        { id: 1, title: 'Planes y coberturas', isActive: false },
        { id: 2, title: 'Resumen', isActive: false }

    ])

    const location = useLocation();

    useEffect(() => {

        if (location.pathname === '/planes') {
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === 1 ? { ...item, isActive: true } : item
                )
            );
        }

        if (location.pathname === '/summary') {
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === 2 ? { ...item, isActive: true } : item
                )
            );
        }

    }, [location.pathname])

    return (
        <nav className='h-[5.6rem] w-full bg-secundary text-gris-100 flex items-center justify-center'>
            {
                items.map(({ id, title, isActive }) =>
                    <div key={id} className={`flex items-center`}>

                        {id > 1 &&
                            <svg className='mx-8' width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.5" y1="11" x2="31.5" y2="11" stroke="#7981B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 8" />
                            </svg>}

                        <span className={` flex items justify-center w-[2.5rem] h-[2.5rem]  text-[1.5rem] rounded-full border-[0.15rem] ${isActive ? 'bg-success text-white' : 'border-gris-100'} `}>{id}</span>
                        <p className={`ml-5 text-[1.5rem] ${isActive && 'text-black font-semibold'}`}>{title}</p></div>
                )
            }

        </nav>
    )
}

export default Navbar
