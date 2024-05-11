import React, { useCallback, useState } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  type LayoutChangeEvent,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

interface PaginatorsProp {
  childrenCount: number;
  scrollX: Animated.Value;
  containerStyle?: StyleProp<ViewStyle>;
  dashPaginationStyle?: StyleProp<ViewStyle>;
  activeColor?: string;
  inActiveColor?: string;
}

interface PaginatorProp extends PaginatorsProp {
  type?: 'dot' | 'dash';
}

export default function Paginator({ type, ...rest }: PaginatorProp) {
  if (type === 'dot') return <DotPaginator {...rest} />;

  return <DashPaginator {...rest} />;
}

function DotPaginator({
  childrenCount,
  scrollX,
  containerStyle,
}: PaginatorsProp) {
  const [width, setWidth] = useState(0);

  const onLayout = useCallback((ev: LayoutChangeEvent) => {
    const { width: layoutWidth } = ev.nativeEvent.layout;
    setWidth(layoutWidth);
  }, []);

  return (
    <View onLayout={onLayout} style={[styles.container, containerStyle]}>
      {new Array(childrenCount).fill('*').map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, { width: dotWidth }]}
          />
        );
      })}
    </View>
  );
}

function DashPaginator({
  childrenCount,
  scrollX,
  containerStyle,
  dashPaginationStyle,
  activeColor,
  inActiveColor,
}: PaginatorsProp) {
  const [width, setWidth] = useState(0);

  const onLayout = useCallback((ev: LayoutChangeEvent) => {
    const { width: layoutWidth } = ev.nativeEvent.layout;
    setWidth(layoutWidth);
  }, []);

  return (
    <View onLayout={onLayout} style={[styles.container, containerStyle]}>
      {new Array(childrenCount).fill('*').map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            inActiveColor || 'rgba(0, 0, 0, 1)',
            activeColor || 'rgba(0, 0, 0, 0.159)',
            inActiveColor || 'rgba(0, 0, 0, 1)',
          ],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[
              styles.dash,
              dashPaginationStyle,
              // eslint-disable-next-line react-native/no-inline-styles
              { flex: 1, backgroundColor },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    position: 'absolute',
    top: 0,
    zIndex: 999,
    width: '100%',
  },
  dot: {
    height: 10,
    backgroundColor: '#000',
    borderRadius: 5,
    marginHorizontal: 8,
  },
  dash: {
    height: 3,
    backgroundColor: '#000',
    marginHorizontal: 8,
  },
});
