import { BaseItem } from '../types';

export const initialLightingStyles: BaseItem[] = [
  { id: 'ls_natural_overcast', name: 'Natural / Overcast', description: 'Soft, diffused light, mimicking an overcast day. Low contrast.' },
  { id: 'ls_natural_bright', name: 'Natural / Bright', description: 'Bright, clean light, mimicking a sunny day. Balanced and positive.' },
  { id: 'ls_cinematic', name: 'Cinematic', description: 'General term for high-quality, stylized lighting that enhances mood.' },
  { id: 'ls_dramatic', name: 'Dramatic', description: 'High-contrast lighting that creates strong shadows and highlights.' },
  { id: 'ls_high_key', name: 'High Key', description: 'Bright, even lighting with few shadows. Creates a positive, upbeat mood.' },
  { id: 'ls_low_key', name: 'Low Key', description: 'Dark, shadowy lighting with high contrast. Creates mystery, suspense, or drama.' },
  { id: 'ls_chiaroscuro', name: 'Chiaroscuro', description: 'Extreme contrast between light and dark, a hallmark of Film Noir.' },
  { id: 'ls_rembrandt', name: 'Rembrandt', description: 'A specific low-key setup creating a triangle of light on one cheek.' },
  { id: 'ls_golden_hour', name: 'Golden Hour', description: 'Warm, soft, and glowing light shortly after sunrise or before sunset.' },
  { id: 'ls_blue_hour', name: 'Blue Hour', description: 'Cool, diffused blue light just before sunrise or after sunset.' },
  { id: 'ls_silhouette', name: 'Silhouette', description: 'The subject is dark against a bright background.' },
  { id: 'ls_backlight', name: 'Backlight / Rim Light', description: 'Light comes from behind the subject, creating a glowing edge.' },
  { id: 'ls_soft', name: 'Soft Light', description: 'Diffused light that creates soft, gradual shadows. Flattering for subjects.' },
  { id: 'ls_hard', name: 'Hard Light', description: 'Direct, focused light that creates sharp, well-defined shadows.' },
  { id: 'ls_ambient', name: 'Ambient', description: 'The general, non-directional light already existing in a scene.' },
  { id: 'ls_practical', name: 'Practical', description: 'Light sources that are visible within the scene (e.g., lamps, candles).' },
  { id: 'ls_neon', name: 'Neon', description: 'Lighting from neon signs, common in cyberpunk or urban night scenes.' },
  { id: 'ls_moonlight', name: 'Moonlight', description: 'Simulated cool, silvery, low-intensity light for night scenes.' },
];