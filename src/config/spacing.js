import { StyleSheet, Platform } from 'react-native';

import constants from 'config/constants';
import colors from 'config/colors';

let defaultSpacer = 10;
let positions = ['Top', 'Right', 'Left', 'Bottom'];

const spacing = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: constants.viewPadding,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    height: constants.viewHeight - constants.footerHeight
  },
  containerFullWidth: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    height: '100%',
    minHeight: (constants.viewHeight - constants.footerHeight) - constants.headerHeight,
    width: '100%',
  },
  containerWithFooter: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    paddingBottom: constants.footerHeight
  },
  scrollContainer: {
    backgroundColor: colors.white,
    flex: 0,
    minHeight: constants.viewHeight,
    width: '100%',
    overflow: 'hidden'
  },
  scrollContainerWithFooter: {
    backgroundColor: colors.white,
    width: '100%',
    minHeight: constants.viewHeight,
    maxWidth: constants.screenWidth,
    overflow: 'hidden',
    paddingBottom: constants.footerHeight
  },
  viewPadding: {
    padding: constants.viewPadding
  },
  viewPaddingHorizontal: {
    paddingLeft: constants.viewPadding,
    paddingRight: constants.viewPadding
  },
  viewPaddingVertical: {
    paddingTop: constants.viewPadding,
    paddingBottom: constants.viewPadding
  },
  removeHorizontalMargin: {
    marginLeft: 0,
    marginRight: 0
  },
  inlineItemsSeparate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  inlineItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

positions.forEach((position) => {
  var paddingString = ('padding' + position)
  var marginString = ('margin' + position)

  spacing['addPadding' + position] = {
    [paddingString]: defaultSpacer
  }
  spacing['addMargin' + position] = {
    [marginString]: defaultSpacer
  }
});

export default spacing;
