import CartIcon from "../../public/Svg/cartIcon.svg";
import Image from "next/image";

const HeaderCartButton = (props:any) => {
  
    const clickHandler =()=>{
        props.onShow(true)
    }

  return (
    <button className="flex items-center justify-between w-52 px-4 py-2 rounded-full bg-red-600" onClick={clickHandler}>
      <Image src={CartIcon} width={50} height={50} alt="cart_icon_image" />
      <h6>My Cart</h6>
      <div className="bg-red-800 p-2 rounded-xl">0</div>
    </button>
  );
};

export default HeaderCartButton;
