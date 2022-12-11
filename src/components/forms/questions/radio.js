import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors, icon} from '../../../assets';
import {FormComponent} from '../form';
import styles from './styles';
import formStyle from '../styles';

export function RadioInput({item}) {
  const [value, setValue] = useState();
  const {children, question_options = []} = item;
  return (
    <View>
      <View style={formStyle.formStyle}>
        {question_options.map((el, i) => {
          const isActive = el.label === value;
          const fontStyle = {
            ...styles.fontStyle,
            color: isActive ? colors.primary : colors.text,
          };
          const imageIconStyle = {
            ...styles.imageIconStyle,
            tintColor: isActive ? colors.primary : colors.text,
          };
          return (
            <TouchableOpacity
              key={`RadioInput_${i}`}
              style={styles.radioContentStyle}
              onPress={() => setValue(el.label)}>
              <Image
                source={isActive ? icon.radio_on : icon.radio}
                style={imageIconStyle}
              />
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
