import { BaseItem } from '../types';

export const initialVoiceCharacteristics: BaseItem[] = [
  // Pitch
  { id: 'vc_pitch_deep', name: 'Deep' },
  { id: 'vc_pitch_high', name: 'High-pitched' },
  { id: 'vc_pitch_baritone', name: 'Baritone' },
  { id: 'vc_pitch_soprano', name: 'Soprano' },
  // Tone
  { id: 'vc_tone_soft', name: 'Soft-spoken' },
  { id: 'vc_tone_loud', name: 'Loud' },
  { id: 'vc_tone_booming', name: 'Booming' },
  { id: 'vc_tone_quiet', name: 'Quiet' },
  { id: 'vc_tone_raspy', name: 'Raspy' },
  { id: 'vc_tone_smooth', name: 'Smooth' },
  { id: 'vc_tone_gravelly', name: 'Gravelly' },
  { id: 'vc_tone_melodic', name: 'Melodic' },
  { id: 'vc_tone_monotonous', name: 'Monotonous' },
  { id: 'vc_tone_clear', name: 'Clear' },
  { id: 'vc_tone_authoritative', name: 'Authoritative' },
  // Pace
  { id: 'vc_pace_fast', name: 'Speaks quickly' },
  { id: 'vc_pace_slow', name: 'Speaks slowly' },
  { id: 'vc_pace_measured', name: 'Speaks with a measured pace' },
  // Other
  { id: 'vc_volume_shouting', name: 'Capable of shouting' },
  { id: 'vc_accent_present', name: 'Has a distinct accent' },
];
