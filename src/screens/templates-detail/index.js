import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FormComponent} from '../../components/forms';
import styles from './styles';

const TemplatesDetailScreen = ({route}) => {
  const children = route?.params?.children;
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <FormComponent forms={children} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TemplatesDetailScreen;
