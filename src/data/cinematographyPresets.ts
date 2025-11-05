import { ScenePreset } from '../types';

// This file has been repurposed to hold full Scene Presets.
// Each preset can contain the entire state of the prompt builder.
export const initialScenePresets: ScenePreset[] = [
  {
    id: 'preset_cozy_living_room',
    name: 'Cozy Living Room',
    jsonBlock: JSON.stringify({
      selectedShotTypeId: "st_medium",
      selectedCameraMovementId: "cm_static",
      selectedLightingStyleId: "ls_soft",
      selectedAestheticToneId: "at_serene",
      cineNotes: "Warm and inviting atmosphere, focusing on the comfort of the space.",
      sceneSelection: ["indoors", "indoors_residential", "indoors_res_living_room"],
      selectedTimeOfDayId: "tod_4",
      selectedWeatherId: "w_1",
      selectedLightingPresetId: "lp_8",
      lightingSettings: {
        brightness: 65,
        contrast: 50,
        colorTemperature: 3500
      },
      selectedCharacters: [],
      selectedObjects: [
        { "id": "obj_sofa_1", "path": ["furniture", "furniture_seating", "furniture_sofa"], colorId: null }
      ],
      sceneDescription: "A cozy living room centered around a large, comfortable sofa. The evening light creates a warm and inviting atmosphere, perfect for relaxation.",
      selectedAmbientSoundIds: ["as_35"],
      selectedEffectIds: [],
      actions: [
        {
          id: "action_1",
          typeId: "exposition",
          description: "The scene opens on a warm, cozy living room. A large sofa sits invitingly in the center of the frame, bathed in the soft light of a nearby fireplace or lamp.",
          emotion: "Peaceful / Calm",
          endingNote: "The scene establishes a feeling of comfort and domestic tranquility.",
          involvedCharacterIds: [],
          movementQualityId: null
        }
      ],
      negativePrompts: [
        "cold", "uninviting", "messy", "cluttered", "dark lighting", "subtitles", "captions", "watermarks"
      ]
    }, null, 2),
  },
  {
    id: 'preset_cozy_pets_on_bed',
    name: 'Cozy Pets on Bed',
    jsonBlock: JSON.stringify({
      selectedShotTypeId: "st_medium",
      selectedCameraMovementId: "cm_static",
      selectedLightingStyleId: "ls_soft",
      selectedAestheticToneId: "at_serene",
      cineNotes: "Slightly elevated angle to give a full view of the pets and their cozy surroundings.",
      sceneSelection: ["indoors", "indoors_residential", "indoors_res_bedroom", "indoors_res_bedroom_bed"],
      selectedTimeOfDayId: "tod_3",
      selectedWeatherId: "w_1",
      selectedLightingPresetId: "lp_2",
      lightingSettings: {
        brightness: 60,
        contrast: 45,
        colorTemperature: 5000
      },
      selectedCharacters: [
        {
          id: "char_golden_retriever_sleepy",
          path: ["animal", "animal_mammal", "animal_mammal_dog", "animal_mammal_dog_retriever"],
          notes: "Positioned on the right side of the bed, curled up and seemingly asleep with its head down. Light golden fur.",
          faceHidden: false, roleId: null, upperClothingTypeId: null, upperClothingColorId: null, lowerClothingTypeId: null, lowerClothingColorId: null,
          animalAgeId: "animal_age_adult",
          animalSizeId: "animal_size_large",
          animalColorId: "ac_golden"
        },
        {
          id: "char_tabby_cat_relaxed",
          path: ["animal", "animal_mammal", "animal_mammal_cat", "animal_mammal_cat_shorthair"],
          notes: "Lies next to the dog on the left side, appearing relaxed and gazing toward the camera. Small and striped in shades of brown and grey.",
          faceHidden: false, roleId: null, upperClothingTypeId: null, upperClothingColorId: null, lowerClothingTypeId: null, lowerClothingColorId: null,
          animalAgeId: "animal_age_adult",
          animalSizeId: "animal_size_small",
          animalColorId: "ac_tabby"
        }
      ],
      selectedObjects: [
        { "id": "obj_bed_1", "path": ["furniture", "furniture_bed", "bed_double"], colorId: null },
        { "id": "obj_pillow_1", "path": ["furniture", "furniture_bed", "pillow"], colorId: null },
        { "id": "obj_pillow_2", "path": ["furniture", "furniture_bed", "pillow"], colorId: null },
        { "id": "obj_bedside_table_left", "path": ["furniture", "furniture_table", "table_bedside"], colorId: null },
        { "id": "obj_bedside_table_right", "path": ["furniture", "furniture_table", "table_bedside"], colorId: null }
      ],
      sceneDescription: "A cozy bedroom setting. A Golden Retriever and a Tabby Cat are resting peacefully together on a bed covered with a textured grey blanket. The background includes a beige headboard, pillows, and bedside tables.",
      selectedAmbientSoundIds: ["as_none"],
      selectedEffectIds: [],
      actions: [
        {
          id: "action_1",
          typeId: "exposition",
          description: "A Golden Retriever is curled up asleep on a bed. Beside it, a tabby cat lies relaxed, looking gently towards the camera.",
          emotion: "Peaceful / Calm",
          endingNote: "The scene conveys comfort and the gentle companionship of the two animals.",
          involvedCharacterIds: ["char_golden_retriever_sleepy", "char_tabby_cat_relaxed"],
          // FIX: Corrected a typo in the property name `movementQualityId`.
          movementQualityId: null
        }
      ],
      negativePrompts: [
        "uncomfortable", "messy room", "agitated animals", "dark lighting", "subtitles", "captions", "watermarks"
      ]
    }, null, 2),
  },
  {
    id: 'preset_truck_fire_chase',
    name: 'Truck Fire Chase (Full Scene)',
    jsonBlock: JSON.stringify({
      selectedShotTypeId: 'st_long',
      selectedCameraMovementId: 'cm_tracking',
      selectedLightingStyleId: 'ls_natural_overcast',
      selectedAestheticToneId: 'at_urgent_action',
      cineNotes: "Camera follows the action closely, creating a sense of urgency. The scene culminates in a wide, static shot to capture the explosion.",
      sceneSelection: ['countryside', 'countryside_open_road'],
      selectedTimeOfDayId: 'tod_3',
      selectedWeatherId: 'w_10',
      selectedLightingPresetId: 'lp_2',
      lightingSettings: {
        brightness: 50,
        contrast: 50,
        colorTemperature: 6000,
      },
      selectedCharacters: [
        {
          id: "char_husky_sidekick",
          path: ['animal', 'animal_mammal', 'animal_mammal_dog', 'animal_mammal_dog_husky'],
          notes: "A loyal and intelligent Siberian Husky, acting heroically to save its owner.",
          faceHidden: false, roleId: null, upperClothingTypeId: null, upperClothingColorId: null, lowerClothingTypeId: null, lowerClothingColorId: null,
          animalAgeId: 'animal_age_adult',
          animalSizeId: 'animal_size_medium',
        },
        {
          id: "char_police_officer",
          path: ['human'],
          notes: "Initially unaware of the danger, then acts decisively to evacuate.",
          faceHidden: false, 
          roleId: 'role_pol', 
          upperClothingTypeId: 'uct_uniform', 
          upperClothingColorId: 'cc_navy', 
          lowerClothingTypeId: 'lct_uniform', 
          lowerClothingColorId: 'cc_navy',
          characterName: 'Officer Miller',
          genderId: 'gender_female',
          ageId: 'age_adult',
          ethnicityId: 'ethnicity_caucasian',
          heightId: 'h_5_9',
          weightId: 'w_150',
          bodyTypeId: 'bt_athletic',
          hairDetailsIds: ['hd_color_brown', 'hd_style_bun'],
          eyeDetailsIds: ['ed_color_brown', 'ed_expr_sharp', 'ed_expr_focused'],
          facialFeaturesIds: ['ff_expr_determined'],
          postureAndMannerismsIds: ['pm_posture_stands_tall', 'pm_manner_confident', 'pm_manner_moves_with_purpose'],
          emotionalBaselineId: 'eb_calm_under_pressure',
          accessoriesIds: ['acc_duty_belt', 'acc_holster'],
          voiceCharacteristicsIds: ['vc_tone_clear', 'vc_tone_authoritative', 'vc_volume_shouting'],
          distinctiveFeaturesIds: ['df_scar_chin'],
          professionalAttributesIds: ['pa_exp_experienced', 'pa_skill_quick_thinking', 'pa_skill_physically_capable'],
          personalityIndicatorsIds: ['pi_trait_brave', 'pi_trait_resourceful', 'pi_trait_bonded_with_partner'],
        },
      ],
      selectedObjects: [
        { id: 'obj_truck_1', path: ['vehicle', 'vehicle_truck', 'vehicle_truck_white'] }
      ],
      sceneDescription: "An open road with green trees in the background under an overcast sky. A white truck, loaded with bags, has its rear on fire with visible flames and smoke. A Husky is trying to alert the driver.",
      selectedAmbientSoundIds: ['as_14', 'as_15'],
      selectedEffectIds: ['sfx_11', 'sfx_12', 'sfx_13'],
      actions: [
        { id: "action_1", typeId: 'chase', description: "Time: 00:00-00:05. A husky races alongside a moving white truck, barking loudly. Flames and black smoke erupt from the back of the truck.", emotion: "Urgency", endingNote: "The dog tries to alert the driver who is unaware of the fire.", involvedCharacterIds: ["char_husky_sidekick", "char_police_officer"], movementQualityId: null},
        { id: "action_2", typeId: 'chase', description: "Time: 00:05-00:10. The dog continues to race and bark intensely as the truck's cargo bay fire grows. The truck continues to move with its cargo bay ablaze.", emotion: "Increasing Danger", endingNote: "The situation escalates.", involvedCharacterIds: ["char_husky_sidekick", "char_police_officer"], movementQualityId: null},
        { id: "action_3", typeId: 'action_sequence', description: "Time: 00:10-00:15. As the truck slows, the dog jumps and paws at the driver's side door. A female police officer looks out the window, confused.", emotion: "Alert / Confusion", endingNote: "The driver is finally alerted to the commotion.", involvedCharacterIds: ["char_husky_sidekick", "char_police_officer"], movementQualityId: null},
        { id: "action_4", typeId: 'action_sequence', description: "Time: 00:15-00:22. The truck stops. Officer Miller exits, looking startled upon seeing the fully engulfed cargo bay. The dog barks and gestures with its head towards the fire. The officer starts to run away from the truck.", emotion: "Realization / Evacuation", endingNote: "The officer evacuates the vehicle.", involvedCharacterIds: ["char_husky_sidekick", "char_police_officer"], movementQualityId: null},
        { id: "action_5", typeId: 'climax', description: "Time: 00:22-00:27. From a distance, the officer and dog run down the road. The white truck explodes in a huge orange and yellow fireball, sending debris into the air.", emotion: "Climax / Explosion", endingNote: "The truck is destroyed.", involvedCharacterIds: ["char_husky_sidekick", "char_police_officer"], movementQualityId: null},
        { id: "action_6", typeId: 'rescue', description: "Time: 00:27-00:31. With the burning truck in the background, Officer Miller kneels on the road, hugging her heroic husky. The dog licks her face.", emotion: "Relief / Affection", endingNote: "The officer is safe thanks to her loyal K9 partner.", involvedCharacterIds: ["char_husky_sidekick", "char_police_officer"], movementQualityId: null}
      ],
      negativePrompts: [
        "dog injured", "officer injured", "peaceful scene", "no fire", "no explosion", "daytime"
      ],
    }, null, 2),
  },
  {
    id: 'cine_1',
    name: 'Cinematography: Shorts Preset (9:16)',
    jsonBlock: JSON.stringify({
      selectedShotTypeId: "st_medium_close_up",
      selectedCameraMovementId: "cm_static",
      selectedLightingStyleId: "ls_cinematic",
      selectedAestheticToneId: "at_intimate",
      cineNotes: "No artifacts, hyperrealistic, cinematic lighting, vertical format.",
    }, null, 2),
  },
  {
    id: 'cine_2',
    name: 'Cinematography: Long-Form (16:9)',
    jsonBlock: JSON.stringify({
      selectedShotTypeId: "st_establishing",
      selectedCameraMovementId: "cm_pan",
      selectedLightingStyleId: "ls_dramatic",
      selectedAestheticToneId: "at_epic_grand",
      cineNotes: "High detail, 8k resolution.",
    }, null, 2),
  },
];
