const DEFAULT_VIEW_VALUE = '';

export const STAFF_SLIP_TYPES = {
  HOLD: 'Hold',
};

export const convertToSlipData = (source = [], intl, timeZone, locale, staffSlip = {}) => {
  const DEFAULT_DATE_OPTIONS = {
    timeZone,
    locale,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const CURRENT_DATE_TIME_DATE_OPTIONS = {
    ...DEFAULT_DATE_OPTIONS,
    month: 'numeric',
  };

  return source.map((slip) => {
    const {
      item = {},
      request = {},
      requester = {},
      currentDateTime = null,
    } = slip;

    return {
      'staffSlip.Name': staffSlip?.slipName || STAFF_SLIP_TYPES.HOLD,
      'staffSlip.currentDateTime': intl.formatDate(currentDateTime, CURRENT_DATE_TIME_DATE_OPTIONS),
      'staffSlip.staffUsername': staffSlip?.user?.username,
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
      'item.accessionNumber': item.accessionNumber,
      'item.administrativeNotes': item.administrativeNotes,
      'item.datesOfPublication': item.datesOfPublication,
      'item.editions': item.editions,
      'item.physicalDescriptions': item.physicalDescriptions,
      'item.instanceHrid': item.instanceHrid,
      'item.instanceHridImage': `<Barcode>${item.instanceHrid}</Barcode>`,
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
      'request.barcodeImage': `<Barcode>${request.requestID}</Barcode>`,
    };
  });
};

export default convertToSlipData;
