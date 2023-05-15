import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {FlatList, Text, View, ListRenderItem} from 'react-native';
import SearchHeader from '../SearchHeaderComponent';
import {SearchData} from '../SearchHeaderComponent';
import useStyles from './styles';
import {colors} from '../../themes/colors';

const SearchDepartureAndDestination = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const {
    container,
    search,
    inputStyle,
    popularItem,
    popularTextItem,
    popularItemSeperator,
  } = useStyles();
  const [recentData, setRecentData] = useState([
    {id: '1', title: 'SGN - Ho Chi Minh, Vietnam'},
    {id: '2', title: 'HAN - Ha Noi, Vietnam'},
    {id: '3', title: 'DAD - Da Nang, Vietnam'},
  ]);

  const popularData: SearchData[] = [
    {id: '1', title: 'SGN - Ho Chi Minh, Vietnam'},
    {id: '2', title: 'HAN - Ha Noi, Vietnam'},
    {id: '3', title: 'DAD - Da Nang, Vietnam'},
    {id: '4', title: 'CXR - Nha Trang'},
    {id: '5', title: 'BMV - Buon Me Thuot, Vietnam'},
    {id: '6', title: 'CAH - Ca Mau, Vietnam'},
    {id: '7', title: 'DIN - Dien Bien, Vietnam'},
    {id: '8', title: 'DLI - Da Lat, Vietnam'},
  ];

  const handleDeleteItem = (id: string) => {
    const newData = recentData.filter(item => item.id !== id);
    setRecentData(newData);
  };

  const renderItem: ListRenderItem<SearchData> = ({item}) => (
    <View style={popularItem}>
      <Text style={popularTextItem}>{item.title}</Text>
      <View style={popularItemSeperator} />
    </View>
  );

  return (
    <View style={container}>
      <Searchbar
        placeholder="City, Country..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={search}
        inputStyle={inputStyle}
        iconColor={colors.searchColor}
      />
      <FlatList
        data={popularData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <SearchHeader data={recentData} onDeleteItem={handleDeleteItem} />
        }
      />
    </View>
  );
};

export default SearchDepartureAndDestination;
