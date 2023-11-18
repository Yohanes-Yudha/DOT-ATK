import {useState, React} from 'react';
import { Modal, Alert,TouchableOpacity, Button, ScrollView, StyleSheet,  Text, TextInput, View, Image, ImageBackground} from 'react-native';
import {Brush2,Notification, Receipt21, Clock, Message, SearchNormal1, RulerPen, Category, Book1, TicketDiscount, BagCross, CloseCircle, Paperclip, Note, Note1, NoteSquare, Notepad2, Notepad, NoteText} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import {ContentBook, ContentRuler } from '../../IsiKonten';
export default function Home() {
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
  const [isBookClicked, setIsBookClicked] = useState(false);
  const handleBookClick = () => {
    setIsBookClicked(true);
    setIsRulerClicked(false);
  };
  const[isRulerClicked, setIsRulerClicked]= useState(false);
  const handleRulerClick = () => {
    setIsRulerClicked(true);
    setIsBookClicked(false);
  };
  return (
  <View style={styles.container}>
          <View style={styles.tempatlogo}>
            <Image style={styles.logo} source={require('../../assets/image/pulpenyudans.png')} />
          <Notification style={{marginRight:20,  }} color={colors.white()} variant="Linear" size={40}/>         
        </View>
        <View style={styles.search}>
            <SearchNormal1 style={{marginLeft:20, marginTop:-4}}color={colors.white()} variant="Linear" size={20} /> 
            <TextInput style={{fontSize:15, marginTop:-10, marginLeft:20, padding:1, width:200, }} placeholder='cari'></TextInput>
            </View>        
          <View style={styles.containerCategories} >            
          <ScrollView horizontal>
            <TicketDiscount style={{ marginRight:20}}color={colors.white()} variant="Linear" size={35}/>
            <TouchableOpacity onPress={handleBookClick}>
            <Book1 style={{marginRight:20,}}color={colors.white()} variant="Linear" size={35}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRulerClick}>
            <RulerPen style={{marginRight:20,}} color={colors.white()} variant="Linear" size={35}/>
            </TouchableOpacity>
            <Brush2 style={{marginRight:20,}} color={colors.white()} variant="Linear" size={34}/>
            <NoteText style={{marginRight:20,}} color={colors.white()} variant="Linear" size={34}/>
            <Category style={{marginRight:20,}} color={colors.white()} variant="Linear" size={34}/>
            </ScrollView>
          </View> 
        <View style={styles.container2}> 
        {isRulerClicked && <ContentRuler/>}
        {isBookClicked && <ContentBook/>}
        </View>
        {/* <View style={styles.navigation}></View> */}

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
    top:200,
    position:'absolute',
    marginTop:50,
    backgroundColor:'#F0EEF0',
    width: 380,
    height: 450,
    alignItems:'center',
    borderRadius:30,
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
    marginTop:10,
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
    // backgroundColor:'#FFFFFF',
    width:"90%",
  },
  containerBarang:{
    marginLeft:10,
    marginTop:-30,
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
  navigation:{
    top:450,
    backgroundColor:'#F0EEF0',
    width: 400,
    height: 50,
  }
})

