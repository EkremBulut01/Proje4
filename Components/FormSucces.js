import { View, Text , ActivityIndicator} from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/themed';

export default function FormSucces(props) {
  return (
    <Overlay isVisible={false} style={styles.overlay}>
    <Text>
        Hello From Overlay!
    </Text>
</Overlay>
  )
}