import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./assets/nubank-logo-branco.png')}></Image>
      </View>

      <View style={styles.corpo}>

        <Text style={styles.user}>Olá, Felipe Melo</Text>

        <TextInput style={styles.procurar} placeholder='Procurar...' placeholderTextColor='#fff'></TextInput>

        <View style={styles.cartao}>
          <Text style={styles.tituloCard}>Cartão de crédito</Text>
          <Text>Fatura</Text>
          <Text style={styles.valorCartao}>R$ 1.500,00</Text>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.nomeBtn}>Pagar fatura</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.conta}>
          <Text style={styles.tituloCard}>Conta</Text>
          <Text>Saldo disponivel</Text>
          <Text style={styles.valorConta}>R$ 300,00</Text>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.nomeBtn}>Transferir</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnCartao}>
            <Text style={styles.meusCartoes}>Meus cartões</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#8b03bb',
    paddingTop: 80
  },
  header:{
    alignItems: 'center'
  },
  corpo:{
    padding: 30, 
  },
  logo: {
    width: 120,
    height: 50
  },
  user:{
    color: '#fff',
    marginBottom: 30,
    fontSize: 22
  },
  procurar: {
    marginBottom: 30,
    borderRadius: 10,
    height: 50,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: '#fff',
    
  },  
  cartao: {
    backgroundColor: '#fff',
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
  },
  conta: {
    backgroundColor: '#fff',
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
  },
  tituloCard: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  valorCartao: {
    color: '#0099cc',
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:10
  },
  valorConta: {
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:10
    
  },
  botao: {
    borderRadius: 25,
    padding: 8,
    width: 150,
    alignItems: 'center',
    borderWidth: 1,
    borderColor:  '#8b03bb'
  },
  nomeBtn: {
    color: '#8b03bb',
    fontSize: 20
  },
  btnCartao: {
    backgroundColor: '#0099cc',
    borderRadius: 30,
    alignItems: 'center',
    padding: 15
  },
  meusCartoes: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }

});