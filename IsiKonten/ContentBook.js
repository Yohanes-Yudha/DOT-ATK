import {useState, React} from 'react';
import { Modal, Alert,TouchableOpacity, Button, ScrollView, StyleSheet,  Text, TextInput, View, Image, ImageBackground} from 'react-native';
import {Notification, Receipt21, Clock, Message, SearchNormal1, RulerPen, Category, Book1, TicketDiscount, BagCross, CloseCircle} from 'iconsax-react-native';
import { fontType, colors } from '../src/theme';
const Book = () => {
  let pic ={
    arraygambar: [
      { uri: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/10/20/71e10c77-669c-41db-99a8-db67d4803ecf.jpg'},
      { uri: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/4/7/b96c878e-6922-4b87-8950-473c4e3f063e.jpg' },
      { uri: 'https://img.freepik.com/free-photo/school-tools-with-calculator_1101-345.jpg?size=626&ext=jpg&ga=GA1.1.2121603606.1697641198&semt=ais' },
      { uri: 'https://img.freepik.com/free-vector/set-vector-sharpened-pencils-various-lengths-with-rubber-sharpener-pencil-shavings_1441-352.jpg?size=626&ext=jpg&ga=GA1.1.2121603606.1697641198&semt=sph'},
      { uri: 'https://www.sultan.co.id/wp-content/uploads/2019/09/paper_guide-1200x675.jpg'},
      { uri: 'https://img.id.my-best.com/content_section/choice_component/sub_contents/a09635528fb9ee0f00fd2e9a300a4b65.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=2afaaaa735b7e712dcf836ebcec49a65'},
    ]
  }
  return (         
      <ScrollView> 
        <View style={[styles.containerBarang, {backgroundColor: '#FFA31A'}]}>
            <View style={styles.barang}>
            <View style={{flexDirection:'column', justifyContent:'space-between',marginTop:-25, marginBottom:-20}}>
                  <Text style={{ marginTop:10, fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Buku</Text>
                  <Text style={{ marginBottom:20,fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Sidu</Text>
                  <Text style={{ fontSize: 15, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Rp.10.000</Text>
            </View>
            <Image style={styles.gambarBarang} source={pic.arraygambar[1]} />
            </View>
        </View>
        <View style={styles.containerBarang}>
              <View style={styles.barang}>
              <View style={{flexDirection:'column', justifyContent:'space-between',marginTop:-25, marginBottom:-20}}>
                  <Text style={{ marginTop:10, fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Kertas</Text>
                  <Text style={{ marginBottom:20,fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Buffalo</Text>
                  <Text style={{ fontSize: 15, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Rp.10.000</Text>
                </View>
                <Image style={styles.gambarBarang} source={pic.arraygambar[4]} />
              </View>
              </View>
        <View style={[styles.containerBarang, {backgroundColor: '#FFA31A'}]}>
              <View style={styles.barang}>
              <View style={{flexDirection:'column', justifyContent:'space-between',marginTop:-25, marginBottom:-20}}>
                  <Text style={{ marginTop:10, fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Buku</Text>
                  <Text style={{ marginBottom:20,fontSize: 20, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>1 pak</Text>
                  <Text style={{ fontSize: 15, color: '#000000',fontFamily:fontType['Pjs-Bold'] }}>Rp.30.000</Text>
              </View>
              <Image style={styles.gambarBarang} source={pic.arraygambar[0]} />
              </View>
        </View>
        <View style={styles.containerBarang}>
           <View style={styles.barang}>
             <Text style={{ fontSize: 20, color: '#000000' }}>Rp.30.000</Text>
             <Image style={styles.gambarBarang} source={pic.arraygambar[4]} />
           </View>
        </View>    
      </ScrollView>
  );
};

export default Book;
const styles = StyleSheet.create({
    container2:{
        top:200,
        position:'absolute',
        marginTop:50,
        backgroundColor:'#F0EEF0',
        width: 400,
        height: 550,
        alignItems:'center',
        borderRadius:50,
      },
      containerBarang:{
   
        marginLeft:10,
        marginTop:30,
        // paddingLeft:5,
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
        width: '60%',
        height: '100%',
        marginLeft:10,
      },
});