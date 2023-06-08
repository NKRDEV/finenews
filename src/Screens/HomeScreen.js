import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {
  ScrollView,
  StatusBar,
} from 'react-native';
import {StyleSheet, View, Text, Pressable, SafeAreaView} from 'react-native';
import FastImage from 'react-native-fast-image';
// import { useDispatch } from 'react-redux'

import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/index';
import Colors from '../constants/Colors';
import {Family, FontSize} from '../constants/Fonts';
import {Rounded, Spacing} from '../constants/Layout';
import {_Text} from '../styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.wrapper}>
          <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />

          <View style={styles.header}>
            <Pressable>
              <FastImage
                source={require('../Images/drawerIcon.png')}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.icon}
              />
            </Pressable>
            <Text style={styles.headerText}>Fine News</Text>
            <Pressable>
              <FastImage
                source={require('../Images/search.png')}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.icon}
              />
            </Pressable>
          </View>

          <View style={styles.contentStyle}>
            <Text style={styles.subHead}>
              World Environment Day was observed across Lakhimpur with a pledge
              to save nature
             
            </Text>
            <Pressable>
              <FastImage
                source={require('../Images/imgs/art.jpg')}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.icon1}
              />
            </Pressable>
            <Text style={styles.subHead}>
            LAKHIMPUR: World Environment Day was observed across Lakhimpur district on Wednesday by various organizations, social and academic institutions with the pledge to save the nature from air pollution as per the theme of the event for this year.

https://www.sentinelassam.com/north-east-india-news/assam-news/world-environment-day-was-observed-across-lakhimpur-with-a-pledge-to-save-nature/
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  bodyView: {
    flex: 1,
    // paddingStart: Spacing.large,
    // paddingEnd: Spacing.large,
  },

  contentStyle: {
    flex: 1,
    width: WINDOW_WIDTH,

    height: WINDOW_HEIGHT,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  image: {
    alignSelf: 'center',
    width: 350,
    height: 350,
  },

  header: {
    flexDirection: 'row',
    padding: Spacing.largeVariant2,

    alignItems: 'center',
    width: WINDOW_WIDTH,
  },
  icon1: {
    alignSelf: 'center',
    width: WINDOW_WIDTH,

    height: scaleSize(130),
    // flex: 1,
  },
  icon: {
    alignSelf: 'flex-start',
    width: scaleSize(30),
    height: scaleSize(30),
    flex: 1,
  },
  headerText: {
    ..._Text(FontSize.largeVariantXs, Family.robotoBold, Colors.darkHomeBg),
    paddingHorizontal: Spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginLeft: 50,
  },

  subHead: {
    ..._Text(FontSize.medium, Family.robotoRegular, Colors.textDark),
    paddingBottom: Spacing.xs,
    textAlign: 'center',
  },
  buttonContainerStyle: {
    borderRadius: Rounded.smallVariant,
    backgroundColor: Colors.disablebtn,
    height: '30%',
  },
  buttonText: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Family.bold,
    fontSize: FontSize.regular,
    color: Colors.white,
    marginTop: 15,
  },
});
