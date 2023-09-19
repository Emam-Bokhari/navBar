import { useState } from "react"
import { useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'

const NavbarDataLoad = () => {
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    useEffect(() => {
        fetch("NavbarData.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div onClick={() => setOpen(!open)} className="bg-gray-200 py-4 px-2 md:hidden">
                {
                    open === true ? <AiOutlineCloseCircle className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />
                }
            </div>
            <ul className={`md:flex justify-center bg-violet-100 p-4 absolute md:static  w-full duration-1000 ${open ? 'top-14' : '-top-60'}`}>
                {
                    data.map(item => <Navbar key={item.id} NavbarData={item} />)
                }
            </ul>
        </div>
    )
}
export default NavbarDataLoad