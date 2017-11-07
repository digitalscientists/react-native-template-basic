# React Native Basic Template

## Getting Started

### Install Instructions
`react-native init ProjectNameHere --template https://github.com/digitalscientists/react-native-template-basic`

The following dependencies will be installed and linked automatically:  
- [React Navigation](https://reactnavigation.org/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Babel Plugin Module Resolver](https://github.com/tleunen/babel-plugin-module-resolver)

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

#### Import module resolver

This template is created using Babel Plugin Module Resolver to simplify the require and import paths in the project.

Example:
```
// Use this:
import colors from 'config/colors';
// Instead of:
import colors from '../../config/colors';

// Also works with require calls
const logo = require('assets/images/logo.png');
```
