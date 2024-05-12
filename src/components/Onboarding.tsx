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
  activePaginationColor?: string;
  children: ReactElement<typeof View> | ReactElement<typeof View>[];
  dashPaginationStyle?: StyleProp<ViewStyle>;
  Footer?: ReactNode;
  footerStyle?: StyleProp<ViewStyle>;
  footerBtnStyle?: StyleProp<ViewStyle>;
  inActivePaginationColor?: string;
  onNavigate?: (currentPageIndex: number) => any;
  onNavigateToEnd?: () => any;
  paginationContainerStyle?: StyleProp<ViewStyle>;
  paginatorType?: 'dot' | 'dash';
  style?: StyleProp<ViewStyle>;
}

export default function ReactNativeVersatileOnboarding({
  children,
  Footer,
  footerBtnStyle,
  footerStyle,
  onNavigate,
  onNavigateToEnd,
  paginatorType,
  paginationContainerStyle,
  dashPaginationStyle,
  activePaginationColor,
  inActivePaginationColor,
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
          scrollX={scrollX}
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
    scrollX,
  ]);

  return (
    <View style={styles.container}>
      <Paginator
        childrenCount={Children.count(children)}
        scrollX={scrollX}
        type={paginatorType}
        containerStyle={paginationContainerStyle}
        dashPaginationStyle={dashPaginationStyle}
        activeColor={activePaginationColor}
        inActiveColor={inActivePaginationColor}
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
        scrollEnabled={true}
      >
        {children}
      </ScrollView>

      <RenderFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  itemWrapper: {
    height: 100,
    width: 100,
  },
  list: {
    flex: 1,
  },
});
