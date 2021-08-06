import {
  GameElementColorsEnum,
  GameElementEnum,
  PetsEnum,
  WeaponsEnum,
} from './Enums';

export type GameElement = {
  name: string;
  rechargeTime: number;
  color: GameElementColorsEnum;
};

export type Weapon = GameElement & {
  type: WeaponsEnum;
};

export type Pet = GameElement & {
  type: PetsEnum;
};
