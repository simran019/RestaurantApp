const Cart = (props:any) => {

    const closeCartHandler =()=>{
        props.onShow(false);
    }
  return (
    <div className="bg-white w-1/2 h-1/2 overflow-y-auto px-4 py-8 rounded-md flex flex-col justify-between relative z-20">
      <div className="flex justify-between items-center mb-2 p-2">
        <div className="w-1/3 flex flex-col justify-between gap-2 font-bold h-18">
          <div className="text-2xl">Sushi</div>
          <div className="flex justify-between">
            <div className="text-red-800">Rs 250</div>
            <div>x1</div>
          </div>
        </div>
        <div className="w-1/3 flex items-center gap-2 justify-end">
          <button className="w-10 border-red-900 border-2  text-center rounded-md hover:text-white hover:bg-red-800">
            -
          </button>
          <button className="w-10 border-red-900 border-2  text-center rounded-md hover:text-white hover:bg-red-800">
            +
          </button>
        </div>
      </div>
      <hr className="h-0.5 bg-red-800"></hr>
      <div className="flex justify-between">
        <div className="text-3xl font-extrabold">Total Amount</div>
        <div className="flex flex-col items-end gap-4">
          <div className="text-3xl font-extrabold">Rs 2100</div>
          <div className="flex gap-4">
            <button className="border-2 border-red-800 text-red-800 hover:text-white hover:bg-red-800 w-16 rounded-xl px-2" onClick={closeCartHandler}>
              Close
            </button>
            <button className="border-2 border-red-800 text-white bg-red-800 hover:text-white hover:bg-white hover:text-red-800 w-16 rounded-xl px-2">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
