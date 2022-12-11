import React from 'react';
import {View} from 'react-native';
import {FormComponent} from '../form';

function LogicComponent(props) {
  const {item, index, value} = props;
  const {children} = item;
  if (item.condition !== `is equal: [${value}]`) {
    return null;
  }

  return (
    <View key={index}>
      {Array.isArray(children) && <FormComponent forms={children} />}
    </View>
  );
}

export const MemoizedLogic = React.memo(
  LogicComponent,
  (prev, next) => prev.value === next.value,
);
