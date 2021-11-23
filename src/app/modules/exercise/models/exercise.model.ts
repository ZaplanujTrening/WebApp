import { MusclePart } from "./muscle-part.model";

export interface Exercise
{
    id: number;
    name: string;
    description: string;
    musclePart: MusclePart;
}