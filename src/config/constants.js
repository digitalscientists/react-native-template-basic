import { Dimensions, Platform } from 'react-native';

let headerHeight = Platform.OS === 'ios' ? 64 : 44;
let footerHeight = 50;

const constants = {
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get('window').height - headerHeight,
  viewHeightFooter: Dimensions.get('window').height - (headerHeight + footerHeight),
  viewPadding: 15,
  defaultSpacer: 10,
  screenHeight: Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height - 20,
  screenWidth: Dimensions.get('window').width,
  baseImageStyle: {flex: 1, width: undefined, height: undefined}
}

export default constants;
