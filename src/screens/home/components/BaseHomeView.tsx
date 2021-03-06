import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Header, Icon, IconName} from 'components';

interface BaseHomeViewProps {
  children?: React.ReactNode;
  iconName?: IconName;
  primaryIconStyles?: {marginLeft: number; marginBottom: number};
  testID?: string;
  header?: boolean;
}

export const BaseHomeView = ({
  children,
  iconName,
  primaryIconStyles = {marginLeft: -35, marginBottom: 32},
  testID,
  header = true,
}: BaseHomeViewProps) => {
  return (
    <>
      {header ? (
        <SafeAreaView edges={['top']}>
          <Header />
        </SafeAreaView>
      ) : null}
      <ScrollView
        alwaysBounceVertical={false}
        style={styles.scrollView}
        testID={testID}
        contentContainerStyle={styles.scrollContainer}
      >
        <SafeAreaView edges={['left', 'right']}>
          <Box style={styles.zindex} width="100%" justifyContent="flex-start" marginBottom="-l">
            <Box style={{...primaryIconStyles}}>
              <Icon name={iconName} height={120} width={150} />
            </Box>
          </Box>
          <Box
            width="100%"
            flex={1}
            alignItems="flex-start"
            justifyContent="flex-start"
            paddingHorizontal="m"
            marginBottom="l"
          >
            {children}
          </Box>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainerWithAnimation: {
    marginTop: -100,
  },
  scrollView: {
    height: '100%',
  },
  scrollContainer: {
    maxWidth: 600,
    alignItems: 'flex-start',
  },
  zindex: {
    zIndex: 1,
  },
});
