import {useState, React} from 'react';
import { Modal, Alert,TouchableOpacity, Button, ScrollView, StyleSheet,  Text, TextInput, View, Image, ImageBackground} from 'react-native';
import {Notification, Receipt21, Clock, Message, SearchNormal1, RulerPen, Category, Book1, TicketDiscount, BagCross, CloseCircle} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
export default function App() {
    return (
  <View style={styles.container}>
    <View style={styles.container2}> 
          <View style={styles.tempatlogo}>
            <Image style={styles.logo} source={require('./src/assets/image/ATK.png')} />
            <View style={styles.search}>
            <SearchNormal1 style={{padding:12, margin:5}}color={colors.black()} variant="Linear" size={20} /> 
            <TextInput style={{fontSize:15, padding:5, width:200, }} placeholder='cari'></TextInput>
            </View>
        <Notification style={{marginLeft:-20}}color={colors.black()} variant="Linear" size={50} />
        </View>
        <View style={styles.large}>
          <ScrollView horizontal>
          <View style={styles.small} >
            <Image style={styles.gambar} source={pic.arraygambar[0]} />
          </View>
          <View style={styles.small} >
            <Image style={styles.gambar} source={pic.arraygambar[1]} />
          </View>
          <View style={styles.small} >
            <Image style={styles.gambar} source={pic.arraygambar[2]} />
          </View>
          </ScrollView>
        </View>      
    </View>
        <View style={styles.containerCategories} >            
            <TicketDiscount style={{marginLeft:10,}}color={colors.black()} variant="Linear" size={35}/>
            <Book1 color={colors.black()} variant="Linear" size={35}/>
            <RulerPen color={colors.black()} variant="Linear" size={35}/>
            <Category style={{marginRight:10,}} color={colors.black()} variant="Linear" size={34}/>
          </View> 
    
    <View style={styles.card}> 
      <View style={styles.containerList}>
        <ScrollView> 
              <View style={styles.barang} >
                <Text style={{fontSize:20, color:'#000000',}} >Rp.15.000</Text>
                <Image style={styles.gambarBarang} source={pic.arraygambar[3]} />
              </View>
              <View style={styles.barang} >
                <Text style={{fontSize:20, color:'#000000',}} >Rp.10.000</Text>
                <Image style={styles.gambarBarang} source={pic.arraygambar[4]} />
              </View>
              <View style={styles.barang} >
                <Text style={{fontSize:20, color:'#000000',}} >Rp.2.000</Text>
                <Image style={styles.gambarBarang} source={pic.arraygambar[5]} />
              </View>
        </ScrollView>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#8AF3F8',
    alignItems:'center',
  
  },
  container2:{
    backgroundColor:'#54E1E8',
    width: 400,
    height: 370,
    alignItems:'center',
    borderRadius:10,
  },
  tempatlogo: {
    width: 370,
    height: 70,
    padding:5,
    backgroundColor: '#FFFFFF',
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius: 10,
    alignItems:'center',
  },
  search:{
    flexDirection: 'row',
    backgroundColor: '#cbd1ce',
    margin:15,
    marginLeft:-15,
    borderRadius: 20,
    height: 35,
    width:270,
  },
  logo:{
    marginLeft:-30,
    borderRadius:350,
    width: '25%',
    height: '100%',
  },
  gambar:{
    borderRadius:20,
    width: '100%',
    height: '100%',
  },
  large: {
    width: 350,
    height: 250,
    margin:15,
    padding:10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    
  },
  small: {
    width: 300,
    height: 220,
    marginTop:5,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  card:{ 
    backgroundColor:'#FFFFFF',
    width: 310,
    height: 310,
    borderRadius: 10,
  },
  containerCategories:{
    flexDirection: 'row',
    backgroundColor: '#FFFFFF', 
    marginTop:-15,
    margin:10,
    marginLeft:5,
    justifyContent:'space-between',
    borderRadius: 20,
    height: 35,
    width:"93%",
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
  small2: {
    width: 300,
    height: 400,
    marginTop: 5,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  barang:{
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius: 20,
    height: 150,
    width:'100%',
    padding:5,
  },
  gambarBarang:{
    borderRadius:20,
    width: '70%',
    height: '100%',
    marginLeft:10,
  },
  modal:{
    backgroundColor:'#FFFFFF',
    width: 300,
    height: 370,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginLeft:50,
    
  },
  modalContainer:{
    justifyContent:'center',
    alignItems:'center',
    
  },
  closeModal:{
    position: 'absolute',
    top: 10, 
    right: 10, 
    borderRadius: 20, 
    padding: 10,
    marginHorizontal:-10,
    marginVertical:-10,
  }
})