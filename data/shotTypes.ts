import { BaseItem } from '../types';

export const initialShotTypes: BaseItem[] = [
  { id: 'st_establishing', name: 'Extreme Wide Shot (EWS)', description: "Often used to establish the setting and location (the 'where'). Shows a large view of the location, with the subject appearing very small." },
  { id: 'st_long', name: 'Wide Shot (WS)', description: "Shows the subject from head to toe, with their full body visible. The background is still very prominent, establishing context." },
  { id: 'st_full', name: 'Full Shot', description: "Frames a character from head to toe, with the figure filling most of the frame. Focuses on the character while still showing their immediate surroundings." },
  { id: 'st_medium_long', name: 'Medium Long Shot (Cowboy Shot)', description: "Frames the subject from roughly the knees up. It's called a 'Cowboy Shot' because it was used in Westerns to show a character's gun holsters." },
  { id: 'st_medium', name: 'Medium Shot (MS)', description: "Frames the subject from the waist up. This is a common shot for dialogue scenes, as it's close enough to show emotion but wide enough to include some body language." },
  { id: 'st_medium_close_up', name: 'Medium Close-Up', description: "Frames a subject from the chest or shoulders up. It tightens the frame to focus more on the character's facial expressions." },
  { id: 'st_close_up', name: 'Close-Up (CU)', description: "Fills the screen with the subject's face, showing fine details of their emotions and reactions. It creates a sense of intimacy or intensity." },
  { id: 'st_extreme_close_up', name: 'Extreme Close-Up (ECU)', description: "Frames a very small part of the subject, such as their eyes or mouth. Used to emphasize a specific detail or create a sense of unease." },
  { id: 'st_pov', name: 'Point of View (POV)', description: "Shows the scene from a character's perspective, as if the camera is their eyes. This helps the audience connect directly with the character's experience." },
  { id: 'st_over_shoulder', name: 'Over the Shoulder Shot', description: "A shot of someone or something taken from the perspective or camera angle from the shoulder of another person. Common in conversations." },
  { id: 'st_dutch', name: 'Dutch Angle / Canted Angle', description: "The camera is tilted, causing the horizon line to be at an angle. This creates a sense of unease, tension, or disorientation." },
  { id: 'st_insert', name: 'Insert Shot', description: "A close-up of a specific object or detail within the scene (e.g., a hand picking up a key). Used to draw the audience's attention to something important." },
  { id: 'st_reaction', name: 'Reaction Shot', description: "Shows a character's reaction to something they have just seen or heard. It's a key part of showing, not telling, the story." },
  { id: 'st_low_angle', name: 'Low Angle Shot', description: "The camera is placed below the subject, looking up. This can make the subject appear powerful, heroic, or intimidating." },
  { id: 'st_high_angle', name: 'High Angle Shot', description: "The camera is placed above the subject, looking down. This can make the subject appear vulnerable, weak, or insignificant." },
];