import React, { Children, createContext, useContext, useState } from 'react';
import { StepTypeEnum } from '../GameData/Enums';
import { GameElement } from '../GameData/Types';

export interface GameStatus {
  waveNumber: number;
  steps: StepTypeEnum[];
  weapons: GameElement[];
  players: GameElement[];
  pets: GameElement[];
}

export type GameContextType = {
  status: GameStatus;
  setStatus: (c: GameStatus) => void;
};

export const initialStatus: GameStatus = {
  waveNumber: 0,
  steps: [] as StepTypeEnum[],
  weapons: [] as GameElement[],
  players: [] as GameElement[],
  pets: [] as GameElement[],
};

export const GameContext = createContext<GameContextType>({
  status: initialStatus, // set a default value
  setStatus: () => {},
});

export const useGameContext = () => useContext(GameContext);
