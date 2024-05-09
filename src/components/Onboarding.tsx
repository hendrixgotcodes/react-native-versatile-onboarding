import React, {
  Children,
  type ReactElement,
  type ReactNode,
  useCallback,
  useRef,
} from 'react';
import {
  Animated,
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
  headerStyle?: StyleProp<ViewStyle>;
  footerStyle?: StyleProp<ViewStyle>;
  footerBtnStyle?: StyleProp<ViewStyle>;
  children: ReactElement<typeof View> | ReactElement<typeof View>[];
  paginatorType?: 'dot' | 'dash';
  onNavigateToEnd?: () => any;
  onNavigate?: (currentPageIndex: number) => any;
}

export default function ReactNativeVersatileOnboarding({
  children,
  Footer,
  footerBtnStyle,
  footerStyle,
  onNavigate,
  onNavigateToEnd,
  paginatorType,
  headerStyle,
}: Props) {
  const slideRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const RenderFooter = useCallback(() => {
    if (Footer === null) {
      return Footer;
    } else if (Footer) {
      return <View>{Footer}</View>;
    } else {
      return (
        <OnboardingFooter
          footerBtnStyle={footerBtnStyle}
          footerStyle={footerStyle}
          sliderRef={slideRef}
          onNavigateToEnd={onNavigateToEnd}
          childrenCount={Children.count(children)}
          onNavigate={onNavigate}
        />
      );
    }
  }, [
    footerBtnStyle,
    footerStyle,
    children,
    onNavigate,
    onNavigateToEnd,
    Footer,
  ]);

  return (
    <View style={styles.container}>
      <Paginator
        childrenCount={Children.count(children)}
        scrollX={scrollX}
        type={paginatorType}
        style={headerStyle}
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

      <RenderFooter />
    </View>
  );
}

// function RenderFooter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    position: 'relative',
  },
  itemWrapper: {
    height: 100,
    width: 100,
  },
  list: {
    flex: 3,
  },
});
