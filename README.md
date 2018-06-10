# react-native-navigation-apps

Open & Navigate With External Navigation Apps (Waze,GoogleMaps,iOS Maps) from react native

## Description
This package is a solution to open and use the navigation apps from your react-native app
for now its only support waze google maps and ios maps for ios devices

## Example

<a href="https://imgflip.com/gif/2byelf"><img src="https://i.imgflip.com/2byelf.gif" title="made at imgflip.com"/></a>

## Installation

```
npm -i --save react-native-navigation-apps
```
```
yarn add react-native-navigation-apps
```

## Usage
```javascript
import {NavigationApps,googleMapsActions,wazeActions,googleMapsTravelModes} from "./src/components/NavigationApss";

      <NavigationApps
                    modalProps={{animationType:'slide',transparent:true}}
                    modalContainerStyle={{height:300 width:300,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}
                    modalBtnCloseContainerStyle={{}}
                    modalBtnCloseStyle={{borderWidth:1}}
                    modalBtnCloseTextStyle={{fontSize:20}}
                    modalBtnOpenStyle={{borderWidth:1}}
                    modalBtnOpenTextStyle={{fontSize:50,color:'white'}}
                    modalBtnOpenText={'some text'}
                    modalBtnCloseText={'some text'}
                    iconSize={50}
                    row
                    viewMode='modal'
                    address='some default address to navigate'
                    waze={{address:'',lat:'',lon:'',action: wazeActions.navigateByAddress}}
                    googleMaps={{search,lat:'',lon:'',action: googleMapsActions.navigateByAddress,travelMode:googleMapsTravelModes.driving}}
                    maps={{search,lat:'',lon:'',action: mapsActions.navigateByAddress,travelMode:mapsTravelModes.driving}}
                />
```


### Details
Each app (waze,google maps,ios maps) has its own configuration an `action` `address` `lat` `lon` and `icon`
For google maps and ios maps also have `travelMode` (`driving`,`walking`,`transit`)
Action can be :
`navigateByAddress` -- navigate to an address by address (text)
`navigateByLatAndLon` -- navigate to an address by Latitude and Longitude
`searchLocationByLatAndLon` -- only search an address (not navigate) by Latitude and Longitude
travelMode can be : 
`driving`
`walking`
`transit`


### Properties

| Prop                                                    | Description                                                                                                     |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **`row`**         | align navigation apps as row     | `false` |
| **`viewMode`**       | Set navigation apps display as `modal` or `view` mode  | `view`|
| **`iconSize`**       | icon size of the navigation app | `100`|
| **`modalProps`**     | react native modal props       | `{}` |
| **`modalContainerStyle`**        | Styling modal container   | `{}`  |
| **`modalBtnCloseContainerStyle`**          | Styling the modal close button container |`{}`
| **`modalBtnCloseStyle`**           | Styling the modal close button   |`{}`|
| **`modalBtnCloseTextStyle`**           | Styling the modal close button text  |`{}`|
| **`modalBtnOpenStyle`**           | Styling the modal open button  |`{}`|
| **`modalBtnOpenTextStyle`**           | Styling the modal open button text  | `{}` |
| **`modalBtnOpenTitle`**           | Title for the the modal open button   |   `''`    |
| **`modalBtnCloseTitle`**           | Title for the modal close button   |   `''`    |
| **`address`**           | Set the default address for the nvigation apps   |   `''`    |
| **`waze`**           | Set configuration for waze : `action` `address` `lat` `lon` and `icon` ... if `address` not set waze will take the address from the default `address` prop |   `address:'',action:navigateByAddress`,`lat`:'',`lon`:''    |
| **`googleMaps`**           |Set configuration for google maps `action` `address` `lat` `lon` `icon` and `travelMode`  ... if `address` not set google maps will take the address from the default `address` prop   | `address:'',action:navigateByAddress`,`lat`:'',`lon`:`travelMode`:'driving'     |
| **`maps`**           | Set configuration for ios maps  `action` `address` `lat` `lon` `icon` and `travelMode`  ... if `address` not set ios maps will take the address from the default `address` prop |   `address:'',action:navigateByAddress`,`lat`:'',`lon`:'',`travelMode`:'driving'   |

## IOS Usage 
To use `waze` `google maps` on iOS devices you nust to add this lines to the `info.plist`
```
<key>LSApplicationQueriesSchemes</key>
	<array>
		<string>comgooglemaps</string>
		<string>waze</string>
	</array>
```

## Android Usage
soon


