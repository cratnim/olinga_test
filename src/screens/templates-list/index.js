import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const TemplatesListScreen = ({navigation, route}) => {
  const templates = route?.params?.templates;

  const onPressTemplate = children => {
    navigation.navigate('Templates Detail', {children});
  };

  return (
    <View>
      {templates.map((el, i) => {
        if (el.type === 'template') {
          return (
            <TouchableOpacity
              key={`FoldersList_${i}`}
              style={styles.content}
              onPress={() => onPressTemplate(el.children)}>
              <Text>{el.name}</Text>
            </TouchableOpacity>
          );
        }
        return <></>;
      })}
    </View>
  );
};

export default TemplatesListScreen;
