export interface MenuItem {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  description: string;
  image: string;
  category: "pastas" | "pizzas" | "sides";
  badge?: string;
  calories?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "shopping-bag" | "car" | "utensils" | "book-open" | "truck" | "users";
}

export interface SocialImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  isOpen: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "chicken-parm",
    name: "CHICKEN PARM",
    price: 9,
    priceFormatted: "$9",
    description: "Crispy breaded cutlet baked with rustic marinara and bubbling melted mozzarella cheese.",
    image: "/images/menu-chicken-parm.jpg",
    category: "pastas",
    calories: "680 kcal",
  },
  {
    id: "chicken-alfredo",
    name: "CHICKEN ALFREDO",
    price: 8,
    priceFormatted: "$8",
    description: "Tender grilled chicken tossed with silky fettuccine in our house roasted garlic cream.",
    image: "/images/menu-chicken-alfredo.jpg",
    category: "pastas",
    calories: "740 kcal",
  },
  {
    id: "spaghetti-meatballs",
    name: "SPAGHETTI & MEATBALLS",
    price: 9,
    priceFormatted: "$9",
    description: "Heritage hand-rolled beef meatballs simmered in slow-cooked san marzano tomato sauce.",
    image: "/images/menu-spaghetti.jpg",
    category: "pastas",
    calories: "620 kcal",
  },
  {
    id: "baked-mac-cheese",
    name: "BAKED MAC & CHEESE",
    price: 8,
    priceFormatted: "$8",
    description: "Cavatappi pasta drenched in aged sharp cheddar and baked with herb butter breadcrumbs.",
    image: "/images/menu-mac-cheese.jpg",
    category: "pastas",
    calories: "590 kcal",
  },
  // Additional menu items for Complete Menu view
  {
    id: "chicago-thin-pepperoni",
    name: "CHICAGO THIN CRUST PEPPERONI",
    price: 16,
    priceFormatted: "$16",
    description: "Crispy tavern-style square cut thin crust loaded with crispy cup & char pepperoni.",
    image: "/images/pepperoni-stamp.jpg",
    category: "pizzas",
    calories: "850 kcal",
  },
  {
    id: "four-cheese-rustic",
    name: "FOUR CHEESE RUSTIC PIZZA",
    price: 15,
    priceFormatted: "$15",
    description: "Mozzarella, fontina, gorgonzola, and pecorino romano with fresh crushed garlic.",
    image: "/images/social-4.jpg",
    category: "pizzas",
    calories: "820 kcal",
  },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "order-online",
    title: "ORDER ONLINE",
    description: "Speedy contactless ordering directly to your door.",
    iconName: "shopping-bag",
  },
  {
    id: "curbside-pickup",
    title: "CURBSIDE PICKUP",
    description: "Hot pizza brought straight to your car trunk.",
    iconName: "car",
  },
  {
    id: "in-store-dining",
    title: "IN-STORE DINING",
    description: "Cozy family atmosphere with craft beers on tap.",
    iconName: "utensils",
  },
  {
    id: "learn-more",
    title: "LEARN MORE",
    description: "Discover our slow-fermented 48h dough story.",
    iconName: "book-open",
  },
  {
    id: "nationwide",
    title: "NATIONWIDE",
    description: "Frozen Chicago-style pizzas shipped across the US.",
    iconName: "truck",
  },
  {
    id: "partnerships",
    title: "PARTNERSHIPS",
    description: "Local fundraisers, events, and sports leagues.",
    iconName: "users",
  },
];

export const SOCIAL_GALLERY: SocialImage[] = [
  {
    id: "social-1",
    src: "/images/social-1.jpg",
    alt: "Freshly sliced artisan pizza at table",
    caption: "Friday night pizza tradition",
  },
  {
    id: "social-2",
    src: "/images/social-2.jpg",
    alt: "Customer enjoying pasta dish",
    caption: "Family dining at its best",
  },
  {
    id: "social-3",
    src: "/images/social-3.jpg",
    alt: "Happy group celebrating with pizza",
    caption: "Celebrating wins together",
  },
  {
    id: "social-4",
    src: "/images/social-4.jpg",
    alt: "Crisp Chicago thin crust pizza slice",
    caption: "Signature tavern-style cut",
  },
  {
    id: "social-5",
    src: "/images/social-5.jpg",
    alt: "Table spread with craft beer and sides",
    caption: "Cold beer & hot crust",
  },
  {
    id: "social-6",
    src: "/images/social-6.jpg",
    alt: "Customer holding fresh Crust Pizza box",
    caption: "Warm deliveries all evening",
  },
];

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: "loc-1",
    name: "Chicago Downtown Flagship",
    address: "244 N Michigan Ave, Chicago, IL 60601",
    phone: "(312) 555-0192",
    hours: "11:00 AM - 11:00 PM",
    isOpen: true,
  },
  {
    id: "loc-2",
    name: "Lincoln Park Pizzeria",
    address: "1820 N Halsted St, Chicago, IL 60614",
    phone: "(773) 555-0144",
    hours: "11:30 AM - 10:30 PM",
    isOpen: true,
  },
  {
    id: "loc-3",
    name: "Wicker Park Tavern",
    address: "1450 N Milwaukee Ave, Chicago, IL 60622",
    phone: "(773) 555-0188",
    hours: "12:00 PM - 12:00 AM",
    isOpen: true,
  },
  {
    id: "loc-4",
    name: "Evanston North Shore",
    address: "710 Church St, Evanston, IL 60201",
    phone: "(847) 555-0173",
    hours: "11:00 AM - 10:00 PM",
    isOpen: true,
  },
];
