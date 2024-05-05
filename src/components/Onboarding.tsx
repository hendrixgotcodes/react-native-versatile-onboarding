import React, {
  Children,
  type ReactElement,
  type ReactNode,
  useRef,
} from 'react';
import {
  Alert,
  Animated,
  SafeAreaView,
  ScrollView,
  type StyleProp,
  StyleSheet,
  View,
  type ViewStyle,
} from 'react-native';
import OnboardingFooter from './OnboardingFooter';
import Paginator from './Paginator';

export interface Props {
  Footer?: ReactNode;
  footerStyle?: StyleProp<ViewStyle>;
  footerBtnStyle?: StyleProp<ViewStyle>;
  children: ReactElement<typeof View> | ReactElement<typeof View>[];
  paginatorType?: 'dot' | 'dash';
}

export default function ReactNativeVersatileOnboarding({
  children,
  Footer,
  footerBtnStyle,
  footerStyle,
}: Props) {
  const slideRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Paginator
        childrenCount={Children.count(children)}
        scrollX={scrollX}
        type="dot"
      />
      <ScrollView
        bounces={false}
        style={styles.list}
        pagingEnabled={true}
        horizontal={true}
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        ref={slideRef}
        scrollEnabled={false}
      >
        {children}
      </ScrollView>

      {Footer || (
        <OnboardingFooter
          footerBtnStyle={footerBtnStyle}
          footerStyle={footerStyle}
          sliderRef={slideRef}
          onSubmit={() => Alert.alert('done')}
          childrenCount={Children.count(children)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  itemWrapper: {
    height: 100,
    width: 100,
  },
  list: {
    flex: 3,
  },
});
