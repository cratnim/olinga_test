import React from 'react';
import {Text, View} from 'react-native';
import {Require} from '../require';
import {BooleanInput} from './boolean';
import {ImageInput} from './image';
import {InputText} from './input';
import {RadioInput} from './radio';
import formStyle from '../styles';

function QuestionComponent(props) {
  const {item, index} = props;
  const {question_type} = item;
  return (
    <View key={index} style={formStyle.containerStyle}>
      <View style={formStyle.contentStyle}>
        <Text style={formStyle.textLabelStyle}>{item.text}</Text>
        {item.compulsory && <Require />}
      </View>
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
      return <ImageInput {...customProps} />;
    default:
      return <></>;
  }
}

export const MemoizedQuestion = React.memo(
  QuestionComponent,
  (prev, next) => prev.value === next.value,
);
