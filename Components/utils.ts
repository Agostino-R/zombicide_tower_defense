import { GameElementEnum, PetsEnum, WeaponsEnum } from '../GameData/Enums';
import { GameElement } from '../GameData/Types';

export function retrieveGameObjectRecharge(
  elemNature: GameElementEnum,
  type?: WeaponsEnum | PetsEnum,
) {
  const config = require('../GameConfig/GameElementsConfig.json');
  return elemNature != GameElementEnum.PLAYER
    ? parseInt(config[elemNature][type]['recharge'])
    : parseInt(config[elemNature]['recharge']);
}
