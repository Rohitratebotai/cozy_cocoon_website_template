export interface Store {
  id: number;
  name: string;
  image: string;
  description: string;
  mapSrc?: string;
  lat?: number;
  lng?: number;
}


export type EssentialType = "food" | "hospitals" | "petrolpumps" | "railwaystations" | "chemist" | "business" | "tourism" | "shopping" | "attractions";






export type EssentialsByType = {
  [key in EssentialType]?: Store[];
};

export type EssentialsData = {
  [city: string]: EssentialsByType;
};

export const essentialsData: EssentialsData = {
  karjat: {
    tourism: [
      {
        id: 1,
        name: "Toursim - Pushpam Sanskruti Resort",
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
  bkc: {
    business: [
      {
        id: 1,
        name: "One BKC",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Multi-cuisine restaurant at Pushpam Sanskruti Resort.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0726512321044!2d72.8652097!3d19.0605431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90063971fad%3A0x41b1283ef93dd356!2sOne%20BKC!5e0!3m2!1sen!2sin!4v1770458040053!5m2!1sen!2sin",
      },
    ],
    food: [
      {
        id: 1,
        name: "Copper Chimney - Bandra East (BKC)",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Multi-cuisine restaurant at Pushpam Sanskruti Resort.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.961763261367!2d72.86164910000001!3d19.0654187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ee0bf0851f%3A0x9c12549d219f7b22!2sCopper%20Chimney%20-%20Bandra%20East%20(BKC)!5e0!3m2!1sen!2sin!4v1770124188175!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "The Irish House, BKC, Mumbai",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Popular dhaba serving local delicacies in Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.962181792201!2d72.8616042!3d19.065400299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e1e7e318e7%3A0x5d6106340b097497!2sThe%20Irish%20House%2C%20BKC%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1770124278049!5m2!1sen!2sin",
      },
      {
        id: 3,
        name: "Amazonia",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop",
        description: "Family-friendly food plaza at Kadav.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.101169378995!2d72.8653082!3d19.059289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b9fdf7b777%3A0xd2487c0ce242b1b5!2sAmazonia!5e0!3m2!1sen!2sin!4v1770124318276!5m2!1sen!2sin",
      },
      {
        id: 4,
        name: "O Pedro - BKC",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
        description: "Casual dining restaurant with regional flavors.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0994866742935!2d72.864943!3d19.059362999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c2c010b011%3A0xf8ee113451af419a!2sO%20Pedro%20-%20BKC!5e0!3m2!1sen!2sin!4v1770124343884!5m2!1sen!2sin",
      },
      {
        id: 5,
        name: "CinCin Mumbai",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Famous for Misal Pav and snacks in Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.062515609921!2d72.8630295!3d19.060988799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e81185e7e3%3A0xacf7b26f032ae292!2sCinCin%20Mumbai!5e0!3m2!1sen!2sin!4v1770124400939!5m2!1sen!2sin",
      },
      {
        id: 6,
        name: "Boojee Cafe",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Famous for Misal Pav and snacks in Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0694766260517!2d72.824591!3d19.060682699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c950382c58a5%3A0x31ebdefaca4c2e32!2sBoojee%20Cafe!5e0!3m2!1sen!2sin!4v1770124564986!5m2!1sen!2sin",
      },
      {
        id: 7,
        name: "CinCin Mumbai",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Famous for Misal Pav and snacks in Kashele.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.864469312288!2d72.8698543!3d19.0696956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ec2e893a25%3A0x8f200694d75bd87f!2sHitchki%2C%20BKC!5e0!3m2!1sen!2sin!4v1770124591415!5m2!1sen!2sin",
      },
    ],
    // petrolpumps: [
    //   {
    //     id: 1,
    //     name: "HPCL Petrol Pump",
    //     image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
    //     description: "HPCL fuel station with standard facilities.",
    //     mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.318862307924!2d73.419495!3d19.005665999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f77e3e7cd9cd%3A0x90a73ad04fb5ae28!2sHindustan%20Petroleum%20Corporation%20Limited!5e0!3m2!1sen!2sin!4v1756551312878!5m2!1sen!2sin",
    //   },
    //   {
    //     id: 2,
    //     name: "Nayara Petrol Pump",
    //     image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop",
    //     description: "Nayara fuel station near Kashele.",
    //     mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8701760065946!2d73.3483744!3d18.9371397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fbdd38049adb%3A0x5756eeb007fcbb71!2sNayara%20-YAAVI%20PETROLEUM!5e0!3m2!1sen!2sin!4v1756551343181!5m2!1sen!2sin",
    //   },
    //   {
    //     id: 3,
    //     name: "HPCL Petrol Pump",
    //     image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
    //     description: "Additional HPCL fuel station in Karjat area.",
    //     mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4117295422675!2d73.33222599999999!3d18.9131613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb9bb60ad249%3A0xfa72622dad38d563!2sHindustan%20Petroleum%20Corporation%20Limited!5e0!3m2!1sen!2sin!4v1756551365629!5m2!1sen!2sin",
    //   },
    // ],
    // railwaystations: [
    //   {
    //     id: 1,
    //     name: "Karjat Railway Station",
    //     image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=400&h=300&fit=crop",
    //     description: "Major junction connecting Mumbai and Pune.",
    //     mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4907558072796!2d73.3208844!3d18.909659799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb00176e2e43%3A0xbf04397eea2ff37a!2skarjat%20railway%20station!5e0!3m2!1sen!2sin!4v1756551415917!5m2!1sen!2sin",
    //   },
    //   {
    //     id: 2,
    //     name: "Neral Railway Station",
    //     image: "https://images.unsplash.com/photo-1529753253655-470be9a42781?w=400&h=300&fit=crop",
    //     description: "Railway station connecting to Matheran hill station.",
    //     mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8351646451274!2d73.3185199!3d19.0269838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f1f6bcf2cb55%3A0x46401cc5463c5cd0!2sNeral%20railways%20station!5e0!3m2!1sen!2sin!4v1756551435665!5m2!1sen!2sin",
    //   },
    // ],
    hospitals: [
      {
        id: 1,
        name: "Asian Heart Institute",
        image: "https://images.unsplash.com/photo-1580281657521-3f43e41e087a?w=400&h=300&fit=crop",
        description: "Cardiology hospital in bkc.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9658166251534!2d72.8610142!3d19.0652405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e632b92973%3A0xfc994ae0b57a17a4!2sAsian%20Heart%20Institute!5e0!3m2!1sen!2sin!4v1770125123199!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "BHATIA MEDICAL & SUPER STORE",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
        description: "Medical and super store in Karjat.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.053810208618!2d72.8495271!3d19.061371599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91fbb7194c3%3A0xfd154ae002bece9d!2sBHATIA%20MEDICAL%20%26%20SUPER%20STORE!5e0!3m2!1sen!2sin!4v1770125333638!5m2!1sen!2sin",
      },
    ],
    shopping: [
      {
        id: 1,
        name: "Jio World Plaza",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Popular shopping mall in BKC.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.959133787014!2d72.8671083!3d19.065534299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94b37ca8be5%3A0xafb4e0fa3059f590!2sJio%20World%20Plaza!5e0!3m2!1sen!2sin!4v1770458735672!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "Phoenix Market City",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Popular shopping mall in BKC.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4847312988886!2d72.8889774!3d19.0863795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c887efb78b9f%3A0x9f9dc99c3119470a!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1770458801486!5m2!1sen!2sin",
      },
      {
        id: 3,
        name: "Bandra Hill Road Market",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Popular shopping mall in BKC.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1885.5967053138068!2d72.8310668!3d19.055232099999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c98929764c9b%3A0x3e1e56518107aa61!2sBandra%20hill%20road%20market!5e0!3m2!1sen!2sin!4v1770458908120!5m2!1sen!2sin",
      },
      {
        id: 4,
        name: "Linking Road Market",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Popular shopping mall in BKC.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.962834608541!2d72.834428!3d19.0653716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ca185602d1%3A0x38fb62625d82de7d!2sLinking%20Road%20Market!5e0!3m2!1sen!2sin!4v1770458944070!5m2!1sen!2sin",
      },
    ],
    attractions: [
      {
        id: 1,
        name: "US Consulate General, Mumbai",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Iconic sea link connecting Bandra and Worli.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3770.974760281975!2d72.8640014!3d19.0648473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e940512057%3A0x3e32a8e25a189bf4!2sUS%20Consulate%20General%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1770460392833!5m2!1sen!2sin",
      },
      {
        id: 2,
        name: "BOM Terminal 2",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Iconic sea link connecting Bandra and Worli.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2332586622915!2d72.87460759999999!3d19.097420299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c859c3604467%3A0xd1eb860e3e0a8c8b!2sBOM%20Terminal%202%2C%20Navpada%2C%20Vile%20Parle%20East%2C%20Vile%20Parle%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1770460432646!5m2!1sen!2sin",
      },
      {
        id: 3,
        name: "Jio Garden Gate No 1",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Iconic sea link connecting Bandra and Worli.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.966826548501!2d72.8649963!3d19.065196099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c900601a49bd%3A0x2203ee9f3c798117!2sJio%20Garden%20Gate%20No%201!5e0!3m2!1sen!2sin!4v1770460557304!5m2!1sen!2sin",
      },
      {
        id: 4,
        name: "Jio World Drive",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Iconic sea link connecting Bandra and Worli.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2252515113414!2d72.8516551!3d19.053831499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e6765d4ed5%3A0x7bd06f90993bd53d!2sJio%20World%20Drive!5e0!3m2!1sen!2sin!4v1770460601803!5m2!1sen!2sin",
      },
      {
        id: 5,
        name: "Jio World Convention Centre",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Iconic sea link connecting Bandra and Worli.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3771.0206608284075!2d72.8647743!3d19.0628292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91ce5566167%3A0x399bdb06fab68a7e!2sJio%20World%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1770460664895!5m2!1sen!2sin",
      },
      {
        id: 6,
        name: "Consulate General of France",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        description: "Iconic sea link connecting Bandra and Worli.",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0576648937536!2d72.86004009999999!3d19.0612021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e779859469%3A0x1dd760bfbf8699ed!2sConsulat%20G%C3%A9n%C3%A9ral%20de%20France%20%2F%20Consulate%20General%20of%20France!5e0!3m2!1sen!2sin!4v1770460696104!5m2!1sen!2sin",
      },
    ]
  },
};

// 2️⃣ Helper function (MUST be above usage)
const extractLatLng = (mapSrc?: string) => {
  if (!mapSrc) return {};

  const lat = mapSrc.match(/!3d(-?\d+\.\d+)/)?.[1];
  const lng = mapSrc.match(/!2d(-?\d+\.\d+)/)?.[1];

  return {
    lat: lat ? Number(lat) : undefined,
    lng: lng ? Number(lng) : undefined,
  };
};

// 4️⃣ Normalized data (USES helper)
export const normalizedEssentialsData = Object.fromEntries(
  Object.entries(essentialsData).map(([area, categories]) => [
    area,
    Object.fromEntries(
      Object.entries(categories).map(([type, stores]) => [
        type,
        stores.map(store => ({
          ...store,
          ...extractLatLng(store.mapSrc),
        })),
      ])
    ),
  ])
);