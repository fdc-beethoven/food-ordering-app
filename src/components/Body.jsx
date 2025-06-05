import restaurantData from "../data/restaurantData";
import RestaurantCard from "./Restaurants/RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="rest-cards">
                {restaurantData.map((restaurant)=> {
                    <RestaurantCard 
                        key={restaurant.id} 
                        resName={restaurant.resName} 
                        cuisine={restaurant.cuisine} 
                        rating={restaurant.rating} 
                        eta={restaurant.eta} 
                        image={restaurant.image}
                        />
                })}
            </div>
        </div>
    )
}

export default Body;