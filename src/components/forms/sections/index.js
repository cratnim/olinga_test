import React from 'react';
import {Text, View} from 'react-native';
import {FormComponent} from '../form';
import {Require} from '../require';
import formStyle from '../styles';
import styles from './styles';

function SectionComponent(props) {
  const {item, index} = props;
  const {children} = item;

  return (
    <View key={index}>
      <View style={[formStyle.contentStyle, styles.contentStyle]}>
        <Text style={formStyle.textLabelStyle}>{item.name}</Text>
        {item.compulsory && <Require />}
      </View>
      {Array.isArray(children) && <FormComponent forms={children} />}
    </View>
  );
}

export const MemoizedSection = React.memo(
  SectionComponent,
  (prev, next) => prev.value === next.value,
);
