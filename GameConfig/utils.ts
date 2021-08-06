import { retrieveGameObjectRecharge } from '../Components/utils';
import {
  GameElementColorsEnum,
  GameElementEnum,
  PetsEnum,
  StepTypeEnum,
  WeaponsEnum,
} from '../GameData/Enums';
import { GameElement } from '../GameData/Types';
import { GameStatus } from './GameContext';

export function generateInitialStatus(): GameStatus {
  return {
    waveNumber: 0,
    steps: [] as StepTypeEnum[],
    weapons: [
      {
        name: WeaponsEnum.BALISTE,
        rechargeTime: retrieveGameObjectRecharge(
          GameElementEnum.WEAPON,
          WeaponsEnum.BALISTE,
        ),
        color: GameElementColorsEnum.BLUE,
      },
      {
        name: WeaponsEnum.TREBUCHET,
        rechargeTime: retrieveGameObjectRecharge(
          GameElementEnum.WEAPON,
          WeaponsEnum.TREBUCHET,
        ),
        color: GameElementColorsEnum.BLUE,
      },
    ] as GameElement[],
    players: [] as GameElement[],
    pets: [
      {
        name: PetsEnum.NUCIFER,
        rechargeTime: retrieveGameObjectRecharge(
          GameElementEnum.PET,
          PetsEnum.NUCIFER,
        ),
        color: GameElementColorsEnum.BLUE,
      },
      {
        name: PetsEnum.VATAN,
        rechargeTime: retrieveGameObjectRecharge(
          GameElementEnum.PET,
          PetsEnum.VATAN,
        ),
        color: GameElementColorsEnum.BLUE,
      },
      {
        name: PetsEnum.MAGOG,
        rechargeTime: retrieveGameObjectRecharge(
          GameElementEnum.PET,
          PetsEnum.MAGOG,
        ),
        color: GameElementColorsEnum.BLUE,
      },
      {
        name: PetsEnum.GOG,
        rechargeTime: retrieveGameObjectRecharge(
          GameElementEnum.PET,
          PetsEnum.GOG,
        ),
        color: GameElementColorsEnum.BLUE,
      },
      {
        name: PetsEnum.VANADIS,
        rechargeTime: retrieveGameObjectRecharge(
          GameElementEnum.PET,
          PetsEnum.VANADIS,
        ),
        color: GameElementColorsEnum.BLUE,
      },
      {
        name: PetsEnum.SETH,
        rechargeTime: retrieveGameObjectRecharge(
          GameElementEnum.PET,
          PetsEnum.SETH,
        ),
        color: GameElementColorsEnum.BLUE,
      },
    ] as GameElement[],
  };
}
