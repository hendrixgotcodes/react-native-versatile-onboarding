import React, { type MutableRefObject, useState } from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

interface Props {
  footerStyle?: StyleProp<ViewStyle>;
  footerBtnStyle?: StyleProp<ViewStyle>;
  sliderRef: MutableRefObject<ScrollView | null>;
  onNavigateToEnd?: () => any;
  onNavigate?: (currentPageIndex: number) => any;
  childrenCount: number;
}

export default function OnboardingFooter({
  footerBtnStyle,
  footerStyle,
  sliderRef,
  childrenCount,
  onNavigateToEnd,
  onNavigate,
}: Props) {
  const { width } = useWindowDimensions();
  const [currentPosition, setCurrentPosition] = useState(0);

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
