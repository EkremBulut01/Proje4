import { View, Text , Button} from 'react-native'
import React,{useEffect , useState} from 'react'
import { firebase } from '../config';
const User = ({ userId = 'AYd4Wcxq5BPmJqTLNfpNBw9GTHW2' }) => {
  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [userId]);
}
export default User