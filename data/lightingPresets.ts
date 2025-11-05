import { LightingPreset } from '../types';

export const initialLightingPresets: LightingPreset[] = [
  {
    id: 'lp_1',
    name: 'Cinematic',
    jsonBlock: JSON.stringify({
      brightness: 70,
      contrast: 60,
      colorTemperature: 4500,
      description: "Dramatic and moody lighting, often with high contrast."
    }, null, 2),
  },
  {
    id: 'lp_2',
    name: 'Natural',
    jsonBlock: JSON.stringify({
      brightness: 50,
      contrast: 50,
      colorTemperature: 5500,
      description: "Mimics natural daylight, balanced and neutral."
    }, null, 2),
  },
  {
    id: 'lp_3',
    name: 'Studio',
    jsonBlock: JSON.stringify({
      brightness: 80,
      contrast: 40,
      colorTemperature: 6500,
      description: "Bright, even lighting with low contrast, typical of a studio setup."
    }, null, 2),
  },
  {
    id: 'lp_4',
    name: 'Film Noir',
    jsonBlock: JSON.stringify({
      brightness: 30,
      contrast: 80,
      colorTemperature: 7500,
      description: "High-contrast, low-key lighting with deep shadows and a cool tone."
    }, null, 2),
  },
  {
    id: 'lp_5',
    name: 'Fantasy',
    jsonBlock: JSON.stringify({
      brightness: 60,
      contrast: 55,
      colorTemperature: 4000,
      description: "Soft, magical lighting with a warm, golden hour feel. Often includes glowing elements."
    }, null, 2),
  },
  {
    id: 'lp_6',
    name: 'Sci-Fi Neon',
    jsonBlock: JSON.stringify({
      brightness: 40,
      contrast: 70,
      colorTemperature: 8000,
      description: "Dominated by neon lights, cool blues, and purples, with high contrast."
    }, null, 2),
  },
  {
    id: 'lp_7',
    name: 'Horror',
    jsonBlock: JSON.stringify({
      brightness: 20,
      contrast: 75,
      colorTemperature: 5000,
      description: "Dark, unsettling lighting with harsh shadows and minimal light sources."
    }, null, 2),
  },
  {
    id: 'lp_8',
    name: 'Golden Hour',
    jsonBlock: JSON.stringify({
      brightness: 65,
      contrast: 50,
      colorTemperature: 3500,
      description: "Warm, soft, and glowing light that occurs shortly after sunrise or before sunset."
    }, null, 2),
  },
  {
    id: 'lp_9',
    name: 'Blue Hour (Twilight)',
    jsonBlock: JSON.stringify({
      brightness: 35,
      contrast: 45,
      colorTemperature: 9000,
      description: "Cool, diffused, and serene blue light that occurs just before sunrise or after sunset."
    }, null, 2),
  },
  {
    id: 'lp_10',
    name: 'Harsh Noon Sun',
    jsonBlock: JSON.stringify({
      brightness: 90,
      contrast: 70,
      colorTemperature: 5800,
      description: "Bright, direct overhead light that creates strong, hard shadows. Often feels intense or draining."
    }, null, 2),
  },
  {
    id: 'lp_11',
    name: 'Moonlight',
    jsonBlock: JSON.stringify({
      brightness: 15,
      contrast: 60,
      colorTemperature: 7000,
      description: "A cool, silvery, low-intensity light meant to simulate the moon. High contrast."
    }, null, 2),
  },
  {
    id: 'lp_12',
    name: 'Candlelight',
    jsonBlock: JSON.stringify({
      brightness: 25,
      contrast: 50,
      colorTemperature: 2200,
      description: "Very warm, flickering, intimate light with soft shadows that fall off quickly into darkness."
    }, null, 2),
  },
  {
    id: 'lp_13',
    name: 'Interrogation Lamp',
    jsonBlock: JSON.stringify({
      brightness: 50,
      contrast: 85,
      colorTemperature: 4000,
      description: "A single, harsh point of light in an otherwise dark room, creating extreme contrast and tension."
    }, null, 2),
  },
  {
    id: 'lp_14',
    name: 'Bioluminescent Glow',
    jsonBlock: JSON.stringify({
      brightness: 40,
      contrast: 55,
      colorTemperature: 8500,
      description: "Ethereal, magical light emanating from plants, creatures, or objects, often in cool tones like blue, green, and purple."
    }, null, 2),
  },
  {
    id: 'lp_15',
    name: 'National Geographic',
    jsonBlock: JSON.stringify({
      brightness: 65,
      contrast: 65,
      colorTemperature: 5600,
      description: "Crisp, vibrant, and natural lighting with sharp focus. High clarity and true-to-life colors, often used for wildlife and nature."
    }, null, 2),
  },
  {
    id: 'lp_16',
    name: 'BBC Documentary',
    jsonBlock: JSON.stringify({
      brightness: 60,
      contrast: 60,
      colorTemperature: 5000,
      description: "Cinematic and polished natural lighting. Often uses slow, smooth camera movements. Slightly warmer tones to create an engaging, narrative feel."
    }, null, 2),
  },
];