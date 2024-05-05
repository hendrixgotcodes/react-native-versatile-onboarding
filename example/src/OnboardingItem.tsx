import React, { type ElementType } from 'react';
import { View, StyleSheet, useWindowDimensions, Text } from 'react-native';

type OnboardingItemProps = {
  description: string;
  Illustration: ElementType;
  title: string;
};

export default function OnboardingItem({
  description,
  Illustration,
  title,
}: OnboardingItemProps) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width }]}>
      <View style={styles.illustrationWrapper}>
        <Illustration />
      </View>
      <View style={styles.textWrappers}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30,
  },
  illustrationWrapper: {
    flex: 0.8,
    justifyContent: 'center',
  },
  textWrappers: {
    flex: 0.2,
    justifyContent: 'center',
  },
});
