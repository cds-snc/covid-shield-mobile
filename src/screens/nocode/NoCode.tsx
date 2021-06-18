import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {Box, ToolbarWithClose} from 'components';
import {useI18n} from 'locale';
import {useNavigation} from '@react-navigation/native';
import {useCachedStorage} from 'services/StorageService';
import {getRegionCase} from 'shared/RegionLogic';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRegionalI18n} from 'locale/regional';
import styles from 'shared/Styles';

import {NoRegionView} from './views/NoRegionView';
import {RegionNotCoveredView} from './views/RegionNotCoveredView';
import {ActiveListView} from './views/ActiveListView';
import {ActiveParagraphView} from './views/ActiveParagraphView';

const Content = () => {
  const {region} = useCachedStorage();
  const regionalI18n = useRegionalI18n();
  const regionCase = getRegionCase(region, regionalI18n.activeRegions);
  switch (regionCase) {
    case 'regionNotActive':
      return <RegionNotCoveredView />;
    case 'regionActive':
      if (region === 'ON') {
        return <ActiveListView />;
      }
      return <ActiveParagraphView />;
    default:
      return <NoRegionView />;
  }
};

export const NoCodeScreen = () => {
  const i18n = useI18n();
  const navigation = useNavigation();
  const close = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <Box flex={1} backgroundColor="overlayBackground">
      <SafeAreaView style={styles.flex}>
        <ToolbarWithClose closeText={i18n.translate('DataUpload.Close')} showBackButton={false} onClose={close} />
        <ScrollView style={styles.flex}>
          <Box paddingHorizontal="m" paddingBottom="l">
            <Content />
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};
