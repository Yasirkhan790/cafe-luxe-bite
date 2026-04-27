import burger from "@/assets/hero-burger.jpg";
import broast from "@/assets/dish-broast.jpg";
import paratha from "@/assets/dish-paratha-roll.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import shawarma from "@/assets/dish-shawarma.jpg";
import fries from "@/assets/dish-loaded-fries.jpg";
import bbq from "@/assets/dish-bbq.jpg";

import drinks from "@/assets/dish-drinks.jpg";
import wings from "@/assets/dish-wings.jpg";
import club from "@/assets/dish-club.jpg";
import nihari from "@/assets/dish-nihari.jpg";
import gola from "@/assets/dish-gola.jpg";
import chai from "@/assets/dish-chai.jpg";
import dealFamily from "@/assets/deal-family.jpg";
import dealCouple from "@/assets/deal-couple.jpg";
import dealBucket from "@/assets/deal-bucket.jpg";
import pizzaTikka from "@/assets/pizza-tikka.jpg";
import pizzaPepperoni from "@/assets/pizza-pepperoni.jpg";
import pizzaFourCheese from "@/assets/pizza-fourcheese.jpg";
import pizzaBbq from "@/assets/pizza-bbq.jpg";
import pizzaChiliPaneer from "@/assets/pizza-chilipaneer.jpg";
import pizzaVeggie from "@/assets/pizza-veggie.jpg";
import dealPizzaFamily from "@/assets/deal-pizza-family.jpg";
import dealPizzaDuo from "@/assets/deal-pizza-duo.jpg";

export type MenuItem = {
  name: string;
  urdu: string;
  description: string;
  price: string;
  image: string;
  category: "Signatures" | "Burgers & Rolls" | "Grills & Biryani" | "Pizzas" | "Loaded Sides" | "Beverages";
  tag?: string;
};

export const menu: MenuItem[] = [
  {
    name: "Crown Zinger Burger",
    urdu: "زنگر برگر",
    description:
      "Buttermilk-marinated chicken thigh, double-breaded in our 18-spice masala, layered with smoked cheddar and saffron mayo on a brioche bun.",
    price: "Rs 890",
    image: burger,
    category: "Burgers & Rolls",
    tag: "Signature",
  },
  {
    name: "Royal Chicken Broast",
    urdu: "چکن بروسٹ",
    description:
      "24-hour brined chicken, pressure-fried to a shattering crust, served with three house dips and golden masala fries.",
    price: "Rs 1,250",
    image: broast,
    category: "Signatures",
    tag: "Bestseller",
  },
  {
    name: "Lahori Paratha Roll",
    urdu: "پراٹھا رول",
    description:
      "Charcoal-grilled chicken tikka, fresh chutney and pickled onion wrapped in a flaky, hand-tossed paratha.",
    price: "Rs 520",
    image: paratha,
    category: "Burgers & Rolls",
  },
  {
    name: "Sindhi Chicken Biryani",
    urdu: "سندھی بریانی",
    description:
      "Aromatic basmati layered with slow-cooked chicken, saffron and our family masala — finished in a sealed copper handi.",
    price: "Rs 780",
    image: biryani,
    category: "Grills & Biryani",
    tag: "House Recipe",
  },
  {
    name: "Karachi Shawarma",
    urdu: "شاورما",
    description:
      "Stacked rotisserie chicken, garlic-toum, sumac onions and crisp fries folded into a smoky saaj wrap.",
    price: "Rs 460",
    image: shawarma,
    category: "Burgers & Rolls",
  },
  {
    name: "Tikka Loaded Fries",
    urdu: "لوڈڈ فرائز",
    description:
      "Hand-cut potato batons under a cascade of mozzarella, chicken tikka, jalapeños and roasted-garlic mayo.",
    price: "Rs 690",
    image: fries,
    category: "Loaded Sides",
  },
  {
    name: "Sizzling Seekh Platter",
    urdu: "سیخ کباب",
    description:
      "Char-grilled seekh and reshmi kebabs over coal, served sizzling with naan, kachumber and mint chutney.",
    price: "Rs 1,490",
    image: bbq,
    category: "Grills & Biryani",
    tag: "Chef's Pick",
  },
  {
    name: "Tandoori Chicken Pizza",
    urdu: "تندوری پزا",
    description:
      "Wood-fired thin crust, tandoori chicken tikka, smoked mozzarella and a swirl of mint-yogurt drizzle.",
    price: "Rs 1,180",
    image: pizzaTikka,
    category: "Pizzas",
    tag: "Signature",
  },
  {
    name: "Spicy Beef Pepperoni",
    urdu: "پیپرونی پزا",
    description:
      "House-cured beef pepperoni, mozzarella, jalapeños and a fiery tomato base on a hand-stretched crust.",
    price: "Rs 1,290",
    image: pizzaPepperoni,
    category: "Pizzas",
    tag: "Hot",
  },
  {
    name: "Quattro Formaggi",
    urdu: "فور چیز پزا",
    description:
      "Four-cheese symphony — mozzarella, cheddar, parmesan and feta — finished with fresh basil leaves.",
    price: "Rs 1,390",
    image: pizzaFourCheese,
    category: "Pizzas",
  },
  {
    name: "Smoky BBQ Chicken Pizza",
    urdu: "بی بی کیو چکن پزا",
    description:
      "Coal-grilled chicken in our smoky BBQ glaze, red onion rings, fresh coriander and bubbling mozzarella.",
    price: "Rs 1,250",
    image: pizzaBbq,
    category: "Pizzas",
    tag: "Bestseller",
  },
  {
    name: "Chili Paneer Pizza",
    urdu: "چلی پنیر پزا",
    description:
      "Buttery paneer cubes, green chillies, crushed red chili and mozzarella on a smoky tandoor base.",
    price: "Rs 1,150",
    image: pizzaChiliPaneer,
    category: "Pizzas",
    tag: "Spicy",
  },
  {
    name: "Garden Veggie Supreme",
    urdu: "ویجی پزا",
    description:
      "Roasted bell peppers, mushrooms, olives, sweet corn and red onions over slow-simmered tomato sauce.",
    price: "Rs 990",
    image: pizzaVeggie,
    category: "Pizzas",
  },
  {
    name: "Crown Buffalo Wings",
    urdu: "بفیلو ونگز",
    description:
      "Six fire-glazed wings tossed in our smoked buffalo butter, served with cooling blue-cheese dip.",
    price: "Rs 720",
    image: wings,
    category: "Loaded Sides",
    tag: "New",
  },
  {
    name: "Karachi Club Sandwich",
    urdu: "کلب سینڈوچ",
    description:
      "Triple-stacked sourdough, masala chicken, smoked cheddar, fried egg and crispy onions, served with shoestring fries.",
    price: "Rs 650",
    image: club,
    category: "Burgers & Rolls",
  },
  {
    name: "Beef Nihari with Naan",
    urdu: "نہاری",
    description:
      "Eight-hour slow-cooked beef nihari, finished with bone marrow, ginger julienne and a basket of clay-oven naan.",
    price: "Rs 1,350",
    image: nihari,
    category: "Grills & Biryani",
    tag: "Signature",
  },
  {
    name: "Gola Kabab Roll",
    urdu: "گولا کباب",
    description:
      "Hand-pounded beef gola kebab, smoked over coal and rolled in a flaky paratha with mint chutney and onions.",
    price: "Rs 580",
    image: gola,
    category: "Burgers & Rolls",
    tag: "New",
  },
  {
    name: "Mango Lassi & Rose Falooda",
    urdu: "لسی · فالودہ",
    description:
      "Chilled Sindhri-mango lassi and rose falooda crowned with pistachios, basil seeds and rose petals.",
    price: "Rs 380",
    image: drinks,
    category: "Beverages",
  },
  {
    name: "Karak Doodh Patti Chai",
    urdu: "کڑک چائے",
    description:
      "Slow-brewed full-cream chai with cardamom and saffron, served in a heritage glass with shortbread biscuits.",
    price: "Rs 220",
    image: chai,
    category: "Beverages",
  },
];

export const categories = [
  "Signatures",
  "Burgers & Rolls",
  "Grills & Biryani",
  "Pizzas",
  "Loaded Sides",
  "Beverages",
] as const;

/* Deals & Discounts */

export type Deal = {
  name: string;
  urdu: string;
  serves: string;
  includes: string[];
  oldPrice: string;
  price: string;
  save: string;
  badge: string;
  image: string;
  accent: "gold" | "ember";
};

export const deals: Deal[] = [
  {
    name: "Couple Crown Deal",
    urdu: "کپل ڈیل",
    serves: "Serves 2",
    includes: [
      "2 × Crown Zinger Burgers",
      "1 × Large Masala Fries",
      "2 × Cold Drinks",
    ],
    oldPrice: "Rs 2,450",
    price: "Rs 1,799",
    save: "Save Rs 651",
    badge: "−27%",
    image: dealCouple,
    accent: "gold",
  },
  {
    name: "Family Feast",
    urdu: "فیملی فیسٹ",
    serves: "Serves 4",
    includes: [
      "4 × Zinger Burgers",
      "8 × Buffalo Wings",
      "1 × Tikka Loaded Fries",
      "4 × Cold Drinks",
    ],
    oldPrice: "Rs 5,800",
    price: "Rs 3,990",
    save: "Save Rs 1,810",
    badge: "−31%",
    image: dealFamily,
    accent: "ember",
  },
  {
    name: "Midnight Broast Bucket",
    urdu: "بروسٹ بکٹ",
    serves: "Serves 3 – 4",
    includes: [
      "9 × Pieces Royal Broast",
      "2 × Large Fries",
      "4 × Dips",
      "3 × Cold Drinks",
    ],
    oldPrice: "Rs 4,200",
    price: "Rs 2,990",
    save: "Save Rs 1,210",
    badge: "−29%",
    image: dealBucket,
    accent: "gold",
  },
  {
    name: "Biryani Bonanza",
    urdu: "بریانی بوننزا",
    serves: "Serves 2",
    includes: [
      "2 × Sindhi Chicken Biryani",
      "1 × Raita & Salad",
      "2 × Karak Chai",
    ],
    oldPrice: "Rs 2,180",
    price: "Rs 1,490",
    save: "Save Rs 690",
    badge: "−32%",
    image: biryani,
    accent: "ember",
  },
  {
    name: "Solo Cravings",
    urdu: "سولو کریونگز",
    serves: "Serves 1",
    includes: [
      "1 × Karachi Shawarma",
      "1 × Regular Fries",
      "1 × Cold Drink",
    ],
    oldPrice: "Rs 950",
    price: "Rs 690",
    save: "Save Rs 260",
    badge: "−27%",
    image: shawarma,
    accent: "gold",
  },
  {
    name: "BBQ Night Feast",
    urdu: "بی بی کیو فیسٹ",
    serves: "Serves 3",
    includes: [
      "1 × Sizzling Seekh Platter",
      "2 × Gola Kabab Rolls",
      "1 × Garlic Naan Basket",
      "3 × Karak Chai",
    ],
    oldPrice: "Rs 4,650",
    price: "Rs 3,290",
    save: "Save Rs 1,360",
    badge: "−29%",
    image: bbq,
    accent: "ember",
  },
  {
    name: "Pizza Duo + Free Fries",
    urdu: "پزا ڈوو ڈیل",
    serves: "Serves 2 – 3",
    includes: [
      "2 × Medium Pizzas (any flavor)",
      "1 × FREE Tikka Loaded Fries",
      "2 × Cold Drinks",
    ],
    oldPrice: "Rs 3,560",
    price: "Rs 2,490",
    save: "Save Rs 1,070",
    badge: "Buy 2 Get 1",
    image: dealPizzaDuo,
    accent: "gold",
  },
  {
    name: "Family Pizza Feast",
    urdu: "فیملی پزا فیسٹ",
    serves: "Serves 4 – 5",
    includes: [
      "3 × Large Pizzas (any flavor)",
      "1 × Tikka Loaded Fries",
      "6 × Buffalo Wings",
      "4 × Cold Drinks",
    ],
    oldPrice: "Rs 6,890",
    price: "Rs 4,690",
    save: "Save Rs 2,200",
    badge: "−32%",
    image: dealPizzaFamily,
    accent: "ember",
  },
];
