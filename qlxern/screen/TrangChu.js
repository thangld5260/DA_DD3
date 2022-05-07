// How to Hide Navigation Option from Navigation Drawer / Sidebar
// https://aboutreact.com/how-to-hide-navigation-drawer-sidebar-option/

import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

const TrangChu = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          TrangChu
          </Text>
       </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});

export default TrangChu;
