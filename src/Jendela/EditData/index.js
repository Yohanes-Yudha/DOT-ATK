import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, TextInput, View ,TouchableOpacity, Image} from 'react-native';
import { Add, Back, AddSquare, Book1, Money3, ImportSquare, Note, TransmitSquare } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import firestore from '@react-native-firebase/firestore';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
const EditData = ({route}) => {
  const [oldImage, setOldImage] = useState(null);
  const [image, setGambar] = useState(null);
  const { id } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [DataBarang, setDataBarang] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  });
  const handleChange = (key, value) => {
    setDataBarang({
      ...DataBarang,
      [key]: value,
    });
    };
  useEffect(() => {
    const subscriber = firestore()
      .collection('barang')
      .doc(id)
      .onSnapshot(documentSnapshot => {
        const dataBarang = documentSnapshot.data();
        if (dataBarang) {
          console.log('Barang data: ', dataBarang);
          setDataBarang({
            name: dataBarang.name,
            price: dataBarang.price,
            description: dataBarang.description,
            createdAt: new Date(),
          });
          setOldImage(dataBarang.image);
          setGambar(dataBarang.image);
          setLoading(false);
        } else {
          console.log(`Barang with ID ${id} not found.`);
        }
      });
    setLoading(false);
    return () => subscriber();
  }, [id]);
console.log(DataBarang)
  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setGambar(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };    

const handleUpdate = async () => {
  setLoading(true);
  let filename = image.substring(image.lastIndexOf('/') + 1);
  const extension = filename.split('.').pop();
  const name = filename.split('.').slice(0, -1).join('.');
  filename = name + Date.now() + '.' + extension;
  const reference = storage().ref(`barangimages/${filename}`);
  try {
    if (image !== oldImage && oldImage) {
      const oldImageRef = storage().refFromURL(oldImage);
      console.log(oldImageRef);
      await oldImageRef.delete();
    }
    if (image !== oldImage) {
      await reference.putFile(image);
    }
    const url =
      image !== oldImage ? await reference.getDownloadURL() : oldImage;
      await firestore().collection('barang').doc(id).update({
        name: DataBarang.nama,
        price: DataBarang.harga,
        image: url ,
        description: DataBarang.deskripsi,
        createdAt: new Date(),
    });
    setLoading(false);
    console.log('Barang Updated!');
    navigation.navigate('DataBarang', {id});
  } catch (error) {
    console.log(error);
  }
};
// const handleUpdate = async () => {
//     setLoading(true);
//     let filename = image.substring(image.lastIndexOf('/') + 1);
//     const extension = filename.split('.').pop();
//     const name = filename.split('.').slice(0, -1).join('.');
//     filename = name + Date.now() + '.' + extension;
//     const reference = storage().ref(`barangimages/${filename}`);
// // setLoading(true);
//     try {
//       await reference.putFile(image);
//       const url = await reference.getDownloadURL();
//       await firestore().collection('barang').add({
//       name: form.nama,
//       price: form.harga,
//       image ,
//       description: form.deskripsi,
//       createdAt: new Date(),
//     });
//     setLoading(false);
//     console.log('Tambah Barang Berhasil!');
//     navigation.navigate('DataBarang');
//     }  catch (error) {
//       console.log(error);
//     }
//   };




  return (
  <View style={styles.container}>
    <View style={styles.tempatlogo}>
      <Back style={{ marginLeft: 10, marginTop:5, }} color={colors.white()} variant="Linear" size={40}/> 
            <Text style={{marginLeft: -20, fontFamily:fontType['Pjs-Bold'],color:'#FFFFFF', fontSize:25}} >Edit Data</Text>
          <AddSquare style={{ marginLeft: -20, marginRight:15, marginTop:5, }} color={colors.white()} variant="Linear" size={40}/>          
    </View>
    <View style={styles.container2}>
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={{flex:1,}}
    contentContainerStyle={{
    paddingHorizontal: 20, 
    marginBottom: 20  
  }}
    >
    <Text style={{marginBottom:-20, marginTop:20, marginLeft:-10,fontSize: 15, color: '#000000', fontFamily:fontType['Pjs-Bold'],  }}>Masukkan Nama Barang</Text>
        <View style={styles.containerForm}>     
             <View style={styles.itemForm}>
                <Book1 style={{marginLeft:10, marginRight:10,  marginTop:-4}}color={colors.grey()} variant="Linear" size={20}/>
                <TextInput
                    placeholder="Nama Barang"
                    value={DataBarang.name}
                    onChangeText={(text) => handleChange("nama", text)}
                    placeholderTextColor={colors.grey(0.6)}
                    style={{color: 'black', fontSize:15, marginTop:-5,  width:200,   }}
                />
             </View>
        </View>
        <Text style={{marginBottom:-20, marginTop:20, marginLeft:-10,fontSize: 15, color: '#000000', fontFamily:fontType['Pjs-Bold'],  }}>Masukkan Harga Barang</Text>
        <View style={styles.containerForm}>     
             <View style={styles.itemForm}>
             <Money3 style={{marginLeft:10, marginRight:10,  marginTop:-4}}color={colors.grey()} variant="Linear" size={20}/>
                <TextInput
                    placeholder="Harga"
                    value={DataBarang.price}
                    onChangeText={(text) => handleChange("harga", text)}
                    placeholderTextColor={colors.grey(0.6)}
                    style={{color: 'black', fontSize:15, marginTop:-5,  width:200,    }}
                />
             </View>
        </View>
        <Text style={{ marginBottom:-20, marginTop:20, marginLeft:-10,fontSize: 15, color: '#000000', fontFamily:fontType['Pjs-Bold'],  }}>Masukkan Gambar Barang</Text>
        <View style={styles.containerFormGambar}>     
             
             <Image style={styles.gambarBarang} source={{ uri: DataBarang.image }}   onLoad={() => console.log("Gambar berhasil dimuat")}/>
             {image ? (
          <View style={styles.itemFormGambar}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                top: -105,
                right: 15,
                backgroundColor: colors.black(),
                borderRadius: 25, 
              }}
              onPress={() => setGambar(null)}>
              <Add
                size={20}
                variant="Linear"
                color={colors.white()}
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={{
                  marginLeft:10, marginRight:10,  marginTop:25,
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
              <AddSquare color={colors.black(0.6)} variant="Linear" size={30} />
              <Text
                style={{
                  fontFamily: fontType['Pjs-Regular'],
                  fontSize: 12,
                  color: colors.grey(0.6),
                }}>
              </Text>
            </View>
          </TouchableOpacity>
        )} 
        </View>
        <Text style={{ marginBottom:-20,marginTop:20, marginLeft:-10,fontSize: 15, color: '#000000', fontFamily:fontType['Pjs-Bold'],  }}>Masukkan Deskripsi</Text>
        <View style={styles.containerFormDeskripsi}>     
             <View style={styles.itemForm}>
             <Note style={{marginLeft:10, marginRight:10,  marginTop:-4}}color={colors.grey()} variant="Linear" size={20}/>
                <TextInput
                    placeholder="Deskripsi"
                    value={DataBarang.description}
                    onChangeText={(text) => handleChange("deskripsi", text)}
                    placeholderTextColor={colors.grey(0.6)}
                    multiline
                    style={{color: 'black', fontSize:15, marginTop:-5, width:200,}}
                />
             </View>
        </View>
        <TouchableOpacity
        onPress={handleUpdate}>
        <View style={styles.containerButton}>
          <Text style={{marginLeft: -5, marginBottom:10, marginTop:-15, fontSize: 15, color: '#000000', fontFamily:fontType['Pjs-Bold'] }} >Submit</Text>
          <TransmitSquare style={{  marginTop:-15, marginLeft:60, }} color={colors.black()} variant="Linear" size={30}/>
        </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View> 
  );
};
export default EditData;
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
  gambarBarang:{
    borderRadius:20,
    width: '100%',
    height: '50%',
    marginLeft:2,
  },
  containerButton:{
    marginTop:40,
    paddingTop:25,
    flexDirection: 'row',
    backgroundColor: '#FCBF1E',
    justifyContent:'space-evenly',
    margin:5,
    marginLeft:35,
    borderRadius: 20,
     height: 50,
    width:200,
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
  containerForm:{
    marginLeft:-15,
    marginTop:30,
    paddingRight:5,
    backgroundColor: '#4CBED8',    
    borderRadius: 20,
    height: 50,
    width:300,
  },
  containerFormDeskripsi:{
    marginLeft:-15,
    marginTop:30,
    paddingRight:5,
    backgroundColor: '#4CBED8',    
    borderRadius: 20,
    height: 200,
    width:300,
  },
  itemForm:{
    flexDirection:"row",
    flex:1,
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    borderRadius: 20,
    padding:5,
  },
  containerFormGambar:{
    marginLeft:-15,
    marginTop:30,
    paddingRight:5,
    backgroundColor: '#4CBED8',    
    borderRadius: 20,
    height: 250,
    width:300,
  },
  itemFormGambar:{
    flexDirection:"row",
    flex:1,
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    borderRadius: 20,
    padding:5,
  },
})

