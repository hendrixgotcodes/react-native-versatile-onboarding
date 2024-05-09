import * as React from 'react';
import VersatileOnboarding from 'react-native-versatile-onboarding';
import OnboardingItem from './OnboardingItem';
import data from './data';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={style.main}>
      <VersatileOnboarding>
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
