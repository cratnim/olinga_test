import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../assets/colors';
import {FormComponent} from '../form';

export function RadioInput({item}) {
  const [value, setValue] = useState();
  const {children, question_options = []} = item;
  return (
    <View>
      {question_options.map((el, i) => {
        const isActive = el.label === value;
        return (
          <TouchableOpacity
            key={`RadioInput_${i}`}
            onPress={() => setValue(el.label)}>
            <Text style={{color: isActive ? colors.primary : colors.text}}>
              {el.label}
            </Text>
          </TouchableOpacity>
        );
      })}
      {Array.isArray(children) && (
        <FormComponent forms={children} value={value} />
      )}
    </View>
  );
}
