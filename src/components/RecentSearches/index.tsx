import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import useStyles from './styles';
interface SearchItem {
  id: number;
  place: string;
  date: string;
}

const data: SearchItem[] = [
  {
    id: 1,
    place: 'Ho Chi Minh - Ha Noi',
    date: 'Departure: 02/11/2021 - Return: 03/11/2021',
  },
  {id: 2, place: 'Ho Chi Minh - Ha Noi', date: '2023-06-10'},
  {id: 3, place: 'Ho Chi Minh - Ha Noi', date: '2023-07-05'},
];

const RecentSearches = () => {
  const {
    container,
    headerText,
    itemContainer,
    placeText,
    dateText,
    textContainer,
  } = useStyles();
  const renderItem: React.FC<{item: SearchItem}> = ({item}) => (
    <View style={itemContainer}>
      <View style={textContainer}>
        <Text style={placeText}>{item.place}</Text>
        <Text style={dateText}>Departure Date: {item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={container}>
      <Text style={headerText}>Recent Searches</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RecentSearches;
