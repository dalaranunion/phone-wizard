import "./assets/css/App.css";
import { useState, useRef } from "react";
import RadioButton from "./components/ui-radio.jsx";
import ProductCC from "./components/product--main.jsx";
import { questions } from "./database/questions-array.js";
import LeftArrow from "./components/left-arrow.jsx";
import products from "./database/plants.json";

const testProd = [
  {
    id: 1,
    name: "Snake Plant",
    scientific_name: "Sansevieria trifasciata",
    common_names: ["Mother-in-law's tongue"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A hardy, low-maintenance plant with tall, stiff leaves. Excellent for air purification.",
    plant_purpose: 0,
    price: 20.99,
    image_url: "snake_plant.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Water sparingly, allow soil to dry between watering",
    best_position: "Low to bright indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    scientific_name: "Ficus lyrata",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A popular indoor tree with large, glossy leaves. It's a favorite for interior decoration.",
    plant_purpose: 1,
    price: 49.99,
    image_url: "fiddle_leaf_fig.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Requires bright, indirect light, and regular watering when the top inch of soil is dry.",
    best_position: "Bright, indirect light",
    light_requirements: 2,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 1,
    space_requirement: 2,
  },
  {
    id: 3,
    name: "Peace Lily",
    scientific_name: "Spathiphyllum wallisii",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "An elegant plant with white flowers and dark green leaves. It's known for its air-purifying properties.",
    plant_purpose: 0,
    price: 18.99,
    image_url: "peace_lily.jpg",
    classification: "Angiosperms",
    cause_alergies: 1,
    flowering_season: "Spring to early summer",
    watering_instructions: "Keep soil consistently moist, avoid overwatering.",
    best_position: "Low to medium light",
    light_requirements: 1,
    fragrant: 1,
    sensitive_to_alkaline_water: 1,
    pet_friendly: 1,
    care_level: 1,
    space_requirement: 1,
  },
  {
    id: 4,
    name: "Monstera Deliciosa",
    scientific_name: "Monstera deliciosa",
    common_names: ["Swiss cheese plant"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A trendy plant with unique split leaves. It's easy to care for and grows quickly.",
    plant_purpose: 1,
    price: 24.99,
    image_url: "monstera_deliciosa.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Thrives in bright, indirect light, and water when the top inch of soil is dry.",
    best_position: "Bright, indirect light",
    light_requirements: 2,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 2,
  },
  {
    id: 5,
    name: "Aloe Vera",
    scientific_name: "Aloe barbadensis miller",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A succulent with fleshy leaves that's known for its healing properties. It's easy to care for.",
    plant_purpose: 1,
    price: 12.99,
    image_url: "aloe_vera.jpg",
    classification: "Succulents",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Allow soil to dry completely between watering.",
    best_position: "Bright, indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 1,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
  },
  {
    id: 6,
    name: "Spider Plant",
    scientific_name: "Chlorophytum comosum",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A popular and easy-to-care-for plant with long, arching leaves and small white flowers.",
    plant_purpose: 1,
    price: 16.99,
    image_url: "spider_plant.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Spring to early summer",
    watering_instructions: "Keep soil consistently moist but not waterlogged.",
    best_position: "Bright, indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
  },
  {
    id: 7,
    name: "Pothos",
    scientific_name: "Epipremnum aureum",
    common_names: ["Devil's Ivy", "Golden Pothos"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A versatile and attractive trailing vine with heart-shaped leaves. It's low-maintenance and great for beginners.",
    plant_purpose: 1,
    price: 14.99,
    image_url: "pothos.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Allow soil to partially dry between watering.",
    best_position: "Low to bright indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 0,
    space_requirement: 1,
  },
  {
    id: 8,
    name: "Rubber Plant",
    scientific_name: "Ficus elastica",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A striking indoor tree with large, dark green, and glossy leaves. It's a bold addition to any room.",
    plant_purpose: 1,
    price: 29.99,
    image_url: "rubber_plant.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Water when the top inch of soil is dry.",
    best_position: "Medium to bright indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 1,
    space_requirement: 1,
  },
  {
    id: 9,
    name: "Lavender",
    scientific_name: "Lavandula angustifolia",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A fragrant herb known for its beautiful lavender-colored flowers and calming aroma.",
    plant_purpose: 2,
    price: 21.99,
    image_url: "lavender.jpg",
    classification: "Angiosperms",
    cause_alergies: 1,
    flowering_season: "Summer",
    watering_instructions:
      "Keep soil evenly moist, but avoid waterlogged conditions.",
    best_position: "Bright, direct sunlight",
    light_requirements: 2,
    fragrant: 1,
    sensitive_to_alkaline_water: 1,
    pet_friendly: 0,
    care_level: 1,
    space_requirement: 2,
  },
  {
    id: 10,
    name: "Jade Plant",
    scientific_name: "Crassula ovata",
    common_names: ["Money Plant"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A popular and symbolic succulent with thick, fleshy leaves. It's believed to bring prosperity.",
    plant_purpose: 1,
    price: 18.99,
    image_url: "jade_plant.jpg",
    classification: "Succulents",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Allow the soil to dry between watering, water sparingly.",
    best_position: "Bright, indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
  },
  {
    id: 11,
    name: "Schefflera",
    scientific_name: "Schefflera actinophylla",
    common_names: ["Umbrella Tree"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A lush and tropical-looking plant with glossy, palmate leaves. It adds a touch of the jungle to your home.",
    plant_purpose: 1,
    price: 23.99,
    image_url: "schefflera.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Water when the top inch of soil is dry.",
    best_position: "Bright, indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
  },
  {
    id: 12,
    name: "ZZ Plant",
    scientific_name: "Zamioculcas zamiifolia",
    common_names: ["Zanzibar Gem"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A virtually indestructible plant with glossy, dark green leaves. It thrives on neglect.",
    plant_purpose: 1,
    price: 15.99,
    image_url: "zz_plant.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Water sparingly and allow soil to dry between watering.",
    best_position: "Low to bright indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
  },
  {
    id: 13,
    name: "Bamboo Palm",
    scientific_name: "Chamaedorea seifrizii",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A palm tree-like plant with feathery, arching fronds. It adds a touch of the tropics to your living space.",
    plant_purpose: 1,
    price: 19.99,
    image_url: "bamboo_palm.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Keep soil consistently moist but not waterlogged.",
    best_position: "Medium to bright indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 1,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
  },
  {
    id: 14,
    name: "Boston Fern",
    scientific_name: "Nephrolepis exaltata",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A lacy, feathery fern with delicate fronds that makes a great hanging plant. It enjoys high humidity.",
    plant_purpose: 2,
    price: 22.99,
    image_url: "boston_fern.jpg",
    classification: "Ferns",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Keep soil consistently moist and provide high humidity.",
    best_position: "Bright, indirect light",
    light_requirements: 1,
    fragrant: 1,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 1,
    space_requirement: 1,
  },
  {
    id: 15,
    name: "Calathea",
    scientific_name: "Calathea spp.",
    common_names: ["Prayer Plant"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A group of stunning plants with intricate leaf patterns. They are known for their unique leaf movements.",
    plant_purpose: 1,
    price: 22.99,
    image_url: "calathea.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Keep soil consistently moist and provide high humidity.",
    best_position: "Bright, indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 1,
    space_requirement: 1,
  },
  {
    id: 16,
    name: "String of Pearls",
    scientific_name: "Senecio rowleyanus",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A unique trailing succulent with bead-like leaves. It's a conversation starter and a great addition to hanging baskets.",
    plant_purpose: 1,
    price: 21.99,
    image_url: "string_of_pearls.jpg",
    classification: "Succulents",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Allow soil to dry between watering.",
    best_position: "Bright, indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
  },
  {
    id: 17,
    name: "African Violet",
    scientific_name: "Saintpaulia spp.",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A charming and compact flowering plant with colorful and delicate blossoms.",
    plant_purpose: 1,
    price: 18.99,
    image_url: "african_violet.jpg",
    classification: "Angiosperms",
    cause_alergies: 1,
    flowering_season: "Throughout the year with proper care",
    watering_instructions:
      "Water from the bottom and avoid getting the leaves wet. Keep soil consistently moist.",
    best_position: "Bright, indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
  },
  {
    id: 18,
    name: "Areca Palm",
    scientific_name: "Dypsis lutescens",
    common_names: ["Butterfly Palm"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A graceful and feathery palm with vibrant green fronds. It's a favorite for its air-purifying properties.",
    plant_purpose: 0,
    price: 27.99,
    image_url: "areca_palm.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Keep soil consistently moist but not waterlogged.",
    best_position: "Medium to bright indirect light",
    light_requirements: 1,
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 1,
    space_requirement: 1,
  },
  {
    id: 19,
    name: "Christmas Cactus",
    scientific_name: "Schlumbergera spp.",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A festive and easy-to-care-for cactus with colorful blooms during the holiday season.",
    plant_purpose: 1,
    price: 16.99,
    image_url: "christmas_cactus.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Late fall to early winter",
    watering_instructions:
      "Allow soil to partially dry between watering. Provide high humidity during flowering.",
    best_position: "Bright, indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
    light_requirements: 1,
  },
  {
    id: 20,
    name: "Dieffenbachia",
    scientific_name: "Dieffenbachia spp.",
    common_names: ["Dumb Cane"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A striking plant with large, variegated leaves. It's an eye-catching addition to any room.",
    plant_purpose: 1,
    price: 19.99,
    image_url: "dieffenbachia.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Water when the top inch of soil is dry. Keep away from pets and children as it can be toxic if ingested.",
    best_position: "Bright, indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 1,
    space_requirement: 2,
    light_requirements: 1,
  },
  {
    id: 21,
    name: "Parlor Palm",
    scientific_name: "Chamaedorea elegans",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A graceful palm with delicate, feathery fronds. It's an ideal choice for small spaces.",
    plant_purpose: 1,
    price: 18.99,
    image_url: "parlor_palm.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Keep soil consistently moist but not waterlogged.",
    best_position: "Low to medium indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 0,
    light_requirements: 0,
  },
  {
    id: 22,
    name: "Bird of Paradise",
    scientific_name: "Strelitzia reginae",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A bold and tropical plant with large, banana-like leaves. It's a statement piece for any room.",
    plant_purpose: 1,
    price: 34.99,
    image_url: "bird_of_paradise.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Water when the top inch of soil is dry.",
    best_position: "Bright, indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 0,
    space_requirement: 1,
    light_requirements: 1,
  },
  {
    id: 23,
    name: "Hoya",
    scientific_name: "Hoya spp.",
    common_names: ["Wax Plant"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A unique and vining plant known for its waxy, star-shaped flowers. It's a favorite among collectors.",
    plant_purpose: 1,
    price: 22.99,
    image_url: "hoya.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Varies by species",
    watering_instructions: "Allow soil to dry between watering.",
    best_position: "Bright, indirect light",
    fragrant: 1,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 1,
    space_requirement: 0,
    light_requirements: 1,
  },
  {
    id: 24,
    name: "Pilea Peperomioides",
    scientific_name: "Pilea peperomioides",
    common_names: ["Chinese Money Plant"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A charming and easy-to-grow plant with round, coin-shaped leaves. It's a symbol of good fortune.",
    plant_purpose: 1,
    price: 15.99,
    image_url: "pilea_peperomioides.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Water when the top inch of soil is dry.",
    best_position: "Bright, indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 1,
    light_requirements: 1,
  },
  {
    id: 25,
    name: "Oxalis",
    scientific_name: "Oxalis spp.",
    common_names: ["Purple Shamrock", "Wood Sorrel"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A unique plant with clover-like leaves and charming, colorful blooms. It's a conversation piece.",
    plant_purpose: 1,
    price: 16.99,
    image_url: "oxalis.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Varies by species",
    watering_instructions: "Allow soil to partially dry between watering.",
    best_position: "Bright, indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 0,
    space_requirement: 0,
    light_requirements: 1,
  },
  {
    id: 26,
    name: "Jasmine",
    scientific_name: "Jasminum spp.",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A fragrant flowering plant with delicate white blooms. It's loved for its sweet and enchanting scent.",
    plant_purpose: 1,
    price: 19.99,
    image_url: "jasmine.jpg",
    classification: "Angiosperms",
    cause_alergies: 1,
    flowering_season: "Spring to early summer",
    watering_instructions:
      "Keep soil consistently moist and provide high humidity.",
    best_position: "Bright, direct sunlight",
    fragrant: 1,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 1,
    space_requirement: 0,
    light_requirements: 2,
  },
  {
    id: 27,
    name: "Fittonia",
    scientific_name: "Fittonia spp.",
    common_names: ["Nerve Plant"],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A small, colorful plant with intricate leaf patterns. It's a favorite for its unique appearance.",
    plant_purpose: 1,
    price: 13.99,
    image_url: "fittonia.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Keep soil consistently moist and provide high humidity.",
    best_position: "Low to medium indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 1,
    space_requirement: 0,
    light_requirements: 0,
  },
  {
    id: 28,
    name: "Lipstick Plant",
    scientific_name: "Aeschynanthus spp.",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A vibrant and flowering plant with tubular red blooms. It's known for its striking appearance.",
    plant_purpose: 1,
    price: 17.99,
    image_url: "lipstick_plant.jpg",
    classification: "Angiosperms",
    cause_alergies: 1,
    flowering_season: "Spring to summer",
    watering_instructions: "Allow soil to partially dry between watering.",
    best_position: "Bright, indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 0,
    space_requirement: 0,
    light_requirements: 1,
  },
  {
    id: 29,
    name: "Rattlesnake Plant",
    scientific_name: "Calathea lancifolia",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A striking plant with elongated leaves featuring intricate patterns. It's a favorite for its unique appearance.",
    plant_purpose: 1,
    price: 21.99,
    image_url: "rattlesnake_plant.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Keep soil consistently moist and provide high humidity.",
    best_position: "Bright, indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 1,
    space_requirement: 0,
    light_requirements: 1,
  },
  {
    id: 30,
    name: "Peperomia",
    scientific_name: "Peperomia spp.",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A compact plant with succulent-like leaves. It's easy to care for and comes in various attractive varieties.",
    plant_purpose: 1,
    price: 14.99,
    image_url: "peperomia.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Allow soil to partially dry between watering.",
    best_position: "Low to medium indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 0,
    light_requirements: 0,
  },
  {
    id: 31,
    name: "Cactus",
    scientific_name: "Cactaceae family",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A diverse group of succulent plants known for their unique shapes and adaptations to arid environments.",
    plant_purpose: 1,
    price: 11.99,
    image_url: "cactus.jpg",
    classification: "Cacti",
    cause_alergies: 0,
    flowering_season: "Varies by species",
    watering_instructions:
      "Allow soil to dry between watering. Water sparingly.",
    best_position: "Bright, direct sunlight",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 1,
    care_level: 0,
    space_requirement: 0,
    light_requirements: 2,
  },
  {
    id: 32,
    name: "Kalanchoe",
    scientific_name: "Kalanchoe spp.",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A succulent with colorful, long-lasting blooms. It's a cheerful addition to any indoor garden.",
    plant_purpose: 1,
    price: 16.99,
    image_url: "kalanchoe.jpg",
    classification: "Succulents",
    cause_alergies: 0,
    flowering_season: "Winter to spring",
    watering_instructions:
      "Allow soil to dry between watering. Water sparingly during flowering.",
    best_position: "Bright, indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 0,
    space_requirement: 0,
    light_requirements: 1,
  },
  {
    id: 34,
    name: "Begonia",
    scientific_name: "Begonia spp.",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A diverse group of flowering plants with colorful blooms and attractive foliage. They come in various varieties.",
    plant_purpose: 1,
    price: 18.99,
    image_url: "begonia.jpg",
    classification: "Angiosperms",
    cause_alergies: 1,
    flowering_season: "Varies by species",
    watering_instructions:
      "Keep soil consistently moist and provide high humidity.",
    best_position: "Bright, indirect light",
    fragrant: 1,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 1,
    space_requirement: 1,
    light_requirements: 1,
  },
  {
    id: 35,
    name: "Alocasia",
    scientific_name: "Alocasia spp.",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A striking and unique plant with large, arrowhead-shaped leaves. It's an eye-catching addition to any room.",
    plant_purpose: 1,
    price: 19.99,
    image_url: "alocasia.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions: "Water when the top inch of soil is dry.",
    best_position: "Bright, indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 2,
    space_requirement: 1,
    light_requirements: 1,
  },
  {
    id: 36,
    name: "Croton",
    scientific_name: "Codiaeum variegatum",
    common_names: [],
    primart_image: "img.png",
    carousel_images: [],
    description:
      "A vibrant and colorful plant with variegated foliage. It adds a pop of tropical color to your home.",
    plant_purpose: 1,
    price: 21.99,
    image_url: "croton.jpg",
    classification: "Angiosperms",
    cause_alergies: 0,
    flowering_season: "Rarely flowers indoors",
    watering_instructions:
      "Keep soil consistently moist and provide high humidity.",
    best_position: "Bright, indirect light",
    fragrant: 0,
    sensitive_to_alkaline_water: 0,
    pet_friendly: 0,
    care_level: 2,
    space_requirement: 0,
    light_requirements: 1,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  function CalculateAnswers() {
    // dodgy way of doing things :(
    const mappedAnswers = {
      light_requirements: answers[0],
      care_level: answers[1],
      cause_alergies: answers[2],
      space_requirement: answers[3], // large space
      fragrant: answers[4],
      sensitive_to_alkaline_water: answers[5],
      pet_friendly: answers[6],
    };
    console.log(mappedAnswers);
    const filteredProducts = products.plants.filter((val, i) => {
      if (
        mappedAnswers.space_requirement <= val.space_requirement &&
        mappedAnswers.light_requirements >= val.light_requirements &&
        mappedAnswers.care_level >= val.care_level &&
        mappedAnswers.cause_alergies >= val.cause_alergies &&
        mappedAnswers.fragrant >= val.fragrant &&
        mappedAnswers.sensitive_to_alkaline_water <=
          val.sensitive_to_alkaline_water &&
        mappedAnswers.pet_friendly >= val.pet_friendly
      ) {
        return true;
      }
    });
    if (step === answers.length)
      return (
        <div>
          <h4>Here is a selection of plants for you</h4>
          {filteredProducts.map((prod) => (
            <ProductCC data={prod} />
          ))}
        </div>
      );
  }

  function StepsIdicator({ value }) {
    return (
      <ul className="step-indicator-wrap mt-3 mb-5">
        {answers.map((e, i) => (
          <li
            key={"step-" + i}
            className={`step-indicator ${value === i ? "active" : ""}`}
          ></li>
        ))}
      </ul>
    );
  }
  function QuestionPanel() {
    function submitHandler(e) {
      // Prevent the form from submitting
      e.preventDefault();
      // Store the data to pull easily
      const data = new FormData(e.target);
      // Store the answer selected
      answers[step] = parseInt(data.get("answer"));

      // Set the state
      setAnswers([...answers]);
      if (step < answers.length) {
        setStep(step + 1);
      }

      console.log(answers);
    }
    function prevBtnHandler(e) {
      // Go a step back and
      const previousStep = step - 1;
      if (step > 0) {
        setStep(previousStep);
      }
    }
    if (step < answers.length)
      return (
        <form onSubmit={submitHandler} className="form-ctr">
          <MultipleChoiceQuestion question={questions[step]} />
          <div id="form-btn-ctr">
            <button
              disabled={step > 0 ? false : true}
              id="prev-btn"
              className="noselect nextprev-arrows"
              onClick={prevBtnHandler}
              type="button"
            >
              <LeftArrow
                id="prev-btn-icon"
                className="arrow-icon"
                color="#000"
              />
              Previous step
            </button>
            <button id="next-btn" type="submit" className="nextprev-arrows">
              Next step
              <LeftArrow
                id="next-btn-icon"
                className="arrow-icon"
                color="#000"
              />
            </button>
          </div>
        </form>
      );

    function MultipleChoiceQuestion({ question }) {
      return (
        <div>
          <h4 id="question-title" className="heading-md ta-center mb-3">
            {question.question}
          </h4>
          <div className="radioOptions-wrap">
            {question.options.map((e, i) => {
              return (
                <RadioButton
                  preSelected={answers[step] === i ? true : false}
                  key={i}
                  name="answer"
                  label={e}
                  value={i}
                  required={true}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }

  return (
    <section>
      <header>
        <h1
          id="title-main"
          className="heading-font contentwidthhalf heading-xxxl mb-4 ta-center"
        >
          Let's find the perfect <em className="green">green</em> companion for
          your space!
        </h1>
      </header>
      <div
        id="q-container"
        className="contentwidth box-shadow pt-4 pr-4 pb-4 pl-4"
      >
        <QuestionPanel />
        <CalculateAnswers />
        {testProd.map((prod) => (
          <ProductCC data={prod} />
        ))}
      </div>
      <StepsIdicator value={step} />
    </section>
  );
}

export default App;
