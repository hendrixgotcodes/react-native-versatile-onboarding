import React, { type MutableRefObject, useEffect, useState } from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
  ScrollView,
  useWindowDimensions,
  Animated,
} from 'react-native';

interface Props {
  footerStyle?: StyleProp<ViewStyle>;
  footerBtnStyle?: StyleProp<ViewStyle>;
  sliderRef: MutableRefObject<ScrollView | null>;
  onNavigateToEnd?: () => any;
  onNavigate?: (currentPageIndex: number) => any;
  childrenCount: number;
  scrollX: Animated.Value;
}

export default function OnboardingFooter({
  footerBtnStyle,
  footerStyle,
  sliderRef,
  childrenCount,
  onNavigateToEnd,
  onNavigate,
  scrollX,
}: Props) {
  const { width } = useWindowDimensions();
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const res = scrollX.addListener((ev) => {
      // console.log('ev: ', ev);
      setCurrentPosition(ev.value);
    });

    return () => scrollX.removeListener(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBtnPress = () => {
    if (currentPosition >= width * (childrenCount - 1)) {
      onNavigateToEnd && onNavigateToEnd();
    } else {
      setCurrentPosition(currentPosition + width);
      sliderRef.current?.scrollTo({
        x: currentPosition + width,
        animated: true,
      });
      onNavigate && onNavigate(currentPosition + 1);
    }
  };
  return (
    <View style={[styles.container, footerStyle]}>
      <Pressable style={[styles.btn, footerBtnStyle]} onPress={onBtnPress}>
        <Text style={styles.text}>Proceed</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
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
