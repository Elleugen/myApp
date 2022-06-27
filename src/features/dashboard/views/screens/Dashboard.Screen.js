import React, {useCallback, useState, useEffect, Fragment} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView as SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Linking,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
  Portal,
  Dialog,
  RadioButton,
  // Searchbar,
} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import {HeaderComponent} from '../../components';
import {Theme} from '../../../../configs/ThemeConfig';
import {FontWeightConfig} from '../../../../configs/FontConfig';
import Images from '../../../../assets/';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectorCurrentDashboard, getDashboard} from '../../redux';
import {FloatingAction} from 'react-native-floating-action';
import {useNavigation} from '@react-navigation/native';

function DashboardScreen({currentDashboard, getDashboard}) {
  const navigation = useNavigation();
  const actions = [
    {
      text: 'item',
      icon: Images.bookmark,
      name: 'bt_item',
      position: 1,
    },
  ];
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={Images.background}
        style={{height: '100%'}}
        imageStyle={{opacity: 0.9}}>
        <SafeAreaView>
          <HeaderComponent />
          {/* <SearchBarComponent />
          <BookRecomendationsComponent />
          <BookCardsComponent /> */}
        </SafeAreaView>
      </ImageBackground>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          // navigation.navigate('Dashboard.DashboardScreen');
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );
}

const mapStateToProps = createStructuredSelector({
  currentDashboard: selectorCurrentDashboard,
});

const mapDispatchToProps = dispatch => ({
  getDashboard: () => dispatch(getDashboard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.background,
  },
});
