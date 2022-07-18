import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as ImagePicker from 'expo-image-picker'

// getting height and width of screen
const { height, width } = Dimensions.get('screen')

export default function ImagePick() {
  const [pickedImagePath, setPickedImagePath] = useState('')
  // picking up the image from the gallery
  const showImagePicker = async () => {
    // Asking permission
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!")
      return
    }
    const result = await ImagePicker.launchImageLibraryAsync()

    // Explore the result
    console.log(result)

    if (!result.cancelled) {
      setPickedImagePath(result.uri)
      console.log(result.uri)
    }
  }
  if (pickedImagePath) {
    return (
      <View style={{ padding: 30 }}>
        {pickedImagePath !== '' && (
          <Image source={{ uri: pickedImagePath }} style={styles.image} />
        )}
      </View>
    )
  }
  return (
    <>
      <TouchableOpacity onPress={showImagePicker} style={{ paddingTop: 10 }}>
        <View
          style={{
            borderColor: '#000',
            borderWidth: 3,
            borderRadius: 10,
            borderStyle: 'dotted',
            width: width - 37,
            alignSelf: 'center',
            height: 300
          }}
        >
          <View
            style={{
              alignItems: 'center',
              paddingTop: 95
            }}
          >
            <Icon name="images" size={65} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: width - 37,
    height: 300,
    alignSelf: 'center',
    resizeMode: 'cover'
  }
})
