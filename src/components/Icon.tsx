import React from 'react';
import IconCheck from 'assets/check.svg';
import IconCheckWhite from 'assets/check-white.svg';
import IconGreenCheck from 'assets/green-check.svg';
import IconBackArrow from 'assets/icon-back-arrow.svg';
import IconDownArrow from 'assets/icon-down-arrow.svg';
import IconBluetoothDisabled from 'assets/icon-bluetooth-disabled.svg';
import IconChevron from 'assets/icon-chevron.svg';
import IconChevronBack from 'assets/icon-chevron-back.svg';
import IconChevronBackWhite from 'assets/icon-chevron-back-white.svg';
import IconChevronWhite from 'assets/icon-chevron-white.svg';
import IconExternalArrow from 'assets/icon-external-arrow.svg';
import IconExternalArrowLight from 'assets/icon-external-arrow-light.svg';
import IconLightBulb from 'assets/icon-light-bulb.svg';
import CovidAlertEn from 'assets/covid-alert-en.svg';
import CovidAlertFr from 'assets/covid-alert-fr.svg';
import ProgressCircleEmpty from 'assets/progress-circle-empty.svg';
import ProgressCircleFilled from 'assets/progress-circle-filled.svg';
import SheetHandleBar from 'assets/sheet-handle-bar.svg';
import SheetHandleBarClose from 'assets/sheet-handle-bar-close.svg';
import IconX from 'assets/icon-x.svg';
import ThumbsUp from 'assets/thumbs-up.svg';
import HandCaution from 'assets/hand-caution.svg';
import HandCautionYellow from 'assets/hand-caution-yellow.svg';
import HandReminder from 'assets/hand-reminder.svg';
import HandThankYouWithLove from 'assets/hand-thank-you-with-love.svg';
import HandNoProvinceYet from 'assets/hand-no-province-yet.svg';
import CanadaLogo from 'assets/canada.svg';
import PurpleBullet from 'assets/purple-bullet.svg';
import HandReminderRed from 'assets/hand-reminder-red.svg';
import ScanQRCodeWhiteArrow from 'assets/scan-qr-code-white-arrow.svg';
import Camera from 'assets/camera.svg';
import GreenCircleCheck from 'assets/green-circle-check.svg';
import RedCircleExclamation from 'assets/red-circle-exclamation.svg';
import QRCodeIcon from 'assets/qr-code-icon.svg';
import HamburgerMenu from 'assets/hamburger-menu.svg';
import Close from 'assets/close.svg';
import IconThreeDots from 'assets/icon-three-dots.svg';
import IconExclamation from 'assets/icon-exclamation.svg';
import DeleteIcon from 'assets/delete-icon.svg';
import NoVisitIcon from 'assets/no-visit-icon.svg';
import SuccessfulCheckIn from 'assets/successful-checkin-hand.svg';
import QRCodeInvalid from 'assets/qr-code-invalid.svg';
import ExposureHistoryThumb from 'assets/exposure-history-thumb.svg';
import ExposureOutbreak from 'assets/exposure-outbreak-icon.svg';
import ExposureProximity from 'assets/exposure-proximity-icon.svg';
import CheckInSuccessfulIcon from 'assets/check-in-successful-icon.svg';

const ICONS = {
  'icon-x': IconX,
  'icon-back-arrow': IconBackArrow,
  'icon-down-arrow': IconDownArrow,
  'icon-bluetooth-disabled': IconBluetoothDisabled,
  'icon-check': IconCheck,
  'icon-check-white': IconCheckWhite,
  'icon-green-check': IconGreenCheck,
  'icon-chevron': IconChevron,
  'icon-chevron-back': IconChevronBack,
  'icon-chevron-back-white': IconChevronBackWhite,
  'icon-chevron-white': IconChevronWhite,
  'icon-external-arrow': IconExternalArrow,
  'icon-external-arrow-light': IconExternalArrowLight,
  'icon-light-bulb': IconLightBulb,
  'covid-alert-en': CovidAlertEn,
  'covid-alert-fr': CovidAlertFr,
  'progress-circle-filled': ProgressCircleFilled,
  'progress-circle-empty': ProgressCircleEmpty,
  'purple-bullet': PurpleBullet,
  'sheet-handle-bar': SheetHandleBar,
  'sheet-handle-bar-close': SheetHandleBarClose,
  'thumbs-up': ThumbsUp,
  'hand-caution': HandCaution,
  'hand-caution-yellow': HandCautionYellow,
  'hand-reminder': HandReminder,
  'hand-thank-you-with-love': HandThankYouWithLove,
  'hand-no-province-yet': HandNoProvinceYet,
  'canada-logo': CanadaLogo,
  'hand-reminder-red': HandReminderRed,
  'scan-qr-code-white-arrow': ScanQRCodeWhiteArrow,
  'camera-permission': Camera,
  'green-circle-check': GreenCircleCheck,
  'red-circle-exclamation': RedCircleExclamation,
  'qr-code-icon': QRCodeIcon,
  'hamburger-menu': HamburgerMenu,
  close: Close,
  'icon-three-dots': IconThreeDots,
  'icon-exclamation': IconExclamation,
  'delete-icon': DeleteIcon,
  'no-visit-icon': NoVisitIcon,
  'successful-checkin': SuccessfulCheckIn,
  'qr-code-invalid': QRCodeInvalid,
  'exposure-history-thumb': ExposureHistoryThumb,
  'exposure-proximity': ExposureProximity,
  'exposure-outbreak': ExposureOutbreak,
  'check-in-successful': CheckInSuccessfulIcon,
};

export type IconName = keyof typeof ICONS;

export interface IconProps {
  name: IconName | undefined;
  size?: number;
  width?: number;
  height?: number;
}

export const Icon = ({name, size = 24, width, height}: IconProps) => {
  const IconImpl = name !== undefined ? ICONS[name] : null; // eslint-disable-line no-negated-condition
  return IconImpl ? <IconImpl width={width ? width : size} height={height ? height : size} /> : null;
};
