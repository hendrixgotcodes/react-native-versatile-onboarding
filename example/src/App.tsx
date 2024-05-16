import * as React from 'react';
import {
  Alert,
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type LayoutChangeEvent,
} from 'react-native';
import VersatileOnboarding, {
  type CustomFooterProps,
} from 'react-native-versatile-onboarding';
import OnboardingItem from './OnboardingItem';
import data from './data';

export default function App() {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <VersatileOnboarding
        paginatorType="none"
        onNavigateToEnd={() => {
          Alert.alert('Done');
        }}
        Footer={CustomFooter}
      >
        {data.map((item) => (
          <OnboardingItem
            Illustration={item.illustration}
            description={item.description}
            title={item.title}
            key={item.id}
          />
        ))}
      </VersatileOnboarding>
    </SafeAreaView>
  );
}

function CustomFooter({ childrenCount, scrollX, navigate }: CustomFooterProps) {
  const [width, setWidth] = React.useState(0);

  const onLayout = React.useCallback((ev: LayoutChangeEvent) => {
    const { width: layoutWidth } = ev.nativeEvent.layout;
    setWidth(layoutWidth);
  }, []);

  return (
    <View style={styles.container}>
      <View onLayout={onLayout} style={[styles.dotsWrapper]}>
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
      <TouchableOpacity onPress={navigate} activeOpacity={0.3}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Proceed</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    gap: 30,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 20,
  },
  btnText: {
    color: '#fff',
  },
  dotsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    width: '100%',
  },
  dot: {
    height: 10,
    backgroundColor: '#000',
    borderRadius: 5,
    marginHorizontal: 8,
  },
});
