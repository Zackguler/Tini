import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DeleteIcon from '../../svg/DeleteIcon';
import useStyles from './styles';

export interface SearchData {
  id: string;
  title: string;
}

interface SearchProps {
  data: SearchData[];
  onDeleteItem: (itemId: string) => void;
}

const {
  recentContainer,
  recentTitle,
  recentItem,
  recentSubItem,
  recentSeperator,
  recentTextItem,
  popularTitle,
  seperator,
} = useStyles();

const SearchHeader = ({data, onDeleteItem}: SearchProps) => {
  const handleDeleteItem = (id: string) => {
    onDeleteItem(id);
  };
  return (
    <View style={recentContainer}>
      <Text style={recentTitle}>Recent Searches</Text>
      {data.map((item, i) => (
        <View key={item.id} style={recentItem}>
          <View style={recentSubItem}>
            <Text style={recentTextItem}>{item.title}</Text>
            <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
              <DeleteIcon />
            </TouchableOpacity>
          </View>
          {i !== data.length - 1 && <View style={recentSeperator} />}
        </View>
      ))}
      <View style={seperator} />
      <Text style={popularTitle}>Popular Places</Text>
    </View>
  );
};

export default SearchHeader;
