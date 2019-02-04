export const wazeActions = {
    'navigateByAddress': 'navigateByAddress',
    'navigateByLatAndLon': 'navigateByLatAndLon',
    'searchLocationByLatAndLon': 'searchLocationByLatAndLon'
};
export const googleMapsActions = {
    'navigateByAddress': 'navigateByAddress',
    'navigateByLatAndLon': 'navigateByLatAndLon',
    'searchLocationByLatAndLon': 'searchLocationByLatAndLon'
};
export const mapsActions = {
    'navigateByAddress': 'navigateByAddress',
    'navigateByLatAndLon': 'navigateByLatAndLon',
    'searchLocationByLatAndLon': 'searchLocationByLatAndLon'
};
export const googleMapsTravelModes = {
    'driving': 'driving',
    'walking': 'walking',
    'bicycling': 'bicycling',
    'transit': 'transit'
};


export const mapsTravelModes = {
    'driving': 'd',
    'walking': 'w',
    'transit': 'r'
};


export const wazeDefaultProps = {


    action: wazeActions.navigateByAddress,
    address: '',
    lat: '',
    lon: '',
    icon: null,
    title: null,
    travelMode: null

};


export const googleMapsDefaultProps = {


    action: googleMapsActions.navigateByAddress,
    address: '',
    lat: '',
    lon: '',
    travelMode: 'driving',
    icon: null,
    title: null

};


export const mapsDefaultProps = {


    action: mapsActions.navigateByAddress,
    address: '',
    lat: '',
    lon: '',
    travelMode: 'd',
    icon: null,
    title: null

};

