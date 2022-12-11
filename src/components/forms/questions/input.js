import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {colors} from '../../../assets/colors';
import {FormComponent} from '../form';
import styles from './styles';

export function InputText({item}) {
  const [value, setValue] = useState();
  const {children} = item;

  return (
    <View>
      <TextInput
        value={value}
        autoCapitalize={'none'}
        autoCorrect={false}
        style={styles.inputLabelStyle}
        placeholderTextColor={colors.text}
        onChangeText={text => setValue(text)}
      />
      {Array.isArray(children) && (
        <FormComponent forms={children} value={value} />
      )}
    </View>
  );
}
