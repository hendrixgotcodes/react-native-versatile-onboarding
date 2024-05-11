import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import VersatileOnboarding from 'react-native-versatile-onboarding';
import OnboardingItem from './OnboardingItem';
import data from './data';

export default function App() {
  return (
    <SafeAreaView style={style.main}>
      <VersatileOnboarding
        activePaginationColor="green"
        inActivePaginationColor="red"
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

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
});
