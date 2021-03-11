import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Box, Button, Text} from 'components';
import {useNavigation} from '@react-navigation/native';
import {SystemStatus, useSystemStatus} from 'services/ExposureNotificationService';
import {useStorage} from 'services/StorageService';

import {QrButton} from '../components/QrButton';
import {MenuButton} from '../components/MenuButton';

import {StatusHeaderView} from './StatusHeaderView';

const borderRadius = 16;

export const MenuBar = () => {
  const {qrEnabled} = useStorage();
  const [systemStatus] = useSystemStatus();

  const appStatus = (
    <Text paddingVertical="m">
      <StatusHeaderView enabled={systemStatus === SystemStatus.Active} />
    </Text>
  );
  const qrButtonBox = (
    <Box marginVertical="m">
      <QrButton />
    </Box>
  );
  const menuButtonBox = (
    <Box marginVertical="m">
      <MenuButton />
    </Box>
  );
  return (
    <Box style={styles.content} paddingHorizontal="m">
      <Box style={styles.box}>
        <Box flex={3} marginRight="m">
          {qrEnabled ? qrButtonBox : appStatus}
        </Box>
        <Box flex={2} marginVertical="m">
          {menuButtonBox}
        </Box>
      </Box>
    </Box>
  );
};
const styles = StyleSheet.create({
  content: {
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: borderRadius,
    elevation: 10,
  },
  box: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
