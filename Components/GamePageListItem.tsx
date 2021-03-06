import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { GameElementColorsEnum, SectionsEnum } from '../GameData/Enums';
import { GameElement } from '../GameData/Types';

interface Props {
  gameElement: GameElement;
  section: SectionsEnum;
  currentWaveNumber: number;
  navigation;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  buttons: {},
});

const GamePageListItem = (props: Props) => {
  const [timeBeforeReuse, setTimeBeforeReuse] = useState<number>(0);
  const [precedentReuseTime, setPrecedentReuseTime] = useState<number>(0);
  const [lastTimeButtonPressed, setLastTimeButtonPressed] = useState<number>(0);
  const [textColor, setTextColor] = useState(GameElementColorsEnum.GRAY);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    const tmp = timeBeforeReuse;
    setPrecedentReuseTime(tmp);
    if (timeBeforeReuse != 0) {
      const newTime =
        lastTimeButtonPressed -
        props.currentWaveNumber +
        props.gameElement.rechargeTime;
      setTimeBeforeReuse(newTime);
      if (newTime == 0) {
        setTextColor(GameElementColorsEnum.GREEN);
      }
    }
  }, [props]);

  useEffect(() => {
    if (precedentReuseTime == 0 && timeBeforeReuse == 0) {
      setTextColor(GameElementColorsEnum.GRAY);
    }
  }, [precedentReuseTime, timeBeforeReuse]);

  useEffect(() => {
    if (timeBeforeReuse != 0) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [timeBeforeReuse]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('blur', () => {
      setTimeBeforeReuse(0);
      setPrecedentReuseTime(0);
      setLastTimeButtonPressed(0);
      setTextColor(GameElementColorsEnum.GRAY);
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: props.gameElement.color,
          flex: 0.2,
          minHeight: 20,
          maxWidth: 20,
        }}
      />
      <Text style={{ fontSize: 20, color: textColor }}>
        {props.gameElement.name + ' : ' + timeBeforeReuse}
      </Text>
      <View style={styles.buttons}>
        <Button
          title={props.section == SectionsEnum.WEAPONS ? 'recharger' : 'mort'}
          disabled={buttonDisabled}
          onPress={() => {
            setTextColor(GameElementColorsEnum.RED);
            setLastTimeButtonPressed(props.currentWaveNumber);
            setTimeBeforeReuse(props.gameElement.rechargeTime);
          }}
        />
      </View>
    </View>
  );
};

export default GamePageListItem;
