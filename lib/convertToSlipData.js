import moment from 'moment-timezone';

const DEFAULT_VIEW_VALUE = '';

export const STAFF_SLIP_TYPES = {
  HOLD: 'Hold',
};

export const buildLocaleDateAndTime = (dateTime, timezone, locale) => (
  moment(dateTime)
    .tz(timezone)
    .locale(locale)
    .format('L LT')
);

export const convertToSlipData = (source = {}, intl, timeZone, locale, slipName = STAFF_SLIP_TYPES.HOLD) => {
  const {
    item = {},
    request = {},
    requester = {},
    currentDateTime = null,
  } = source;

  const DEFAULT_DATE_OPTIONS = {
    timeZone,
    locale,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const slipData = {
    'staffSlip.Name': slipName,
    'staffSlip.currentDateTime': buildLocaleDateAndTime(currentDateTime, timeZone, locale),
    'requester.firstName': requester.firstName,
    'requester.lastName': requester.lastName,
    'requester.middleName': requester.middleName,
    'requester.preferredFirstName': requester.preferredFirstName ? requester.preferredFirstName : requester.firstName,
    'requester.patronGroup': requester.patronGroup,
    'requester.addressLine1': requester.addressLine1,
    'requester.addressLine2': requester.addressLine2,
    'requester.country': requester.countryId
      ? intl.formatMessage({ id: `stripes-components.countries.${requester.countryId}` })
      : DEFAULT_VIEW_VALUE,
    'requester.city': requester.city,
    'requester.stateProvRegion': requester.region,
    'requester.zipPostalCode': requester.postalCode,
    'requester.barcode': requester.barcode,
    'requester.barcodeImage': requester.barcode ? `<Barcode>${requester.barcode}</Barcode>` : DEFAULT_VIEW_VALUE,
    'requester.departments': requester.departments,
    'item.title': item.title,
    'item.primaryContributor': item.primaryContributor,
    'item.allContributors': item.allContributors,
    'item.barcode': item.barcode,
    'item.barcodeImage': `<Barcode>${item.barcode}</Barcode>`,
    'item.callNumber': item.callNumber,
    'item.callNumberPrefix': item.callNumberPrefix,
    'item.callNumberSuffix': item.callNumberSuffix,
    'item.displaySummary': item.displaySummary,
    'item.enumeration': item.enumeration,
    'item.volume': item.volume,
    'item.chronology': item.chronology,
    'item.copy': item.copy,
    'item.yearCaption': item.yearCaption,
    'item.materialType': item.materialType,
    'item.loanType': item.loanType,
    'item.numberOfPieces': item.numberOfPieces,
    'item.descriptionOfPieces': item.descriptionOfPieces,
    'item.lastCheckedInDateTime': item.lastCheckedInDateTime
      ? intl.formatDate(item.lastCheckedInDateTime, DEFAULT_DATE_OPTIONS)
      : item.lastCheckedInDateTime,
    'item.fromServicePoint': item.fromServicePoint,
    'item.toServicePoint': item.toServicePoint,
    'item.effectiveLocationInstitution': item.effectiveLocationInstitution,
    'item.effectiveLocationCampus': item.effectiveLocationCampus,
    'item.effectiveLocationLibrary': item.effectiveLocationLibrary,
    'item.effectiveLocationSpecific': item.effectiveLocationSpecific,
    'item.effectiveLocationPrimaryServicePointName': item.effectiveLocationPrimaryServicePointName,
    'request.servicePointPickup': request.servicePointPickup,
    'request.deliveryAddressType': request.deliveryAddressType,
    'request.requestExpirationDate': request.requestExpirationDate
      ? intl.formatDate(request.requestExpirationDate, DEFAULT_DATE_OPTIONS)
      : request.requestExpirationDate,
    'request.requestDate': request.requestDate ? intl.formatDate(request.requestDate, DEFAULT_DATE_OPTIONS) : request.requestDate,
    'request.holdShelfExpirationDate': request.holdShelfExpirationDate
      ? intl.formatDate(request.holdShelfExpirationDate, DEFAULT_DATE_OPTIONS)
      : request.holdShelfExpirationDate,
    'request.requestID': request.requestID,
    'request.patronComments': request.patronComments,
  };

  return slipData;
};

export default convertToSlipData;
