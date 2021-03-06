import React from 'react';
import {useTheme} from '@shopify/restyle';
import {
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
  AccessibilityRole,
} from 'react-native';
import {Theme, palette} from 'shared/theme';
import {useI18n} from 'locale';

import {Box, BoxProps} from './Box';
import {Icon, IconName} from './Icon';
import {Ripple} from './Ripple';

export interface ButtonProps {
  text?: string;
  onPress: () => void;
  variant: keyof Theme['buttonVariants'];
  color?: keyof Theme['colors'];
  disabled?: boolean;
  loading?: boolean;
  externalLink?: boolean;
  internalLink?: boolean;
  backButton?: boolean;
  iconName?: IconName;
  iconNameLeft?: IconName;
  borderRadius?: number;
  useWhiteText?: boolean;
  alignLeft?: boolean;
  testID?: string;
}

export const Button = ({
  text,
  onPress,
  variant,
  color: buttonColorName,
  disabled,
  loading,
  externalLink,
  internalLink,
  backButton,
  iconName,
  iconNameLeft,
  borderRadius = 5,
  useWhiteText = false,
  alignLeft = false,
  testID,
}: ButtonProps) => {
  const i18n = useI18n();
  const theme = useTheme<Theme>();
  const variantProps = theme.buttonVariants[variant];
  const disabledProps = disabled ? variantProps.disabled || {} : {};
  const themedStyles = {...variantProps, ...disabledProps};
  const {
    fontSize,
    fontWeight,
    fontFamily,
    color,
    borderBottomWidth,
    height,
    borderBottomColor,
  } = (themedStyles as unknown) as TextStyle & ViewStyle;
  const textColor = themedStyles.textColor;
  const buttonColor = buttonColorName && theme.colors[buttonColorName];

  const onPressHandler = loading ? () => {} : onPress;
  const externalLinkProps = externalLink
    ? {
        accessibilityLabel: text,
        accessibilityHint: i18n.translate('Home.ExternalLinkHint'),
        accessibilityRole: 'link' as AccessibilityRole,
      }
    : {};
  const externalArrowIcon = textColor === palette.white ? 'icon-external-arrow-light' : 'icon-external-arrow';

  const boxStyles: BoxProps['style'] = {
    backgroundColor: Platform.OS === 'ios' ? color : 'transparent',
    minHeight: height,
    borderBottomWidth,
    borderBottomColor: Platform.OS === 'ios' ? palette.fadedWhiteDark : borderBottomColor,
  };
  const content = (
    <Box
      borderRadius={borderRadius}
      alignItems="center"
      justifyContent={alignLeft ? 'flex-start' : 'center'}
      shadowColor="bodyText"
      style={boxStyles}
      paddingHorizontal="m"
      paddingVertical="m"
      flexDirection="row"
    >
      {loading ? (
        <ActivityIndicator color={textColor} size="large" />
      ) : (
        <>
          {backButton && (
            <Box style={styles.backIcon} marginRight="s">
              <Icon size={14} name={useWhiteText ? 'icon-chevron-back-white' : 'icon-chevron-back'} />
            </Box>
          )}
          {iconNameLeft && (
            <Box marginRight="s">
              <Icon size={25} name={iconNameLeft} />
            </Box>
          )}

          <Text
            maxFontSizeMultiplier={1.3}
            style={{...styles.content, color: textColor || buttonColor, fontWeight, fontFamily, fontSize}}
          >
            {text}
          </Text>
          <Box style={{...styles.chevronOffset}}>
            {externalLink && <Icon name={externalArrowIcon} />}
            {internalLink && <Icon size={25} name="icon-chevron" />}
            {iconName && <Icon size={25} name={iconName} />}
          </Box>
        </>
      )}
    </Box>
  );

  const accessibilityProps = {
    accessibilityRole: 'button' as 'button',
    accessibilityState: {disabled},
    ...externalLinkProps,
  };

  if (Platform.OS === 'android') {
    return (
      <Ripple
        disabled={disabled}
        onPress={onPressHandler}
        backgroundColor={color}
        borderRadius={borderRadius}
        testID={testID}
        {...accessibilityProps}
      >
        {content}
      </Ripple>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressHandler}
      style={styles.stretch}
      disabled={disabled}
      testID={testID}
      {...accessibilityProps}
    >
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  stretch: {
    alignSelf: 'stretch',
  },
  content: {
    textAlign: 'left',
  },
  chevronOffset: {
    position: 'absolute',
    right: 15,
  },
  backIcon: {
    marginTop: 1,
  },
});
