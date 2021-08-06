import { GameElementEnum, PetsEnum, WeaponsEnum } from '../GameData/Enums';
import { GameElement } from '../GameData/Types';

export function retrieveGameObjectRecharge(
  elemNature: GameElementEnum,
  type: WeaponsEnum | PetsEnum | undefined,
) {
  const config = require('../GameConfig/GameElementsConfig.json');
  console.log(config);
  console.log(elemNature);
  console.log(type);
  return elemNature != GameElementEnum.PLAYER
    ? config.elemNature.type.recharge
    : config.elemNature.recharge;
}
