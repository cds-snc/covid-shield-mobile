import React from 'react';
import {useI18n} from 'locale';
import {Text} from 'components';
import {useAccessibilityAutoFocus} from 'shared/useAccessibilityAutoFocus';
import {isRegionActive} from 'shared/RegionLogic';
import {useStorage} from 'services/StorageService';
import {useRegionalI18n} from 'locale/regional';
import {ExposedHelpButton} from 'components/ExposedHelpButton';

import {BaseHomeView} from '../components/BaseHomeView';

const ActiveContent = ({text}: {text: string}) => {
  if (text === '') {
    return null;
  }
  return <Text marginBottom="m">{text}</Text>;
};

const ExposureText = ({isBottomSheetExpanded}: {isBottomSheetExpanded: boolean}) => {
  const {region} = useStorage();
  const regionalI18n = useRegionalI18n();
  const regionActive = isRegionActive(region, regionalI18n.activeRegions);
  const textType = regionActive ? 'RegionCovered' : 'RegionNotCovered';
  const i18n = useI18n();
  const autoFocusRef = useAccessibilityAutoFocus(!isBottomSheetExpanded);
  const activeBodyText = regionalI18n.translate(`RegionContent.ExposureView.Active.${region}.Body`);

  console.log('regionActive', regionActive);

  return (
    <>
      <Text focusRef={autoFocusRef} variant="bodyTitle" marginBottom="m" accessibilityRole="header">
        {i18n.translate(`Home.ExposureDetected.${textType}.Title`)}
      </Text>
      <Text marginBottom="m">{i18n.translate(`Home.ExposureDetected.${textType}.Body1`)}</Text>

      <Text variant="bodyTitle" marginBottom="m" accessibilityRole="header">
        {i18n.translate(`Home.ExposureDetected.${textType}.Title2`)}
      </Text>

      {regionActive ? (
        <ActiveContent text={activeBodyText} />
      ) : (
        <Text marginBottom="m">{i18n.translate(`Home.ExposureDetected.RegionNotCovered.Body2`)}</Text>
      )}
    </>
  );
};

export const ExposureView = ({isBottomSheetExpanded}: {isBottomSheetExpanded: boolean}) => {
  return (
    <BaseHomeView iconName="hand-caution" testID="exposure">
      <ExposureText isBottomSheetExpanded={isBottomSheetExpanded} />
      <ExposedHelpButton />
    </BaseHomeView>
  );
};
