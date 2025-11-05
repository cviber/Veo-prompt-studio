import React, { useState, useEffect, useCallback, useRef } from 'react';
// FIX: Import ObjectDetails to handle form fields for object data.
import { SelectedCharacter, SelectedObject, BaseItem, CascadingOption, ActionType, SelectedAction, AudioOption, LightingPreset, LightingSettings, MovementQuality, ScenePreset, BuilderState, VerificationResult } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import { sceneOptions } from './data/scenes';
import { characterOptions } from './data/humanCharacters';
import { initialObjects } from './data/objectsAndAnimals';
import { initialActionTypes } from './data/actionTones';
import { initialAmbientSounds } from './data/ambientSounds';
import { initialSoundEffects } from './data/soundEffects';
import { initialTimeOfDayOptions } from './data/timeOfDayOptions';
import { initialWeatherOptions } from './data/weatherOptions';
import { initialLightingPresets } from './data/lightingPresets';
import { initialMovementQualities } from './data/movementQualities';
import { initialRoles } from './data/roles';
import { initialUpperClothingTypes, initialLowerClothingTypes, initialClothingColors } from './data/clothing';
import { PlusIcon, TrashIcon, ClipboardCopyIcon, CheckIcon, EditIcon, SaveIcon, XIcon, PlusCircleIcon, InfoIcon, DownloadIcon, UploadIcon, ShieldCheckIcon, DuplicateIcon } from './components/icons';
import { initialShotTypes } from './data/shotTypes';
import { initialCameraMovements } from './data/cameraMovements';
import { initialScenePresets } from './data/cinematographyPresets';
import { initialGenders } from './data/genders';
import { initialAges } from './data/ages';
import { initialEthnicities } from './data/ethnicities';
import { initialHeights } from './data/heights';
import { initialWeights } from './data/weights';
import { initialBodyTypes } from './data/bodyTypes';
import { initialHairDetails } from './data/hairDetails';
import { initialEyeDetails } from './data/eyeDetails';
import { initialFacialFeatures } from './data/facialFeatures';
import { initialPostureAndMannerisms } from './data/postureAndMannerisms';
import { initialEmotionalBaselines } from './data/emotionalBaselines';
import { initialVoiceCharacteristics } from './data/voiceCharacteristics';
import { initialDistinctiveFeatures } from './data/distinctiveFeatures';
import { initialProfessionalAttributes } from './data/professionalAttributes';
import { initialPersonalityIndicators } from './data/personalityIndicators';
import { initialAccessories } from './data/accessories';
import { initialLightingStyles } from './data/lightingStyles';
import { initialAestheticTones } from './data/aestheticTones';
import { initialAnimalAges } from './data/animalAges';
import { initialAnimalSizes } from './data/animalSizes';
import { initialFootwear } from './data/footwear';
import { initialCarColors } from './data/carColors';
import { initialAnimalColors } from './data/animalColors';
import { initialCraneColors } from './data/craneColors';

// --- HELPER COMPONENTS ---

const Tooltip: React.FC<{ content: React.ReactNode; children: React.ReactNode }> = ({ content, children }) => {
  return (
    <div className="relative flex items-center group cursor-pointer">
      {children}
      <div className="absolute bottom-full mb-2 w-80 p-3 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 text-left">
        {content}
      </div>
    </div>
  );
};

const TextAreaInput: React.FC<{
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}> = ({ label, value, onChange, placeholder, rows = 3 }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md shadow-sm p-2 focus:ring-brand-primary focus:border-brand-primary"
    />
  </div>
);

interface SelectInputProps {
  label: string;
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: BaseItem[];
  placeholder: string;
  disabled?: boolean;
}
const SelectInput: React.FC<SelectInputProps> = ({ label, value, onChange, options, placeholder, disabled = false }) => {
  // Check if any option has a description to determine if the tooltip should be shown.
  const hasDescriptions = options.some(o => o.description);

  // Prepare the rich content for the tooltip, listing all options with descriptions.
  const tooltipContent = hasDescriptions ? (
    <ul className="space-y-2">
      {options.map(option => option.description && (
        <li key={option.id}>
          <strong className="font-bold text-white">{option.name}:</strong>
          <span className="ml-1 text-gray-300">{option.description}</span>
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div className="w-full">
      <div className="flex items-center gap-1.5 mb-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        {tooltipContent && (
          <Tooltip content={tooltipContent}>
            <InfoIcon />
          </Tooltip>
        )}
      </div>
      <select
        value={value || ''}
        onChange={onChange}
        disabled={disabled}
        className="w-full bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md shadow-sm p-2 focus:ring-brand-primary focus:border-brand-primary disabled:bg-gray-200 dark:disabled:bg-gray-700"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(option => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

const MultiSelectInput: React.FC<{
  label: string;
  selectedIds: string[];
  onChange: (selectedIds: string[]) => void;
  options: BaseItem[];
  placeholder: string;
}> = ({ label, selectedIds, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleToggle = (optionId: string) => {
    const newSelectedIds = selectedIds.includes(optionId)
      ? selectedIds.filter(id => id !== optionId)
      : [...selectedIds, optionId];
    onChange(newSelectedIds);
  };
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const selectedNames = options
    .filter(o => selectedIds.includes(o.id))
    .map(o => o.name)
    .join(', ');

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
      <button 
        type="button" 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md shadow-sm p-2 text-left h-10 truncate"
      >
        <span className={selectedNames ? '' : 'text-gray-500'}>
          {selectedNames || placeholder}
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-20 w-full mt-1 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map(option => (
            <label key={option.id} className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedIds.includes(option.id)}
                onChange={() => handleToggle(option.id)}
                className="rounded text-brand-primary focus:ring-brand-primary"
              />
              {option.name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const CascadingSelects: React.FC<{
  path: string[];
  setPath: (newPath: string[]) => void;
  data: CascadingOption[];
  gridClass?: string;
}> = ({ path, setPath, data, gridClass = "grid-cols-1 md:grid-cols-3" }) => {
  let parentId: string | null = null;
  const selects = [];
  
  const levelsToRender = path.length + 1;

  for (let i = 0; i < levelsToRender; i++) {
    const currentId = path[i] || null;
    const options = data.filter(o => o.parentId === parentId);
    
    if (i > 0 && options.length === 0) break;
    
    const parentName = parentId ? data.find(o => o.id === parentId)?.name : null;
    const label = `Level ${i + 1}${parentName ? ` (${parentName})` : ''}`;
    const placeholder = `Select Option`;

    selects.push(
      <SelectInput
        key={i}
        label={label}
        value={currentId}
        onChange={(e) => {
          const newPath = path.slice(0, i);
          newPath.push(e.target.value);
          setPath(newPath);
        }}
        options={options}
        placeholder={placeholder}
        disabled={i > 0 && !parentId}
      />
    );

    if (!currentId) break; 
    parentId = currentId;
  }

  return <div className={`grid ${gridClass} gap-4`}>{selects}</div>;
};

const SliderInput: React.FC<{
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
}> = ({ label, value, onChange, min, max, step = 1, unit = '' }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
    <div className="flex items-center gap-2">
      <input
        type="range"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-brand-primary"
      />
      <span className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded w-24 text-center">{value}{unit}</span>
    </div>
  </div>
);

const NegativePromptsEditor: React.FC<{
  prompts: string[];
  setPrompts: (prompts: string[]) => void;
}> = ({ prompts, setPrompts }) => {
  const [newPrompt, setNewPrompt] = useState('');

  const handleAdd = () => {
    if (newPrompt.trim() && !prompts.includes(newPrompt.trim())) {
      setPrompts([...prompts, newPrompt.trim()]);
      setNewPrompt('');
    }
  };

  const handleRemove = (promptToRemove: string) => {
    setPrompts(prompts.filter(p => p !== promptToRemove));
  };

  return (
    <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3">Negative Prompts</h2>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={newPrompt}
          onChange={e => setNewPrompt(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          placeholder="e.g., blood, gore, merging"
          className="w-full bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md shadow-sm p-2 focus:ring-brand-primary focus:border-brand-primary"
        />
        <button
          onClick={handleAdd}
          className="flex-shrink-0 bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-secondary"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {prompts.map(prompt => (
          <div key={prompt} className="flex items-center gap-2 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 text-sm font-medium px-2.5 py-1 rounded-full">
            <span>{prompt}</span>
            <button onClick={() => handleRemove(prompt)} className="text-red-500 hover:text-red-700 dark:hover:text-red-400">
              <XIcon className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const VerificationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  results: VerificationResult[];
}> = ({ isOpen, onClose, results }) => {
  if (!isOpen) return null;

  const totalChecks = results.length;
  const passedChecks = results.filter(r => r.status === 'Pass').length;
  const failedChecks = totalChecks - passedChecks;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center border-b p-4 dark:border-dark-border">
          <h3 className="text-lg font-semibold">Verification Report</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"><XIcon /></button>
        </div>
        <div className="p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800">
            <div className="text-sm font-medium">
                <span>Total Checks: <span className="font-bold">{totalChecks}</span></span>
                <span className="mx-3">|</span>
                <span className="text-green-600 dark:text-green-400">Passed: <span className="font-bold">{passedChecks}</span></span>
                <span className="mx-3">|</span>
                <span className="text-red-600 dark:text-red-400">Failed: <span className="font-bold">{failedChecks}</span></span>
            </div>
        </div>
        <div className="p-4 overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-border">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Check</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-card divide-y divide-gray-200 dark:divide-dark-border">
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{result.check}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      result.status === 'Pass'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                    }`}>
                      {result.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400 font-mono">
                    {result.status === 'Fail' && (
                      <div>
                        <p><strong className="text-gray-700 dark:text-gray-300">Expected:</strong> {result.expected}</p>
                        <p><strong className="text-gray-700 dark:text-gray-300">Actual:</strong> {result.actual}</p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end p-4 border-t dark:border-dark-border">
          <button onClick={onClose} className="px-4 py-2 rounded-md bg-brand-primary text-white hover:bg-brand-secondary">Close</button>
        </div>
      </div>
    </div>
  );
};


// --- MAIN APP COMPONENT ---

const initialBuilderState: BuilderState = {
  selectedShotTypeId: null,
  selectedCameraMovementId: null,
  selectedLightingStyleId: null,
  selectedAestheticToneId: null,
  cineNotes: "",
  sceneSelection: [],
  selectedTimeOfDayId: null,
  selectedWeatherId: null,
  selectedLightingPresetId: null,
  lightingSettings: {
    brightness: 50,
    contrast: 50,
    colorTemperature: 5500,
  },
  selectedCharacters: [],
  selectedObjects: [],
  sceneDescription: "",
  selectedAmbientSoundIds: [],
  selectedEffectIds: [],
  actions: [],
  negativePrompts: [
    "subtitles", "captions", "watermarks", "poor quality", "artifacts", "unwanted elements", "singing", "music"
  ],
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'storyboard' | 'database'>('storyboard');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- DATABASE STATE ---
  const [scenePresets, setScenePresets] = useLocalStorage<ScenePreset[]>('db_scenePresets', initialScenePresets);
  const [shotTypes, setShotTypes] = useLocalStorage<BaseItem[]>('db_shotTypes', initialShotTypes);
  const [cameraMovements, setCameraMovements] = useLocalStorage<BaseItem[]>('db_cameraMovements', initialCameraMovements);
  const [lightingStyles, setLightingStyles] = useLocalStorage<BaseItem[]>('db_lightingStyles', initialLightingStyles);
  const [aestheticTones, setAestheticTones] = useLocalStorage<BaseItem[]>('db_aestheticTones', initialAestheticTones);
  const [scenesData, setScenesData] = useLocalStorage<CascadingOption[]>('db_scenes', sceneOptions);
  const [charactersData, setCharactersData] = useLocalStorage<CascadingOption[]>('db_characters', characterOptions);
  const [objects, setObjects] = useLocalStorage<CascadingOption[]>('db_objects', initialObjects);
  const [lightingPresets, setLightingPresets] = useLocalStorage<LightingPreset[]>('db_lightingPresets', initialLightingPresets);
  const [movementQualities, setMovementQualities] = useLocalStorage<MovementQuality[]>('db_movementQualities', initialMovementQualities);
  const [actionTypes, setActionTypes] = useLocalStorage<ActionType[]>('db_actionTypes', initialActionTypes);
  const [ambientSoundsData, setAmbientSoundsData] = useLocalStorage<AudioOption[]>('db_ambientSounds', initialAmbientSounds);
  const [soundEffectsData, setSoundEffectsData] = useLocalStorage<AudioOption[]>('db_soundEffects', initialSoundEffects);
  const [timeOfDayOptions, setTimeOfDayOptions] = useLocalStorage<BaseItem[]>('db_timeOfDay', initialTimeOfDayOptions);
  const [weatherOptions, setWeatherOptions] = useLocalStorage<BaseItem[]>('db_weather', initialWeatherOptions);
  const [roles, setRoles] = useLocalStorage<BaseItem[]>('db_roles', initialRoles);
  const [upperClothingTypes, setUpperClothingTypes] = useLocalStorage<BaseItem[]>('db_upperClothing', initialUpperClothingTypes);
  const [lowerClothingTypes, setLowerClothingTypes] = useLocalStorage<BaseItem[]>('db_lowerClothing', initialLowerClothingTypes);
  const [clothingColors, setClothingColors] = useLocalStorage<BaseItem[]>('db_clothingColors', initialClothingColors);
  const [footwear, setFootwear] = useLocalStorage<BaseItem[]>('db_footwear', initialFootwear);
  const [genders, setGenders] = useLocalStorage<BaseItem[]>('db_genders', initialGenders);
  const [ages, setAges] = useLocalStorage<BaseItem[]>('db_ages', initialAges);
  const [ethnicities, setEthnicities] = useLocalStorage<BaseItem[]>('db_ethnicities', initialEthnicities);
  const [heights, setHeights] = useLocalStorage<BaseItem[]>('db_heights', initialHeights);
  const [weights, setWeights] = useLocalStorage<BaseItem[]>('db_weights', initialWeights);
  const [bodyTypes, setBodyTypes] = useLocalStorage<BaseItem[]>('db_bodyTypes', initialBodyTypes);
  const [animalAges, setAnimalAges] = useLocalStorage<BaseItem[]>('db_animalAges', initialAnimalAges);
  const [animalSizes, setAnimalSizes] = useLocalStorage<BaseItem[]>('db_animalSizes', initialAnimalSizes);
  const [animalColors, setAnimalColors] = useLocalStorage<BaseItem[]>('db_animalColors', initialAnimalColors);
  const [carColors, setCarColors] = useLocalStorage<BaseItem[]>('db_carColors', initialCarColors);
  const [craneColors, setCraneColors] = useLocalStorage<BaseItem[]>('db_craneColors', initialCraneColors);
  const [hairDetails, setHairDetails] = useLocalStorage<BaseItem[]>('db_hairDetails', initialHairDetails);
  const [eyeDetails, setEyeDetails] = useLocalStorage<BaseItem[]>('db_eyeDetails', initialEyeDetails);
  const [facialFeatures, setFacialFeatures] = useLocalStorage<BaseItem[]>('db_facialFeatures', initialFacialFeatures);
  const [postureAndMannerisms, setPostureAndMannerisms] = useLocalStorage<BaseItem[]>('db_postureAndMannerisms', initialPostureAndMannerisms);
  const [emotionalBaselines, setEmotionalBaselines] = useLocalStorage<BaseItem[]>('db_emotionalBaselines', initialEmotionalBaselines);
  const [voiceCharacteristics, setVoiceCharacteristics] = useLocalStorage<BaseItem[]>('db_voiceCharacteristics', initialVoiceCharacteristics);
  const [distinctiveFeatures, setDistinctiveFeatures] = useLocalStorage<BaseItem[]>('db_distinctiveFeatures', initialDistinctiveFeatures);
  const [professionalAttributes, setProfessionalAttributes] = useLocalStorage<BaseItem[]>('db_professionalAttributes', initialProfessionalAttributes);
  const [personalityIndicators, setPersonalityIndicators] = useLocalStorage<BaseItem[]>('db_personalityIndicators', initialPersonalityIndicators);
  const [accessories, setAccessories] = useLocalStorage<BaseItem[]>('db_accessories', initialAccessories);

  // --- BUILDER STATE ---
  const [builderState, setBuilderState] = useState<BuilderState>(initialBuilderState);
  const [expandedCharId, setExpandedCharId] = useState<string | null>(null);

  const [finalJson, setFinalJson] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  
  const [selectedPresetId, setSelectedPresetId] = useState<string | null>(null);

  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [verificationResults, setVerificationResults] = useState<VerificationResult[]>([]);

  const getOption = useCallback(<T extends BaseItem>(id: string | null, options: T[]): T | undefined => {
    return id ? options.find(o => o.id === id) : undefined;
  }, []);

  // Sync lighting sliders with preset
  useEffect(() => {
    if (!builderState.selectedLightingPresetId) return;
    const preset = lightingPresets.find(p => p.id === builderState.selectedLightingPresetId);
    if (preset?.jsonBlock) {
      try {
        const parsed = JSON.parse(preset.jsonBlock);
        setBuilderState(prev => ({
          ...prev,
          lightingSettings: {
            brightness: parsed.brightness ?? 50,
            contrast: parsed.contrast ?? 50,
            colorTemperature: parsed.colorTemperature ?? 5500,
          }
        }));
      } catch (e) {
        console.error("Failed to parse lighting preset JSON", e);
      }
    }
  }, [builderState.selectedLightingPresetId, lightingPresets]);
  
  // --- JSON GENERATION LOGIC ---
  useEffect(() => {
    const generateJson = () => {
      const findName = (id: string | null | undefined, options: BaseItem[]) => getOption(id, options)?.name || '';
      const getNamesFromIds = (ids: (string | null | undefined)[], options: BaseItem[]) => (ids || []).filter((id): id is string => !!id).map(id => findName(id, options));

      const sceneObject: any = {
        environment: '',
        sublocation: '',
        timeOfDay: findName(builderState.selectedTimeOfDayId, timeOfDayOptions),
        weather: findName(builderState.selectedWeatherId, weatherOptions),
        description: builderState.sceneDescription || '',
      };

      if (builderState.sceneSelection.length > 0) {
        let finalSceneJson: any = {};
        let pathNames: (string | undefined)[] = [];
        builderState.sceneSelection.forEach(id => {
            const option = getOption(id, scenesData);
            pathNames.push(option?.name);
            if (option?.jsonBlock) {
                try {
                    finalSceneJson = { ...finalSceneJson, ...JSON.parse(option.jsonBlock) };
                } catch (e) { console.error("Failed to parse scene jsonBlock", e); }
            }
        });
        sceneObject.environment = finalSceneJson.environment || pathNames[0] || '';
        sceneObject.sublocation = finalSceneJson.sublocation || pathNames.slice(1).join(' -> ') || '';
        if(finalSceneJson.roadModeration) {
            sceneObject.roadModeration = finalSceneJson.roadModeration;
        }
      }
      
      const charactersArray = builderState.selectedCharacters.map(char => {
        const charType = getOption(char.path[0], charactersData)?.name || 'Unknown';
        const details: any = {};
        
        if (char.path[0] === 'human') {
            const getJoinedNamesFromIds = (ids: string[] | undefined, options: BaseItem[]) => {
                const names = getNamesFromIds(ids, options);
                return names.length > 0 ? names.join(', ') : undefined;
            };

            details.gender = findName(char.genderId, genders) || undefined;
            details.age = findName(char.ageId, ages) || undefined;
            details.ethnicity = findName(char.ethnicityId, ethnicities) || undefined;
            details.height = findName(char.heightId, heights) || undefined;
            details.weight = findName(char.weightId, weights) || undefined;
            details.physique = findName(char.bodyTypeId, bodyTypes) || undefined;

            const hairColors = (char.hairDetailsIds || []).filter(id => id.startsWith('hd_color_')).map(id => findName(id, hairDetails)?.replace(' hair', ''));
            const hairLengths = (char.hairDetailsIds || []).filter(id => id.startsWith('hd_len_')).map(id => findName(id, hairDetails));
            const hairStylesAndTextures = (char.hairDetailsIds || []).filter(id => id.startsWith('hd_style_') || id.startsWith('hd_texture_')).map(id => findName(id, hairDetails));
            details.hairColor = hairColors.length > 0 ? hairColors.join(', ') : undefined;
            details.hairLength = hairLengths.length > 0 ? hairLengths.join(', ') : undefined;
            details.hairStyle = hairStylesAndTextures.length > 0 ? hairStylesAndTextures.join(', ') : undefined;

            const eyeColors = (char.eyeDetailsIds || []).filter(id => id.startsWith('ed_color_')).map(id => findName(id, eyeDetails)?.replace(' eyes', ''));
            const eyeShapesAndExpr = (char.eyeDetailsIds || []).filter(id => id.startsWith('ed_shape_') || id.startsWith('ed_expr_')).map(id => findName(id, eyeDetails));
            details.eyeColor = eyeColors.length > 0 ? eyeColors.join(', ') : undefined;
            details.eyeDetails = eyeShapesAndExpr.length > 0 ? eyeShapesAndExpr.join(', ') : undefined;
            
            const skinTones = (char.facialFeaturesIds || []).filter(id => id.startsWith('ff_skin_')).map(id => findName(id, facialFeatures)?.replace(' skin tone', '').replace(' skin', ''));
            const facialHairs = (char.facialFeaturesIds || []).filter(id => id.startsWith('ff_hair_')).map(id => findName(id, facialFeatures));
            const otherFacialFeatures = (char.facialFeaturesIds || []).filter(id => !id.startsWith('ff_skin_') && !id.startsWith('ff_hair_')).map(id => findName(id, facialFeatures));
            details.skinTone = skinTones.length > 0 ? skinTones.join(', ') : undefined;
            details.facialHair = facialHairs.length > 0 ? facialHairs.join(', ') : undefined;
            details.facialFeatures = otherFacialFeatures.length > 0 ? otherFacialFeatures.join(', ') : undefined;
            
            details.postureAndMannerisms = getJoinedNamesFromIds(char.postureAndMannerismsIds, postureAndMannerisms);
            details.accessories = getNamesFromIds(char.accessoriesIds, accessories).length > 0 ? getNamesFromIds(char.accessoriesIds, accessories) : undefined;
            details.voiceCharacteristics = getJoinedNamesFromIds(char.voiceCharacteristicsIds, voiceCharacteristics);
            details.distinctiveFeatures = getJoinedNamesFromIds(char.distinctiveFeaturesIds, distinctiveFeatures);
            details.professionalAttributes = getJoinedNamesFromIds(char.professionalAttributesIds, professionalAttributes);
            details.personalityIndicators = getJoinedNamesFromIds(char.personalityIndicatorsIds, personalityIndicators);
            details.emotionalBaseline = findName(char.emotionalBaselineId, emotionalBaselines) || undefined;

            details.upperClothingType = findName(char.upperClothingTypeId, upperClothingTypes) || undefined;
            details.upperClothingColor = findName(char.upperClothingColorId, clothingColors) || undefined;
            details.lowerClothingType = findName(char.lowerClothingTypeId, lowerClothingTypes) || undefined;
            details.lowerClothingColor = findName(char.lowerClothingColorId, clothingColors) || undefined;
            details.footwear = findName(char.footwearId, footwear) || undefined;
            details.role = findName(char.roleId, roles) || undefined;
            details.faceHidden = char.faceHidden;
            
            Object.keys(details).forEach(key => {
              if (details[key as keyof typeof details] === undefined) {
                delete details[key as keyof typeof details];
              }
            });

        } else {
            let animalDetailsJson: any = {};
            char.path.forEach(id => {
                const option = getOption(id, charactersData);
                if (option?.jsonBlock) {
                    try { 
                        animalDetailsJson = { ...animalDetailsJson, ...JSON.parse(option.jsonBlock) }; 
                    } catch (e) {
                        console.error(`Failed to parse jsonBlock for character option ${option.id}:`, e);
                    }
                }
            });

            // Start with the details from the hierarchy's jsonBlock.
            // This will include properties like "breed" from level 4.
            Object.assign(details, animalDetailsJson);

            // Set a fallback for species based on the selected path name.
            details.species = animalDetailsJson.species || getOption(char.path[char.path.length - 1], charactersData)?.name;

            // Now, ONLY override with UI selections if they have been made.
            const selectedAge = findName(char.animalAgeId, animalAges);
            if (selectedAge) {
                details.age = selectedAge;
            }

            const selectedSize = findName(char.animalSizeId, animalSizes);
            if (selectedSize) {
                details.size = selectedSize;
            }
            
            const selectedColor = findName(char.animalColorId, animalColors);
            if (selectedColor) {
                details.color = selectedColor;
            }
            
            // Clean up any properties that are still undefined.
            Object.keys(details).forEach(key => {
              if (details[key as keyof typeof details] === undefined) {
                delete details[key as keyof typeof details];
              }
            });
        }
        
        const characterObject: any = {
            id: char.id,
            type: charType,
            details: details,
            notes: char.notes || '',
        };
        if (char.characterName) {
            characterObject.name = char.characterName;
        }
        return characterObject;
      });
      
      const objectsArray = builderState.selectedObjects.map(obj => {
          if (!obj.path || obj.path.length === 0) return null;
          
          const pathOptions = obj.path.map(id => getOption(id, objects));
          const finalOption = pathOptions[pathOptions.length - 1];
          if (!finalOption) return null;

          let objectType = 'Object';
          let baseDetails = '';

          try {
            const parsed = finalOption.jsonBlock ? JSON.parse(finalOption.jsonBlock) : {};
            objectType = parsed.type || getOption(obj.path[0], objects)?.name || 'Object';
            baseDetails = parsed.details || pathOptions.map(o => o?.name).join(' ');
          } catch(e) {
            console.error(`Error parsing JSON for object ${finalOption.id}:`, e);
            baseDetails = pathOptions.map(o => o?.name).join(' ');
          }
          
          let finalDetails = baseDetails;
          const isVehicle = obj.path[0] === 'vehicle';
          
          if (isVehicle) {
              const isCrane = obj.path.includes('vehicle_construction_crane');
              const colorOptions = isCrane ? craneColors : carColors;
              const color = findName(obj.colorId, colorOptions);
              if (color) {
                  const articleRegex = /^(a|an)\s/i;
                  const detailsWithoutArticle = baseDetails.replace(articleRegex, '');
                  finalDetails = `a ${color} ${detailsWithoutArticle}`;
              }
          }
          
          return {
              id: obj.id,
              type: objectType,
              details: finalDetails,
          };
      }).filter(Boolean);

      const cinematographyObject = {
        shotType: findName(builderState.selectedShotTypeId, shotTypes),
        movement: findName(builderState.selectedCameraMovementId, cameraMovements),
        lighting: findName(builderState.selectedLightingStyleId, lightingStyles),
        tone: findName(builderState.selectedAestheticToneId, aestheticTones),
        notes: builderState.cineNotes || '',
      };
      
      const audioObject = {
        ambient: builderState.selectedAmbientSoundIds.map(id => findName(id, ambientSoundsData)).filter(Boolean),
        effects: builderState.selectedEffectIds.map(id => findName(id, soundEffectsData)).filter(Boolean),
        dialogue: "",
        dialogueTone: "None",
      };

      const negativePromptsArray = builderState.negativePrompts;

      const actionsArray = builderState.actions.map(action => ({
        id: action.id,
        type: findName(action.typeId, actionTypes),
        description: action.description,
        emotion: action.emotion,
        endingNote: action.endingNote,
        involvedCharacters: action.involvedCharacterIds,
      }));
      
      const finalOutput = {
        scene: sceneObject,
        characters: charactersArray,
        objects: objectsArray,
        cinematography: cinematographyObject,
        audio: audioObject,
        negativePrompts: negativePromptsArray,
        actions: actionsArray,
      };
      
      setFinalJson(JSON.stringify(finalOutput, null, 2));
    };
    generateJson();
  }, [
    builderState, scenesData, charactersData, objects, actionTypes, getOption,
    ambientSoundsData, soundEffectsData, timeOfDayOptions, weatherOptions, lightingPresets,
    roles, upperClothingTypes, lowerClothingTypes, clothingColors, footwear,
    shotTypes, cameraMovements, lightingStyles, aestheticTones, movementQualities,
    genders, ages, ethnicities, heights, weights, bodyTypes, hairDetails, eyeDetails, facialFeatures,
    postureAndMannerisms, emotionalBaselines, voiceCharacteristics, distinctiveFeatures,
    professionalAttributes, personalityIndicators, accessories, animalAges, animalSizes, animalColors, carColors,
    craneColors
  ]);

  // --- BUILDER ACTIONS ---
  const addCharacter = () => setBuilderState(prev => ({
    ...prev,
    selectedCharacters: [...prev.selectedCharacters, { 
      id: crypto.randomUUID(), path: [], notes: '', faceHidden: false, roleId: null, 
      upperClothingTypeId: null, upperClothingColorId: null, lowerClothingTypeId: null, 
      lowerClothingColorId: null, footwearId: null, genderId: null, ageId: null, ethnicityId: null,
      heightId: null, weightId: null, bodyTypeId: null, characterName: '', hairDetailsIds: [],
      eyeDetailsIds: [], facialFeaturesIds: [], postureAndMannerismsIds: [], emotionalBaselineId: null,
      accessoriesIds: [], voiceCharacteristicsIds: [], distinctiveFeaturesIds: [],
      professionalAttributesIds: [], personalityIndicatorsIds: [], animalAgeId: null, animalSizeId: null,
      animalColorId: null,
    }]
  }));
  const removeCharacter = (id: string) => setBuilderState(prev => ({
    ...prev,
    selectedCharacters: prev.selectedCharacters.filter(c => c.id !== id)
  }));
  const updateCharacter = (id: string, newValues: Partial<SelectedCharacter>) => {
      setBuilderState(prev => ({
        ...prev,
        selectedCharacters: prev.selectedCharacters.map(c => c.id === id ? { ...c, ...newValues } : c)
      }));
  };
  const duplicateCharacter = (id: string) => {
    setBuilderState(prev => {
      const charIndex = prev.selectedCharacters.findIndex(c => c.id === id);
      if (charIndex === -1) return prev;

      const originalChar = prev.selectedCharacters[charIndex];
      const newChar = {
        ...JSON.parse(JSON.stringify(originalChar)), // Deep copy
        id: crypto.randomUUID(),
        characterName: originalChar.characterName ? `${originalChar.characterName} (Copy)` : '',
      };

      const newCharacters = [...prev.selectedCharacters];
      newCharacters.splice(charIndex + 1, 0, newChar);

      return { ...prev, selectedCharacters: newCharacters };
    });
  };
  const addObject = () => setBuilderState(prev => ({
    ...prev,
    selectedObjects: [...prev.selectedObjects, { id: crypto.randomUUID(), path: [], colorId: null }]
  }));
  const removeObject = (id: string) => setBuilderState(prev => ({
    ...prev,
    selectedObjects: prev.selectedObjects.filter(o => o.id !== id)
  }));
  const updateObject = (id: string, newValues: Partial<SelectedObject>) => setBuilderState(prev => ({
    ...prev,
    selectedObjects: prev.selectedObjects.map(o => o.id === id ? {...o, ...newValues} : o)
  }));
  
  const addAction = () => setBuilderState(prev => ({
    ...prev,
    actions: [...prev.actions, { id: crypto.randomUUID(), typeId: null, description: '', emotion: '', endingNote: '', involvedCharacterIds: [], movementQualityId: null }]
  }));
  const removeAction = (id: string) => setBuilderState(prev => ({
    ...prev,
    actions: prev.actions.filter(a => a.id !== id)
  }));
  const updateAction = (id: string, newValues: Partial<SelectedAction>) => {
      setBuilderState(prev => ({
        ...prev,
        actions: prev.actions.map(a => a.id === id ? { ...a, ...newValues } : a)
      }));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(finalJson).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };
  
  const applyState = useCallback((stateToApply: Partial<BuilderState>) => {
      const newState: BuilderState = {
          ...initialBuilderState,
          ...stateToApply,
          lightingSettings: {
              ...initialBuilderState.lightingSettings,
              ...(stateToApply.lightingSettings || {}),
          },
          selectedCharacters: stateToApply.selectedCharacters || [],
          selectedObjects: stateToApply.selectedObjects || [],
          actions: stateToApply.actions || [],
          negativePrompts: stateToApply.negativePrompts || initialBuilderState.negativePrompts,
          selectedAmbientSoundIds: stateToApply.selectedAmbientSoundIds || [],
          selectedEffectIds: stateToApply.selectedEffectIds || [],
          sceneSelection: stateToApply.sceneSelection || [],
      };
      setBuilderState(newState);
  }, []);


  const handleLoadPreset = () => {
    if (!selectedPresetId) return;
    const preset = scenePresets.find(p => p.id === selectedPresetId);
    if (!preset) return;

    if (window.confirm(`Are you sure you want to load the "${preset.name}" preset? This will overwrite your current settings.`)) {
        try {
            const loadedState: Partial<BuilderState> = JSON.parse(preset.jsonBlock);
            applyState(loadedState);
            alert(`Preset "${preset.name}" loaded successfully!`);
        } catch (error) {
            console.error("Failed to parse or apply preset state:", error);
            alert("Error: Could not load this preset. The data might be corrupted.");
        }
    }
  };
  
  const handleExportPrompt = () => {
    const blob = new Blob([finalJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'veo_prompt.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const handleSaveSession = () => {
    const blob = new Blob([JSON.stringify(builderState, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'veo_session.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleLoadSessionClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (window.confirm(`Are you sure you want to load this session file? This will overwrite your current settings.`)) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result;
                if (typeof text !== 'string') throw new Error("File content is not a string");
                const loadedState: BuilderState = JSON.parse(text);
                
                const isSessionFile = 'sceneSelection' in loadedState && 'selectedCharacters' in loadedState && 'actions' in loadedState && 'selectedShotTypeId' in loadedState;
                if (!isSessionFile) {
                  throw new Error("Invalid session file format. It looks like you tried to load a final prompt instead of a session file. Please use 'Save Session' to create a loadable file.");
                }

                applyState(loadedState);
                alert("Session loaded successfully!");
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
                console.error("Failed to parse or apply imported state:", error);
                alert(`Error loading file: ${errorMessage}`);
            } finally {
                if (event.target) event.target.value = '';
            }
        };
        reader.readAsText(file);
    } else {
        if (event.target) event.target.value = '';
    }
  };

  // FIX: Moved getCharacterName before handleVerify to fix declaration error.
  const getCharacterName = useCallback((charId: string) => {
    const char = builderState.selectedCharacters.find(c => c.id === charId);
    if (!char) return `Character ${charId.substring(0, 4)}`;

    if (char.characterName) return char.characterName;

    if (char.path.length > 0) {
      const finalId = char.path[char.path.length - 1];
      const option = getOption(finalId, charactersData);
      if (option) return option.name;
    }
    
    return `Character ${charId.substring(0, 4)}`;
  }, [builderState.selectedCharacters, charactersData, getOption]);

  const handleVerify = useCallback(() => {
    const results: VerificationResult[] = [];
    let parsedJson: any;

    try {
      parsedJson = JSON.parse(finalJson);
    } catch (e) {
      results.push({ check: "JSON Parsing", status: 'Fail', expected: 'Valid JSON', actual: 'Invalid JSON format' });
      setVerificationResults(results);
      setIsVerificationModalOpen(true);
      return;
    }

    const findName = (id: string | null | undefined, options: BaseItem[]) => getOption(id, options)?.name || '';
    const check = (name: string, expected: any, actual: any) => {
        const pass = JSON.stringify(expected) === JSON.stringify(actual);
        results.push({
            check: name,
            status: pass ? 'Pass' : 'Fail',
            expected: pass ? undefined : String(expected),
            actual: pass ? undefined : String(actual === undefined ? 'Not Found' : actual),
        });
    };
    
    // Cinematography
    check('Cine: Shot Type', findName(builderState.selectedShotTypeId, shotTypes), parsedJson.cinematography?.shotType || '');
    check('Cine: Movement', findName(builderState.selectedCameraMovementId, cameraMovements), parsedJson.cinematography?.movement || '');
    check('Cine: Lighting', findName(builderState.selectedLightingStyleId, lightingStyles), parsedJson.cinematography?.lighting || '');
    check('Cine: Tone', findName(builderState.selectedAestheticToneId, aestheticTones), parsedJson.cinematography?.tone || '');
    check('Cine: Notes', builderState.cineNotes, parsedJson.cinematography?.notes || '');
    
    // Scene
    let expectedEnv = '', expectedSub = '', expectedRoad = '';
    if (builderState.sceneSelection.length > 0) {
        let finalSceneJson: any = {};
        let pathNames: (string | undefined)[] = [];
        builderState.sceneSelection.forEach(id => {
            const option = getOption(id, scenesData); pathNames.push(option?.name);
            if (option?.jsonBlock) try { finalSceneJson = { ...finalSceneJson, ...JSON.parse(option.jsonBlock) }; } catch (e) {}
        });
        expectedEnv = finalSceneJson.environment || pathNames[0] || '';
        expectedSub = finalSceneJson.sublocation || pathNames.slice(1).join(' -> ') || '';
        expectedRoad = finalSceneJson.roadModeration;
    }
    check('Scene: Environment', expectedEnv, parsedJson.scene?.environment || '');
    check('Scene: Sublocation', expectedSub, parsedJson.scene?.sublocation || '');
    if(expectedRoad) check('Scene: Road Moderation', expectedRoad, parsedJson.scene?.roadModeration);
    check('Scene: Time of Day', findName(builderState.selectedTimeOfDayId, timeOfDayOptions), parsedJson.scene?.timeOfDay || '');
    check('Scene: Weather', findName(builderState.selectedWeatherId, weatherOptions), parsedJson.scene?.weather || '');
    check('Scene: Description', builderState.sceneDescription, parsedJson.scene?.description || '');

    // Characters
    check('Character Count', builderState.selectedCharacters.length, parsedJson.characters?.length || 0);
    builderState.selectedCharacters.forEach((char, i) => {
      const jsonChar = parsedJson.characters?.find((c: any) => c.id === char.id);
      if (!jsonChar) {
        results.push({ check: `Character #${i+1} (${char.id})`, status: 'Fail', expected: 'To exist in JSON', actual: 'Not Found' });
        return;
      }
      const prefix = `Char #${i+1} (${getCharacterName(char.id)})`
      check(`${prefix}: Type`, getOption(char.path[0], charactersData)?.name || 'Unknown', jsonChar.type);
      check(`${prefix}: Name`, char.characterName || '', jsonChar.name || '');
      check(`${prefix}: Notes`, char.notes, jsonChar.notes);
      
      if(char.path[0] === 'human') {
        const getNamesFromIds = (ids: (string | null | undefined)[], options: BaseItem[]) => (ids || []).filter((id): id is string => !!id).map(id => findName(id, options));
        const getJoinedNamesFromIds = (ids: string[] | undefined, options: BaseItem[]) => getNamesFromIds(ids, options).join(', ') || undefined;

        check(`${prefix}: Gender`, findName(char.genderId, genders) || undefined, jsonChar.details?.gender);
        check(`${prefix}: Age`, findName(char.ageId, ages) || undefined, jsonChar.details?.age);
        check(`${prefix}: Ethnicity`, findName(char.ethnicityId, ethnicities) || undefined, jsonChar.details?.ethnicity);
        check(`${prefix}: Height`, findName(char.heightId, heights) || undefined, jsonChar.details?.height);
        check(`${prefix}: Weight`, findName(char.weightId, weights) || undefined, jsonChar.details?.weight);
        check(`${prefix}: Physique`, findName(char.bodyTypeId, bodyTypes) || undefined, jsonChar.details?.physique);

        check(`${prefix}: Hair Color`, ((char.hairDetailsIds || []).filter(id => id.startsWith('hd_color_')).map(id => findName(id, hairDetails)?.replace(' hair', ''))).join(', ') || undefined, jsonChar.details?.hairColor);
        check(`${prefix}: Hair Length`, ((char.hairDetailsIds || []).filter(id => id.startsWith('hd_len_')).map(id => findName(id, hairDetails))).join(', ') || undefined, jsonChar.details?.hairLength);
        check(`${prefix}: Hair Style`, ((char.hairDetailsIds || []).filter(id => id.startsWith('hd_style_') || id.startsWith('hd_texture_')).map(id => findName(id, hairDetails))).join(', ') || undefined, jsonChar.details?.hairStyle);

        check(`${prefix}: Posture`, getJoinedNamesFromIds(char.postureAndMannerismsIds, postureAndMannerisms), jsonChar.details?.postureAndMannerisms);
        check(`${prefix}: Accessories`, getNamesFromIds(char.accessoriesIds, accessories).length > 0 ? getNamesFromIds(char.accessoriesIds, accessories) : undefined, jsonChar.details?.accessories);
      } else { // It's an animal
          check(`${prefix}: Age`, findName(char.animalAgeId, animalAges) || undefined, jsonChar.details?.age);
          check(`${prefix}: Size`, findName(char.animalSizeId, animalSizes) || undefined, jsonChar.details?.size);

          let animalDetailsJson: any = {};
          char.path.forEach(id => {
              const option = getOption(id, charactersData);
              if (option?.jsonBlock) {
                  try { animalDetailsJson = { ...animalDetailsJson, ...JSON.parse(option.jsonBlock) }; } 
                  catch (e) {}
              }
          });

          const selectedColorName = findName(char.animalColorId, animalColors);
          let expectedColor = undefined;
          if (selectedColorName) {
              expectedColor = selectedColorName;
          } else if (animalDetailsJson.color) {
              expectedColor = animalDetailsJson.color;
          }
          check(`${prefix}: Color`, expectedColor, jsonChar.details?.color);
      }
    });

    // Objects
    check('Object Count', builderState.selectedObjects.length, parsedJson.objects?.length || 0);
     builderState.selectedObjects.forEach((obj, i) => {
        const jsonObject = parsedJson.objects?.find((o: any) => o.id === obj.id);
        if(!jsonObject) {
            results.push({ check: `Object #${i+1} (${obj.id})`, status: 'Fail', expected: 'To exist in JSON', actual: 'Not Found' });
            return;
        }

        const pathOptions = obj.path.map(id => getOption(id, objects));
        const finalOption = pathOptions[pathOptions.length - 1];
        if(!finalOption) return;

        let expectedType = 'Object';
        let expectedBaseDetails = '';
        try {
            const parsed = finalOption.jsonBlock ? JSON.parse(finalOption.jsonBlock) : {};
            expectedType = parsed.type || getOption(obj.path[0], objects)?.name || 'Object';
            expectedBaseDetails = parsed.details || pathOptions.map(o => o?.name).join(' ');
        } catch(e) { expectedBaseDetails = pathOptions.map(o => o?.name).join(' '); }
        
        let expectedFinalDetails = expectedBaseDetails;
        if (obj.path[0] === 'vehicle') {
            const isCrane = obj.path.includes('vehicle_construction_crane');
            const colorOptions = isCrane ? craneColors : carColors;
            const color = findName(obj.colorId, colorOptions);
            if (color) {
                const articleRegex = /^(a|an)\s/i;
                const detailsWithoutArticle = expectedBaseDetails.replace(articleRegex, '');
                expectedFinalDetails = `a ${color} ${detailsWithoutArticle}`;
            }
        }
        check(`Object #${i+1}: Type`, expectedType, jsonObject.type);
        check(`Object #${i+1}: Details`, expectedFinalDetails, jsonObject.details);
    });

    setVerificationResults(results);
    setIsVerificationModalOpen(true);
  }, [finalJson, builderState, getOption, getCharacterName, shotTypes, cameraMovements, lightingStyles, aestheticTones, scenesData, timeOfDayOptions, weatherOptions, charactersData, objects, carColors, craneColors, genders, ages, ethnicities, heights, weights, bodyTypes, hairDetails, postureAndMannerisms, accessories, animalAges, animalSizes, animalColors]);
  
  return (
    <div className="min-h-screen">
      <header className="bg-white dark:bg-dark-card shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
            Veo 3 JSON Prompt Studio
          </h1>
          <div className="flex border border-gray-300 dark:border-dark-border rounded-lg p-1">
            <button onClick={() => setActiveTab('storyboard')} className={`px-4 py-1 rounded-md text-sm font-medium ${activeTab === 'storyboard' ? 'bg-brand-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
              Storyboard Builder
            </button>
            <button onClick={() => setActiveTab('database')} className={`px-4 py-1 rounded-md text-sm font-medium ${activeTab === 'database' ? 'bg-brand-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
              Database
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 md:p-6">
        {activeTab === 'storyboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              
              <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow">
                 <h2 className="text-lg font-semibold mb-3">Project Management</h2>
                <div className="flex flex-wrap gap-4 items-end">
                    <div className="flex-grow">
                        <SelectInput
                            label="Load Scene Preset"
                            value={selectedPresetId}
                            onChange={e => setSelectedPresetId(e.target.value)}
                            options={scenePresets}
                            placeholder="Select a preset to load..."
                        />
                    </div>
                    <button
                        onClick={handleLoadPreset}
                        disabled={!selectedPresetId}
                        className="bg-brand-secondary text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed h-10"
                    >
                        Load Preset
                    </button>
                    <div className="flex gap-2">
                      <button
                          onClick={handleSaveSession}
                          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 h-10 flex items-center gap-2"
                          title="Save the current builder state to a file"
                      >
                          <SaveIcon /> Save Session
                      </button>
                       <button
                          onClick={handleLoadSessionClick}
                          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 h-10 flex items-center gap-2"
                          title="Load a saved session file"
                      >
                          <UploadIcon /> Load Session
                      </button>
                    </div>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".json" className="hidden" />
                </div>
              </div>

              <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-3">Cinematography & Style</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SelectInput
                    label="Shot Type"
                    value={builderState.selectedShotTypeId}
                    onChange={e => setBuilderState(prev => ({...prev, selectedShotTypeId: e.target.value}))}
                    options={shotTypes}
                    placeholder="Select shot type..."
                  />
                  <SelectInput
                    label="Camera Movement"
                    value={builderState.selectedCameraMovementId}
                    onChange={e => setBuilderState(prev => ({...prev, selectedCameraMovementId: e.target.value}))}
                    options={cameraMovements}
                    placeholder="Select camera movement..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <SelectInput
                    label="Lighting Style"
                    value={builderState.selectedLightingStyleId}
                    onChange={e => setBuilderState(prev => ({...prev, selectedLightingStyleId: e.target.value}))}
                    options={lightingStyles}
                    placeholder="Select lighting style..."
                  />
                  <SelectInput
                    label="Aesthetic Tone"
                    value={builderState.selectedAestheticToneId}
                    onChange={e => setBuilderState(prev => ({...prev, selectedAestheticToneId: e.target.value}))}
                    options={aestheticTones}
                    placeholder="Select aesthetic tone..."
                  />
                </div>
                <div className="mt-4">
                  <TextAreaInput
                    label="Style Notes"
                    value={builderState.cineNotes}
                    onChange={e => setBuilderState(prev => ({...prev, cineNotes: e.target.value}))}
                    rows={2}
                    placeholder="Additional cinematography notes..."
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <strong>Tip:</strong> For precise camera positioning, use the syntax <code>(thats where the camera is)</code> in your notes.
                  </p>
                </div>
              </div>

              {/* --- SCENE BUILDER --- */}
              <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-3">Scene / Environment</h2>
                <CascadingSelects 
                  path={builderState.sceneSelection}
                  setPath={newPath => setBuilderState(prev => ({...prev, sceneSelection: newPath}))}
                  data={scenesData}
                />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <SelectInput
                    label="Time of Day"
                    value={builderState.selectedTimeOfDayId}
                    onChange={e => setBuilderState(prev => ({...prev, selectedTimeOfDayId: e.target.value}))}
                    options={timeOfDayOptions}
                    placeholder="Select time of day..."
                  />
                  <SelectInput
                    label="Weather"
                    value={builderState.selectedWeatherId}
                    onChange={e => setBuilderState(prev => ({...prev, selectedWeatherId: e.target.value}))}
                    options={weatherOptions}
                    placeholder="Select weather..."
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
                    <h3 className="text-md font-semibold mb-3">Lighting</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <SelectInput
                            label="Lighting Preset"
                            value={builderState.selectedLightingPresetId}
                            onChange={e => setBuilderState(prev => ({...prev, selectedLightingPresetId: e.target.value}))}
                            options={lightingPresets}
                            placeholder="Select lighting preset..."
                        />
                        <SliderInput
                            label="Brightness"
                            value={builderState.lightingSettings.brightness}
                            onChange={e => setBuilderState(prev => ({...prev, lightingSettings: {...prev.lightingSettings, brightness: Number(e.target.value)}}))}
                            min={0}
                            max={100}
                            unit="%"
                        />
                        <SliderInput
                            label="Contrast"
                            value={builderState.lightingSettings.contrast}
                            onChange={e => setBuilderState(prev => ({...prev, lightingSettings: {...prev.lightingSettings, contrast: Number(e.target.value)}}))}
                            min={0}
                            max={100}
                            unit="%"
                        />
                        <SliderInput
                            label="Color Temperature"
                            value={builderState.lightingSettings.colorTemperature}
                            onChange={e => setBuilderState(prev => ({...prev, lightingSettings: {...prev.lightingSettings, colorTemperature: Number(e.target.value)}}))}
                            min={2000}
                            max={10000}
                            step={100}
                            unit="K"
                        />
                    </div>
                </div>

                 <div className="mt-4">
                  <TextAreaInput 
                    label="Scene Description"
                    value={builderState.sceneDescription}
                    onChange={e => setBuilderState(prev => ({...prev, sceneDescription: e.target.value}))}
                    rows={3}
                    placeholder="A curious villager notices..."
                  />
                </div>
              </div>

              {/* --- CHARACTER BUILDER --- */}
              <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Characters (Subject)</h2>
                  <button onClick={addCharacter} className="flex items-center gap-1 bg-brand-primary text-white px-3 py-1.5 rounded-md hover:bg-brand-secondary text-sm"><PlusIcon /> Add Character</button>
                </div>
                 <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Character Consistency Guide</p>
                    <p className="text-xs"><strong>Template:</strong> <code>[NAME], a [AGE] [ETHNICITY] [GENDER] with [HAIR], [EYES], [FEATURES], [BUILD], wearing [CLOTHING], with [MANNERISMS], [EMOTIONS], [ACCESSORIES], [VOICE].</code></p>
                    <p className="mt-1 text-xs"><strong>Rule:</strong> Use the exact same description across all prompts for a character to ensure consistency.</p>
                </div>
                <div className="flex flex-col gap-4">
                  {builderState.selectedCharacters.map((char) => (
                      <div key={char.id} className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-dark-border">
                        <div className="flex justify-between items-start">
                           <h3 className="font-semibold text-md mb-2">{getCharacterName(char.id) || 'New Character'}</h3>
                           <div className="flex items-center gap-2 -mt-2 -mr-2">
                                <button onClick={() => duplicateCharacter(char.id)} title="Duplicate Character" className="p-1 text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
                                    <DuplicateIcon />
                                </button>
                                <button onClick={() => removeCharacter(char.id)} title="Delete Character" className="p-1 text-red-500 hover:text-red-700 dark:hover:text-red-400">
                                    <TrashIcon />
                                </button>
                           </div>
                        </div>
                        <CascadingSelects
                            path={char.path}
                            setPath={(newPath) => updateCharacter(char.id, { path: newPath })}
                            data={charactersData}
                            gridClass="grid-cols-1 md:grid-cols-2"
                        />
                        
                        {char.path.length > 0 && char.path[0] !== 'human' && (
                          <div className="mt-4 pt-4 border-t border-gray-300 dark:border-dark-border grid grid-cols-1 md:grid-cols-3 gap-4">
                              <SelectInput
                                  label="Age"
                                  value={char.animalAgeId}
                                  onChange={e => updateCharacter(char.id, { animalAgeId: e.target.value })}
                                  options={animalAges}
                                  placeholder="Select Age..."
                              />
                              <SelectInput
                                  label="Size"
                                  value={char.animalSizeId}
                                  onChange={e => updateCharacter(char.id, { animalSizeId: e.target.value })}
                                  options={animalSizes}
                                  placeholder="Select Size..."
                              />
                              <SelectInput
                                  label="Color / Pattern"
                                  value={char.animalColorId}
                                  onChange={e => updateCharacter(char.id, { animalColorId: e.target.value })}
                                  options={animalColors}
                                  placeholder="Select Color..."
                              />
                          </div>
                        )}

                        {char.path[0] === 'human' && (
                          <>
                            <div className="mt-4 pt-4 border-t border-gray-300 dark:border-dark-border">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-md font-semibold">Character Details</h3>
                                    <button 
                                        onClick={() => setExpandedCharId(expandedCharId === char.id ? null : char.id)}
                                        className="text-sm text-brand-primary hover:underline font-semibold"
                                    >
                                        {expandedCharId === char.id ? 'Hide Details' : 'Show Details'}
                                    </button>
                                </div>
                                {expandedCharId === char.id && (
                                  <div className="mt-4 flex flex-col gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                       <div className="w-full">
                                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Character Name</label>
                                          <input
                                            type="text"
                                            value={char.characterName || ''}
                                            onChange={e => updateCharacter(char.id, { characterName: e.target.value })}
                                            placeholder="e.g., Officer Miller"
                                            className="w-full bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md shadow-sm p-2 focus:ring-brand-primary focus:border-brand-primary"
                                          />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                      <SelectInput label="Gender" value={char.genderId} onChange={e => updateCharacter(char.id, { genderId: e.target.value })} options={genders} placeholder="Select Gender..." />
                                      <SelectInput label="Age" value={char.ageId} onChange={e => updateCharacter(char.id, { ageId: e.target.value })} options={ages} placeholder="Select Age..." />
                                      <SelectInput label="Ethnicity" value={char.ethnicityId} onChange={e => updateCharacter(char.id, { ethnicityId: e.target.value })} options={ethnicities} placeholder="Select Ethnicity..." />
                                    </div>

                                    <div>
                                      <h4 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Physical Attributes</h4>
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                          <SelectInput label="Height" value={char.heightId} onChange={e => updateCharacter(char.id, { heightId: e.target.value })} options={heights} placeholder="Select Height..."/>
                                          <SelectInput label="Weight" value={char.weightId} onChange={e => updateCharacter(char.id, { weightId: e.target.value })} options={weights} placeholder="Select Weight..."/>
                                          <SelectInput label="Body Type" value={char.bodyTypeId} onChange={e => updateCharacter(char.id, { bodyTypeId: e.target.value })} options={bodyTypes} placeholder="Select Body Type..."/>
                                      </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <MultiSelectInput label="Hair Details" selectedIds={char.hairDetailsIds || []} onChange={ids => updateCharacter(char.id, { hairDetailsIds: ids })} options={hairDetails} placeholder="Color, style, length..."/>
                                      <MultiSelectInput label="Eye Details" selectedIds={char.eyeDetailsIds || []} onChange={ids => updateCharacter(char.id, { eyeDetailsIds: ids })} options={eyeDetails} placeholder="Color, shape, expression..."/>
                                      <MultiSelectInput label="Facial Features" selectedIds={char.facialFeaturesIds || []} onChange={ids => updateCharacter(char.id, { facialFeaturesIds: ids })} options={facialFeatures} placeholder="Structure, skin, hair..."/>
                                      <MultiSelectInput label="Posture & Mannerisms" selectedIds={char.postureAndMannerismsIds || []} onChange={ids => updateCharacter(char.id, { postureAndMannerismsIds: ids })} options={postureAndMannerisms} placeholder="Stance, gestures..."/>
                                      <SelectInput label="Emotional Baseline" value={char.emotionalBaselineId} onChange={e => updateCharacter(char.id, { emotionalBaselineId: e.target.value })} options={emotionalBaselines} placeholder="Baseline mood..."/>
                                      <MultiSelectInput label="Voice Characteristics" selectedIds={char.voiceCharacteristicsIds || []} onChange={ids => updateCharacter(char.id, { voiceCharacteristicsIds: ids })} options={voiceCharacteristics} placeholder="Tone, accent, pace..."/>
                                      <MultiSelectInput label="Distinctive Features" selectedIds={char.distinctiveFeaturesIds || []} onChange={ids => updateCharacter(char.id, { distinctiveFeaturesIds: ids })} options={distinctiveFeatures} placeholder="Scars, tattoos..."/>
                                      <MultiSelectInput label="Professional Attributes" selectedIds={char.professionalAttributesIds || []} onChange={ids => updateCharacter(char.id, { professionalAttributesIds: ids })} options={professionalAttributes} placeholder="Expertise indicators..."/>
                                      <MultiSelectInput label="Personality Indicators" selectedIds={char.personalityIndicatorsIds || []} onChange={ids => updateCharacter(char.id, { personalityIndicatorsIds: ids })} options={personalityIndicators} placeholder="Confidence, approachability..."/>
                                      <MultiSelectInput label="Accessories" selectedIds={char.accessoriesIds || []} onChange={ids => updateCharacter(char.id, { accessoriesIds: ids })} options={accessories} placeholder="Worn or carried items..."/>
                                    </div>
                                  </div>
                                )}
                            </div>

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-200 dark:border-dark-border pt-4">
                                <SelectInput
                                    label="Role"
                                    value={char.roleId}
                                    onChange={e => updateCharacter(char.id, { roleId: e.target.value })}
                                    options={roles}
                                    placeholder="Select a role..."
                                />
                                <div /> 
                                <SelectInput
                                    label="Upper Clothing"
                                    value={char.upperClothingTypeId}
                                    onChange={e => updateCharacter(char.id, { upperClothingTypeId: e.target.value })}
                                    options={upperClothingTypes}
                                    placeholder="Select type..."
                                />
                                <SelectInput
                                    label="Upper Clothing Color"
                                    value={char.upperClothingColorId}
                                    onChange={e => updateCharacter(char.id, { upperClothingColorId: e.target.value })}
                                    options={clothingColors}
                                    placeholder="Select color..."
                                />
                                <SelectInput
                                    label="Lower Clothing"
                                    value={char.lowerClothingTypeId}
                                    onChange={e => updateCharacter(char.id, { lowerClothingTypeId: e.target.value })}
                                    options={lowerClothingTypes}
                                    placeholder="Select type..."
                                />
                                <SelectInput
                                    label="Lower Clothing Color"
                                    value={char.lowerClothingColorId}
                                    onChange={e => updateCharacter(char.id, { lowerClothingColorId: e.target.value })}
                                    options={clothingColors}
                                    placeholder="Select color..."
                                />
                                <SelectInput
                                    label="Footwear"
                                    value={char.footwearId}
                                    onChange={e => updateCharacter(char.id, { footwearId: e.target.value })}
                                    options={footwear}
                                    placeholder="Select footwear..."
                                />
                            </div>
                          </>
                        )}

                        <div className="mt-4">
                           <TextAreaInput
                              label="Notes"
                              value={char.notes}
                              onChange={e => updateCharacter(char.id, { notes: e.target.value })}
                              rows={2}
                              placeholder="Instance-specific notes..."
                           />
                        </div>
                        <div className="mt-2">
                          <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" checked={char.faceHidden} onChange={e => updateCharacter(char.id, { faceHidden: e.target.checked })} className="rounded text-brand-primary focus:ring-brand-primary"/>
                            Face Hidden
                          </label>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* --- OBJECTS & PROPS --- */}
              <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Objects & Props</h2>
                  <button onClick={addObject} className="flex items-center gap-1 bg-brand-primary text-white px-3 py-1.5 rounded-md hover:bg-brand-secondary text-sm"><PlusIcon /> Add Object</button>
                </div>
                <div className="flex flex-col gap-4">
                  {builderState.selectedObjects.map(obj => (
                    <div key={obj.id} className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-dark-border">
                      <div className="flex justify-end">
                          <button onClick={() => removeObject(obj.id)} className="p-1 -mt-2 -mr-2 text-red-500 hover:text-red-700 dark:hover:text-red-400"><TrashIcon /></button>
                      </div>
                      <CascadingSelects
                        path={obj.path}
                        setPath={(newPath) => updateObject(obj.id, { path: newPath, colorId: null })}
                        data={objects}
                      />
                      {obj.path && obj.path[0] === 'vehicle' && (
                        <div className="mt-4 pt-4 border-t border-gray-300 dark:border-dark-border">
                           <SelectInput
                              label="Color"
                              value={obj.colorId}
                              onChange={(e) => updateObject(obj.id, { colorId: e.target.value })}
                              options={obj.path.includes('vehicle_construction_crane') ? craneColors : carColors}
                              placeholder="Select a color..."
                            />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

               {/* --- ACTIONS --- */}
              <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Action & Dialogue Sequence</h2>
                    <button onClick={addAction} className="flex items-center gap-1 bg-brand-primary text-white px-3 py-1.5 rounded-md hover:bg-brand-secondary text-sm"><PlusIcon /> Add Action</button>
                </div>
                <div className="flex flex-col gap-4">
                    {builderState.actions.map((action, index) => {
                      const actionName = actionTypes.find(at => at.id === action.typeId)?.name || 'New Action';
                      return (
                        <div key={action.id} className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-dark-border">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold text-md">Action #{index + 1}: {actionName}</h3>
                                <button onClick={() => removeAction(action.id)} className="p-1 text-red-500 hover:text-red-700 dark:hover:text-red-400"><TrashIcon/></button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <SelectInput label="Action Type" value={action.typeId} options={actionTypes} placeholder="Select Type" onChange={e => updateAction(action.id, { typeId: e.target.value })} />
                                <SelectInput
                                    label="Movement Quality"
                                    value={action.movementQualityId || ''}
                                    onChange={e => updateAction(action.id, { movementQualityId: e.target.value })}
                                    options={movementQualities}
                                    placeholder="Select quality..."
                                />
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Emotion</label>
                                    <input
                                      type="text"
                                      value={action.emotion}
                                      onChange={e => updateAction(action.id, {emotion: e.target.value})}
                                      className="w-full bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md shadow-sm p-2 focus:ring-brand-primary focus:border-brand-primary"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                               <TextAreaInput 
                                label="Description (include timing & dialogue)" 
                                value={action.description} 
                                onChange={e => updateAction(action.id, { description: e.target.value })} 
                                rows={4} 
                                placeholder="Time: 00:00-00:03. Officer Miller: What's going on boy? The dog barks and runs towards the truck."
                                />
                            </div>
                            <div className="mt-4">
                               <TextAreaInput label="Ending Note" value={action.endingNote} onChange={e => updateAction(action.id, { endingNote: e.target.value })} rows={2} />
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium mb-2">Involved Characters</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                  {builderState.selectedCharacters.map(char => (
                                    <label key={char.id} className="flex items-center gap-2 text-sm p-2 rounded bg-white dark:bg-dark-card">
                                      <input 
                                        type="checkbox" 
                                        checked={action.involvedCharacterIds.includes(char.id)} 
                                        onChange={e => {
                                          const newIds = e.target.checked 
                                            ? [...action.involvedCharacterIds, char.id] 
                                            : action.involvedCharacterIds.filter(id => id !== char.id);
                                          updateAction(action.id, { involvedCharacterIds: newIds });
                                        }}
                                        className="rounded text-brand-primary focus:ring-brand-primary"
                                      />
                                      {getCharacterName(char.id)}
                                    </label>
                                  ))}
                                </div>
                            </div>
                        </div>
                      )
                    })}
                </div>
              </div>

              <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow">
                 <h2 className="text-lg font-semibold mb-3">Audio (Sounds)</h2>
                 <div className="flex flex-col gap-4">
                    <MultiSelectInput 
                        label="Ambient Sounds"
                        selectedIds={builderState.selectedAmbientSoundIds}
                        onChange={ids => setBuilderState(prev => ({...prev, selectedAmbientSoundIds: ids}))}
                        options={ambientSoundsData}
                        placeholder="Select ambient sounds..."
                    />
                    <MultiSelectInput 
                        label="Sound Effects"
                        selectedIds={builderState.selectedEffectIds}
                        onChange={ids => setBuilderState(prev => ({...prev, selectedEffectIds: ids}))}
                        options={soundEffectsData}
                        placeholder="Select sound effects..."
                    />
                 </div>
              </div>

              <NegativePromptsEditor 
                prompts={builderState.negativePrompts} 
                setPrompts={prompts => setBuilderState(prev => ({...prev, negativePrompts: prompts}))} 
              />

            </div>

            {/* --- JSON OUTPUT --- */}
            <div className="sticky top-20 h-[calc(100vh-7rem)] flex flex-col">
                <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">✅ Final JSON Output</h2>
                        <div className="flex items-center gap-2">
                            <button onClick={handleVerify} title="Verify JSON Output" className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm bg-yellow-500 text-white hover:bg-yellow-600">
                                <ShieldCheckIcon/> Verify
                            </button>
                            <button onClick={handleExportPrompt} title="Export Final JSON Prompt" className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm bg-gray-600 text-white hover:bg-gray-700">
                                <DownloadIcon/> Export Prompt
                            </button>
                            <button onClick={copyToClipboard} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-white ${isCopied ? 'bg-green-500' : 'bg-brand-primary hover:bg-brand-secondary'}`}>
                                {isCopied ? <><CheckIcon/> Copied!</> : <><ClipboardCopyIcon/> Copy JSON</>}
                            </button>
                        </div>
                    </div>
                    <pre className="flex-1 bg-gray-100 dark:bg-gray-900 text-sm p-4 rounded-md overflow-auto font-mono text-gray-800 dark:text-gray-200">
                        <code>{finalJson}</code>
                    </pre>
                </div>
            </div>
          </div>
        )}

        {activeTab === 'database' && (
          <DatabaseManager 
            databases={{
              scenePresets, setScenePresets, shotTypes, setShotTypes, cameraMovements, setCameraMovements,
              lightingStyles, setLightingStyles, aestheticTones, setAestheticTones, scenesData, setScenesData,
              charactersData, setCharactersData, genders, setGenders, ages, setAges, ethnicities, setEthnicities,
              heights, setHeights, weights, setWeights, bodyTypes, setBodyTypes, animalAges, setAnimalAges,
              animalSizes, setAnimalSizes, animalColors, setAnimalColors, carColors, setCarColors, craneColors, setCraneColors,
              hairDetails, setHairDetails, eyeDetails, setEyeDetails,
              facialFeatures, setFacialFeatures, postureAndMannerisms, setPostureAndMannerisms,
              emotionalBaselines, setEmotionalBaselines, voiceCharacteristics, setVoiceCharacteristics,
              distinctiveFeatures, setDistinctiveFeatures, professionalAttributes, setProfessionalAttributes,
              personalityIndicators, setPersonalityIndicators, accessories, setAccessories, roles, setRoles,
              upperClothingTypes, setUpperClothingTypes, lowerClothingTypes, setLowerClothingTypes,
              clothingColors, setClothingColors, footwear, setFootwear, objects, setObjects,
              lightingPresets, setLightingPresets, movementQualities, setMovementQualities,
              actionTypes, setActionTypes, ambientSoundsData, setAmbientSoundsData,
              soundEffectsData, setSoundEffectsData, timeOfDayOptions, setTimeOfDayOptions,
              weatherOptions, setWeatherOptions
            }}
          />
        )}
      </main>
      <VerificationModal 
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
        results={verificationResults}
      />
    </div>
  );
}

// --- DATABASE COMPONENTS ---

const DatabaseEditor: React.FC<{ db: any }> = ({ db }) => {
    const [path, setPath] = useState<string[]>([]);
    const [editingItemId, setEditingItemId] = useState<string | null>(null);
    const [editingValue, setEditingValue] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (editingItemId !== null || isAdding) {
            inputRef.current?.focus();
        }
    }, [editingItemId, isAdding]);

    const handleSave = (id: string, newName: string) => {
        if (!newName.trim()) return;
        const updatedData = db.data.map((item: BaseItem) =>
            item.id === id ? { ...item, name: newName.trim() } : item
        );
        db.setData(updatedData);
        setEditingItemId(null);
    };

    const handleAdd = (newName: string) => {
        if (!newName.trim()) {
            setIsAdding(false);
            return;
        }
        const newItem: BaseItem | CascadingOption = {
            id: crypto.randomUUID(),
            name: newName.trim(),
            ...(db.isHierarchical && { parentId: path.length > 0 ? path[path.length - 1] : null }),
        };
        db.setData([...db.data, newItem]);
        setIsAdding(false);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
            db.setData(db.data.filter((item: BaseItem) => item.id !== id));
        }
    };

    const currentParentId = db.isHierarchical ? (path.length > 0 ? path[path.length - 1] : null) : undefined;
    const itemsToDisplay = db.isHierarchical ? db.data.filter((i: CascadingOption) => i.parentId === currentParentId) : db.data;
    const pathObjects = path.map(pId => db.data.find((i: BaseItem) => i.id === pId)).filter(Boolean);

    const renderItem = (item: BaseItem & { children?: any[] }) => {
        const isEditing = editingItemId === item.id;
        const hasChildren = db.isHierarchical && db.data.some((i: CascadingOption) => i.parentId === item.id);

        return (
            <div key={item.id} className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md group">
                {isEditing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={editingValue}
                        onChange={(e) => setEditingValue(e.target.value)}
                        onBlur={() => handleSave(item.id, editingValue)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSave(item.id, editingValue)}
                        className="w-full bg-white dark:bg-dark-card border border-brand-primary rounded-md shadow-sm p-1.5 focus:ring-brand-primary focus:border-brand-primary"
                    />
                ) : (
                    <div className="flex-grow">
                        {db.isHierarchical ? (
                            <span onClick={() => setPath([...path, item.id])} className="cursor-pointer font-medium text-brand-primary hover:underline">
                                {item.name}
                            </span>
                        ) : (
                            <span onClick={() => { setEditingItemId(item.id); setEditingValue(item.name); }} className="cursor-pointer">{item.name}</span>
                        )}
                        {hasChildren && <span className="text-xs text-gray-400 ml-2">►</span>}
                    </div>
                )}
                <div className={`flex items-center gap-2 ${isEditing ? 'hidden' : 'opacity-0 group-hover:opacity-100'}`}>
                    <button onClick={() => { setEditingItemId(item.id); setEditingValue(item.name); }} className="p-1 text-blue-500 hover:text-blue-700"><EditIcon/></button>
                    <button onClick={() => handleDelete(item.id)} className="p-1 text-red-500 hover:text-red-700"><TrashIcon/></button>
                </div>
            </div>
        );
    };

    return (
        <div className="p-4 flex-grow">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{db.name}</h3>
                <button onClick={() => { setIsAdding(true); setEditingItemId(null); }} className="flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-secondary text-sm font-semibold">
                    <PlusIcon /> Add New Item
                </button>
            </div>
            {db.isHierarchical && (
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span onClick={() => setPath([])} className="cursor-pointer hover:underline">Root</span>
                    {pathObjects.map((p, i) => (
                        <span key={p.id}>
                            <span className="mx-2">/</span>
                            <span onClick={() => setPath(path.slice(0, i + 1))} className="cursor-pointer hover:underline">{p.name}</span>
                        </span>
                    ))}
                </div>
            )}
            <div className="border rounded-lg p-2 bg-gray-50 dark:bg-gray-900/50 dark:border-dark-border min-h-[200px]">
                {itemsToDisplay.map(renderItem)}
                {isAdding && (
                     <div className="flex items-center p-2">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Enter new item name"
                            value={editingValue}
                            onChange={(e) => setEditingValue(e.target.value)}
                            onBlur={() => handleAdd(editingValue)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAdd(editingValue)}
                            className="w-full bg-white dark:bg-dark-card border border-brand-primary rounded-md shadow-sm p-1.5 focus:ring-brand-primary focus:border-brand-primary"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};


const DatabaseManager: React.FC<{ databases: any }> = ({ databases }) => {
    const [selectedDbKey, setSelectedDbKey] = useState('scenesData');

    const dbTabs = [
      { id: 'scenePresets', name: 'Scene Presets' },
      { id: 'shotTypes', name: 'Shot Types' },
      { id: 'cameraMovements', name: 'Camera Movements' },
      { id: 'lightingStyles', name: 'Lighting Styles' },
      { id: 'aestheticTones', name: 'Aesthetic Tones' },
      { id: 'scenesData', name: 'Scene Options', isHierarchical: true },
      { id: 'charactersData', name: 'Character Options', isHierarchical: true },
      { id: 'objects', name: 'Objects & Props', isHierarchical: true },
      { id: 'roles', name: 'Character Roles' },
      { id: 'genders', name: 'Genders' },
      { id: 'ages', name: 'Ages' },
      { id: 'ethnicities', name: 'Ethnicities' },
      { id: 'heights', name: 'Heights' },
      { id: 'weights', name: 'Weights' },
      { id: 'bodyTypes', name: 'Body Types' },
      { id: 'hairDetails', name: 'Hair Details' },
      { id: 'eyeDetails', name: 'Eye Details' },
      { id: 'facialFeatures', name: 'Facial Features' },
      { id: 'postureAndMannerisms', name: 'Posture & Mannerisms' },
      { id: 'emotionalBaselines', name: 'Emotional Baselines' },
      { id: 'voiceCharacteristics', name: 'Voice Characteristics' },
      { id: 'distinctiveFeatures', name: 'Distinctive Features' },
      { id: 'professionalAttributes', name: 'Professional Attributes' },
      { id: 'personalityIndicators', name: 'Personality Indicators' },
      { id: 'accessories', name: 'Accessories' },
      { id: 'upperClothingTypes', name: 'Upper Clothing Types' },
      { id: 'lowerClothingTypes', name: 'Lower Clothing Types' },
      { id: 'clothingColors', name: 'Clothing Colors' },
      { id: 'footwear', name: 'Footwear' },
      { id: 'animalAges', name: 'Animal Ages' },
      { id: 'animalSizes', name: 'Animal Sizes' },
      { id: 'animalColors', name: 'Animal Colors' },
      { id: 'carColors', name: 'Car Colors' },
      { id: 'craneColors', name: 'Crane Colors' },
      { id: 'lightingPresets', name: 'Lighting Presets' },
      { id: 'movementQualities', name: 'Movement Qualities' },
      { id: 'actionTypes', name: 'Action Types' },
      { id: 'ambientSoundsData', name: 'Ambient Sounds' },
      { id: 'soundEffectsData', name: 'Sound Effects' },
      { id: 'timeOfDayOptions', name: 'Time of Day' },
      { id: 'weatherOptions', name: 'Weather' },
  ];
  const activeDbConfig = dbTabs.find(t => t.id === selectedDbKey);

    const getSetterName = (key: string) => `set${key.charAt(0).toUpperCase() + key.slice(1)}`;

    const activeDb = activeDbConfig ? {
      id: activeDbConfig.id,
      name: activeDbConfig.name,
      data: databases[activeDbConfig.id],
      setData: databases[getSetterName(activeDbConfig.id)],
      isHierarchical: !!activeDbConfig.isHierarchical
    } : null;

    return (
        <div className="mt-6 p-6 bg-white dark:bg-dark-card rounded-lg shadow flex gap-6 h-[calc(100vh-12rem)]">
            <div className="w-1/4 border-r dark:border-dark-border pr-4 overflow-y-auto">
                <h3 className="text-lg font-semibold mb-4">Databases</h3>
                <div className="flex flex-col gap-1">
                    {dbTabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedDbKey(tab.id)}
                            className={`w-full text-left p-2 rounded-md text-sm font-medium ${selectedDbKey === tab.id ? 'bg-brand-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-3/4 flex flex-col">
                {activeDb ? <DatabaseEditor key={selectedDbKey} db={activeDb} /> : <div>Select a database to edit.</div>}
            </div>
        </div>
    );
};