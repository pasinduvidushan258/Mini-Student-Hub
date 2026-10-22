import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital ID Card</Text>
      
      {/* Updated to a relative path */}
      <Image 
        source={require('D:\\Users\\weerasi-ps22142\\Desktop\\Mini Student Hub\\StudentHub\\assets\\images\\user.png')} 
        style={styles.image} 
      />
      
      <Text style={styles.text}>Name: W.A.P.V.Weerasingha</Text>
      <Text style={styles.text}>Student ID: PS/2022/142</Text>
      <Text style={styles.text}>Course: Mobile Application Development</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    alignItems: 'center' 
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 100, 
    marginTop: 40 
  },
  text: { 
    fontSize: 18, 
    marginBottom: 10 
  },
  image: { 
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
    marginBottom: 20 
  },
});
