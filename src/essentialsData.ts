export interface Store {
  id: number;
  name: string;
  image: string;
  address: string;
  distance: string;
  description: string;
  phone: string;
  hours: string;
}

export type EssentialType = 'food' | 'hospitals' | 'petrolpumps';

export type EssentialsByType = {
  [key in EssentialType]?: Store[];
};

export type EssentialsData = {
  [city: string]: EssentialsByType;
};

export const essentialsData: EssentialsData = {
  Karjat: {
    food: [
      {
        id: 1,
        name: "Essential Foods Downtown",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
        address: "123 Healthy Ave, Wellness City, 45678",
        distance: "2.3 km",
        description: "Discover a curated selection of essential foods for a healthy lifestyle.",
        phone: "(555) 123-4567",
        hours: "8:00 AM - 9:00 PM"
      },
    ],
  },
  Mumbai: {
    food: [
      {
        id: 1,
        name: "Essential Foods Downtown",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
        address: "123 Healthy Ave, Wellness City, 45678",
        distance: "2.3 km",
        description: "Discover a curated selection of essential foods for a healthy lifestyle.",
        phone: "(555) 123-4567",
        hours: "8:00 AM - 9:00 PM"
      },
    ],
    hospitals: [
      {
        id: 1,
        name: "City Hospital",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
        address: "456 Health St, Mumbai, 400001",
        distance: "1.5 km",
        description: "24/7 emergency and general care.",
        phone: "(555) 987-6543",
        hours: "Open 24 hours"
      },
    ],
  },
  Alibaug: {
    food: [
      {
        id: 1,
        name: "Essential Foods Downtown",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
        address: "123 Healthy Ave, Wellness City, 45678",
        distance: "2.3 km",
        description: "Discover a curated selection of essential foods for a healthy lifestyle.",
        phone: "(555) 123-4567",
        hours: "8:00 AM - 9:00 PM"
      },
    ],
  },
};