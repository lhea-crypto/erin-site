export const agent = {
  name: "Dana Reyes",
  company: "Reyes Home Group",
  phone: "(555) 014-2290",
  phoneHref: "tel:+15550142290",
}

export const listing = {
  address: "1482 Alder Lane",
  neighborhood: "Riverside Heights",
  city: "Sacramento",
  price: "$489,000",
  facts: [
    { label: "Bedrooms", value: "3" },
    { label: "Bathrooms", value: "2" },
    { label: "Square feet", value: "1,640" },
    { label: "Built", value: "1998" },
  ],
  features: [
    { title: "New roof", detail: "Replaced in 2023" },
    { title: "Updated kitchen", detail: "2021 remodel with quartz counters and a gas range" },
    { title: "Fenced backyard", detail: "Private yard with a lemon tree" },
    { title: "2-car garage", detail: "Room for two cars or extra storage" },
    { title: "Near Alder Park", detail: "About a 10-minute walk" },
  ],
  openHouse: {
    day: "Saturday, October 10",
    time: "1–4 pm",
  },
  photos: {
    front: { src: "/photos/front.jpg", alt: "Front of 1482 Alder Lane with a 2-car garage and mature trees" },
    kitchen: { src: "/photos/kitchen.jpg", alt: "Kitchen with white upper cabinets, navy lower cabinets, and a gas range" },
    autumn: { src: "/photos/backyard.jpg", alt: "The front of the home in autumn, with fallen leaves on the lawn" },
  },
}

// Set to a sourced sentence before publishing; the blog hides the market box while this is null.
export const marketFact: { text: string; source: string } | null = null
