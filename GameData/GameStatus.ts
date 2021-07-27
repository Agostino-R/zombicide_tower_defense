import { StepTypeEnum } from './Enums';
import { GameElement } from './Types';

export type GameStatus = {
  waveNumber: number;
  steps: [StepTypeEnum];
  siegeEngines: [GameElement];
  players: [GameElement];
  pets: [GameElement];
};
