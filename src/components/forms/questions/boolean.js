import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BOOLEAN_INPUT} from '../../../assets/constant';
import {FormComponent} from '../form';

export function BooleanInput({item}) {
  const [value, setValue] = useState();
  const {children} = item;
  return (
    <View>
      {BOOLEAN_INPUT.map((el, i) => {
        const isActive = el.value === value;
        return (
          <TouchableOpacity
            key={`BooleanInput_${i}`}
            onPress={() => setValue(el.value)}>
            <Text style={{color: isActive ? 'blue' : 'black'}}>{el.label}</Text>
          </TouchableOpacity>
        );
      })}
      {Array.isArray(children) && (
        <FormComponent forms={children} value={value} />
      )}
    </View>
  );
}
