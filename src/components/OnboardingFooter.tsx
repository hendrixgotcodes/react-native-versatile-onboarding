import React, { type FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type {
  OnboardingFooterProps,
  WithOnboardingProps,
} from '../HOCs/withOnboarding';
import withOnboarding from '../HOCs/withOnboarding';

const OnboardingFooter: FC<OnboardingFooterProps & WithOnboardingProps> = ({
  footerBtnStyle,
  footerStyle,
  navigate: onBtnPress,
}) => {
  return (
    <View style={[styles.container, footerStyle]}>
      <Pressable style={[styles.btn, footerBtnStyle]} onPress={onBtnPress}>
        <Text style={styles.text}>Proceed</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    zIndex: 9999,
  },
  btn: {
    backgroundColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default withOnboarding(OnboardingFooter);
