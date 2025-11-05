import { CascadingOption } from '../types';

export const initialObjects: CascadingOption[] = [
  // --- ROOT CATEGORIES ---
  { id: 'vehicle', name: 'Vehicle', parentId: null },
  { id: 'weaponry', name: 'Weaponry', parentId: null },
  { id: 'furniture', name: 'Furniture', parentId: null },
  { id: 'tech', name: 'Technology', parentId: null },
  { id: 'container', name: 'Container', parentId: null },
  { id: 'tools', name: 'Tools', parentId: null },
  { id: 'fantasy_item', name: 'Fantasy & Magical Items', parentId: null },
  { id: 'food_drink', name: 'Food & Drink', parentId: null },
  { id: 'everyday_item', name: 'Everyday Items', parentId: null },
  { id: 'musical_instrument', name: 'Musical Instruments', parentId: null },
  { id: 'medical_equipment', name: 'Medical Equipment', parentId: null },
  { id: 'sports_gear', name: 'Sports Gear', parentId: null },
  { id: 'art_supplies', name: 'Art Supplies', parentId: null },

  // --- VEHICLES ---
  // Level 2: Vehicle Types
  { id: 'vehicle_car', name: 'Car', parentId: 'vehicle' },
  { id: 'vehicle_truck', name: 'Truck', parentId: 'vehicle' },
  { id: 'vehicle_motorcycle', name: 'Motorcycle', parentId: 'vehicle' },
  { id: 'vehicle_emergency', name: 'Emergency Vehicle', parentId: 'vehicle' },
  { id: 'vehicle_military', name: 'Military Vehicle', parentId: 'vehicle' },
  { id: 'vehicle_construction', name: 'Construction Vehicle', parentId: 'vehicle' },
  { id: 'vehicle_public_transport', name: 'Public Transport', parentId: 'vehicle' },
  { id: 'vehicle_watercraft', name: 'Watercraft', parentId: 'vehicle' },
  { id: 'vehicle_aircraft', name: 'Aircraft', parentId: 'vehicle' },
  { id: 'vehicle_scifi', name: 'Sci-Fi Vehicle', parentId: 'vehicle' },

  // --- CARS (Level 3+) ---
  // Level 3: Car Type
  { id: 'vehicle_car_sedan', name: 'Sedan', parentId: 'vehicle_car' },
  { id: 'vehicle_car_suv', name: 'SUV', parentId: 'vehicle_car' },
  { id: 'vehicle_car_sports', name: 'Sports Car', parentId: 'vehicle_car' },
  { id: 'vehicle_car_pickup', name: 'Pickup Truck', parentId: 'vehicle_car' },
  { id: 'vehicle_car_luxury', name: 'Luxury Car', parentId: 'vehicle_car' },
  { id: 'vehicle_car_electric', name: 'Electric Car', parentId: 'vehicle_car' },
  { id: 'vehicle_car_vintage', name: 'Vintage Car', parentId: 'vehicle_car' },
  
  // Level 4: Sedan Brands
  { id: 'sedan_brand_toyota', name: 'Toyota', parentId: 'vehicle_car_sedan' },
  { id: 'sedan_brand_honda', name: 'Honda', parentId: 'vehicle_car_sedan' },
  { id: 'sedan_brand_ford', name: 'Ford', parentId: 'vehicle_car_sedan' },
  { id: 'sedan_brand_bmw', name: 'BMW', parentId: 'vehicle_car_sedan' },
  { id: 'sedan_brand_mercedes', name: 'Mercedes-Benz', parentId: 'vehicle_car_sedan' },
  
  // Level 5: Sedan Models
  { id: 'sedan_toyota_camry', name: 'Camry', parentId: 'sedan_brand_toyota', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Toyota Camry sedan" }) },
  { id: 'sedan_honda_accord', name: 'Accord', parentId: 'sedan_brand_honda', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Honda Accord sedan" }) },
  { id: 'sedan_ford_fusion', name: 'Fusion', parentId: 'sedan_brand_ford', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Ford Fusion sedan" }) },
  { id: 'sedan_bmw_3series', name: '3 Series', parentId: 'sedan_brand_bmw', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a BMW 3 Series sedan" }) },
  { id: 'sedan_mercedes_cclass', name: 'C-Class', parentId: 'sedan_brand_mercedes', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Mercedes-Benz C-Class sedan" }) },

  // Level 4: SUV Brands
  { id: 'suv_brand_toyota', name: 'Toyota', parentId: 'vehicle_car_suv' },
  { id: 'suv_brand_ford', name: 'Ford', parentId: 'vehicle_car_suv' },
  { id: 'suv_brand_jeep', name: 'Jeep', parentId: 'vehicle_car_suv' },
  { id: 'suv_brand_landrover', name: 'Land Rover', parentId: 'vehicle_car_suv' },

  // Level 5: SUV Models
  { id: 'suv_toyota_rav4', name: 'RAV4', parentId: 'suv_brand_toyota', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Toyota RAV4 SUV" }) },
  { id: 'suv_ford_explorer', name: 'Explorer', parentId: 'suv_brand_ford', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Ford Explorer SUV" }) },
  { id: 'suv_jeep_wrangler', name: 'Wrangler', parentId: 'suv_brand_jeep', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Jeep Wrangler SUV" }) },
  { id: 'suv_jeep_safari', name: 'Safari Jeep', parentId: 'suv_brand_jeep', jsonBlock: JSON.stringify({ type: "Vehicle", details: "an open-top safari Jeep" }) },
  { id: 'suv_landrover_defender', name: 'Defender', parentId: 'suv_brand_landrover', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Land Rover Defender SUV" }) },

  // Level 4: Sports Car Brands
  { id: 'sports_brand_porsche', name: 'Porsche', parentId: 'vehicle_car_sports' },
  { id: 'sports_brand_ferrari', name: 'Ferrari', parentId: 'vehicle_car_sports' },
  { id: 'sports_brand_chevrolet', name: 'Chevrolet', parentId: 'vehicle_car_sports' },
  
  // Level 5: Sports Car Models
  { id: 'sports_porsche_911', name: '911', parentId: 'sports_brand_porsche', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Porsche 911 sports car" }) },
  { id: 'sports_ferrari_488', name: '488 GTB', parentId: 'sports_brand_ferrari', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Ferrari 488 GTB sports car" }) },
  { id: 'sports_chevrolet_corvette', name: 'Corvette', parentId: 'sports_brand_chevrolet', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Chevrolet Corvette sports car" }) },

  // Level 4: Pickup Truck Brands
  { id: 'pickup_brand_ford', name: 'Ford', parentId: 'vehicle_car_pickup' },
  { id: 'pickup_brand_ram', name: 'Ram', parentId: 'vehicle_car_pickup' },
  { id: 'pickup_brand_chevrolet', name: 'Chevrolet', parentId: 'vehicle_car_pickup' },
  
  // Level 5: Pickup Truck Models
  { id: 'pickup_ford_f150', name: 'F-150', parentId: 'pickup_brand_ford', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Ford F-150 pickup truck" }) },
  { id: 'pickup_ram_1500', name: '1500', parentId: 'pickup_brand_ram', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Ram 1500 pickup truck" }) },
  { id: 'pickup_chevrolet_silverado', name: 'Silverado', parentId: 'pickup_brand_chevrolet', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Chevrolet Silverado pickup truck" }) },

  // Level 4: Luxury Car Brands
  { id: 'luxury_brand_rollsroyce', name: 'Rolls-Royce', parentId: 'vehicle_car_luxury' },
  { id: 'luxury_brand_bentley', name: 'Bentley', parentId: 'vehicle_car_luxury' },

  // Level 5: Luxury Car Models
  { id: 'luxury_rollsroyce_phantom', name: 'Phantom', parentId: 'luxury_brand_rollsroyce', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Rolls-Royce Phantom luxury car" }) },
  { id: 'luxury_bentley_continental', name: 'Continental GT', parentId: 'luxury_brand_bentley', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Bentley Continental GT luxury car" }) },
  
  // Level 4: Electric Car Brands
  { id: 'electric_brand_tesla', name: 'Tesla', parentId: 'vehicle_car_electric' },
  { id: 'electric_brand_rivian', name: 'Rivian', parentId: 'vehicle_car_electric' },
  
  // Level 5: Electric Car Models
  { id: 'electric_tesla_modelS', name: 'Model S', parentId: 'electric_brand_tesla', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Tesla Model S electric car" }) },
  { id: 'electric_rivian_r1t', name: 'R1T', parentId: 'electric_brand_rivian', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a Rivian R1T electric truck" }) },

  // --- Aircraft (Level 3+) ---
  { id: 'aircraft_helicopter', name: 'Helicopter', parentId: 'vehicle_aircraft' },
  
  // Level 4: Helicopter Models
  { id: 'helicopter_small', name: 'Small Helicopter', parentId: 'aircraft_helicopter', jsonBlock: JSON.stringify({ type: "Vehicle", details: "a small helicopter" }) },


  // --- Other Vehicles ---
  { id: 'vehicle_truck_white', name: 'White Generic Truck', parentId: 'vehicle_truck', jsonBlock: JSON.stringify({ type: "Vehicle", details: "A white truck with a cargo bay. Loaded with bags." }, null, 2) },
  { id: 'vehicle_emergency_ambulance', name: 'Ambulance', parentId: 'vehicle_emergency', jsonBlock: JSON.stringify({ type: "Vehicle", details: "An ambulance." }, null, 2) },
  { id: 'vehicle_emergency_policecar', name: 'Police Car', parentId: 'vehicle_emergency', jsonBlock: JSON.stringify({ type: "Vehicle", details: "A police car." }, null, 2) },
  { id: 'vehicle_emergency_firetruck', name: 'Fire Truck', parentId: 'vehicle_emergency', jsonBlock: JSON.stringify({ type: "Vehicle", details: "A fire truck." }, null, 2) },
  { id: 'vehicle_military_tank', name: 'Tank', parentId: 'vehicle_military', jsonBlock: JSON.stringify({ type: "Vehicle", details: "A military tank." }, null, 2) },
  { id: 'vehicle_construction_bulldozer', name: 'Bulldozer', parentId: 'vehicle_construction', jsonBlock: JSON.stringify({ type: "Vehicle", details: "A construction bulldozer." }, null, 2) },
  { id: 'vehicle_construction_crane', name: 'Crane', parentId: 'vehicle_construction', jsonBlock: JSON.stringify({ type: "Vehicle", details: "A construction crane." }, null, 2) },
  { id: 'vehicle_scifi_speeder', name: 'Speeder Bike', parentId: 'vehicle_scifi', jsonBlock: JSON.stringify({ type: "Vehicle", details: "A futuristic speeder bike." }, null, 2) },
  
  // --- WEAPONRY ---
  { id: 'weapon_melee', name: 'Melee', parentId: 'weaponry' },
  { id: 'weapon_ranged', name: 'Ranged', parentId: 'weaponry' },
  { id: 'weapon_scifi', name: 'Sci-Fi', parentId: 'weaponry' },
  { id: 'weapon_sword', name: 'Sword', parentId: 'weapon_melee', jsonBlock: JSON.stringify({ type: "Weapon", details: "A sharp, bladed sword." }, null, 2) },
  { id: 'weapon_axe', name: 'Axe', parentId: 'weapon_melee', jsonBlock: JSON.stringify({ type: "Weapon", details: "A heavy battle axe." }, null, 2) },
  { id: 'weapon_spear', name: 'Spear', parentId: 'weapon_melee', jsonBlock: JSON.stringify({ type: "Weapon", details: "A long spear with a pointed tip." }, null, 2) },
  { id: 'weapon_bow', name: 'Bow', parentId: 'weapon_ranged', jsonBlock: JSON.stringify({ type: "Weapon", details: "A wooden longbow." }, null, 2) },
  { id: 'weapon_crossbow', name: 'Crossbow', parentId: 'weapon_ranged', jsonBlock: JSON.stringify({ type: "Weapon", details: "A mechanical crossbow." }, null, 2) },
  { id: 'weapon_rifle', name: 'Rifle', parentId: 'weapon_ranged', jsonBlock: JSON.stringify({ type: "Weapon", details: "A modern assault rifle." }, null, 2) },
  { id: 'weapon_laser_pistol', name: 'Laser Pistol', parentId: 'weapon_scifi', jsonBlock: JSON.stringify({ type: "Weapon", details: "A compact laser pistol." }, null, 2) },
  { id: 'weapon_plasma_rifle', name: 'Plasma Rifle', parentId: 'weapon_scifi', jsonBlock: JSON.stringify({ type: "Weapon", details: "A large plasma rifle." }, null, 2) },

  // --- FURNITURE ---
  { id: 'furniture_seating', name: 'Seating', parentId: 'furniture' },
  { id: 'furniture_storage', name: 'Storage', parentId: 'furniture' },
  { id: 'furniture_table', name: 'Tables', parentId: 'furniture' },
  { id: 'furniture_bed', name: 'Beds', parentId: 'furniture' },
  { id: 'bed_double', name: 'Double Bed', parentId: 'furniture_bed', jsonBlock: JSON.stringify({ type: "Furniture", details: "A double bed." }, null, 2) },
  { id: 'pillow', name: 'Pillow', parentId: 'furniture_bed', jsonBlock: JSON.stringify({ type: "Furniture", details: "A pillow." }, null, 2) },
  { id: 'furniture_lighting', name: 'Lighting', parentId: 'furniture' },
  { id: 'furniture_chair', name: 'Chair', parentId: 'furniture_seating', jsonBlock: JSON.stringify({ type: "Furniture", details: "A simple wooden chair." }, null, 2) },
  { id: 'furniture_throne', name: 'Throne', parentId: 'furniture_seating', jsonBlock: JSON.stringify({ type: "Furniture", details: "An ornate, royal throne." }, null, 2) },
  { id: 'furniture_sofa', name: 'Sofa', parentId: 'furniture_seating', jsonBlock: JSON.stringify({ type: "Furniture", details: "A modern sofa." }, null, 2) },
  { id: 'furniture_bookshelf', name: 'Bookshelf', parentId: 'furniture_storage', jsonBlock: JSON.stringify({ type: "Furniture", details: "A tall wooden bookshelf." }, null, 2) },
  { id: 'furniture_desk', name: 'Desk', parentId: 'furniture_table', jsonBlock: JSON.stringify({ type: "Furniture", details: "An office desk." }, null, 2) },
  { id: 'table_bedside', name: 'Bedside Table', parentId: 'furniture_table', jsonBlock: JSON.stringify({ type: "Furniture", details: "A bedside table." }, null, 2) },

  // --- TECHNOLOGY ---
  { id: 'tech_communication', name: 'Communication', parentId: 'tech' },
  { id: 'tech_computing', name: 'Computing', parentId: 'tech' },
  { id: 'tech_scifi_gadget', name: 'Sci-Fi Gadgets', parentId: 'tech' },
  { id: 'tech_drone', name: 'Drones', parentId: 'tech' },
  { id: 'obj_1', name: 'Advanced Japanese Drone', parentId: 'tech_drone', jsonBlock: JSON.stringify({ type: "Object", details: "Sleek black military drone with multiple rotors and a central camera." }, null, 2) },
  { id: 'tech_smartphone', name: 'Smartphone', parentId: 'tech_communication', jsonBlock: JSON.stringify({ type: "Technology", details: "A modern smartphone." }, null, 2) },
  { id: 'tech_laptop', name: 'Laptop', parentId: 'tech_computing', jsonBlock: JSON.stringify({ type: "Technology", details: "A thin, powerful laptop." }, null, 2) },
  { id: 'tech_holopad', name: 'Holographic Pad', parentId: 'tech_scifi_gadget', jsonBlock: JSON.stringify({ type: "Gadget", details: "A handheld device that projects holograms." }, null, 2) },
  { id: 'tech_tricorder', name: 'Tricorder / Scanner', parentId: 'tech_scifi_gadget', jsonBlock: JSON.stringify({ type: "Gadget", details: "A device used for scanning and analysis." }, null, 2) },

  // --- CONTAINERS ---
  { id: 'container_briefcase', name: 'Briefcase', parentId: 'container', jsonBlock: JSON.stringify({ type: "Container", details: "A black, hardshell briefcase." }, null, 2) },
  { id: 'container_chest', name: 'Chest', parentId: 'container', jsonBlock: JSON.stringify({ type: "Container", details: "A wooden treasure chest." }, null, 2) },
  { id: 'container_barrel', name: 'Barrel', parentId: 'container', jsonBlock: JSON.stringify({ type: "Container", details: "A wooden barrel." }, null, 2) },
  { id: 'container_backpack', name: 'Backpack', parentId: 'container', jsonBlock: JSON.stringify({ type: "Container", details: "A hiking backpack." }, null, 2) },
  { id: 'container_crate', name: 'Crate', parentId: 'container', jsonBlock: JSON.stringify({ type: "Container", details: "A wooden shipping crate." }, null, 2) },

  // --- FANTASY & MAGICAL ITEMS ---
  { id: 'fantasy_potion', name: 'Potion', parentId: 'fantasy_item', jsonBlock: JSON.stringify({ type: "Magical Item", details: "A glowing potion in a glass vial." }, null, 2) },
  { id: 'fantasy_crystal', name: 'Crystal Ball', parentId: 'fantasy_item', jsonBlock: JSON.stringify({ type: "Magical Item", details: "A crystal ball for scrying." }, null, 2) },
  { id: 'fantasy_staff', name: 'Magic Staff', parentId: 'fantasy_item', jsonBlock: JSON.stringify({ type: "Magical Item", details: "A wizard's staff with a glowing gem." }, null, 2) },
  { id: 'fantasy_scroll', name: 'Ancient Scroll', parentId: 'fantasy_item', jsonBlock: JSON.stringify({ type: "Magical Item", details: "An old parchment scroll with magical runes." }, null, 2) },
  { id: 'fantasy_grimoire', name: 'Grimoire / Spellbook', parentId: 'fantasy_item', jsonBlock: JSON.stringify({ type: "Magical Item", details: "A leather-bound book of spells." }, null, 2) },
  { id: 'fantasy_amulet', name: 'Amulet', parentId: 'fantasy_item', jsonBlock: JSON.stringify({ type: "Magical Item", details: "A protective amulet on a chain." }, null, 2) },

  // --- EVERYDAY ITEMS ---
  { id: 'everyday_book', name: 'Book', parentId: 'everyday_item', jsonBlock: JSON.stringify({ type: "Everyday Item", details: "A hardcover book." }, null, 2) },
  { id: 'everyday_pen', name: 'Pen', parentId: 'everyday_item', jsonBlock: JSON.stringify({ type: "Everyday Item", details: "A simple ballpoint pen." }, null, 2) },
  { id: 'everyday_keys', name: 'Keys', parentId: 'everyday_item', jsonBlock: JSON.stringify({ type: "Everyday Item", details: "A set of keys on a ring." }, null, 2) },
  { id: 'everyday_wallet', name: 'Wallet', parentId: 'everyday_item', jsonBlock: JSON.stringify({ type: "Everyday Item", details: "A leather wallet." }, null, 2) },
  { id: 'everyday_mug', name: 'Coffee Mug', parentId: 'everyday_item', jsonBlock: JSON.stringify({ type: "Everyday Item", details: "A ceramic coffee mug." }, null, 2) },
  { id: 'everyday_umbrella', name: 'Umbrella', parentId: 'everyday_item', jsonBlock: JSON.stringify({ type: "Everyday Item", details: "A folded black umbrella." }, null, 2) },
  
  // --- MUSICAL INSTRUMENTS ---
  { id: 'music_guitar', name: 'Guitar', parentId: 'musical_instrument', jsonBlock: JSON.stringify({ type: "Musical Instrument", details: "An acoustic guitar." }, null, 2) },
  { id: 'music_piano', name: 'Piano', parentId: 'musical_instrument', jsonBlock: JSON.stringify({ type: "Musical Instrument", details: "A grand piano." }, null, 2) },
  { id: 'music_violin', name: 'Violin', parentId: 'musical_instrument', jsonBlock: JSON.stringify({ type: "Musical Instrument", details: "A wooden violin." }, null, 2) },
  
  // --- MEDICAL EQUIPMENT ---
  { id: 'medical_stethoscope', name: 'Stethoscope', parentId: 'medical_equipment', jsonBlock: JSON.stringify({ type: "Medical Equipment", details: "A doctor's stethoscope." }, null, 2) },
  { id: 'medical_syringe', name: 'Syringe', parentId: 'medical_equipment', jsonBlock: JSON.stringify({ type: "Medical Equipment", details: "A medical syringe." }, null, 2) },
  { id: 'medical_defibrillator', name: 'Defibrillator', parentId: 'medical_equipment', jsonBlock: JSON.stringify({ type: "Medical Equipment", details: "A portable defibrillator." }, null, 2) },
];
