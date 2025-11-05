import { MovementQuality } from '../types';

export const initialMovementQualities: MovementQuality[] = [
  { id: 'mq_natural', name: 'Natural Movement', jsonBlock: JSON.stringify({ description: 'Default, realistic human motion' }) },
  { id: 'mq_energetic', name: 'Energetic Movement', jsonBlock: JSON.stringify({ description: 'Dynamic, high-energy actions' }) },
  { id: 'mq_slow', name: 'Slow and Deliberate Movement', jsonBlock: JSON.stringify({ description: 'Thoughtful, careful actions' }) },
  { id: 'mq_graceful', name: 'Graceful Movement', jsonBlock: JSON.stringify({ description: 'Smooth, flowing motion' }) },
  { id: 'mq_confident', name: 'Confident Movement', jsonBlock: JSON.stringify({ description: 'Assured, purposeful actions' }) },
  { id: 'mq_fluid', name: 'Fluid Movement', jsonBlock: JSON.stringify({ description: 'Seamless, continuous motion' }) },
  { id: 'mq_robotic', name: 'Robotic Movement', jsonBlock: JSON.stringify({ description: 'Stiff, mechanical, precise actions' }) },
  { id: 'mq_clumsy', name: 'Clumsy Movement', jsonBlock: JSON.stringify({ description: 'Awkward, stumbling, uncoordinated actions' }) },
  { id: 'mq_menacing', name: 'Menacing Movement', jsonBlock: JSON.stringify({ description: 'Threatening, predatory, slow-stalking actions' }) },
  { id: 'mq_animalistic', name: 'Animalistic Movement', jsonBlock: JSON.stringify({ description: 'Primal, on all fours, bestial actions' }) },
  { id: 'mq_erratic', name: 'Erratic / Unpredictable', jsonBlock: JSON.stringify({ description: 'Jerky, sudden, and unpredictable actions' }) },
  { id: 'mq_sluggish', name: 'Sluggish / Heavy', jsonBlock: JSON.stringify({ description: 'Slow, tired, and weighty movements' }) },
  { id: 'mq_weightless', name: 'Weightless / Floating', jsonBlock: JSON.stringify({ description: 'Drifting, floating, zero-gravity-like motion' }) },
  { id: 'mq_majestic', name: 'Majestic / Regal', jsonBlock: JSON.stringify({ description: 'Grand, stately, and dignified movements' }) },
  { id: 'mq_skulking', name: 'Skulking / Stealthy', jsonBlock: JSON.stringify({ description: 'Quiet, sneaky, and low-profile movements' }) },
];
