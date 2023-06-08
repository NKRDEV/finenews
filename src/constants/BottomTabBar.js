import React, {useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {scaleSize} from 'utils/';
import FastImage from 'react-native-fast-image';
import Screens from 'navigators/index';

function BottomTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const insets = useSafeAreaInsets();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const animation = useRef(new Animated.Value(0)).current



  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            let iconImageFocused;
            let iconImage;

            switch (route.name) {
              case 'Home':
                iconImageFocused = require('../images/Home/home_blue.png');
                iconImage = require('../images/Home/home_dark.png');
                break;
              case 'Fibrenet':
                iconImageFocused = require('../images/Home/fiber_blue.png');
                iconImage = require('../images/Home/fiber_dark.png');
                break;
              case 'Recharge':
                iconImageFocused = require('../images/Home/recharge_blue.png');
                iconImage = require('../images/Home/recharge_dark.png');
                break;
              case 'Plan':
                iconImageFocused = require('../images/Home/plan_blue.png');
                iconImage = require('../images/Home/plan_dark.png');
                break;
              case 'Profile':
                iconImageFocused = require('../images/Home/profile_blue.png');
                iconImage = require('../images/Home/profile_dark.png');
                break;
            }

            const isFocused = state.index === index;

            const onPress = async () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                if (route.name === 'Home') {
                  await navigation.replace(Screens.POST_AUTH_STACK);
                } else {
                  navigation.navigate(route.name);
                }
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tabItem}
                key={'Nav-' + label}>
                {/* {label !== 'Home' && (
              <View
                style={[styles.dotView, isFocused && styles.dotViewActive]}
              />
            )} */}
                <FastImage
                  source={isFocused ? iconImageFocused : iconImage}
                  resizeMode={FastImage.resizeMode.contain}
                  style={styles.homeIcon}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.tabLabel,
                    {
                      color: isFocused
                        ? Colors.blueVarient
                        : Colors.blackViolet,
                    },
                  ]}>
                  {route.name === 'Fibrenet' ? 'Fibre' : route.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.tabBoxBackground,
  },
  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: Colors.tabBoxBackground,
    width: '95%',
    justifyContent: 'space-evenly',
    borderRadius: 60,
    height: scaleSize(78),
    elevation: 2,
  },
  iconBehave: {
    padding: 10,
  },

  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  dotView: {
    width: scaleSize(5),
    aspectRatio: 1,
    borderRadius: scaleSize(5),
    marginBottom: scaleSize(2),
    marginStart: scaleSize(10),
  },
  dotViewActive: {
    backgroundColor: Colors.textSkyBlue,
  },
  tabLabel: {
    fontFamily: Family.semibold,
    textAlign: 'center',
    fontSize: FontSize.smallVariant,
  },
  icon: {
    width: scaleSize(20),
    height: scaleSize(20),
  },
  homeIcon: {
    width: scaleSize(20),
    height: scaleSize(20),
    alignSelf: 'center',
  },
});

export default BottomTabBar;
