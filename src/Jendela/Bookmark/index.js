import  React, {useRef, useEffect, useState} from 'react';
import { Animated, Modal, Alert,TouchableOpacity, Button, ScrollView, StyleSheet,  Text, TextInput, View, Image, ImageBackground} from 'react-native';
import { ShoppingCart,Back,Bag,Notification, Receipt21, Clock, Message, SearchNormal1, RulerPen, Category, Book1, TicketDiscount, BagCross, CloseCircle, Star} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import {ContentBook, ContentRuler } from '../../IsiKonten';
export default function Bookmark() {
   const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    setIsPageLoaded(true); // Setelah komponen dimuat, ubah kondisi menjadi true

    return () => {
      // Cleanup function saat komponen di-unmount
      setIsPageLoaded(false); // Saat navigasi ke halaman lain, ubah kondisi menjadi false
    };
  }, []);

  // Gunakan kondisi isPageLoaded dalam pengaturan animasi atau komponen yang ingin Anda kendalikan
  useEffect(() => {
    if (isPageLoaded) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isPageLoaded]);
  let pic ={
    arraygambar: [
      { uri: 'https://img.freepik.com/premium-photo/school-equipment-table_200402-857.jpg?size=626&ext=jpg&ga=GA1.1.2121603606.1697641198&semt=ais'},
      { uri: 'https://www.padangexpo.com/wp-content/uploads/2023/06/Alat-Tulis-Kantor-Terbaik-696x462.jpg' },
      { uri: 'https://img.freepik.com/free-photo/school-tools-with-calculator_1101-345.jpg?size=626&ext=jpg&ga=GA1.1.2121603606.1697641198&semt=ais' },
      { uri: 'https://img.freepik.com/free-vector/set-vector-sharpened-pencils-various-lengths-with-rubber-sharpener-pencil-shavings_1441-352.jpg?size=626&ext=jpg&ga=GA1.1.2121603606.1697641198&semt=sph'},
      { uri: 'https://www.sultan.co.id/wp-content/uploads/2019/09/paper_guide-1200x675.jpg'},
      { uri: 'https://img.id.my-best.com/content_section/choice_component/sub_contents/a09635528fb9ee0f00fd2e9a300a4b65.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=2afaaaa735b7e712dcf836ebcec49a65'},
    ]
  }
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 50);
  const containerY = diffClampY.interpolate({
    inputRange: [0, 40],
    outputRange: [0, -40],
  });
  
  return (
  <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
    <View style={styles.tempatlogo}>
      <Back style={{ marginLeft: 10, marginTop:5, }} color={colors.white()} variant="Linear" size={40}/> 
            
            <Text style={{ marginLeft: -20, fontFamily: fontType['Pjs-Bold'], color: '#FFFFFF', fontSize: 25,  }}>Bookmark</Text>
      <Star style={{ marginLeft: -20, marginRight:15, marginTop:5, }} color={colors.white()} variant="Linear" size={40}/>          
    </View>
    <Animated.View style={[styles.container2, {transform:[{translateY:containerY}]}]}>
    <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
       >
    <View style={styles.containerBarang}>
              <View style={styles.barang}>
                <Image style={styles.gambarBarang} source={pic.arraygambar[1]} />
                <View style={styles.textContainer}>
                    <Text style={{ marginLeft:10, fontSize: 15, color: '#000000' ,fontFamily:fontType['Pjs-Bold']}}>Satu Set Buku + Pensil</Text>
                    <Text style={{ marginLeft:10, fontSize: 10, color: '#000000' ,fontFamily:fontType['Pjs-ExtraBold']}}>Rp.30.000</Text>
                </View>
                <View style={styles.containerButton}>
                    <ShoppingCart style={{ marginTop:-15, marginLeft:1, }} color={colors.black()} variant="Linear" size={30}/>
                </View>
              </View>
    </View>
    <View style={[styles.containerBarang, {backgroundColor:'#FFA31A'}]}>
              <View style={styles.barang}>
                <Image style={styles.gambarBarang} source={pic.arraygambar[3]} />
                <View style={styles.textContainer}>
                    <Text style={{ marginLeft:10, fontSize: 15, color: '#000000' ,fontFamily:fontType['Pjs-Bold']}}>Satu Set Pensil</Text>
                    <Text style={{ marginLeft:10, fontSize: 10, color: '#000000' ,fontFamily:fontType['Pjs-ExtraBold']}}>Rp.20.000</Text>
                </View>
                <View style={styles.containerButton}>
                    <ShoppingCart style={{ marginTop:-15, marginLeft:1, }} color={colors.black()} variant="Linear" size={30}/>
                </View>
              </View>
    </View>
    <View style={[styles.containerBarang]}>
              <View style={styles.barang}>
                <Image style={styles.gambarBarang} source={pic.arraygambar[4]} />
                <View style={styles.textContainer}>
                <Text style={{ marginLeft:10, fontSize: 15, color: '#000000' ,fontFamily:fontType['Pjs-Bold']}}>Satu Set Kertas</Text>
                <Text style={{ marginLeft:10, fontSize: 10, color: '#000000' ,fontFamily:fontType['Pjs-ExtraBold']}}>Rp.10.000</Text>
                </View>
                <View style={styles.containerButton}>
                    <ShoppingCart style={{ marginTop:-15, marginLeft:1, }} color={colors.black()} variant="Linear" size={30}/>
                </View>
              </View>
    </View>
    <View style={styles.containerBarang}>
              <View style={styles.barang}>
                <Image style={styles.gambarBarang} source={pic.arraygambar[4]} />
                <View style={styles.textContainer}>
                <Text style={{ marginLeft:10, fontSize: 15, color: '#000000' ,fontFamily:fontType['Pjs-Bold']}}>Satu Set Buku</Text>
                <Text style={{ marginLeft:10, fontSize: 10, color: '#000000' ,fontFamily:fontType['Pjs-ExtraBold']}}>Rp.30.000</Text>
                </View>
                <View style={styles.containerButton}>
                    <ShoppingCart style={{ marginTop:-15, marginLeft:1, }} color={colors.black()} variant="Linear" size={30}/>
                </View>
              </View>
    </View>
    <View style={styles.containerBarang}>
              <View style={styles.barang}>
                <Image style={styles.gambarBarang} source={pic.arraygambar[4]} />
                <View style={styles.textContainer}>
                <Text style={{ marginLeft:10, fontSize: 15, color: '#000000' ,fontFamily:fontType['Pjs-Bold']}}>Satu Set Buku</Text>
                <Text style={{ marginLeft:10, fontSize: 10, color: '#000000' ,fontFamily:fontType['Pjs-ExtraBold']}}>Rp.30.000</Text>
                </View>
                <View style={styles.containerButton}>
                    <ShoppingCart style={{ marginTop:-15, marginLeft:1, }} color={colors.black()} variant="Linear" size={30}/>
                </View>
              </View>
    </View>
    </Animated.ScrollView>
    </Animated.View>  
  </Animated.View> 
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#035AA6',
    alignItems:'center',  
  },
  header: {
    paddingHorizontal: 24,
    
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    
  },
  container2:{
    
    zIndex: 500,
    top:70,
    position:'absolute',
    marginTop:50,
    backgroundColor:'#F0EEF0',
    width: 360,
    height: 600,
    alignItems:'center',
    borderRadius:20,
  },
  containerDeskripsi:{
    paddingTop:20,
    margin:70,
    marginTop:25,
    borderRadius: 30,
    height: 190,
    width:'90%',
  },
  containerButton:{
    paddingTop:25,
    flexDirection: 'row',
    backgroundColor: '#FCBF1E',
    justifyContent:'space-evenly',
    margin:5,
    marginLeft:10,
    borderRadius: 20,
    height: 50,
    width:50,
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
  logo:{
    width: '25%',
    height: '100%',
  },
  gambar:{
    borderRadius:20,
    width: '100%',
    height: '100%',
  },
  containerCategories:{
    flexDirection: 'row',
    marginTop:45,
    margin:30,
    marginBottom:35,
    justifyContent:'space-between',
    paddingRight:20,
    paddingLeft:20,
    borderRadius: 30,
    height: 35,
    width:"80%",
  },
  containerBarang:{
    marginLeft:10,
    marginTop:30,
    paddingRight:5,
    backgroundColor: '#4CBED8',    
    borderRadius: 20,
    height: 150,
    width:300,
  },
  barang:{
    marginRight:10,
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius: 20,
    height: 250,
    width:'100%',
    padding:5,
  },
  gambarBarang:{
    borderRadius:20,
    width: '40%',
    height: '100%',
    marginLeft:10,
  },
  textContainer:{
    marginLeft:-30,
    marginRight:-40,
    padding:-5,
    flexDirection: 'column',
    justifyContent:'space-between',
    width:100,
    gap:10,
  },
})

