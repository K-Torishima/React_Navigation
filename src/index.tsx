import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  conteiner1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conteiner2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  font1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  font2: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

// 画面1
function Main() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.conteiner1}>
      <Text style={styles.font1}>ここはMain画面です</Text>
      <TouchableOpacity
        onPress={() => {
          navigate('Sub');
        }}>
        <Text style={styles.font2}>sub画面へ遷移</Text>
      </TouchableOpacity>
    </View>
  );
}

// 画面2
function Sub() {
  return (
    <View style={styles.conteiner2}>
      <Text style={styles.font1}>Sub</Text>
    </View>
  );
}

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Sub" component={Sub} />
    </Stack.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
