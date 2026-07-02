// Mock data for Babylon Cafe — replace with backend later

export const cafe = {
  name: "Babylon",
  tagline: "A café, distilled to its most beautiful hour.",
  established: "EST. MMXVIII",
  city: "Limerick, Ireland",
  address: "19 Henry St, Prior's-Land, Limerick, V94 N125",
  phone: "+353 61 000 000",
  email: "hello@babylon.cafe",
  rating: 4.3,
  reviewsCount: 428,
  mapsUrl: "https://maps.app.goo.gl/A95hPzYhEJezRAna6",
  hours: [
    { day: "Monday", time: "7:30 — 17:00" },
    { day: "Tuesday", time: "7:30 — 17:00" },
    { day: "Wednesday", time: "7:30 — 17:00" },
    { day: "Thursday", time: "7:30 — 17:00" },
    { day: "Friday", time: "7:30 — 17:00" },
    { day: "Saturday", time: "8:00 — 18:00" },
    { day: "Sunday", time: "8:00 — 16:00" }
  ]
};

export const marqueeWords = [
  "Slow Mornings",
  "Single Origin",
  "House Roasted",
  "Golden Hour",
  "Hand Poured",
  "Quiet Luxury",
  "Seasonal Bakes",
  "Every Cup a Ritual"
];

export const heroImage =
  "https://images.unsplash.com/photo-1636928837218-f2b56d5a7861";

export const about = {
  eyebrow: "Who's Behind It",
  title: "An address for the unhurried",
  body: [
    "Babylon began as a small idea on Henry Street — a room where the light falls slowly and the coffee is treated like a craft. We roast in small batches, pour by hand, and plate everything as though it were the only thing that mattered that morning.",
    "Terracotta walls, olive linen, worn brass and the low hum of conversation. This is a place to linger, to read, to meet — a quiet luxury you can taste in every cup."
  ],
  stats: [
    { value: "7yrs", label: "Roasting in Limerick" },
    { value: "12", label: "Single-origin lots" },
    { value: "4.3★", label: "Loved by regulars" }
  ],
  image: "https://images.pexels.com/photos/17130636/pexels-photo-17130636.jpeg"
};

export const signatures = [
  {
    name: "Babylon Gold",
    note: "Saffron & honey cortado",
    desc: "Double ristretto, warm milk, a thread of saffron honey and a dusting of gold.",
    price: "€5.20",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=srgb&fm=jpg&q=85"
  },
  {
    name: "Olive Grove Latte",
    note: "Cold-pressed olive oil",
    desc: "Silken espresso, oat milk and a spoon of Tuscan olive oil for a velvet finish.",
    price: "€5.60",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=srgb&fm=jpg&q=85"
  },
  {
    name: "Terracotta Mocha",
    note: "Spiced dark chocolate",
    desc: "70% Valrhona, cinnamon, chilli whisper and house-roasted espresso.",
    price: "€5.40",
    image:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?crop=entropy&cs=srgb&fm=jpg&q=85"
  },
  {
    name: "Fig & Cardamom Cold Brew",
    note: "18-hour steeped",
    desc: "Slow-steeped single origin, macerated fig and a breath of green cardamom.",
    price: "€5.80",
    image:
      "https://images.pexels.com/photos/4913342/pexels-photo-4913342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

export const menu = [
  {
    category: "Espresso Bar",
    items: [
      { name: "Espresso", desc: "Single origin, rotating", price: "€3.00" },
      { name: "Cortado", desc: "Equal parts, warm milk", price: "€3.60" },
      { name: "Flat White", desc: "Double ristretto, micro-foam", price: "€4.00" },
      { name: "Cappuccino", desc: "Classic, cocoa dusting", price: "€4.20" },
      { name: "Pour Over", desc: "Hand poured, choice of lot", price: "€4.80" }
    ]
  },
  {
    category: "Tea & Botanicals",
    items: [
      { name: "Ember Chai", desc: "House-spiced, steamed milk", price: "€4.40" },
      { name: "Jasmine Silver Needle", desc: "First-flush white", price: "€4.20" },
      { name: "Rooibos & Rose", desc: "Caffeine-free, floral", price: "€3.80" },
      { name: "Matcha Ceremonial", desc: "Stone-ground, Uji", price: "€4.80" }
    ]
  },
  {
    category: "Pastry Counter",
    items: [
      { name: "Butter Croissant", desc: "Laminated, 3-day proof", price: "€3.40" },
      { name: "Pistachio Escargot", desc: "Rolled, orange blossom", price: "€4.60" },
      { name: "Almond & Fig Tart", desc: "Seasonal, honey glaze", price: "€4.90" },
      { name: "Dark Chocolate Rye Cookie", desc: "Sea salt", price: "€3.20" }
    ]
  },
  {
    category: "All-Day Brunch",
    items: [
      { name: "Whipped Ricotta Toast", desc: "Sourdough, honeycomb, thyme", price: "€9.50" },
      { name: "Shakshuka", desc: "Slow tomato, feta, dukkah", price: "€11.00" },
      { name: "Smoked Salmon Plate", desc: "Rye, dill crème, capers", price: "€12.50" },
      { name: "Olive Oil Granola", desc: "Yoghurt, poached pear", price: "€8.00" }
    ]
  }
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1597528662465-55ece5734101?crop=entropy&cs=srgb&fm=jpg&q=85", label: "Pastry" },
  { src: "https://images.pexels.com/photos/33569441/pexels-photo-33569441.jpeg", label: "The Room" },
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
    role: "Regular · Limerick",
    text: "The most beautiful room in the city. The Babylon Gold is a ritual I can't start a morning without.",
    rating: 5
  },
  {
    name: "Daniel R.",
    role: "Coffee writer",
    text: "Every detail is considered — the light, the linen, the pour. This is quiet luxury done right.",
    rating: 5
  },
  {
    name: "Saoirse K.",
    role: "Local",
    text: "Their olive oil latte sounds strange and tastes like silk. The pastries are equally faultless.",
    rating: 4
  }
];
