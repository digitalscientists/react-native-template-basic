# React Native Basic Template

## Getting Started

### Install Instructions
`react-native init ProjectNameHere --template https://github.com/digitalscientists/react-native-template-basic`

The following dependencies will be installed and linked automatically:  
- React Navigation
- React Native Vector Icons

After installation is complete,
`cd ProjectNameHere` and `react-native run-ios` or `react-native run-android`


### Usage Instructions

Most files are left blank, but there are a few that have some code we have regularly reused.

##### config/colors.js

This is a starting point including black, white and a number of grayscale colors typically used in projects.

##### config/constants.js

This file houses reusable dimensions like header height, footer height, screen height, view height, default spacer and a base image style. You will want to change the project's header height, footer height, view padding and default spacer based on the project styleguide.

##### config/spacing.js

This file houses standard spacing styles such as containers and general padding to be used throughout the app. Edits can be made, but the dimensions here are pulled from `constants.js`.
