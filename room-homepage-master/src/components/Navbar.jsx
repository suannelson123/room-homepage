import { useEffect, useState } from "react";
import { hamburgerMenu, logo, hamburgerClose, navLinks } from "../constants";

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', () => {
            window.scrollY > 0 ? setScroll(true) : setScroll(false);
        });

        return () =>
            window.removeEventListener('scroll', () => {
                window.scrollY > 0 ? setScroll(true) : setScroll(false);
            });


    }, []);
    return (
        <nav className={`${active ? "bg-slate-50" : ''} z-50 duration-200 container fixed py-[2rem] ${scroll ? "backdrop-blur-lg" : ''} lg:hidden`}>

            <div className="flex items-center justify-between">
                <img className="w-[25px] h-[20px] object-contain" onClick={() => setActive(!active)} src={active ? hamburgerClose : hamburgerMenu} alt="hamburger-menu" />
                <img className={`${active ? "hidden" : "block"} mx-[auto] object-contain`} src={logo} alt="logo" />

                <ul className={`${active ? " flex" : "hidden"} text-black gap-5`}>
                    {
                        navLinks.map(item => (
                            <li onClick={() => setActive(false)} className={`${active ? "animate" : ''} list  opacity-0 font-bold font-spartan`} key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
