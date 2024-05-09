import React from 'react';
import {
  Animated,
  StyleSheet,
  useWindowDimensions,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

interface PaginatorsProp {
  childrenCount: number;
  scrollX: Animated.Value;
  style?: StyleProp<ViewStyle>;
}

interface PaginatorProp extends PaginatorsProp {
  type?: 'dot' | 'dash';
}

export default function Paginator({ type, ...rest }: PaginatorProp) {
  if (type === 'dot') return <DotPaginator {...rest} />;

  return <DashPaginator {...rest} />;
}

function DotPaginator({ childrenCount, scrollX, style }: PaginatorsProp) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, style]}>
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

function DashPaginator({ childrenCount, scrollX, style }: PaginatorsProp) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, style, { width }]}>
      {new Array(childrenCount).fill('*').map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 0.159)',
            'rgba(0, 0, 0, 1)',
          ],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dash, { width: width / 3 - 20, backgroundColor }]}
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
