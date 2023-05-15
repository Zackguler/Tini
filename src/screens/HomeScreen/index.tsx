import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DepartureComponent from '../../components/DepartureComponent';
import DepartureDateComponent from '../../components/DateComponent';
import HomeHeaderComponent from '../../components/HomeHeaderComponent';
import SwitchButton from '../../components/SwitchButton';
import Button from '../../components/Typography/Button';
import SwitchSvg from '../../svg/SwitchSvg';
import Cabin from '../../components/CabinComponent';
import {colors} from '../../themes/colors';
import RecentSearches from '../../components/RecentSearches';

const HomeScreen = () => {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState<boolean>(true);

  const handleToggle = () => {
    setIsSwitchEnabled(previousState => !previousState);
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.backgroundColor}}>
      <HomeHeaderComponent />
      <View style={styles.container}>
        {/* DEPARTURE */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column'}}>
            <DepartureComponent type="departure" />
            <DepartureComponent type="destination" />
          </View>
          <Button
            type="icon"
            value=""
            icon={<SwitchSvg />}
            onClick={() => console.log('Button pressed!')}
          />
        </View>
        <View style={styles.border} />
        {/* DATE */}
        <View
          style={{
            flexDirection: 'column',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <DepartureDateComponent type="departure" />
            <SwitchButton
              text="Round-trip"
              isEnable={isSwitchEnabled}
              onToggle={handleToggle}
            />
          </View>
          {isSwitchEnabled && <DepartureDateComponent type="return" />}
        </View>
        <View style={styles.border} />
        <Cabin />
      </View>
      <RecentSearches />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -12,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
    paddingLeft: 16,
    paddingRight: 16,
  },
  border: {
    backgroundColor: colors.border,
    height: 1,
  },
  space: {
    height: 16,
  },
});

export default HomeScreen;
