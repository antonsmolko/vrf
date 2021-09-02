export default function(propValue, resourceHolder) {
  if (typeof propValue === 'string') {
    if (propValue.length === 0) {
      return false;
    }
    return new Function('resource, rootResource, rfName, $resource, $rootResource, $rfName', 'return resource && ' + propValue)(resourceHolder.$resource, resourceHolder.$rootResource, resourceHolder.$rfName, resourceHolder.$resource, resourceHolder.$rootResource, resourceHolder.$rfName);
  } else {
    return propValue;
  }
};
