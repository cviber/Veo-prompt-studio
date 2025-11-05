import { BaseItem } from '../types';

export const initialCameraMovements: BaseItem[] = [
  { id: 'cm_static', name: 'Static / Fixed / Locked-off', description: "The camera remains completely still. This shot emphasizes performance, composition, and set design." },
  { id: 'cm_dolly', name: 'Dolly (In/Out)', description: "The entire camera moves forward or backward on a track. A 'dolly in' moves closer to a subject to emphasize importance, while a 'dolly out' reveals more of the scene." },
  { id: 'cm_pan', name: 'Pan (Left/Right)', description: "The camera pivots horizontally from a fixed point. Used to follow a moving subject or to scan across a scene, revealing information." },
  { id: 'cm_tilt', name: 'Tilt (Up/Down)', description: "The camera pivots vertically from a fixed point. A 'tilt up' can reveal the height of a subject or building, while a 'tilt down' can reveal an object or detail." },
  { id: 'cm_truck', name: 'Truck (Lateral)', description: "The entire camera moves horizontally, parallel to the subject. Often used to follow a character walking." },
  { id: 'cm_pedestal', name: 'Pedestal (Up/Down)', description: "The entire camera moves up or down on a pedestal, without tilting. This changes the camera's height and perspective." },
  { id: 'cm_zoom', name: 'Zoom', description: "The camera lens adjusts to magnify or de-magnify the subject, changing the focal length. This is different from a dolly as the camera itself does not move." },
  { id: 'cm_tracking', name: 'Tracking Shot / Follow', description: "The camera moves to follow a subject. This can be achieved with a dolly, steadicam, or other equipment to create a smooth, dynamic shot." },
  { id: 'cm_handheld', name: 'Handheld / Shaky Cam', description: "The camera is held by the operator, resulting in a less stable, often shaky image. This technique creates a sense of immediacy, realism, or chaos." },
  { id: 'cm_crane', name: 'Crane Shot / Jib', description: "The camera is mounted on a crane, allowing for large-scale, sweeping movements up, down, and across a scene." },
  { id: 'cm_arc', name: 'Arc Shot', description: "The camera moves in a circular path around the subject. This shot adds dynamism and can be used to reveal different aspects of the subject or their environment." },
  { id: 'cm_whip_pan', name: 'Whip Pan', description: "A very fast pan that blurs the image. Often used as a transition between scenes or to convey a sense of rapid action or disorientation." },
  { id: 'cm_steadicam', name: 'Steadicam', description: "A camera stabilizing mount that allows for smooth, fluid movements while walking or running. It combines the stability of a dolly with the freedom of handheld." },
  { id: 'cm_aerial', name: 'Aerial / Drone Shot', description: "A shot taken from a helicopter or drone, providing a high-angle view of the scene. Often used for establishing shots or to capture large-scale action." },
];