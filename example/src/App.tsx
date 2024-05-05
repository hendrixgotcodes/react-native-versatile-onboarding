import * as React from 'react';
import VersatileOnboarding from 'react-native-versatile-onboarding';
import OnboardingItem from './OnboardingItem';
import data from './data';

export default function App() {
  return (
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
  );
}
