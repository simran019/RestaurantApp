
import HeaderCartButton from "../HeaderCartButton/page";

const Header =(props:any)=>{
    return (
        <div className="flex items-center justify-between w-full bg-red-800 px-4 py-3 text-white">
            <h1 className="text-5xl font-extrabold">FOOD APP</h1>
            <HeaderCartButton onShow={props.onShow}/>
        </div>
    )
}

export default Header;