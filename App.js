import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES } from './src/graphql/query';

const App = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
  useEffect(() => {
    console.log("errror", error);
    console.log("data", data);
  }, [data])

  if (error) {
    console.log(error);
  } else if (loading) {
    return <ActivityIndicator />
  } else {
    return (
      <FlatList
        data={data.rates}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.MainView}>
              <Text> {item.currency}</Text>
              <Text> {item.rate}</Text>
              <Text> {item.name}</Text>
            </View>
          )
        }}
      />
    )
  }
}

export default App

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    // width: 200,
    backgroundColor: '#8CD790',
    borderWidth: 2,
    borderColor: '#77AF9C',
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
})
