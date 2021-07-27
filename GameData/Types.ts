import { GameElementColorsEnum } from './Enums';

export type GameElement = {
  name: string;
  rechargeTime: number;
  color: GameElementColorsEnum;
};
