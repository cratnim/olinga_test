import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {FormComponent} from '../form';
import styles from './styles';
import formStyle from '../styles';
import {icon} from '../../../assets';

export function ImageInput({item}) {
  const [value, setValue] = useState([]);
  const {children} = item;
  const maxLength = 5;

  let pickeroption = {
    multiple: true,
    mediaType: 'photo',
  };

  function formatValue(arr) {
    if (arr.length < maxLength) {
      arr = [
        {
          id: 999,
          isUpload: true,
        },
        ...arr,
      ];
    }
    return arr;
  }

  async function onPressLibrary() {
    let images = await ImagePicker.openPicker(pickeroption);
    let arr = value.filter(e => !e.isUpload);
    if (images) {
      images = images.slice(0, maxLength);
      images.forEach(el => {
        const response = {
          name: el.fileName,
          type: el.mime,
          uri: `file://${el.path}`,
        };
        arr = [...arr, response];
      });
      setValue(arr);
    }
  }

  function onPressDelete(index) {
    let arr = value.filter(e => !e.isUpload);
    arr = JSON.parse(JSON.stringify(arr));
    arr.splice(index - 1, 1);
    setValue(arr);
  }

  return (
    <View>
      <View style={[formStyle.formStyle, styles.imageRowStyle]}>
        {formatValue(value).map((el, i) => {
          return (
            <RenderMultiImage
              key={`MultiImage_${i}`}
              item={el}
              index={i}
              onPress={() => onPressLibrary()}
              onPressDelete={() => onPressDelete(i)}
            />
          );
        })}
      </View>
      {Array.isArray(children) && (
        <FormComponent forms={children} value={value} />
      )}
    </View>
  );
}

const RenderMultiImage = ({
  item,
  index,
  onPress = () => null,
  onPressDelete = () => null,
}) => {
  const containerStyle = {
    ...styles.imageContainerStyle,
    marginLeft: index % 3 ? 6 : 0,
  };

  if (item && item.isUpload) {
    return (
      <TouchableOpacity style={containerStyle} onPress={onPress}>
        <View style={styles.camera}>
          <Image source={icon.image} style={styles.imageIconStyle} />
        </View>
        <Text style={styles.fontStyle}>Upload</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={containerStyle}>
      <Image
        source={{uri: item.uri}}
        style={styles.imageInputStyle}
        resizeMode={'cover'}
      />
      <TouchableOpacity style={styles.imageDeleteStyle} onPress={onPressDelete}>
        <Image source={icon.close} style={styles.iconDeleteStyle} />
      </TouchableOpacity>
    </View>
  );
};
