import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Color, FontSize, Border, FontFamily } from '../../lib/GlobalStyles';

const UserProfile = () => {
  return (
    <View style={styles.userProfile}>
      <Image
        style={styles.userProfileChild}
        resizeMode="cover"
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.leftParent}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={[styles.currentPlanParent, styles.currentLayout1]}>
        <View style={[styles.currentPlan, styles.currentPlanPosition]}>
          <View style={[styles.currentPlanChild, styles.childPosition]} />
          <Text
            style={[styles.paymentMethods, styles.textTypo]}>{`Payment Methods
`}</Text>
          <View style={[styles.currentPlanItem, styles.currentLayout]} />
          <View style={[styles.currentPlanInner, styles.currentLayout]} />
          <View style={[styles.delete, styles.deleteLayout]}>
            <LinearGradient
              style={[styles.deleteChild, styles.deleteLayout]}
              locations={[0, 1]}
              colors={['#e3823c', '#e33c3c']}
              useAngle={true}
              angle={99.61}
            />
            <Text style={styles.delete1}>Delete</Text>
          </View>
          <View style={[styles.physicalCashWrapper, styles.wrapperPosition]}>
            <Text style={styles.physicalCash}>PHYSICAL CASH</Text>
          </View>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <Image
          style={styles.businessAndFinancebank}
          resizeMode="cover"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={[styles.bankBalanceWrapper, styles.wrapperPosition]}>
          <Text style={styles.physicalCash}>BANK BALANCE</Text>
        </View>
      </View>
      <View style={[styles.currentPlanParent, styles.currentLayout1]}>
        <View style={[styles.currentPlan, styles.currentPlanPosition]}>
          <View style={[styles.currentPlanChild, styles.childPosition]} />
          <Text
            style={[styles.paymentMethods, styles.textTypo]}>{`Payment Methods
`}</Text>
          <View style={[styles.currentPlanItem, styles.currentLayout]} />
          <View style={[styles.currentPlanInner, styles.currentLayout]} />
          <View style={[styles.delete, styles.deleteLayout]}>
            <LinearGradient
              style={[styles.deleteChild, styles.deleteLayout]}
              locations={[0, 1]}
              colors={['#e3823c', '#e33c3c']}
              useAngle={true}
              angle={99.61}
            />
            <Text style={styles.delete1}>Delete</Text>
          </View>
          <View style={[styles.physicalCashWrapper, styles.wrapperPosition]}>
            <Text style={styles.physicalCash}>PHYSICAL CASH</Text>
          </View>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <Image
          style={styles.businessAndFinancebank}
          resizeMode="cover"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={[styles.bankBalanceWrapper, styles.wrapperPosition]}>
          <Text style={styles.physicalCash}>BANK BALANCE</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.chandramaSahaParent}>
          <Text style={[styles.chandramaSaha, styles.userProfile1Typo]}>
            Chandrama Saha
          </Text>
          <Text style={[styles.xxxxxXxxxx, styles.xxxxxTypo]}>
            +91 XXXXX XXXXX
          </Text>
          <Text style={[styles.chandramasahaxxxxx, styles.xxxxxTypo]}>
            chandramasaha@xxxxx
          </Text>
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.chandramaSahaParent}>
          <Text style={[styles.chandramaSaha, styles.userProfile1Typo]}>
            Chandrama Saha
          </Text>
          <Text style={[styles.xxxxxXxxxx, styles.xxxxxTypo]}>
            +91 XXXXX XXXXX
          </Text>
          <Text style={[styles.chandramasahaxxxxx, styles.xxxxxTypo]}>
            chandramasaha@xxxxx
          </Text>
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <Text style={[styles.userProfile1, styles.userProfile1Typo]}>
        User Profile
      </Text>
      <Image
        style={[styles.userProfileItem, styles.currentPlanPosition]}
        resizeMode="cover"
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={[styles.statusBar, styles.iconPosition]}>
        <Image
          style={styles.statusbariphone1Icon}
          resizeMode="cover"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={styles.statusbar}>
          <Text style={[styles.text, styles.textTypo]}>08:48</Text>
          <Image
            style={styles.segnalIcon}
            resizeMode="cover"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Image
            style={[styles.wifiIcon, styles.batLayout1]}
            resizeMode="cover"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <View style={[styles.bat, styles.batLayout1]}>
            <View style={[styles.batChild, styles.batBorder]} />
            <View style={styles.batItem} />
            <View style={[styles.batInner, styles.batLayout]} />
            <View style={[styles.batChild1, styles.batLayout]} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={[styles.currentPlanContainer, styles.currentLayout1]}>
        <View style={[styles.currentPlan, styles.currentPlanPosition]}>
          <View style={[styles.currentPlanChild, styles.childPosition]} />
          <Text style={[styles.paymentMethods, styles.textTypo]}>Cards</Text>
          <View style={[styles.currentPlanItem, styles.currentLayout]} />
          <View style={[styles.currentPlanInner, styles.currentLayout]} />
          <View style={[styles.delete, styles.deleteLayout]}>
            <LinearGradient
              style={[styles.deleteChild, styles.deleteLayout]}
              locations={[0, 1]}
              colors={['#e3823c', '#e33c3c']}
              useAngle={true}
              angle={99.61}
            />
            <Text style={styles.delete1}>Delete</Text>
          </View>
          <View style={[styles.physicalCashWrapper, styles.wrapperPosition]}>
            <Text style={styles.physicalCash}>DEBIT CARD</Text>
          </View>
          <Image
            style={[
              styles.ecommercecreditCard2Icon,
              styles.ecommercecreditIconPosition,
            ]}
            resizeMode="cover"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={[styles.currentPlan, styles.currentPlanPosition]}>
          <View style={[styles.currentPlanChild, styles.childPosition]} />
          <Text style={[styles.paymentMethods, styles.textTypo]}>Cards</Text>
          <View style={[styles.currentPlanItem, styles.currentLayout]} />
          <View style={[styles.currentPlanInner, styles.currentLayout]} />
          <View style={[styles.delete, styles.deleteLayout]}>
            <LinearGradient
              style={[styles.deleteChild, styles.deleteLayout]}
              locations={[0, 1]}
              colors={['#e3823c', '#e33c3c']}
              useAngle={true}
              angle={99.61}
            />
            <Text style={styles.delete1}>Delete</Text>
          </View>
          <View style={[styles.physicalCashWrapper, styles.wrapperPosition]}>
            <Text style={styles.physicalCash}>DEBIT CARD</Text>
          </View>
          <Image
            style={[
              styles.ecommercecreditCard2Icon,
              styles.ecommercecreditIconPosition,
            ]}
            resizeMode="cover"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <Image
          style={[
            styles.ecommercecreditCardIcon,
            styles.ecommercecreditIconPosition,
          ]}
          resizeMode="cover"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={[styles.bankBalanceWrapper, styles.wrapperPosition]}>
          <Text style={styles.physicalCash}>CREDIT CARD</Text>
        </View>
      </View>
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  currentLayout1: {
    height: 202,
    width: 340,
    position: 'absolute',
  },
  currentPlanPosition: {
    left: 0,
    top: 0,
  },
  childPosition: {
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  textTypo: {
    textAlign: 'left',
    color: Color.white,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    position: 'absolute',
  },
  currentLayout: {
    height: 91,
    width: 92,
    backgroundColor: Color.gray_300,
    top: 62,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'solid',
    position: 'absolute',
  },
  deleteLayout: {
    height: 44,
    width: 127,
    position: 'absolute',
  },
  wrapperPosition: {
    top: 163,
    flexDirection: 'row',
    position: 'absolute',
  },
  groupChildLayout: {
    height: 107,
    width: 340,
    position: 'absolute',
  },
  userProfile1Typo: {
    letterSpacing: 0.3,
    color: Color.gray_400,
    textAlign: 'left',
    fontWeight: '700',
    position: 'absolute',
  },
  xxxxxTypo: {
    color: Color.gray_100,
    letterSpacing: 1.1,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dMSansRegular,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
  },
  iconPosition: {
    width: 390,
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  batLayout1: {
    height: 11,
    position: 'absolute',
  },
  batBorder: {
    borderColor: '#fff',
    borderStyle: 'solid',
  },
  batLayout: {
    width: 1,
    position: 'absolute',
  },
  ecommercecreditIconPosition: {
    marginTop: -15,
    left: '50%',
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  userProfileChild: {
    top: 271,
    left: 265,
    width: 269,
    height: 469,
    position: 'absolute',
  },
  leftIcon: {
    width: 8,
    height: 14,
  },
  frameChild: {
    width: 5,
    marginLeft: 319,
    height: 21,
  },
  leftParent: {
    top: 75,
    left: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  currentPlanChild: {
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'solid',
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    height: 202,
    width: 340,
    position: 'absolute',
  },
  paymentMethods: {
    top: 23,
    width: 145,
    height: 25,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: '700',
    color: Color.white,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    left: 25,
  },
  currentPlanItem: {
    left: 21,
  },
  currentPlanInner: {
    left: 130,
  },
  deleteChild: {
    backgroundColor: 'transparent',
    borderRadius: Border.br_mini,
    height: 44,
    width: 127,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'solid',
    left: 0,
    top: 0,
  },
  delete1: {
    left: 44,
    fontSize: FontSize.size_smi,
    width: 40,
    height: 15,
    color: Color.gray_400,
    fontFamily: FontFamily.dMSansRegular,
    top: 15,
    textAlign: 'left',
    letterSpacing: 0.2,
    position: 'absolute',
  },
  delete: {
    top: 229,
    left: 103,
  },
  physicalCash: {
    textAlign: 'center',
    width: 85,
    fontSize: FontSize.size_3xs,
    height: 15,
    color: Color.gray_400,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  physicalCashWrapper: {
    left: 130,
  },
  vectorIcon: {
    height: '17.82%',
    width: '12.94%',
    top: '44.55%',
    right: '41.76%',
    bottom: '37.62%',
    left: '45.29%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  currentPlan: {
    height: 202,
    width: 340,
    position: 'absolute',
    overflow: 'hidden',
  },
  businessAndFinancebank: {
    marginTop: -18,
    width: 47,
    height: 49,
    left: '50%',
    top: '50%',
    marginLeft: -126,
    position: 'absolute',
    overflow: 'hidden',
  },
  bankBalanceWrapper: {
    left: 25,
  },
  currentPlanParent: {
    top: 277,
    left: 26,
  },
  groupChild: {
    borderWidth: 1,
    left: 0,
    top: 0,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'solid',
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_3xs,
  },
  chandramaSaha: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dMSansBold,
    left: 0,
    top: 0,
  },
  xxxxxXxxxx: {
    top: 29,
  },
  chandramasahaxxxxx: {
    top: 42,
  },
  chandramaSahaParent: {
    top: 25,
    left: 28,
    width: 153,
    height: 55,
    position: 'absolute',
  },
  groupItem: {
    left: 249,
    width: 79,
    height: 81,
    top: 15,
    position: 'absolute',
  },
  rectangleParent: {
    top: 135,
    left: 24,
  },
  userProfile1: {
    top: 76,
    left: 128,
    fontSize: 20,
    fontFamily: FontFamily.syneBold,
  },
  userProfileItem: {
    width: 419,
    height: 269,
    position: 'absolute',
  },
  statusbariphone1Icon: {
    top: -10,
    left: 18,
    width: 355,
    display: 'none',
    height: 41,
    position: 'absolute',
  },
  text: {
    fontWeight: '500',
    fontFamily: FontFamily.dMSansMedium,
    color: Color.white,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  segnalIcon: {
    left: 275,
    width: 18,
    height: 10,
    top: 4,
    position: 'absolute',
  },
  wifiIcon: {
    left: 297,
    width: 16,
    top: 3,
    height: 11,
  },
  batChild: {
    width: 21,
    height: 11,
    position: 'absolute',
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  batItem: {
    left: 2,
    width: 12,
    height: 7,
    backgroundColor: Color.white,
    top: 2,
    position: 'absolute',
  },
  batInner: {
    borderRightWidth: 1,
    height: 8,
    top: 2,
    borderColor: '#fff',
    borderStyle: 'solid',
    left: 21,
  },
  batChild1: {
    left: 22,
    height: 3,
    backgroundColor: Color.white,
    top: 4,
  },
  bat: {
    left: 319,
    width: 23,
    top: 3,
    height: 11,
  },
  statusbar: {
    top: 14,
    width: 342,
    left: 24,
    height: 21,
    position: 'absolute',
  },
  statusBar: {
    top: 10,
    height: 45,
  },
  icon: {
    top: 724,
    height: 120,
  },
  ecommercecreditCard2Icon: {
    marginLeft: -18,
    width: 41,
    height: 41,
  },
  ecommercecreditCardIcon: {
    width: 42,
    height: 42,
    marginLeft: -126,
    marginTop: -15,
  },
  currentPlanContainer: {
    top: 501,
    left: 25,
  },
  userProfile: {
    borderRadius: 50,
    backgroundColor: '#141326',
    flex: 1,
    width: '100%',
    height: 844,
    overflow: 'hidden',
  },
});

export default UserProfile;
