import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { JADWAL, MASKAPAI, BANDARA } from '../utils/data'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const filtered_jadwal = (departure, arrival) => {
  const data = JADWAL.filter(function(item){
    return item.bandara_kode_keberangkatan == departure && item.bandara_kode_tujuan == arrival;
 }).map(function({id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id}){
     return {id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id};
 });

 
  return data;
}

const Item = ({ departure, arrival, maskapai_id, date }) => (
  <View style={styles.item}>
    <View style={styles.row}>
        <Text style={styles.col}>{BANDARA[departure].bandara_nama}</Text>
        <Text style={styles.col}> - </Text>
        <Text style={styles.col}>{BANDARA[arrival].bandara_nama}</Text> 
    </View>
    <View style={styles.row}>
    <FontAwesome name="plane" size={20} color='#88b454' style={{marginTop:30}}/>
      <Text style={styles.col5}>
        {MASKAPAI[maskapai_id].maskapai_nama}
        </Text>
      <Text style={styles.col5}>{date}</Text>
    </View>
  </View>
  
);

const Detail = ({navigation, route}) => {
  const {departure, arrival, date} = route.params;
  if(!departure || !arrival){
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.item}>
          <View style={styles.row}>
              <Text style={styles.unvail}>Tidak ada jadwal penerbangan</Text>
          </View>
        </View>
        <View style={styles.copyright1}>
          <Text>Copyright Rendy Noor Darmawan - 119140162</Text>
      </View>
      </SafeAreaView>
    )
  }
  const renderItem = ({ item }) => (
    <Item departure={item.bandara_kode_keberangkatan} arrival={item.bandara_kode_tujuan} maskapai_id={item.maskapai_id} date={date}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.date}>
        {date}
      </Text>
      <FlatList
        data={filtered_jadwal(departure, arrival)}
        renderItem={renderItem}
      />
      <View style={styles.copyright}>
          <Text>Copyright Rendy Noor Darmawan - 119140162</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    
    backgroundColor: '#D0D0D0',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 2,
    shadowColor: '#000',
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  col: {
    width: '31%',
    alignItems: 'center',
    textAlign: 'center',
  },
  col5:{
    paddingTop:30,
    paddingLeft:5,
    width: '46%',
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    backgroundColor: '#88b454',
    
  },
  copyright: {
    alignItems: 'center',
    marginBottom: 20,
    
  },
  copyright1: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop:580,
    
  },
  
  unvail: {
    width:'100%',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight:'bold',
  }
});

export default Detail;

