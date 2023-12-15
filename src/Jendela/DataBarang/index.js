import React, { useState, useRef, useEffect, useCallback} from 'react';
import { Modal, Alert,TouchableOpacity, Button, ScrollView, StyleSheet,  Text, TextInput, View, Image, ImageBackground} from 'react-native';
import { ShoppingCart,Back,Bag,Notification, Receipt21, Clock, Message, SearchNormal1, RulerPen, Category, Book1, TicketDiscount, BagCross, CloseCircle} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
export default function DataBarang() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [dataBarang, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('barang')
      .onSnapshot(querySnapshot => {
        const barangs = [];
        querySnapshot.forEach(documentSnapshot => {
          barangs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setBlogData(barangs);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  
  const handleEdit = async (id) => {
    navigation.navigate('EditData', {id});
  };

  return (
  <View style={styles.container}>
    <View style={styles.tempatlogo}>
      <Back style={{ marginLeft: 10, marginTop:5, }} color={colors.white()} variant="Linear" size={40}/> 
            <Text style={{marginLeft: -20, fontFamily:fontType['Pjs-Bold'],color:'#FFFFFF', fontSize:25}} >Data Barang</Text>
          <Bag style={{ marginLeft: -20, marginRight:15, marginTop:5, }} color={colors.white()} variant="Linear" size={40}/>          
    </View>
    <View style={styles.container2}>
    <ScrollView 
    showsVerticalScrollIndicator={false}>
      {dataBarang.map((barang, index) => ( 
        <View style={styles.containerBarang}>        
      <View key={index}>
        
      <Image style={styles.gambarBarang} source={{ uri: barang.image }}   onLoad={() => console.log("Gambar berhasil dimuat")} // Log jika gambar berhasil dimuat
       onError={() => console.log("URL Gambar:", barang.image)}  />
      <View style={styles.barang}>
          <View style={styles.containerDeskripsi}>
            <Text style={{ marginTop: -35, paddingLeft: 10, fontSize: 20, color: '#000000', fontFamily: fontType['Pjs-Bold'], paddingBottom: 20 }}>
              {barang.name}
            </Text>
            <Text style={{ paddingLeft: 10, fontSize: 15, color: '#000000', fontFamily: fontType['Pjs-Bold'], paddingBottom: 20 }}>
              {barang.price}
            </Text>
            <Text style={{ paddingLeft: 10, fontSize: 10, color: '#000000', fontFamily: fontType['Pjs-Bold'], paddingBottom: 30 }}>
              {barang.description}
            </Text>
          </View> 
      </View>
    </View>
    <View style={styles.containerBtn}>
            <View style={styles.containerButton}>
              <Text style={{ marginLeft: -5, marginBottom: 10, marginTop: -6, fontSize: 15, color: '#000000', fontFamily: fontType['Pjs-Bold'] }} onPress={() => handleEdit(barang.id)} >Edit</Text>
            </View>
            <View style={styles.containerButton}>
              <Text style={{ marginLeft: -5, marginBottom: 10, marginTop: -6, fontSize: 15, color: '#000000', fontFamily: fontType['Pjs-Bold'] }} onPress={() => handleDelete(barang.id)}>Delete</Text>
            </View>
          </View>
    </View>
    ))}
        </ScrollView>  
    </View> 
  </View> 
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#035AA6',
    alignItems:'center',  
  },
  container2:{
    flex:1,
    top:50,
    position:'absolute',
    marginTop:50,
    backgroundColor:'#F0EEF0',
    width: 400,
    height: 600,
    alignItems:'center',
    borderRadius:50,
  },
  containerDeskripsi:{
    marginLeft:5,
    paddingTop:20,
    margin:70,
    marginTop:25,
    borderRadius: 30,
    height: 90,
    width:'80%',
  },
  containerBtn:{
    marginLeft:2,
    marginTop:5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent:'space-evenly',
    margin:5,
    borderRadius: 20,
    height: 50,
    width:296,
  },
  containerButton:{
    marginTop:5,
    paddingTop:15,
    flexDirection: 'row',
    backgroundColor: '#FCBF1E',
    justifyContent:'space-evenly',
    margin:5,
    borderRadius: 20,
    height: 40,
    width:100,
  },
  tempatlogo: {
    width: 370,
    height: 70,
    padding:5,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius: 10,
    alignItems:'center',
  },
  search:{
    marginTop:30,
    padding:10,
    flexDirection: 'row',
    backgroundColor: '#cbd1ce',
    margin:5,
    marginLeft:10,
    borderRadius: 10,
    height: 35,
    width:270,
  },
  gambar:{
    borderRadius:20,
    width: '100%',
    height: '100%',
  },
  
  containerList:{
    flexDirection: 'column',
    justifyContent:'space-between',
    width: '100%',
    height: 300,
    padding:10,
    borderRadius: 10,
    backgroundColor:'#FFFFFF', 
  },
  containerBarang:{
    flex:1,
    marginLeft:5,
    marginTop:30,
    paddingRight:5,
    backgroundColor: '#4CBED8',    
    borderRadius: 20,
    height: 450,
    width:300,
  
  },
  barang:{
    marginTop:10,
    marginLeft:2,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius: 20,
    height: 150,
    width:'100%',

  },
  gambarBarang:{
    borderRadius:20,
    width: '100%',
    height: '50%',
    marginLeft:2,
  },
})

