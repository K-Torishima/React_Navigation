import React from 'react';
import {View, StyleSheet} from 'react-native';

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
