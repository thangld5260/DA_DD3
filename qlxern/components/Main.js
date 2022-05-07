// How to Hide Navigation Option from Navigation Drawer / Sidebar
// https://aboutreact.com/how-to-hide-navigation-drawer-sidebar-option/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import firebase from '../firebase/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Hanghoa from '../screen/Hanghoa';
import TrangChu from '../screen/TrangChu';
import KiemKho from '../screen/KiemKho';
import NhapHang from '../screen/NhapHang';
import XuatHang from '../screen/XuatHang';
import BaoHanh from '../screen/BaoHanh';
import LienHe from '../screen/LienHe';
import Thoat from '../screen/Thoat';
// import SecondPage from './pages/SecondPage';
// import HiddenPage1 from './pages/HiddenPage1';
// import HiddenPage2 from './pages/HiddenPage2';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const trangChuScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="TrangChu"
        component={TrangChu}
        options={{
          title: 'Trang Chủ', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

// hang hoa screen
const hangHoaScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Hanghoa"
        component={Hanghoa}
        options={{
          title: 'Hàng hóa', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
//kiem kho screen
const kiemkhoScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="KiemKho"
        component={KiemKho}
        options={{
          title: 'Kiểm kho', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
//nhap hang screen
const nhapHangScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="NhapHang"
        component={NhapHang}
        options={{
          title: 'Nhập Hàng', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
//xuat hang screen
const xuatHangScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="XuatHang"
        component={XuatHang}
        options={{
          title: 'Xuất Hàng', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
//bao hanh screen
const baoHanhScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="BaoHanh"
        component={BaoHanh}
        options={{
          title: 'Bảo Hành', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
//lien he screen
const lienHeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="LienHe"
        component={LienHe}
        options={{
          title: 'Liên Hệ', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
//xuat hang screen
const thoatScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Thoat"
        component={Thoat}
        
        options={{
          title: 'Thoát', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const thirdScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="HiddenPage1"
        component={HiddenPage1}
        options={{
          title: 'Hidder Page One', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const fourthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="HiddenPage2"
        component={HiddenPage2}
        options={{
          title: 'Hidden Page Two', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <NavigationContainer
    independent={true}
    >
      <Drawer.Navigator
      screenOptions={{
       headerShown: false
      }}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { padding: 0 },
        }}
        drawerContent={(props) => {
          const filteredProps = {
            ...props,
            state: {
              ...props.state,
              routeNames: props.state.routeNames.filter(
                // To hide single option
                // (routeName) => routeName !== 'HiddenPage1',
                // To hide multiple options you can add & condition
                (routeName) => {
                  routeName !== 'HiddenPage1' && routeName !== 'HiddenPage2';
                }
              ),
              routes: props.state.routes.filter(
                (route) =>
                  route.name !== 'HiddenPage1' && route.name !== 'HiddenPage2'
              ),
            },
          };
          return (
            <DrawerContentScrollView {...filteredProps}>
              <DrawerItemList {...filteredProps} />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen
          name="TrangChu"
          options={{ drawerLabel: 'Trang Chủ' }}
          component={trangChuScreen}
        />
        <Drawer.Screen
          name="HoangHoa"
          options={{ drawerLabel: 'Hàng Hóa' }}
          component={hangHoaScreen}
        />
        <Drawer.Screen
          name="KiemKho"
          options={{ drawerLabel: 'Kiểm Kho' }}
          component={kiemkhoScreen}
        />
        <Drawer.Screen
          name="NhapHang"
          options={{ drawerLabel: 'Nhập Hàng' }}
          component={nhapHangScreen}
        />
        <Drawer.Screen
          name="XuatHang"
          options={{ drawerLabel: 'Xuất Hàng' }}
          component={xuatHangScreen}
        />
        <Drawer.Screen
          name="BaoHanh"
          options={{ drawerLabel: 'Bảo Hành' }}
          component={baoHanhScreen}
        />
        <Drawer.Screen
          name="LienHe"
          options={{ drawerLabel: 'Liên Hệ' }}
          component={lienHeScreen}
        />
        <Drawer.Screen
          name="Thoat"
          options={{ drawerLabel: 'Thoát' }}
          component={thoatScreen}
        />
        <Drawer.Screen
          name="HiddenPage1"
          options={{ drawerLabel: 'Hidden Page One option' }}
          component={thirdScreenStack}
        />
        <Drawer.Screen
          name="HiddenPage2"
          options={{ drawerLabel: 'Hidden Page Two option' }}
          component={fourthScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;
