// Mock data for Babylon Coffee \u2014 replace with backend later

export const cafe = {
  name: "Babylon",
  fullName: "Babylon Coffee",
  tagline: "Specialty coffee, matcha & good mornings on Henry Street.",
  established: "EST. MMXVIII",
  city: "Limerick, Ireland",
  address: "19 Henry St, Prior's-Land, Limerick, V94 N125",
  phone: "+353 61 000 000",
  email: "hello@babylon.cafe",
  rating: 4.3,
  reviewsCount: 428,
  mapsUrl: "https://maps.app.goo.gl/A95hPzYhEJezRAna6",
  logo: "https://d28f3w0x9i80nq.cloudfront.net/restaurantImages/64a0bf44-cb75-4322-947a-9e7c2157880c/restaurant_1749464361.jpg",
  instagramReel: "https://www.instagram.com/reel/DSmcIx6DDl-/embed",
  instagramUrl: "https://www.instagram.com/reel/DSmcIx6DDl-/",
  hoursImage: "https://images.pexels.com/photos/17130636/pexels-photo-17130636.jpeg",
  toastUrl:
    "https://order.toasttab.com/online/babylon-coffee-19-gardens-international-henry-street-limerick-ireland",
  hours: [
    { day: "Monday", time: "7:30 \u2014 17:00" },
    { day: "Tuesday", time: "7:30 \u2014 17:00" },
    { day: "Wednesday", time: "7:30 \u2014 17:00" },
    { day: "Thursday", time: "7:30 \u2014 17:00" },
    { day: "Friday", time: "7:30 \u2014 17:00" },
    { day: "Saturday", time: "8:00 \u2014 18:00" },
    { day: "Sunday", time: "8:00 \u2014 16:00" }
  ]
};

export const marqueeWords = [
  "Slow Mornings",
  "Single Origin",
  "House Roasted",
  "Golden Hour",
  "Hand Poured",
  "Quiet Luxury",
  "Ceremonial Matcha",
  "Every Cup a Ritual"
];

export const heroImage =
  "https://images.unsplash.com/photo-1636928837218-f2b56d5a7861";

export const about = {
  eyebrow: "Who's Behind It",
  title: "An address for the unhurried",
  body: [
    "Babylon began as a small idea on Henry Street \u2014 a room where the light falls slowly and every cup is treated like a craft. We pull our espresso, whisk our matcha and build our bowls fresh, one order at a time.",
    "Sage-green walls, warm terracotta light and the low hum of conversation. This is a place to linger, to read, to meet \u2014 a quiet luxury you can taste in every cup."
  ],
  stats: [
    { value: "7yrs", label: "On Henry Street" },
    { value: "40+", label: "Drinks & bowls" },
    { value: "4.3\u2605", label: "Loved by regulars" }
  ],
  image: "https://images.pexels.com/photos/17130636/pexels-photo-17130636.jpeg"
};

// Home-page signatures (Ceremony-inspired product grid)
export const signatures = [
  {
    id: "sig-strawberry-matcha",
    tag: "Ceremonial Matcha",
    name: "Iced Strawberry Matcha",
    desc: "Strawberry pur\u00e9e & smooth iced matcha",
    price: 6.5,
    image:
      "https://images.unsplash.com/photo-1751033390078-b605c8727fa4?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
  },
  {
    id: "sig-cinnamon-matcha",
    tag: "House Special",
    name: "Cinnamon Bun Iced Matcha",
    desc: "Iced matcha topped with housemade cinnamon bun coldfoam",
    price: 6.5,
    image:
      "https://images.unsplash.com/photo-1717398804885-a6c22b3e5c2f?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
  },
  {
    id: "sig-classic-acai",
    tag: "Bowls",
    name: "Classic Acai",
    desc: "Soft serve acai, granola, peanut butter, strawberries & banana chips",
    price: 10.0,
    image:
      "https://images.unsplash.com/photo-1684403620650-81dc661a69db?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
  },
  {
    id: "sig-blue-magic",
    tag: "Smoothies",
    name: "Blue Magic Smoothie",
    desc: "Vanilla protein, blue spirulina, coconut, banana & almond milk",
    price: 7.5,
    image:
      "https://images.unsplash.com/photo-1575159249868-df58bf5e09ec?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
  },
  {
    id: "sig-dirty-caribbean",
    tag: "Espresso",
    name: "Hot Dirty Caribbean",
    desc: "Double espresso, dark Belgian chocolate chips & frothed coconut milk",
    price: 5.5,
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
  },
  {
    id: "sig-iced-latte",
    tag: "Espresso",
    name: "Iced Latte",
    desc: "20oz double espresso poured over milk & ice",
    price: 5.0,
    image:
      "https://d1w7312wesee68.cloudfront.net/YO8QYtSWA1qM2YEX52K1GOfQL8hrBv0iB3zU1nrwLKo/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-272068000000000000/menu/items/4/item-700000000880109224_1769216266.jpg"
  }
];

// Full menu for dedicated /menu page
export const menuCategories = [
  {
    id: "coffee-matcha",
    name: "Coffee & Matcha",
    items: [
      { id: "americano", name: "Americano", desc: "12oz double espresso & hot water", price: 4.0 },
      { id: "cappuccino", name: "Cappuccino", desc: "10oz double espresso & frothed milk", price: 4.4 },
      { id: "latte", name: "Latte", desc: "10oz double espresso & frothed milk", price: 4.4 },
      { id: "flat-white", name: "Flat White", desc: "8oz double espresso & frothed milk", price: 4.2 },
      { id: "mocha", name: "Mocha", desc: "10oz double espresso, chocolate & frothed milk", price: 5.2 },
      { id: "cortado", name: "Cortado", desc: "Double espresso topped with frothed milk", price: 4.0 },
      { id: "single-espresso", name: "Single Espresso", desc: "", price: 2.6 },
      { id: "double-espresso", name: "Double Espresso", desc: "", price: 3.8 },
      { id: "chai-latte", name: "Chai Latte", desc: "10oz spiced chai with frothed milk", price: 4.5 },
      { id: "dirty-chai", name: "Dirty Chai", desc: "10oz double espresso, spiced chai & frothed milk", price: 5.5 },
      { id: "iced-latte", name: "Iced Latte", desc: "20oz double espresso poured over milk & ice", price: 5.0 },
      { id: "iced-mocha", name: "Iced Mocha", desc: "20oz double espresso & chocolate over milk & ice", price: 6.0 },
      { id: "iced-americano", name: "Iced Americano", desc: "20oz double espresso poured over iced water", price: 5.0 },
      { id: "iced-chai", name: "Iced Chai Latte", desc: "20oz spiced chai mix poured over milk & ice", price: 5.2 },
      { id: "iced-dirty-chai", name: "Iced Dirty Chai", desc: "20oz double espresso & spiced chai over milk & ice", price: 6.0 },
      { id: "hot-dirty-caribbean", name: "Hot Dirty Caribbean", desc: "10oz double espresso, dark Belgian chocolate chips & frothed coconut milk", price: 5.5 },
      { id: "iced-dirty-caribbean", name: "Iced Dirty Caribbean", desc: "20oz double espresso, Belgian dark chocolate chips, coconut milk, ice & chocolate drizzle", price: 6.0 },
      { id: "matcha-latte", name: "Matcha Latte", desc: "Matcha with frothed milk", price: 5.0 },
      { id: "iced-matcha", name: "Iced Matcha", desc: "20oz smooth matcha poured over milk & ice", price: 5.2 },
      { id: "iced-strawberry-matcha", name: "Iced Strawberry Matcha", desc: "Strawberry pur\u00e9e & smooth iced matcha", price: 6.5 },
      { id: "iced-white-choc-matcha", name: "Iced White Choc Matcha", desc: "20oz smooth matcha & white chocolate over milk & ice", price: 6.5 },
      { id: "iced-blueberry-matcha", name: "Iced Blueberry Matcha", desc: "Blueberry pur\u00e9e & smooth iced matcha", price: 6.5 },
      { id: "cinnamon-bun-iced-matcha", name: "Cinnamon Bun Iced Matcha", desc: "Smooth matcha over ice, housemade cinnamon bun coldfoam", price: 6.5 },
      { id: "cinnamon-bun-iced-latte", name: "Cinnamon Bun Iced Latte", desc: "Iced latte topped with housemade cinnamon bun coldfoam", price: 5.5 },
      { id: "hot-chocolate", name: "Hot Chocolate", desc: "Smooth chocolate & frothed milk", price: 4.0 },
      { id: "tea", name: "Tea", desc: "", price: 3.0 },
      { id: "banana-matcha", name: "Banana Matcha", desc: "", price: 7.0 },
      { id: "banana-iced-latte", name: "Banana Iced Latte", desc: "", price: 6.5 },
      { id: "mont-blanc", name: "Mont Blanc", desc: "", price: 7.0 }
    ]
  },
  {
    id: "coolers-smoothies",
    name: "Coolers & Smoothies",
    items: [
      { id: "pink-lemonade", name: "Pink Lemonade", desc: "Raspberry & cloudy lemonade cooler", price: 4.2 },
      { id: "peach-iced-tea", name: "Peach Iced Tea", desc: "", price: 4.2 },
      { id: "lemon-iced-tea", name: "Lemon Iced Tea", desc: "", price: 4.2 },
      { id: "strawberry-protein-cooler", name: "Strawberry Protein Cooler", desc: "25g strawberry collagen protein shaken over ice", price: 5.5 },
      { id: "mango-green-tea-lemonade", name: "Mango Green Tea Lemonade", desc: "", price: 6.0 },
      { id: "watermelon-spritz", name: "Watermelon Spritz", desc: "", price: 4.5 },
      { id: "mango-glaze-smoothie", name: "Mango Glaze Smoothie", desc: "Mango, apple juice, coconut yoghurt, banana & honey", price: 6.5 },
      { id: "dragon-fruit-smoothie", name: "Dragon Fruit Smoothie", desc: "Dragonfruit, pineapple, apple juice, coconut yoghurt, banana & honey", price: 6.5 },
      { id: "blue-magic-smoothie", name: "Blue Magic Smoothie", desc: "Vanilla protein, blue spirulina, coconut, banana & almond milk", price: 7.5 },
      { id: "chocolate-fuel", name: "Chocolate Fuel", desc: "Chocolate protein, peanut butter, double espresso, almond milk & banana", price: 7.5 }
    ]
  },
  {
    id: "food",
    name: "Food",
    items: [
      { id: "classic-acai", name: "Classic Acai", desc: "Soft serve acai, granola, peanut butter, strawberries, coconut & banana chips", price: 10.0 },
      { id: "kinder-acai", name: "Kinder Acai", desc: "Soft serve acai, wafer, milk powder, fresh strawberries & Kinder Bueno sauce", price: 12.0 },
      { id: "island-bowl", name: "Island Bowl", desc: "", price: 12.0 },
      { id: "morning-bowl", name: "Morning Bowl", desc: "Mango sorbet, granola, pomegranate seeds, coconut yoghurt & coconut flakes", price: 6.0 },
      { id: "chia-pudding", name: "Chia Pudding", desc: "", price: 6.0 },
      { id: "overnight-oats", name: "Overnight Oats", desc: "Fem Fuelz chocolate protein, oats, chia seeds, milk & peanut butter drizzle", price: 5.0 },
      { id: "cream-cheese-bacon", name: "Cream Cheese & Bacon", desc: "Cream cheese & streaky bacon on toasted rye bread", price: 9.0 },
      { id: "classic-sandwich", name: "Classic Sandwich", desc: "Ballymaloe tomato relish, white cheddar & ham on toasted rye", price: 10.0 },
      { id: "turkey", name: "Turkey", desc: "Wafer sliced turkey, green pesto, tomato & mozzarella on toasted rye", price: 10.0 },
      { id: "club", name: "Club", desc: "Chicken, pesto, avocado & tomato on toasted rye bread", price: 10.0 },
      { id: "veggie", name: "Veggie", desc: "Green pesto, mozzarella, tomato & avocado on toasted rye bread", price: 10.0 },
      { id: "the-caesar", name: "The Caesar", desc: "", price: 10.0 },
      { id: "powerball", name: "Powerball", desc: "", price: 3.0 },
      { id: "croissant", name: "Croissant", desc: "", price: 4.0 },
      { id: "pain-au-chocolat", name: "Pain au Chocolat", desc: "", price: 4.0 },
      { id: "morning-bun", name: "Morning Bun", desc: "", price: 5.0 },
      { id: "biscuit-cake", name: "Biscuit Cake", desc: "", price: 3.0 },
      { id: "banana-bread", name: "Banana Bread", desc: "", price: 4.5, soldOut: true }
    ]
  }
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1597528662465-55ece5734101?crop=entropy&cs=srgb&fm=jpg&q=85", label: "Pastry" },
  { src: "https://images.pexels.com/photos/33569441/pexels-photo-33569441.jpeg", label: "The Room" },
  { src: "https://d1w7312wesee68.cloudfront.net/YO8QYtSWA1qM2YEX52K1GOfQL8hrBv0iB3zU1nrwLKo/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-272068000000000000/menu/items/4/item-700000000880109224_1769216266.jpg", label: "House Coffee" },
  { src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=srgb&fm=jpg&q=85", label: "Brunch" },
  { src: "https://images.unsplash.com/photo-1534432182912-63863115e106?crop=entropy&cs=srgb&fm=jpg&q=85", label: "Counter" },
  { src: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?crop=entropy&cs=srgb&fm=jpg&q=85", label: "Pour" },
  { src: "https://images.unsplash.com/photo-1621523132966-19f711d565d1?crop=entropy&cs=srgb&fm=jpg&q=85", label: "Plated" }
];

export const ambianceImages = [
  "https://images.unsplash.com/photo-1753727471014-efe38840c7c7",
  "https://images.unsplash.com/photo-1768051297578-1ea70392c307",
  "https://images.pexels.com/photos/11388016/pexels-photo-11388016.jpeg"
];

export const reviews = [
  {
    name: "Aoife M.",
    role: "Regular \u00b7 Limerick",
    text: "The most beautiful room in the city. The Cinnamon Bun Iced Matcha is a ritual I can't start a morning without.",
    rating: 5
  },
  {
    name: "Daniel R.",
    role: "Coffee writer",
    text: "Every detail is considered \u2014 the light, the pour, the matcha. This is quiet luxury done right.",
    rating: 5
  },
  {
    name: "Saoirse K.",
    role: "Local",
    text: "Their acai bowls are faultless and the Blue Magic smoothie is my post-run reward. Genuinely the best in town.",
    rating: 4
  }
];
