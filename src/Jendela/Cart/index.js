import {useState, React} from 'react';
import { Modal, Alert,TouchableOpacity, Button, ScrollView, StyleSheet,  Text, TextInput, View, Image, ImageBackground} from 'react-native';
import {Brush2, NoteText, ShoppingCart,Back,Bag,Notification, Receipt21, Clock, Message, SearchNormal1, RulerPen, Category, Book1, TicketDiscount, BagCross, CloseCircle, CardTick, Trash, ElementPlus, Minus, Add} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import {ContentBook, ContentRuler } from '../../IsiKonten';
export default function Cart() {
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
  const [count, setCount] = useState(0);
  const handlePlusClick = () => {
    setCount(count + 1);
  };
  const handleMinusClick = () => {
    if (count > 1)
    setCount(count - 1);
  };
  return (
    
    <View style={styles.container}>
          <View style={styles.tempatlogo}>
          <Back style={{ marginLeft: 10, marginTop:5, }} color={colors.white()} variant="Linear" size={40}/> 
            <Text style={{marginLeft: -20, fontFamily:fontType['Pjs-Bold'],color:'#FFFFFF', fontSize:25}} >Shopping Cart</Text>
          <Bag style={{ marginLeft: -20, marginRight:15, marginTop:5, }} color={colors.white()} variant="Linear" size={40}/>          
        </View>
    <View style={styles.container2}> 
        <ScrollView> 
        <View style={[styles.containerBarang, {backgroundColor: '#FFA31A'}]}>
            <View style={styles.barang}>
            <Image style={styles.gambarBarang} source={pic.arraygambar[1]} />
            <View style={{ flexDirection:'column', justifyContent:'space-between',marginTop:-25, marginBottom:-20,}}>
                  <Text style={{ marginLeft:-10, marginTop:10, fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Buku</Text>
                  <Text style={{ marginLeft:-10,marginBottom:20,fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Sidu</Text>
                  <Text style={{ marginLeft:-10,marginBottom:20,fontSize: 15, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Rp. 10.000</Text>
            </View>
            <View style={{ flexDirection:'column', justifyContent:'space-between',marginTop:-25, marginBottom:-20,}}>
            <View style={styles.plusMinus}>
                <TouchableOpacity onPress={handleMinusClick}>
                <Minus style={{marginTop:5, marginLeft:1,  }} color={colors.black()} variant="Linear" size={20}/>
                </TouchableOpacity>
                <View style={styles.addItem}>
                    <Text style={{ fontSize: 15, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>{count}</Text>
                </View>
                <TouchableOpacity onPress={handlePlusClick}>
                <Add style={{marginTop:5, marginLeft:3,  }} color={colors.black()} variant="Linear" size={20}/>      
                </TouchableOpacity>
            </View>
            <Trash style={{ marginLeft:40,  marginTop:50, }} color={colors.black()} variant="Linear" size={30}/> 
            </View>
            </View>
        </View>
        <View style={styles.containerBarang}>
        <View style={styles.barang}>
            <Image style={styles.gambarBarang} source={pic.arraygambar[4]} />
            <View style={{ flexDirection:'column', justifyContent:'space-between',marginTop:-25, marginBottom:-20,}}>
                  <Text style={{ marginLeft:-10, marginTop:10, fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Kertas</Text>
                  <Text style={{ marginLeft:-10,marginBottom:20,fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Buffalo</Text>
                  <Text style={{ marginLeft:-10,marginBottom:20,fontSize: 15, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Rp. 10.000</Text>
                  
            </View>
            <View style={{ flexDirection:'column', justifyContent:'space-between',marginTop:-25, marginBottom:-20,}}>
            <View style={styles.plusMinus}>
                <TouchableOpacity onPress={handleMinusClick}>
                <Minus style={{marginTop:5, marginLeft:1,  }} color={colors.black()} variant="Linear" size={20}/>
                </TouchableOpacity>
                <View style={styles.addItem}>
                    <Text style={{ fontSize: 15, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>{count}</Text>
                </View>
                <TouchableOpacity onPress={handlePlusClick}>
                <Add style={{marginTop:5, marginLeft:3,  }} color={colors.black()} variant="Linear" size={20}/>      
                </TouchableOpacity>
            </View>
            <Trash style={{ marginLeft:40,  marginTop:50, }} color={colors.black()} variant="Linear" size={30}/> 
            </View>
            </View>
        </View>
        <View style={[styles.containerBarang, {backgroundColor: '#FFA31A'}]}>
        <View style={styles.barang}>
            <Image style={styles.gambarBarang} source={pic.arraygambar[3]} />
            <View style={{ flexDirection:'column', justifyContent:'space-between',marginTop:-25, marginBottom:-20,}}>
                  <Text style={{ marginLeft:-10, marginTop:10, fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Pensil</Text>
                  <Text style={{ marginLeft:-10,marginBottom:20,fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Joyko</Text>
                  <Text style={{ marginLeft:-10,marginBottom:20,fontSize: 15, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Rp. 5.000</Text>
                  
            </View>
            <View style={{ flexDirection:'column', justifyContent:'space-between',marginTop:-25, marginBottom:-20,}}>
            <View style={styles.plusMinus}>
                <TouchableOpacity onPress={handleMinusClick}>
                <Minus style={{marginTop:5, marginLeft:1,  }} color={colors.black()} variant="Linear" size={20}/>
                </TouchableOpacity>
                <View style={styles.addItem}>
                    <Text style={{ fontSize: 15, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>{count}</Text>
                </View>
                <TouchableOpacity onPress={handlePlusClick}>
                <Add style={{marginTop:5, marginLeft:3,  }} color={colors.black()} variant="Linear" size={20}/>      
                </TouchableOpacity>
            </View>
            <Trash style={{ marginLeft:40,  marginTop:50, }} color={colors.black()} variant="Linear" size={30}/> 
            </View>
            </View>
        </View>
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
            top:70,
            position:'absolute',
            marginTop:20,
            backgroundColor:'#F0EEF0',
            width: 360,
            height: 600,
            alignItems:'center',
            borderRadius:20,
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
          
          containerBarang:{
            marginTop:30,
            // paddingLeft:5,
            paddingRight:5,
            backgroundColor: '#4CBED8',    
            borderRadius: 20,
            height: 150,
            width:350,
          
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
            width: '50%',
            height: '100%',
            marginLeft:-3,
          },
          plusMinus:{
            marginTop:30,
            flexDirection: 'row',
            backgroundColor: '#cbd1ce',
            marginBottom:-10,
            borderRadius: 10,
            height: 35,
            width:70,
          },
          addItem:{
            marginLeft:2,
            marginTop:3,
            // backgroundColor:'red',
            height: 30,
            width:20,
            alignItems:'center',
          }
})

