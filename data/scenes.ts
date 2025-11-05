import { CascadingOption } from '../types';

export const sceneOptions: CascadingOption[] = [
    // --- Urban / Man-Made Environments ---
    { id: 'city', name: 'City', parentId: null },
    { id: 'town', name: 'Town', parentId: null },
    { id: 'village', name: 'Village', parentId: null },
    { id: 'indoors', name: 'Indoors', parentId: null },
    { id: 'roadside', name: 'Roadside', parentId: null },
    
    // --- Green / Rural Environments ---
    { id: 'countryside', name: 'Countryside', parentId: null },
    { id: 'forest', name: 'Forest', parentId: null },
    { id: 'jungle', name: 'Jungle', parentId: null },
    { id: 'farm', name: 'Farm', parentId: null },

    // --- Water Environments ---
    { id: 'sea', name: 'Sea / Ocean', parentId: null },
    { id: 'beach', name: 'Beach', parentId: null },
    { id: 'river', name: 'River', parentId: null },
    { id: 'lake', name: 'Lake', parentId: null },
    
    // --- Barren / Extreme Environments ---
    { id: 'desert', name: 'Desert', parentId: null },
    { id: 'mountains', name: 'Mountains', parentId: null },
    { id: 'tundra', name: 'Tundra / Arctic', parentId: null },
    { id: 'cave', name: 'Cave / Cavern', parentId: null },

    // --- GENRE ENVIRONMENTS ---
    { id: 'sci_fi', name: 'Sci-Fi', parentId: null },
    { id: 'fantasy', name: 'Fantasy', parentId: null },
    { id: 'historical', name: 'Historical', parentId: null },
    { id: 'post_apocalyptic', name: 'Post-Apocalyptic', parentId: null },
    { id: 'surreal', name: 'Surreal / Abstract', parentId: null },


    // --- LEVEL 2+ DETAILS ---

    // Level 2: Roadside
    { id: 'roadside_paved', name: 'Paved Roadside', parentId: 'roadside', jsonBlock: JSON.stringify({ environment: "Roadside", sublocation: "Paved Road" }, null, 2) },
    { id: 'roadside_gravel', name: 'Gravel Shoulder', parentId: 'roadside', jsonBlock: JSON.stringify({ environment: "Roadside", sublocation: "Gravel Shoulder" }, null, 2) },
    { id: 'roadside_fence_line', name: 'Fence Line', parentId: 'roadside' },

    // Level 3: Roadside -> Fence Line
    { id: 'roadside_fence_barbed', name: 'Barbed Wire Fence', parentId: 'roadside_fence_line', jsonBlock: JSON.stringify({ environment: "Roadside", sublocation: "Barbed Wire Fence" }, null, 2) },
    
    // Level 4: Roadside -> Fence Line -> Barbed Wire Fence
    { id: 'lake_shore', name: 'Lake Shore', parentId: 'roadside_fence_barbed' },

    // Level 5: Roadside -> Fence Line -> Barbed Wire Fence -> Lake Shore
    { id: 'lake_shore_sandy', name: 'Sandy Shore', parentId: 'lake_shore', jsonBlock: JSON.stringify({ environment: "Roadside", sublocation: "Barbed Wire Fence by a Sandy Lake Shore" }, null, 2) },
    { id: 'lake_shore_rocky', name: 'Rocky Shore', parentId: 'lake_shore', jsonBlock: JSON.stringify({ environment: "Roadside", sublocation: "Barbed Wire Fence by a Rocky Lake Shore" }, null, 2) },
    { id: 'lake_shore_reeds', name: 'Shore with Reeds', parentId: 'lake_shore', jsonBlock: JSON.stringify({ environment: "Roadside", sublocation: "Barbed Wire Fence by a Lake Shore with Reeds" }, null, 2) },
    
    { id: 'roadside_fence_wooden', name: 'Wooden Fence', parentId: 'roadside_fence_line', jsonBlock: JSON.stringify({ environment: "Roadside", sublocation: "Wooden Fence" }, null, 2) },
    { id: 'roadside_fence_stone', name: 'Stone Wall', parentId: 'roadside_fence_line', jsonBlock: JSON.stringify({ environment: "Roadside", sublocation: "Stone Wall" }, null, 2) },

    // Level 2: City
    { id: 'city_street', name: 'Street', parentId: 'city' },
    { id: 'city_downtown', name: 'Downtown / Financial District', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Downtown" }, null, 2) },
    { id: 'city_rooftops', name: 'Rooftops', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Rooftops" }, null, 2) },
    { id: 'city_suburbs', name: 'Suburbs / Residential Area', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Suburbs" }, null, 2) },
    { id: 'city_industrial', name: 'Industrial District', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Industrial District" }, null, 2) },
    { id: 'city_park', name: 'City Park', parentId: 'city' },
    { id: 'city_alley', name: 'Alleyway', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Alleyway" }, null, 2) },
    { id: 'city_market', name: 'Marketplace / Bazaar', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Marketplace" }, null, 2) },
    { id: 'city_slums', name: 'Slums / Shanty Town', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Slums" }, null, 2) },
    { id: 'city_waterfront', name: 'Waterfront / Harbor', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Waterfront" }, null, 2) },
    { id: 'city_cyberpunk', name: 'Cyberpunk Megacity', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Cyberpunk Megacity", lighting: "Neon, rainy" }, null, 2) },
    { id: 'city_construction', name: 'Construction Site', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Construction Site" }, null, 2) },
    { id: 'city_penthouse', name: 'Skyscraper Penthouse', parentId: 'city', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Skyscraper Penthouse" }, null, 2) },

    // Level 3: City Street
    { id: 'city_street_cobblestone', name: 'Cobblestone Street', parentId: 'city_street', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Cobblestone Street" }, null, 2) },
    { id: 'city_street_neon', name: 'Neon-lit Boulevard', parentId: 'city_street', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Neon-lit Boulevard" }, null, 2) },
    { id: 'city_street_residential', name: 'Quiet Residential Street', parentId: 'city_street', jsonBlock: JSON.stringify({ environment: "City", sublocation: "Residential Street" }, null, 2) },
    
    // Level 3: City Park
    { id: 'city_park_fountain', name: 'Fountain Area', parentId: 'city_park', jsonBlock: JSON.stringify({ environment: "City Park", sublocation: "Fountain" }, null, 2) },
    { id: 'city_park_playground', name: 'Playground', parentId: 'city_park', jsonBlock: JSON.stringify({ environment: "City Park", sublocation: "Playground" }, null, 2) },
    { id: 'city_park_gardens', name: 'Botanical Gardens', parentId: 'city_park', jsonBlock: JSON.stringify({ environment: "City Park", sublocation: "Botanical Gardens" }, null, 2) },
    { id: 'city_park_path', name: 'Paved Path', parentId: 'city_park', jsonBlock: JSON.stringify({ environment: "City Park", sublocation: "Paved Path" }, null, 2) },

    // Level 2: Town
    { id: 'town_main_street', name: 'Main Street', parentId: 'town', jsonBlock: JSON.stringify({ environment: "Town", sublocation: "Main Street" }, null, 2) },
    { id: 'town_square', name: 'Town Square', parentId: 'town', jsonBlock: JSON.stringify({ environment: "Town", sublocation: "Town Square" }, null, 2) },
    { id: 'town_residential', name: 'Residential Neighborhood', parentId: 'town', jsonBlock: JSON.stringify({ environment: "Town", sublocation: "Residential Neighborhood" }, null, 2) },
    { id: 'town_outskirts', name: 'Outskirts of Town', parentId: 'town', jsonBlock: JSON.stringify({ environment: "Town", sublocation: "Outskirts" }, null, 2) },
    { id: 'town_park', name: 'Town Park / Playground', parentId: 'town', jsonBlock: JSON.stringify({ environment: "Town", sublocation: "Park" }, null, 2) },
    
    // Level 2: Village
    { id: 'village_center', name: 'Village Center / Green', parentId: 'village', jsonBlock: JSON.stringify({ environment: "Village", sublocation: "Village Center" }, null, 2) },
    { id: 'village_thatched_cottages', name: 'Thatched Cottages Street', parentId: 'village', jsonBlock: JSON.stringify({ environment: "Village", sublocation: "Cottage Street" }, null, 2) },
    { id: 'village_blacksmith', name: 'Blacksmith\'s Forge', parentId: 'village', jsonBlock: JSON.stringify({ environment: "Village", sublocation: "Blacksmith" }, null, 2) },
    { id: 'village_water_mill', name: 'Water Mill', parentId: 'village', jsonBlock: JSON.stringify({ environment: "Village", sublocation: "Water Mill" }, null, 2) },
    { id: 'village_outskirts', name: 'Village Outskirts', parentId: 'village', jsonBlock: JSON.stringify({ environment: "Village", sublocation: "Outskirts" }, null, 2) },
    
    // Level 2: Indoors
    { id: 'indoors_residential', name: 'Residential', parentId: 'indoors' },
    { id: 'indoors_commercial', name: 'Commercial', parentId: 'indoors' },
    { id: 'indoors_public', name: 'Public Building', parentId: 'indoors' },
    { id: 'indoors_industrial', name: 'Industrial / Utility', parentId: 'indoors' },
    { id: 'indoors_transport', name: 'Transportation Hub', parentId: 'indoors' },

    // Level 3: Indoors -> Residential
    { id: 'indoors_res_living_room', name: 'Living Room', parentId: 'indoors_residential', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Living Room" }, null, 2) },
    { id: 'indoors_res_kitchen', name: 'Kitchen', parentId: 'indoors_residential', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Kitchen" }, null, 2) },
    { id: 'indoors_res_bedroom', name: 'Bedroom', parentId: 'indoors_residential', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Bedroom" }, null, 2) },
    { id: 'indoors_res_bedroom_bed', name: 'On a Bed', parentId: 'indoors_res_bedroom', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Bedroom, on a bed" }, null, 2) },
    { id: 'indoors_res_mansion', name: 'Mansion Interior', parentId: 'indoors_residential', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Mansion Interior" }, null, 2) },
    { id: 'indoors_res_basement', name: 'Basement', parentId: 'indoors_residential', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Basement" }, null, 2) },
    { id: 'indoors_res_attic', name: 'Attic', parentId: 'indoors_residential', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Attic" }, null, 2) },
    { id: 'indoors_res_home_office', name: 'Home Office', parentId: 'indoors_residential', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Home Office" }, null, 2) },
    // Level 3: Indoors -> Commercial
    { id: 'indoors_com_office', name: 'Office', parentId: 'indoors_commercial', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Office" }, null, 2) },
    { id: 'indoors_com_mall', name: 'Shopping Mall', parentId: 'indoors_commercial', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Shopping Mall" }, null, 2) },
    { id: 'indoors_com_restaurant', name: 'Restaurant / Cafe', parentId: 'indoors_commercial', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Restaurant" }, null, 2) },
    { id: 'indoors_com_nightclub', name: 'Nightclub / Bar', parentId: 'indoors_commercial', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Nightclub" }, null, 2) },
    { id: 'indoors_com_hotel_lobby', name: 'Hotel Lobby', parentId: 'indoors_commercial', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Hotel Lobby" }, null, 2) },
    { id: 'indoors_com_cinema', name: 'Cinema / Theater', parentId: 'indoors_commercial', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Cinema" }, null, 2) },
    { id: 'indoors_com_bank_vault', name: 'Bank Vault', parentId: 'indoors_commercial', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Bank Vault" }, null, 2) },
    // Level 3: Indoors -> Public Building
    { id: 'indoors_pub_library', name: 'Library', parentId: 'indoors_public', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Library" }, null, 2) },
    { id: 'indoors_pub_museum', name: 'Museum', parentId: 'indoors_public', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Museum" }, null, 2) },
    { id: 'indoors_pub_hospital', name: 'Hospital', parentId: 'indoors_public', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Hospital" }, null, 2) },
    { id: 'indoors_pub_school', name: 'School / University', parentId: 'indoors_public', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "School" }, null, 2) },
    { id: 'indoors_pub_courthouse', name: 'Courthouse', parentId: 'indoors_public', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Courthouse" }, null, 2) },
    { id: 'indoors_pub_church', name: 'Church / Temple', parentId: 'indoors_public', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Church / Temple" }, null, 2) },
    // Level 3: Indoors -> Industrial
    { id: 'indoors_ind_warehouse', name: 'Warehouse', parentId: 'indoors_industrial', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Warehouse" }, null, 2) },
    { id: 'indoors_ind_factory', name: 'Factory Floor', parentId: 'indoors_industrial', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Factory" }, null, 2) },
    { id: 'indoors_ind_power_plant', name: 'Power Plant', parentId: 'indoors_industrial', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Power Plant" }, null, 2) },
    // Level 3: Indoors -> Transportation
    { id: 'indoors_trans_airport', name: 'Airport Terminal', parentId: 'indoors_transport', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Airport" }, null, 2) },
    { id: 'indoors_trans_subway', name: 'Subway Station', parentId: 'indoors_transport', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Subway Station" }, null, 2) },
    { id: 'indoors_trans_subway_car', name: 'Inside Subway Car', parentId: 'indoors_transport', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Subway Car" }, null, 2) },
    { id: 'indoors_trans_train_station', name: 'Train Station', parentId: 'indoors_transport', jsonBlock: JSON.stringify({ environment: "Indoors", sublocation: "Train Station" }, null, 2) },

    // Level 2: Countryside
    { id: 'countryside_open_road', name: 'Open Road', parentId: 'countryside' },
    { id: 'countryside_hills', name: 'Rolling Hills', parentId: 'countryside', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Rolling Hills" }, null, 2) },
    { id: 'countryside_meadow', name: 'Meadow / Field', parentId: 'countryside', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Meadow" }, null, 2) },
    { id: 'countryside_riverbank', name: 'Riverbank', parentId: 'countryside', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Riverbank" }, null, 2) },
    { id: 'countryside_valley', name: 'Valley', parentId: 'countryside', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Valley" }, null, 2) },
    { id: 'countryside_farmland', name: 'Farmland', parentId: 'countryside', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Farmland" }, null, 2) },
    { id: 'countryside_fence_line', name: 'Fence Line', parentId: 'countryside' },

    // Level 3: Countryside -> Open Road
    { id: 'countryside_open_road_asphalt', name: 'Asphalt Road', parentId: 'countryside_open_road', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Open Road", roadModeration: "Asphalt" }, null, 2) },
    { id: 'countryside_open_road_dirt', name: 'Dirt Road', parentId: 'countryside_open_road', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Dirt Road", roadModeration: "Dirt" }, null, 2) },
    { id: 'countryside_open_road_gravel', name: 'Gravel Road', parentId: 'countryside_open_road', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Gravel Road", roadModeration: "Gravel" }, null, 2) },
    
    // Level 3: Countryside -> Fence Line
    { id: 'countryside_fence_barbed', name: 'Barbed Wire Fence', parentId: 'countryside_fence_line', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Barbed Wire Fence" }, null, 2) },
    { id: 'countryside_fence_wooden', name: 'Wooden Fence', parentId: 'countryside_fence_line', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Wooden Fence" }, null, 2) },
    { id: 'countryside_fence_stone', name: 'Stone Wall', parentId: 'countryside_fence_line', jsonBlock: JSON.stringify({ environment: "Countryside", sublocation: "Stone Wall" }, null, 2) },

    // Level 2: Forest
    { id: 'forest_path', name: 'Winding Path', parentId: 'forest' },
    { id: 'forest_clearing', name: 'Clearing', parentId: 'forest', jsonBlock: JSON.stringify({ environment: "Forest", sublocation: "Clearing" }, null, 2) },
    { id: 'forest_pine', name: 'Pine Forest', parentId: 'forest', jsonBlock: JSON.stringify({ environment: "Forest", sublocation: "Pine Forest" }, null, 2) },
    { id: 'forest_deciduous', name: 'Deciduous Forest', parentId: 'forest', jsonBlock: JSON.stringify({ environment: "Forest", sublocation: "Deciduous Forest" }, null, 2) },
    { id: 'forest_redwood', name: 'Redwood Forest', parentId: 'forest', jsonBlock: JSON.stringify({ environment: "Forest", sublocation: "Redwood Forest" }, null, 2) },
    { id: 'forest_swamp', name: 'Swampy Forest / Bayou', parentId: 'forest', jsonBlock: JSON.stringify({ environment: "Forest", sublocation: "Swamp" }, null, 2) },
    { id: 'forest_bamboo', name: 'Bamboo Forest', parentId: 'forest', jsonBlock: JSON.stringify({ environment: "Forest", sublocation: "Bamboo Forest" }, null, 2) },

    // Level 3: Forest -> Winding Path
    { id: 'forest_path_overgrown', name: 'Overgrown Trail', parentId: 'forest_path', jsonBlock: JSON.stringify({ environment: "Forest", sublocation: "Overgrown Trail" }, null, 2) },
    { id: 'forest_path_rocky', name: 'Rocky Path', parentId: 'forest_path', jsonBlock: JSON.stringify({ environment: "Forest", sublocation: "Rocky Path" }, null, 2) },
    { id: 'forest_path_dirt', name: 'Dirt Path', parentId: 'forest_path', jsonBlock: JSON.stringify({ environment: "Forest", sublocation: "Dirt Path" }, null, 2) },

    // Level 2: Jungle
    { id: 'jungle_dense', name: 'Dense Undergrowth', parentId: 'jungle', jsonBlock: JSON.stringify({ environment: "Jungle", sublocation: "Dense Undergrowth" }, null, 2) },
    { id: 'jungle_canopy', name: 'Treetop Canopy', parentId: 'jungle', jsonBlock: JSON.stringify({ environment: "Jungle", sublocation: "Treetop Canopy" }, null, 2) },
    { id: 'jungle_river', name: 'Jungle River', parentId: 'jungle', jsonBlock: JSON.stringify({ environment: "Jungle", sublocation: "River" }, null, 2) },
    { id: 'jungle_ruins', name: 'Ancient Temple Ruins', parentId: 'jungle', jsonBlock: JSON.stringify({ environment: "Jungle", sublocation: "Temple Ruins" }, null, 2) },
    { id: 'jungle_waterfall', name: 'Waterfall and Lagoon', parentId: 'jungle', jsonBlock: JSON.stringify({ environment: "Jungle", sublocation: "Waterfall" }, null, 2) },
    
    // Level 2: Farm
    { id: 'farm_fields', name: 'Crop Fields', parentId: 'farm' },
    { id: 'farm_barn', name: 'Barn', parentId: 'farm', jsonBlock: JSON.stringify({ environment: "Farm", sublocation: "Barn" }, null, 2) },
    { id: 'farm_farmhouse', name: 'Farmhouse', parentId: 'farm', jsonBlock: JSON.stringify({ environment: "Farm", sublocation: "Farmhouse" }, null, 2) },
    { id: 'farm_orchard', name: 'Orchard', parentId: 'farm', jsonBlock: JSON.stringify({ environment: "Farm", sublocation: "Orchard" }, null, 2) },
    { id: 'farm_pasture', name: 'Pasture', parentId: 'farm', jsonBlock: JSON.stringify({ environment: "Farm", sublocation: "Pasture" }, null, 2) },

    // Level 3: Farm -> Crop Fields
    { id: 'farm_fields_corn', name: 'Cornfield', parentId: 'farm_fields', jsonBlock: JSON.stringify({ environment: "Farm", sublocation: "Cornfield" }, null, 2) },
    { id: 'farm_fields_wheat', name: 'Wheatfield', parentId: 'farm_fields', jsonBlock: JSON.stringify({ environment: "Farm", sublocation: "Wheatfield" }, null, 2) },
    { id: 'farm_fields_vineyard', name: 'Vineyard', parentId: 'farm_fields', jsonBlock: JSON.stringify({ environment: "Farm", sublocation: "Vineyard" }, null, 2) },

    // Level 2: Sea / Ocean
    { id: 'sea_open', name: 'Open Ocean / High Seas', parentId: 'sea', jsonBlock: JSON.stringify({ environment: "Ocean", sublocation: "Open Ocean" }, null, 2) },
    { id: 'sea_reef', name: 'Coral Reef', parentId: 'sea', jsonBlock: JSON.stringify({ environment: "Ocean", sublocation: "Coral Reef" }, null, 2) },
    { id: 'sea_trench', name: 'Underwater Trench / Abyss', parentId: 'sea', jsonBlock: JSON.stringify({ environment: "Ocean", sublocation: "Underwater Trench" }, null, 2) },
    { id: 'sea_shipwreck', name: 'Shipwreck', parentId: 'sea', jsonBlock: JSON.stringify({ environment: "Ocean", sublocation: "Shipwreck" }, null, 2) },
    { id: 'sea_kelp_forest', name: 'Underwater Kelp Forest', parentId: 'sea', jsonBlock: JSON.stringify({ environment: "Ocean", sublocation: "Kelp Forest" }, null, 2) },
    { id: 'sea_iceberg_field', name: 'Iceberg Field', parentId: 'sea', jsonBlock: JSON.stringify({ environment: "Ocean", sublocation: "Iceberg Field" }, null, 2) },
    
    // Level 2: Beach
    { id: 'beach_sandy', name: 'Sandy Tropical Beach', parentId: 'beach' },
    { id: 'beach_rocky', name: 'Rocky Coastline / Cliffs', parentId: 'beach', jsonBlock: JSON.stringify({ environment: "Beach", sublocation: "Rocky Coastline" }, null, 2) },
    { id: 'beach_volcanic', name: 'Volcanic Black Sand Beach', parentId: 'beach', jsonBlock: JSON.stringify({ environment: "Beach", sublocation: "Volcanic Black Sand" }, null, 2) },
    { id: 'beach_cove', name: 'Secluded Cove', parentId: 'beach', jsonBlock: JSON.stringify({ environment: "Beach", sublocation: "Secluded Cove" }, null, 2) },
    { id: 'beach_boardwalk', name: 'Beach with Boardwalk/Pier', parentId: 'beach', jsonBlock: JSON.stringify({ environment: "Beach", sublocation: "Boardwalk" }, null, 2) },

    // Level 3: Beach -> Sandy Tropical Beach
    { id: 'beach_sandy_palms', name: 'With Palm Trees', parentId: 'beach_sandy', jsonBlock: JSON.stringify({ environment: "Beach", sublocation: "Sandy Tropical Beach with Palm Trees" }, null, 2) },
    { id: 'beach_sandy_tide_pools', name: 'With Tide Pools', parentId: 'beach_sandy', jsonBlock: JSON.stringify({ environment: "Beach", sublocation: "Sandy Beach with Tide Pools" }, null, 2) },
    { id: 'beach_sandy_dunes', name: 'With Sand Dunes', parentId: 'beach_sandy', jsonBlock: JSON.stringify({ environment: "Beach", sublocation: "Sandy Beach with Dunes" }, null, 2) },

    // Level 2: River
    { id: 'river_bank', name: 'Calm Riverbank', parentId: 'river', jsonBlock: JSON.stringify({ environment: "River", sublocation: "Riverbank" }, null, 2) },
    { id: 'river_rapids', name: 'White-water Rapids', parentId: 'river', jsonBlock: JSON.stringify({ environment: "River", sublocation: "Rapids" }, null, 2) },
    { id: 'river_waterfall', name: 'Waterfall', parentId: 'river', jsonBlock: JSON.stringify({ environment: "River", sublocation: "Waterfall" }, null, 2) },
    { id: 'river_delta', name: 'River Delta / Estuary', parentId: 'river', jsonBlock: JSON.stringify({ environment: "River", sublocation: "Delta" }, null, 2) },
    { id: 'river_canyon', name: 'River through a Canyon', parentId: 'river', jsonBlock: JSON.stringify({ environment: "River", sublocation: "Canyon" }, null, 2) },
    
    // Level 2: Lake
    { id: 'lake_dock', name: 'Wooden Dock', parentId: 'lake', jsonBlock: JSON.stringify({ environment: "Lake", sublocation: "Wooden Dock" }, null, 2) },
    { id: 'lake_middle', name: 'Middle of the Lake', parentId: 'lake', jsonBlock: JSON.stringify({ environment: "Lake", sublocation: "Open Water" }, null, 2) },
    { id: 'lake_frozen', name: 'Frozen Lake', parentId: 'lake', jsonBlock: JSON.stringify({ environment: "Lake", sublocation: "Frozen Surface" }, null, 2) },
    
    // Level 2: Desert
    { id: 'desert_dunes', name: 'Sand Dunes', parentId: 'desert', jsonBlock: JSON.stringify({ environment: "Desert", sublocation: "Sand Dunes" }, null, 2) },
    { id: 'desert_oasis', name: 'Oasis', parentId: 'desert', jsonBlock: JSON.stringify({ environment: "Desert", sublocation: "Oasis" }, null, 2) },
    { id: 'desert_salt_flats', name: 'Salt Flats', parentId: 'desert', jsonBlock: JSON.stringify({ environment: "Desert", sublocation: "Salt Flats" }, null, 2) },
    { id: 'desert_mesa', name: 'Mesa / Butte Landscape', parentId: 'desert', jsonBlock: JSON.stringify({ environment: "Desert", sublocation: "Mesa Landscape" }, null, 2) },
    { id: 'desert_canyon', name: 'Sandstone Canyon', parentId: 'desert', jsonBlock: JSON.stringify({ environment: "Desert", sublocation: "Canyon" }, null, 2) },
    { id: 'desert_rocky', name: 'Rocky Desert / Badlands', parentId: 'desert', jsonBlock: JSON.stringify({ environment: "Desert", sublocation: "Rocky Desert" }, null, 2) },

    // Level 2: Mountains
    { id: 'mountains_peak', name: 'Peak/Summit', parentId: 'mountains' },
    { id: 'mountains_pass', name: 'Mountain Pass', parentId: 'mountains', jsonBlock: JSON.stringify({ environment: "Mountains", sublocation: "Mountain Pass" }, null, 2) },
    { id: 'mountains_foothills', name: 'Foothills', parentId: 'mountains', jsonBlock: JSON.stringify({ environment: "Mountains", sublocation: "Foothills" }, null, 2) },
    { id: 'mountains_alpine_meadow', name: 'Alpine Meadow', parentId: 'mountains', jsonBlock: JSON.stringify({ environment: "Mountains", sublocation: "Alpine Meadow" }, null, 2) },
    { id: 'mountains_glacier', name: 'Glacier', parentId: 'mountains', jsonBlock: JSON.stringify({ environment: "Mountains", sublocation: "Glacier" }, null, 2) },
    { id: 'mountains_volcano', name: 'Volcanic Crater', parentId: 'mountains', jsonBlock: JSON.stringify({ environment: "Mountains", sublocation: "Volcano" }, null, 2) },
    
    // Level 3: Mountains -> Peak/Summit
    { id: 'mountains_peak_rocky', name: 'Rocky Outcrop', parentId: 'mountains_peak', jsonBlock: JSON.stringify({ environment: "Mountains", sublocation: "Rocky Peak" }, null, 2) },
    { id: 'mountains_peak_snowy', name: 'Snowy Peak', parentId: 'mountains_peak', jsonBlock: JSON.stringify({ environment: "Mountains", sublocation: "Snow-capped Peak" }, null, 2) },
    { id: 'mountains_peak_ledge', name: 'Narrow Ledge', parentId: 'mountains_peak', jsonBlock: JSON.stringify({ environment: "Mountains", sublocation: "Narrow Ledge on Peak" }, null, 2) },

    // Level 2: Tundra / Arctic
    { id: 'tundra_frozen_plains', name: 'Frozen Plains', parentId: 'tundra', jsonBlock: JSON.stringify({ environment: "Tundra", sublocation: "Frozen Plains" }, null, 2) },
    { id: 'tundra_ice_cave', name: 'Ice Cave', parentId: 'tundra', jsonBlock: JSON.stringify({ environment: "Tundra", sublocation: "Ice Cave" }, null, 2) },
    { id: 'tundra_ice_floe', name: 'Ice Floe / Pack Ice', parentId: 'tundra', jsonBlock: JSON.stringify({ environment: "Tundra", sublocation: "Ice Floe" }, null, 2) },
    { id: 'tundra_polar_station', name: 'Polar Research Station', parentId: 'tundra', jsonBlock: JSON.stringify({ environment: "Tundra", sublocation: "Polar Station" }, null, 2) },
    { id: 'tundra_fjord', name: 'Fjord', parentId: 'tundra', jsonBlock: JSON.stringify({ environment: "Tundra", sublocation: "Fjord" }, null, 2) },
    
    // Level 2: Cave / Cavern
    { id: 'cave_crystal', name: 'Crystal Cave', parentId: 'cave', jsonBlock: JSON.stringify({ environment: "Cave", sublocation: "Crystal Cave" }, null, 2) },
    { id: 'cave_underground_river', name: 'Underground River', parentId: 'cave', jsonBlock: JSON.stringify({ environment: "Cave", sublocation: "Underground River" }, null, 2) },
    { id: 'cave_lava_tube', name: 'Lava Tube', parentId: 'cave', jsonBlock: JSON.stringify({ environment: "Cave", sublocation: "Lava Tube" }, null, 2) },
    { id: 'cave_limestone', name: 'Limestone Cavern', parentId: 'cave', jsonBlock: JSON.stringify({ environment: "Cave", sublocation: "Limestone Cavern" }, null, 2) },
    { id: 'cave_ice_cavern', name: 'Ice Cavern', parentId: 'cave', jsonBlock: JSON.stringify({ environment: "Cave", sublocation: "Ice Cavern" }, null, 2) },

    // --- Sci-Fi Details ---
    { id: 'scifi_station', name: 'Space Station', parentId: 'sci_fi' },
    { id: 'scifi_planet', name: 'Alien Planet', parentId: 'sci_fi' },
    { id: 'scifi_ship_interior', name: 'Starship Interior', parentId: 'sci_fi' },
    // Level 3
    { id: 'scifi_station_bridge', name: 'Bridge / Command Center', parentId: 'scifi_station', jsonBlock: JSON.stringify({ environment: "Space Station", sublocation: "Bridge" }, null, 2) },
    { id: 'scifi_station_hangar', name: 'Hangar Bay', parentId: 'scifi_station', jsonBlock: JSON.stringify({ environment: "Space Station", sublocation: "Hangar Bay" }, null, 2) },
    { id: 'scifi_station_cryo', name: 'Cryo-Chamber', parentId: 'scifi_station', jsonBlock: JSON.stringify({ environment: "Space Station", sublocation: "Cryo-Chamber" }, null, 2) },
    { id: 'scifi_planet_jungle', name: 'Bioluminescent Jungle', parentId: 'scifi_planet', jsonBlock: JSON.stringify({ environment: "Alien Planet", sublocation: "Bioluminescent Jungle" }, null, 2) },
    { id: 'scifi_planet_desert', name: 'Crystalline Desert', parentId: 'scifi_planet', jsonBlock: JSON.stringify({ environment: "Alien Planet", sublocation: "Crystalline Desert" }, null, 2) },
    { id: 'scifi_ship_engine', name: 'Engine Room', parentId: 'scifi_ship_interior', jsonBlock: JSON.stringify({ environment: "Starship Interior", sublocation: "Engine Room" }, null, 2) },
    { id: 'scifi_ship_teleporter', name: 'Teleporter Room', parentId: 'scifi_ship_interior', jsonBlock: JSON.stringify({ environment: "Starship Interior", sublocation: "Teleporter Room" }, null, 2) },

    // --- Fantasy Details ---
    { id: 'fantasy_castle', name: 'Castle', parentId: 'fantasy' },
    { id: 'fantasy_forest', name: 'Enchanted Forest', parentId: 'fantasy' },
    { id: 'fantasy_ruins', name: 'Ancient Ruins', parentId: 'fantasy' },
    { id: 'fantasy_dungeon', name: 'Dungeon', parentId: 'fantasy' },
    // Level 3
    { id: 'fantasy_castle_throne', name: 'Throne Room', parentId: 'fantasy_castle', jsonBlock: JSON.stringify({ environment: "Castle", sublocation: "Throne Room" }, null, 2) },
    { id: 'fantasy_forest_mushroom', name: 'Glowing Mushroom Cave', parentId: 'fantasy_forest', jsonBlock: JSON.stringify({ environment: "Enchanted Forest", sublocation: "Glowing Mushroom Cave" }, null, 2) },
    { id: 'fantasy_ruins_temple', name: 'Forgotten Temple', parentId: 'fantasy_ruins', jsonBlock: JSON.stringify({ environment: "Ancient Ruins", sublocation: "Forgotten Temple" }, null, 2) },
    { id: 'fantasy_dungeon_lair', name: "Dragon's Lair", parentId: 'fantasy_dungeon', jsonBlock: JSON.stringify({ environment: "Dungeon", sublocation: "Dragon's Lair" }, null, 2) },
    { id: 'fantasy_alchemist_lab', name: 'Alchemist\'s Lab', parentId: 'fantasy', jsonBlock: JSON.stringify({ environment: "Fantasy", sublocation: "Alchemist's Lab" }, null, 2) },
    { id: 'fantasy_elf_city', name: 'Elven City', parentId: 'fantasy', jsonBlock: JSON.stringify({ environment: "Fantasy", sublocation: "Elven City" }, null, 2) },
    
    // --- Historical Details ---
    { id: 'historical_rome', name: 'Ancient Rome', parentId: 'historical' },
    { id: 'historical_egypt', name: 'Ancient Egypt', parentId: 'historical' },
    { id: 'historical_medieval', name: 'Medieval Europe', parentId: 'historical' },
    { id: 'historical_japan', name: 'Feudal Japan', parentId: 'historical' },
    // Level 3
    { id: 'historical_rome_colosseum', name: 'Colosseum', parentId: 'historical_rome', jsonBlock: JSON.stringify({ environment: "Ancient Rome", sublocation: "Colosseum" }, null, 2) },
    { id: 'historical_egypt_pyramid', name: 'Inside a Pyramid', parentId: 'historical_egypt', jsonBlock: JSON.stringify({ environment: "Ancient Egypt", sublocation: "Pyramid Interior" }, null, 2) },
    { id: 'historical_medieval_village', name: 'Village Marketplace', parentId: 'historical_medieval', jsonBlock: JSON.stringify({ environment: "Medieval Europe", sublocation: "Village Marketplace" }, null, 2) },
    { id: 'historical_japan_dojo', name: 'Samurai Dojo', parentId: 'historical_japan', jsonBlock: JSON.stringify({ environment: "Feudal Japan", sublocation: "Samurai Dojo" }, null, 2) },

    // --- Post-Apocalyptic Details ---
    { id: 'post_apoc_city', name: 'Ruined City', parentId: 'post_apocalyptic' },
    { id: 'post_apoc_wasteland', name: 'Wasteland', parentId: 'post_apocalyptic' },
    { id: 'post_apoc_bunker', name: 'Underground Bunker', parentId: 'post_apocalyptic' },
    // Level 3
    { id: 'post_apoc_city_street', name: 'Overgrown Street', parentId: 'post_apoc_city', jsonBlock: JSON.stringify({ environment: "Ruined City", sublocation: "Overgrown Street" }, null, 2) },
    { id: 'post_apoc_wasteland_outpost', name: 'Scavenger Outpost', parentId: 'post_apoc_wasteland', jsonBlock: JSON.stringify({ environment: "Wasteland", sublocation: "Scavenger Outpost" }, null, 2) },

    // --- Surreal / Abstract Details ---
    { id: 'surreal_dreamscape', name: 'Dreamscape', parentId: 'surreal', jsonBlock: JSON.stringify({ environment: "Surreal", sublocation: "Dreamscape" }, null, 2) },
    { id: 'surreal_fractal', name: 'Fractal Realm', parentId: 'surreal', jsonBlock: JSON.stringify({ environment: "Surreal", sublocation: "Fractal Realm" }, null, 2) },
    { id: 'surreal_void', name: 'The Void', parentId: 'surreal', jsonBlock: JSON.stringify({ environment: "Surreal", sublocation: "The Void" }, null, 2) },

];
