const MealItemForm =()=>{
    return(
        <div className="flex flex-col justify-center items-end gap-4">
          <input
            className="border-2 border-black w-14 rounded-md px-2 text-center"
            placeholder="Qty"
            min="1"
            max="5"
            defaultValue="1"
            step="1"
            type="number"
          />
          <button
            className="px-4 bg-red-800 text-white font-bold rounded-xl w-fit"
          >
            <p>+ Add</p>
          </button>
        </div>
    )
}

export default MealItemForm;