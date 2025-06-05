const images = import.meta.glob('../assets/Food-Images/*.jpg', { eager: true });


const restaurantData = [
    {
      id: 1,
      resName: "Punjabi Rasoi",
      cuisine: "North Indian, Punjabi, Asian",
      rating: "4.5",
      eta: "27 mins",
      image: images['../assets/Food-Images/restaurant1.jpg'].default
    },
    {
      id: 2,
      resName: "South Spice",
      cuisine: "South Indian, Chettinad",
      rating: "4.3",
      eta: "22 mins",
      image: images['../assets/Food-Images/restaurant2.jpg'].default
    },
    {
      id: 3,
      resName: "Burger Hub",
      cuisine: "American, Fast Food",
      rating: "4.7",
      eta: "18 mins",
      image: images['../assets/Food-Images/restaurant3.jpg'].default
    },
    {
      id: 4,
      resName: "Pasta Palace",
      cuisine: "Italian, Continental",
      rating: "4.4",
      eta: "20 mins",
      image: images['../assets/Food-Images/restaurant4.jpg'].default
    },
    {
      id: 5,
      resName: "Sushi House",
      cuisine: "Japanese, Sushi, Asian",
      rating: "4.8",
      eta: "25 mins",
      image: images['../assets/Food-Images/restaurant5.jpg'].default
    },
    {
      id: 6,
      resName: "Tandoori Tales",
      cuisine: "North Indian, Mughlai",
      rating: "4.5",
      eta: "30 mins",
      image: images['../assets/Food-Images/restaurant6.jpg'].default
    },
    {
      id: 7,
      resName: "The Mexican Bowl",
      cuisine: "Mexican, Tex-Mex",
      rating: "4.2",
      eta: "24 mins",
      image: images['../assets/Food-Images/restaurant7.jpg'].default
    },
    {
      id: 8,
      resName: "Delhi Chaat Bazaar",
      cuisine: "Street Food, North Indian",
      rating: "4.0",
      eta: "15 mins",
      image: images['../assets/Food-Images/restaurant8.jpg'].default
    },
    {
      id: 9,
      resName: "Momos Junction",
      cuisine: "Chinese, Tibetan",
      rating: "4.1",
      eta: "19 mins",
      image: images['../assets/Food-Images/restaurant9.jpg'].default
    },
    {
      id: 10,
      resName: "Pizza Paradise",
      cuisine: "Italian, Fast Food",
      rating: "4.6",
      eta: "28 mins",
      image: images['../assets/Food-Images/restaurant10.jpg'].default
    },
    {
      id: 11,
      resName: "Grill House",
      cuisine: "Barbecue, Grill",
      rating: "4.4",
      eta: "26 mins",
      image: images['../assets/Food-Images/restaurant11.jpg'].default
    },
    {
      id: 12,
      resName: "Biryani Point",
      cuisine: "North Indian, Biryani",
      rating: "4.7",
      eta: "23 mins",
      image: images['../assets/Food-Images/restaurant12.jpg'].default
    },
    {
      id: 13,
      resName: "Thai Express",
      cuisine: "Thai, Asian",
      rating: "4.5",
      eta: "21 mins",
      image: images['../assets/Food-Images/restaurant13.jpg'].default
    },
    {
      id: 14,
      resName: "Chinese Wok",
      cuisine: "Chinese, Asian",
      rating: "4.3",
      eta: "20 mins",
      image: images['../assets/Food-Images/restaurant14.jpg'].default
    },
    {
      id: 15,
      resName: "Café Delight",
      cuisine: "Cafe, Desserts, Coffee",
      rating: "4.2",
      eta: "16 mins",
      image: images['../assets/Food-Images/restaurant15.jpg'].default
    },
    {
      id: 16,
      resName: "Kebab King",
      cuisine: "Mughlai, North Indian",
      rating: "4.6",
      eta: "25 mins",
      image: images['../assets/Food-Images/restaurant16.jpg'].default
    },
    {
      id: 17,
      resName: "Greek Feast",
      cuisine: "Greek, Mediterranean",
      rating: "4.4",
      eta: "29 mins",
      image: images['../assets/Food-Images/restaurant17.jpg'].default
    },
    {
      id: 18,
      resName: "Middle Eastern Bites",
      cuisine: "Middle Eastern, Lebanese",
      rating: "4.5",
      eta: "27 mins",
      image: images['../assets/Food-Images/restaurant18.jpg'].default
    },
    {
      id: 19,
      resName: "Vegan Delights",
      cuisine: "Vegan, Healthy Food",
      rating: "4.8",
      eta: "22 mins",
      image: images['../assets/Food-Images/restaurant19.jpg'].default
    },
    {
      id: 20,
      resName: "Seafood Haven",
      cuisine: "Seafood, Coastal",
      rating: "4.6",
      eta: "30 mins",
      image: images['../assets/Food-Images/restaurant20.jpg'].default
    }
  ];
  
  export default restaurantData;
  