import React from 'react';
import {Text, View} from 'react-native';
import {BooleanInput} from './boolean';
import {InputText} from './input';
import {RadioInput} from './radio';

function QuestionComponent(props) {
  const {item, index} = props;
  const {question_type} = item;
  return (
    <View key={index}>
      <Text>{item.text}</Text>
      {fnSwitchQuestion(question_type, props)}
    </View>
  );
}

function fnSwitchQuestion(type, customProps) {
  switch (type) {
    case 'radio':
      return <RadioInput {...customProps} />;
    case 'boolean':
      return <BooleanInput {...customProps} />;
    case 'input_text':
      return <InputText {...customProps} />;
    case 'image':
    default:
      return <></>;
  }
}

export const MemoizedQuestion = React.memo(
  QuestionComponent,
  (prev, next) => prev.value === next.value,
);
