import React, { useState, useEffect } from 'react';
import {
  Animated,
  useWindowDimensions,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

export interface WithOnboardingProps {
  sliderRef: React.RefObject<any>;
  childrenCount: number;
  onNavigateToEnd?: () => void;
  onNavigate?: (position: number) => void;
  scrollX: Animated.Value;
  navigate?: (...props: any) => void;
}

export interface OnboardingFooterProps {
  footerStyle?: StyleProp<ViewStyle>;
  footerBtnStyle?: StyleProp<ViewStyle>;
  navigate?: (...props: any) => void;
  scrollX: Animated.Value;
}

const withOnboarding = <P extends OnboardingFooterProps>(
  Component: React.ComponentType<P>
) => {
  return (props: P & WithOnboardingProps) => {
    const { width } = useWindowDimensions();
    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
      const res = props.scrollX.addListener((ev) => {
        setCurrentPosition(ev.value);
      });

      return () => props.scrollX.removeListener(res);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onBtnPress = () => {
      if (currentPosition >= width * (props.childrenCount - 1)) {
        props.onNavigateToEnd && props.onNavigateToEnd();
      } else {
        setCurrentPosition(currentPosition + width);
        props.sliderRef.current?.scrollTo({
          x: currentPosition + width,
          animated: true,
        });
        props.onNavigate && props.onNavigate(currentPosition + 1);
      }
    };

    return (
      <Component
        {...(props as P)}
        currentPosition={currentPosition}
        navigate={onBtnPress}
        scrollX={props.scrollX}
      />
    );
  };
};

export default withOnboarding;
