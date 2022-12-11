import React from 'react';
import {View} from 'react-native';
import {MemoizedLogic} from './logics';
import {MemoizedQuestion} from './questions';
import {MemoizedSection} from './sections';

export const FormComponent = ({value, forms = []}) => {
  return (
    <View>
      {forms.map((item, index) => {
        const {type, children} = item;
        const customProps = {
          key: index,
          children,
          item,
          index,
          value,
        };
        return fnSwitchRender(type, customProps);
      })}
    </View>
  );
};

function fnSwitchRender(type, customProps) {
  switch (type) {
    case 'question':
      return <MemoizedQuestion {...customProps} />;
    case 'logic':
      return <MemoizedLogic {...customProps} />;
    case 'section':
      return <MemoizedSection {...customProps} />;
    default:
      return <></>;
  }
}
