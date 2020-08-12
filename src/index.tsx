import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Index() {
  return <View style={styles.conteiner} />;
}

export default Index;
