import React from 'react';
import {View} from 'react-native';
import {FormComponent} from '../../components/forms';
import styles from './styles';

const TemplatesDetailScreen = ({route}) => {
  const children = route?.params?.children;
  return (
    <View style={styles.container}>
      <FormComponent forms={children} />
    </View>
  );
};

export default TemplatesDetailScreen;
