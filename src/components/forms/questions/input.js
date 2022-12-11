import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {colors} from '../../../assets/colors';
import {FormComponent} from '../form';

export function InputText({item}) {
  const [value, setValue] = useState();
  const {children} = item;

  const textInputStyle = {
    flex: 1,
    color: colors.grey,
  };

  return (
    <View>
      <TextInput
        value={value}
        autoCapitalize={'none'}
        autoCorrect={false}
        style={textInputStyle}
        placeholderTextColor={colors.text}
        onChangeText={text => setValue(text)}
      />
      {Array.isArray(children) && (
        <FormComponent forms={children} value={value} />
      )}
    </View>
  );
}
