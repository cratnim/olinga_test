import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export const Require = () => {
  return (
    <View>
      <Text style={styles.requireStyle}>* Required</Text>
    </View>
  );
};
