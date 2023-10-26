import Wrapper from "../Helper/page";
import MealItem from "./MealItem";

import allMeals from "./allMeals";

const AvailableMeals = () => {
  return (
    <Wrapper className="flex flex-col gap-4">
      {
        allMeals.map((meal,index)=>{
          return <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
        })
      }
    </Wrapper>
  );
};

export default AvailableMeals;
