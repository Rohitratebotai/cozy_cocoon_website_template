export interface Store {
  id: number;
  name: string;
  image: string;
  description: string;
  mapSrc?: string;
}

export type EssentialType = "food" | "hospitals" | "petrolpumps" | "railwaystations";

export type EssentialsByType = {
  [key in EssentialType]?: Store[];
};

export type EssentialsData = {
  [city: string]: EssentialsByType;
};

export const essentialsData: EssentialsData = {
  sanskruti: {
    food: [
      {
        id: 1,
        name: "Restaurant - Pushpam Sanskruti Resort",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Multi-cuisine restaurant at Pushpam Sanskruti Resort.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5446651515163!2d73.4125173!3d18.9957064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9d5e0d7dbdb%3A0xcc4ceff831260b4c!2sPushpam%20Sanskruti!5e0!3m2!1sen!2sin!4v1756551104282!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "Nisarga Dhaba, Kashele",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Popular dhaba serving local delicacies in Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4922488595676!2d73.41342759999999!3d18.9980188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f77e3a0d1dfb%3A0x1799cbe68df7f571!2sNisarg%20Dhaba!5e0!3m2!1sen!2sin!4v1756551175863!5m2!1sen!2sin",
      },
      {
        id: 3,
        name: "Patil Food Plaza, Kadav",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop",
        description: "Family-friendly food plaza at Kadav.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3271084841695!2d73.3720141!3d18.9611558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9028cb8b3b7%3A0xb35db6d3c7e05770!2sPATIL%20FOOD%20PLAZA!5e0!3m2!1sen!2sin!4v1756551206518!5m2!1sen!2sin",
      },
      {
        id: 4,
        name: "Bombay Baithak, Kashele",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
        description: "Casual dining restaurant with regional flavors.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.299919306741!2d73.4194551!3d19.0065013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f7006da350f9%3A0xd0b4e0ca3890656!2sBombay%20Baithak%20Kashele!5e0!3m2!1sen!2sin!4v1756551233928!5m2!1sen!2sin",
      },
      {
        id: 5,
        name: "Hotel Samruddhi Misal & Snacks, Kashele",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Famous for Misal Pav and snacks in Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1810111595414!2d73.41855009999999!3d19.011743799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f792a9298183%3A0x413f643ed382c587!2sHotel%20Samruddhi%20Misal%20and%20Snacks!5e0!3m2!1sen!2sin!4v1756551264004!5m2!1sen!2sin",
      },
    ],
    petrolpumps: [
      {
        id: 1,
        name: "HPCL Petrol Pump",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
        description: "HPCL fuel station with standard facilities.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.318862307924!2d73.419495!3d19.005665999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f77e3e7cd9cd%3A0x90a73ad04fb5ae28!2sHindustan%20Petroleum%20Corporation%20Limited!5e0!3m2!1sen!2sin!4v1756551312878!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "Nayara Petrol Pump",
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop",
        description: "Nayara fuel station near Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8701760065946!2d73.3483744!3d18.9371397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fbdd38049adb%3A0x5756eeb007fcbb71!2sNayara%20-YAAVI%20PETROLEUM!5e0!3m2!1sen!2sin!4v1756551343181!5m2!1sen!2sin",
      },
      {
        id: 3,
        name: "HPCL Petrol Pump",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
        description: "Additional HPCL fuel station in Karjat area.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4117295422675!2d73.33222599999999!3d18.9131613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb9bb60ad249%3A0xfa72622dad38d563!2sHindustan%20Petroleum%20Corporation%20Limited!5e0!3m2!1sen!2sin!4v1756551365629!5m2!1sen!2sin",
      },
    ],
    railwaystations: [
      {
        id: 1,
        name: "Karjat Railway Station",
        image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=400&h=300&fit=crop",
        description: "Major junction connecting Mumbai and Pune.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4907558072796!2d73.3208844!3d18.909659799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb00176e2e43%3A0xbf04397eea2ff37a!2skarjat%20railway%20station!5e0!3m2!1sen!2sin!4v1756551415917!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "Neral Railway Station",
        image: "https://images.unsplash.com/photo-1529753253655-470be9a42781?w=400&h=300&fit=crop",
        description: "Railway station connecting to Matheran hill station.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8351646451274!2d73.3185199!3d19.0269838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f1f6bcf2cb55%3A0x46401cc5463c5cd0!2sNeral%20railways%20station!5e0!3m2!1sen!2sin!4v1756551435665!5m2!1sen!2sin",
      },
    ],
    hospitals: [
      {
        id: 1,
        name: "Krushna Medical & General Store, Kashele",
        image: "https://images.unsplash.com/photo-1580281657521-3f43e41e087a?w=400&h=300&fit=crop",
        description: "Pharmacy and general medical store in Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2475060835795!2d73.4207644!3d19.0088123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f748a679549d%3A0xab0bda36db75f3f3!2sKrushna%20medical%20and%20general%20store%20kashele%20karjat-murbad%20road!5e0!3m2!1sen!2sin!4v1756551475102!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "Nitin Medical Store",
        image: "https://images.unsplash.com/photo-1584017911766-d451b4d2b0d1?w=400&h=300&fit=crop",
        description: "Local chemist shop for medicines and essentials.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.298738541359!2d73.3735839!3d18.9624096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9d3a8e653db%3A0xea4cbfeee510a00c!2sNitin%20medical%20store!5e0!3m2!1sen!2sin!4v1756551496964!5m2!1sen!2sin",
      },
      {
        id: 3,
        name: "Shreekrupa Medical & General Stores, Kadav",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop",
        description: "Chemist and medical store in Kadav.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.302655411591!2d73.3735159!3d18.9622365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9e1436cba57%3A0x52a4bda745da31c1!2sShreekrupa%20Medical%20%26%20General%20Stores!5e0!3m2!1sen!2sin!4v1756551519819!5m2!1sen!2sin",
      },
    ],
  },
  karadya: {
    food: [
      {
        id: 1,
        name: "Restaurant - Pushpam Sanskruti Resort",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Multi-cuisine restaurant at Pushpam Sanskruti Resort.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5446651515163!2d73.4125173!3d18.9957064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9d5e0d7dbdb%3A0xcc4ceff831260b4c!2sPushpam%20Sanskruti!5e0!3m2!1sen!2sin!4v1756551104282!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "Nisarga Dhaba, Kashele",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Popular dhaba serving local delicacies in Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4922488595676!2d73.41342759999999!3d18.9980188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f77e3a0d1dfb%3A0x1799cbe68df7f571!2sNisarg%20Dhaba!5e0!3m2!1sen!2sin!4v1756551175863!5m2!1sen!2sin",
      },
      {
        id: 3,
        name: "Patil Food Plaza, Kadav",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop",
        description: "Family-friendly food plaza at Kadav.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3271084841695!2d73.3720141!3d18.9611558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9028cb8b3b7%3A0xb35db6d3c7e05770!2sPATIL%20FOOD%20PLAZA!5e0!3m2!1sen!2sin!4v1756551206518!5m2!1sen!2sin",
      },
      {
        id: 4,
        name: "Bombay Baithak, Kashele",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
        description: "Casual dining restaurant with regional flavors.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.299919306741!2d73.4194551!3d19.0065013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f7006da350f9%3A0xd0b4e0ca3890656!2sBombay%20Baithak%20Kashele!5e0!3m2!1sen!2sin!4v1756551233928!5m2!1sen!2sin",
      },
      {
        id: 5,
        name: "Hotel Samruddhi Misal & Snacks, Kashele",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Famous for Misal Pav and snacks in Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1810111595414!2d73.41855009999999!3d19.011743799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f792a9298183%3A0x413f643ed382c587!2sHotel%20Samruddhi%20Misal%20and%20Snacks!5e0!3m2!1sen!2sin!4v1756551264004!5m2!1sen!2sin",
      },
    ],
    petrolpumps: [
      {
        id: 1,
        name: "HPCL Petrol Pump",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
        description: "HPCL fuel station with standard facilities.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.318862307924!2d73.419495!3d19.005665999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f77e3e7cd9cd%3A0x90a73ad04fb5ae28!2sHindustan%20Petroleum%20Corporation%20Limited!5e0!3m2!1sen!2sin!4v1756551312878!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "Nayara Petrol Pump",
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop",
        description: "Nayara fuel station near Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8701760065946!2d73.3483744!3d18.9371397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fbdd38049adb%3A0x5756eeb007fcbb71!2sNayara%20-YAAVI%20PETROLEUM!5e0!3m2!1sen!2sin!4v1756551343181!5m2!1sen!2sin",
      },
      {
        id: 3,
        name: "HPCL Petrol Pump",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
        description: "Additional HPCL fuel station in Karjat area.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4117295422675!2d73.33222599999999!3d18.9131613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb9bb60ad249%3A0xfa72622dad38d563!2sHindustan%20Petroleum%20Corporation%20Limited!5e0!3m2!1sen!2sin!4v1756551365629!5m2!1sen!2sin",
      },
    ],
    railwaystations: [
      {
        id: 1,
        name: "Karjat Railway Station",
        image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=400&h=300&fit=crop",
        description: "Major junction connecting Mumbai and Pune.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4907558072796!2d73.3208844!3d18.909659799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb00176e2e43%3A0xbf04397eea2ff37a!2skarjat%20railway%20station!5e0!3m2!1sen!2sin!4v1756551415917!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "Neral Railway Station",
        image: "https://images.unsplash.com/photo-1529753253655-470be9a42781?w=400&h=300&fit=crop",
        description: "Railway station connecting to Matheran hill station.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8351646451274!2d73.3185199!3d19.0269838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f1f6bcf2cb55%3A0x46401cc5463c5cd0!2sNeral%20railways%20station!5e0!3m2!1sen!2sin!4v1756551435665!5m2!1sen!2sin",
      },
    ],
    hospitals: [
      {
        id: 1,
        name: "Krushna Medical & General Store, Kashele",
        image: "https://images.unsplash.com/photo-1580281657521-3f43e41e087a?w=400&h=300&fit=crop",
        description: "Pharmacy and general medical store in Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2475060835795!2d73.4207644!3d19.0088123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f748a679549d%3A0xab0bda36db75f3f3!2sKrushna%20medical%20and%20general%20store%20kashele%20karjat-murbad%20road!5e0!3m2!1sen!2sin!4v1756551475102!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "Nitin Medical Store",
        image: "https://images.unsplash.com/photo-1584017911766-d451b4d2b0d1?w=400&h=300&fit=crop",
        description: "Local chemist shop for medicines and essentials.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.298738541359!2d73.3735839!3d18.9624096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9d3a8e653db%3A0xea4cbfeee510a00c!2sNitin%20medical%20store!5e0!3m2!1sen!2sin!4v1756551496964!5m2!1sen!2sin",
      },
      {
        id: 3,
        name: "Shreekrupa Medical & General Stores, Kadav",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop",
        description: "Chemist and medical store in Kadav.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.302655411591!2d73.3735159!3d18.9622365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9e1436cba57%3A0x52a4bda745da31c1!2sShreekrupa%20Medical%20%26%20General%20Stores!5e0!3m2!1sen!2sin!4v1756551519819!5m2!1sen!2sin",
      },
    ],
  },
};
