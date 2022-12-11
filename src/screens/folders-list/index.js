import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {response} from '../../assets/response';
import styles from './styles';

const FoldersListScreen = ({navigation}) => {
  const {data} = response.templates;

  const onPressFolder = item => {
    navigation.navigate('Templates', {templates: item.templates});
  };

  return (
    <View style={styles.container}>
      {data.map((el, i) => {
        if (el.type === 'formFolder') {
          const attributes = el.attributes;
          return (
            <TouchableOpacity
              key={`FoldersList_${i}`}
              style={styles.content}
              onPress={() => onPressFolder(attributes)}>
              <Text>{attributes.name}</Text>
            </TouchableOpacity>
          );
        }
        return <></>;
      })}
    </View>
  );
};

export default FoldersListScreen;
