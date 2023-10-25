
import HeaderCartButton from "../HeaderCartButton/page";

const Header =()=>{
    return (
        <div className="flex items-center justify-between w-full bg-red-800 px-4 py-3 text-white">
            <h1 className="text-5xl font-extrabold">FOOD APP</h1>
            <HeaderCartButton/>
        </div>
    )
}

export default Header;