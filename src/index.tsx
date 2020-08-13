import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  useNavigation,
  NavigationContainer,
  DrawerActions,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// NavigationControllerの場合の実装
// 画面1
// function Main() {
//   // 画面定義
//   const {navigate} = useNavigation();
//   return (
//     <View style={styles.conteiner1}>
//       <Text style={styles.font1}>ここはMain画面です</Text>
//       <TouchableOpacity
//         onPress={() => {
//           // ここでナビゲートしているfunction名いれる　ボタン遷移　onPressはIBAction
//           navigate('Sub');
//         }}>
//         <Text style={styles.font2}>sub画面へ遷移</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function Sub() {
//   return (
//     <View style={styles.conteiner2}>
//       <Text style={styles.font1}>Sub画面</Text>
//     </View>
//   );
// }

// Stackの実装方法 //
// Optionsの定義
// Navigator記載
// const Stack = createStackNavigator();
// function StackNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         title: 'hello',
//       }}>
//       <Stack.Screen name="Main" component={Main} />
//       <Stack.Screen name="Sub" component={Sub} />
//     </Stack.Navigator>
//   );
// }

// // Optionsの定義
// // Screenに記載
// const Stack = createStackNavigator();
// function StackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Main" component={Main} options={{title: 'Main'}} />
//       <Stack.Screen name="Sub" component={Sub} options={{title: 'Sub'}} />
//     </Stack.Navigator>
//   );
// }

// export default function () {
//   return (
//     <NavigationContainer onStateChange={(newState) => console.log(newState)}>
//       <StackNavigator />
//     </NavigationContainer>
//   );
// }

// TabBarControllerの実装

// 画面1
// function Main() {
//   return (
//     <View style={styles.conteiner1}>
//       <Text style={styles.font1}>Main画面</Text>
//     </View>
//   );
// }

// // 画面2
// function Sub() {
//   return (
//     <View style={styles.conteiner2}>
//       <Text style={styles.font1}>Sub画面</Text>
//     </View>
//   );
// }

// // Tabの実装
// const Tab = createBottomTabNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Main" component={Main} />
//       <Tab.Screen name="Sub" component={Sub} />
//     </Tab.Navigator>
//   );
// }

// export default function () {
//   return (
//     <NavigationContainer>
//       <TabNavigator />
//     </NavigationContainer>
//   );
// }

// // Drawer (サイドメニュー)
// function Main() {
//   const {dispatch} = useNavigation();
//   return (
//     <View style={styles.conteiner1}>
//       <Text>Main</Text>
//       <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
//         <Text>open drawer</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function Sub() {
//   const {dispatch} = useNavigation();
//   return (
//     <View style={styles.conteiner2}>
//       <Text>Sub</Text>
//       <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
//         <Text>open drawer</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();
// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Main" component={Main} />
//       <Drawer.Screen name="Sub" component={Sub} />
//     </Drawer.Navigator>
//   );
// }

// export default function () {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// }

function Main() {}

const styles = StyleSheet.create({
  conteiner1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
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
