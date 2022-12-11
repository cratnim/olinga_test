import React from 'react';
import {Text, View} from 'react-native';
import {FormComponent} from '../form';

function SectionComponent(props) {
  const {item, index} = props;
  const {children} = item;

  return (
    <View key={index}>
      <Text>{item.name}</Text>
      {Array.isArray(children) && <FormComponent forms={children} />}
    </View>
  );
}

export const MemoizedSection = React.memo(
  SectionComponent,
  (prev, next) => prev.value === next.value,
);
