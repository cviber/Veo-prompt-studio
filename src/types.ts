export interface BaseItem {
  id: string;
  name: string;
  description?: string;
}

// Replaced CinematographyPreset with ScenePreset to handle full builder state.
export interface ScenePreset extends BaseItem {
  jsonBlock: string; 
}

export interface LightingPreset extends BaseItem {
  jsonBlock: string;
}

export interface MovementQuality extends BaseItem {
  jsonBlock: string;
}

export interface LightingSettings {
  brightness: number;
  contrast: number;
  colorTemperature: number;
}

// A generic option for new relational structure for cascading dropdowns
export interface CascadingOption extends BaseItem {
  parentId: string | null;
  jsonBlock?: string;
  description?: string;
}

export interface ActionType extends BaseItem {}

export interface AudioOption extends BaseItem {}

export interface SelectedAction {
  id: string;
  typeId: string | null;
  description: string;
  emotion: string;
  endingNote: string;
  involvedCharacterIds: string[];
  movementQualityId?: string | null;
}


// --- STATE TYPES FOR BUILDER ---

export interface SelectedCharacter {
  id: string; // for React key
  path: string[];
  notes: string;
  faceHidden: boolean;
  roleId: string | null;
  upperClothingTypeId: string | null;
  upperClothingColorId: string | null;
  lowerClothingTypeId: string | null;
  lowerClothingColorId: string | null;
  footwearId?: string | null;

  // New fields for detailed Human character
  genderId?: string | null;
  ageId?: string | null;
  ethnicityId?: string | null;
  heightId?: string | null;
  weightId?: string | null;
  bodyTypeId?: string | null;
  
  // New fields for Animal character
  animalAgeId?: string | null;
  animalSizeId?: string | null;
  animalColorId?: string | null;

  // New fields from Character Development Framework
  characterName?: string;
  hairDetailsIds?: string[];
  eyeDetailsIds?: string[];
  facialFeaturesIds?: string[];
  postureAndMannerismsIds?: string[];
  emotionalBaselineId?: string | null;
  accessoriesIds?: string[];
  voiceCharacteristicsIds?: string[];
  distinctiveFeaturesIds?: string[];
  professionalAttributesIds?: string[];
  personalityIndicatorsIds?: string[];
}

export interface SelectedObject {
  id: string; // for React key
  path: string[];
  colorId?: string | null;
}


// --- TYPES FOR FORM-BASED DATABASE EDITING ---

export interface CineDetails {
  shotType?: string;
  movement?: string;
  lighting?: string;
  tone?: string;
  notes?: string;
}

export interface SceneDetails {
  environment?: string;
  sublocation?: string;
  lighting?: string;
  roadModeration?: string;
}

export interface LightingDetails {
  brightness?: number;
  contrast?: number;
  colorTemperature?: number;
  description?: string;
}

export interface CharacterDetails {
    gender?: string;
    age?: string;
    ethnicity?: string;
    role?: string;
    upperClothingType?: string;
    upperClothingColor?: string;
    lowerClothingType?: string;
    lowerClothingColor?: string;
    footwear?: string;
    species?: string;
    size?: string;
    color?: string;
    behavior?: string;

    // New physical attributes
    height?: string;
    weight?: string;
    bodyType?: string;

    // New fields from Character Development Framework
    hairDetails?: string;
    eyeDetails?: string;
    facialFeatures?: string;
    postureAndMannerisms?: string;
    emotionalBaseline?: string;
    accessories?: string;
    voiceCharacteristics?: string;
    distinctiveFeatures?: string;
    professionalAttributes?: string;
    personalityIndicators?: string;
}

// FIX: Add ObjectDetails interface for database editing form for objects.
export interface ObjectDetails {
  type?: string;
  details?: string;
}

export interface BuilderState {
  selectedShotTypeId: string | null;
  selectedCameraMovementId: string | null;
  selectedLightingStyleId: string | null;
  selectedAestheticToneId: string | null;
  cineNotes: string;
  sceneSelection: string[];
  selectedTimeOfDayId: string | null;
  selectedWeatherId: string | null;
  selectedLightingPresetId: string | null;
  lightingSettings: LightingSettings;
  selectedCharacters: SelectedCharacter[];
  selectedObjects: SelectedObject[];
  sceneDescription: string;
  selectedAmbientSoundIds: string[];
  selectedEffectIds: string[];
  actions: SelectedAction[];
  negativePrompts: string[];
}

export interface VerificationResult {
  check: string;
  status: 'Pass' | 'Fail';
  expected?: string;
  actual?: string;
}

// --- DEPRECATED ---
// Kept for an unused data file to prevent breaking changes.
// This can be removed in the future.
export interface RoleAndUniform extends BaseItem {
  jsonBlock: string;
}
