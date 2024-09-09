import { StyleSheet } from "react-native";
import { colors } from "../../styles"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  input: {
    width: '90%',
    paddingVertical: 15,
    height: 55,
    marginTop: 17,
    borderWidth: 1,
    borderColor: '#a1a1a1',
    borderRadius: 19,
    fontSize: 16, 
    paddingLeft: 10, 
    color: '#333', 
    fontStyle: 'italic' 
  },

  inputSenha: {
    width: '85%',
    fontSize: 16,
    color: '#333'
  },

  inputSenhaGeral:{
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '90%',
    paddingVertical: 15,
    height: 55,
    marginTop: 17,
    borderWidth: 1,
    borderColor: '#a1a1a1',
    borderRadius: 19,
    fontSize: 16, 
    paddingLeft: 10, 
    color: '#333'
    
  },

  containerHeader: {
    flex: 0.5,
    marginTop: 120,
    marginBottom: '8%',
    paddingStart: '5%',
    alignItems: 'center',

  },

  principalTitle: {
    fontSize: 29,
    fontWeight: 'bold',
    color: "#FFF",
    justifyContent: "center"


  },
  containerForm: {
    flex: 3,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: '5%',
    paddingStart: '5%',
    paddingEnd: '5%',
    alignItems: 'center',

  },


  button: {
    width: '90%',
    backgroundColor: colors.background,
    borderRadius: 19,
    paddingVertical: 15,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold',

  },
  buttonEsqueceuSenha: {
    marginTop: 14,
    alignSelf: 'center',
    left: -3 
  },
  esqueceuSenha: {
    color: "#a1a1a1",

  },
  OlhoFiltro: {
    width: 20,
    height: 20,
    left: 10

  },

  buttonCadastro: {
    marginTop: 14,
    alignSelf: 'center',
  },

  containerLogo:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    realizeMode:'contain',
    width: '100%',
           
},
Logo:{
  width: 250,
  height: 250,
  top: -40
},

});