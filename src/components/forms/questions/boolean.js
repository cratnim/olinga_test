import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../assets/colors';
import {BOOLEAN_INPUT} from '../../../assets/constant';
import {FormComponent} from '../form';
import formStyle from '../styles';
import styles from './styles';

export function BooleanInput({item}) {
  const [value, setValue] = useState();
  const {children} = item;
  return (
    <View>
      <View style={[formStyle.formStyle, styles.booleanContainerStyle]}>
        {BOOLEAN_INPUT.map((el, i) => {
          const isActive = el.value === value;
          const fontStyle = {
            ...styles.fontStyle,
            color: isActive ? colors.white : colors.text,
          };
          const contentStyle = {
            ...styles.booleanContentStyle,
            backgroundColor: isActive ? colors.primary : colors.white,
          };
          return (
            <TouchableOpacity
              key={`BooleanInput_${i}`}
              style={contentStyle}
              onPress={() => setValue(el.value)}>
              <Text style={fontStyle}>{el.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {Array.isArray(children) && (
        <FormComponent forms={children} value={value} />
      )}
    </View>
  );
}
