import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Animated, StatusBar } from "react-native";
import { styles } from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebaseConfig"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { TextInputMask } from "react-native-masked-text";
import { RadioInput } from "../../components/radio-input";
import * as Animatable from 'react-native-animatable'
import { Dropdown } from "react-native-element-dropdown";

export function Cadastro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const [nome, setNome] = useState("");
    const [dataNasc, setDataNasc] = useState("");

    const [genero, setGenero] = useState("");
    const [itemsGenero, setItemsGenero] =
        useState([
            { label: "Mulher Cisgênero", value: "mulhercis" },
            { label: "Homem Cisgênero", value: "homemcis" },
            { label: "Mulher Transgênero", value: "mulhertrans" },
            { label: "Homem Transgênero", value: "homemtrans" },
            { label: "Não-Binário", value: "naobinario" },
            { label: "Agênero", value: "agenero" },

        ]);


    const [cor, setCor] = useState("");
    const [itemsCor, setItemsCor] =
        useState([
            { label: "Branca", value: "branca" },
            { label: "Preta", value: "preta" },
            { label: "Parda", value: "parda" },
            { label: "Amarela", value: "amarela" },
            { label: "Indígena", value: "indigena" }

        ]);

    const [escolaridade, setEscolaridade] = useState("");
    const [itemsEscolaridade, setItemsEscolaridade] =
        useState([
            { label: "Ensino Fundamental Incompleto", value: "fundamental_incompleto" },
            { label: "Ensino Fundamental Completo", value: "fundamental_completo" },
            { label: "Ensino Médio Incompleto", value: "medio_incompleto" },
            { label: "Ensino Médio Completo", value: "medio_completo" },
            { label: "Ensino Superior Incompleto", value: "superior_incompleto" },
            { label: "Ensino Superior Completo", value: "superior_completo" }
        ]);

    const [cidade, setCidade] = useState("");
    const [itemsCidade, setItemsCidade] =
        useState([  { label: "Águas Claras", value: "Águas Claras" },  { label: "Brazlândia", value: "Brazlândia" },  { label: "Candangolândia", value: "Candangolândia" },  { label: "Ceilândia", value: "Ceilândia" },  { label: "Cruzeiro", value: "Cruzeiro" },  { label: "Fercal", value: "Fercal" },  { label: "Gama", value: "Gama" },  { label: "Guará", value: "Guará" },  { label: "Itapoã", value: "Itapoã" },  { label: "Jardim Botânico", value: "Jardim Botânico" },  { label: "Lago Norte", value: "Lago Norte" },  { label: "Lago Sul", value: "Lago Sul" },  { label: "Núcleo Bandeirante", value: "Núcleo Bandeirante" },  { label: "Paranoá", value: "Paranoá" },  { label: "Park Way", value: "Park Way" },  { label: "Planaltina", value: "Planaltina" },  { label: "Recanto das Emas", value: "Recanto das Emas" },  { label: "Riacho Fundo", value: "Riacho Fundo" },  { label: "Riacho Fundo II", value: "Riacho Fundo II" },  { label: "Samambaia", value: "Samambaia" },  { label: "Santa Maria", value: "Santa Maria" },  { label: "São Sebastião", value: "São Sebastião" },  { label: "Sobradinho", value: "Sobradinho" },  { label: "Sobradinho II", value: "Sobradinho II" },  { label: "Sudoeste/Octogonal", value: "Sudoeste/Octogonal" },  { label: "Taguatinga", value: "Taguatinga" },  { label: "Varjão", value: "Varjão" },  { label: "Vicente Pires", value: "Vicente Pires" }]
        );
    
    const [area, setArea] = useState("");
    const [itemsArea, setItemsArea] =
        useState([
            { label: "EDU", value: "EDU" },
            { label: "CVT", value: "CVT" },
            { label: "EXATAS", value: "EXATAS" },
            { label: "CSAT", value: "CSAT" },
            { label: "CSH", value: "CSH" }
        ]);
   

    const [CEP, setCEP] = useState("");
    const [selected, setSelected] = useState(0);
    const [typeUser, setTypeUser] = useState("");
    const [matricula, setMatricula] = useState("");
    const [CPF, setCPF] = useState("");
    const [instituicao, setInstituicao] = useState("");

    const [screen, setScreen] = useState(0);

    //Seleciona a colecao no banco de dados
    const userCollectionRef = collection(db, "users");

    //Cadastra as informacoes do usuario
    function registerFirebase() {
        createUserWithEmailAndPassword(auth, email, password)
            .then(value => {

                const uid = value.user.uid;
                addDoc(userCollectionRef, { uid, email, password, nome, dataNasc, genero, cor, escolaridade, cidade, CEP, typeUser, matricula, area, CPF, instituicao });

                alert("Cadastro realizado com sucesso!");
            })
            .catch(error => console.log(error, (alert(error.message))));
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" delay={500} style={styles.containerHeader}>
                <View style={styles.containerLogo} >
                    <Animatable.Image style={styles.Logo}
                        source={require('../../assets/logo_fup.jpg')} 
                        animation="fadeInDown"
                        delay={600}
                    />

                </View>
                <Text style={styles.principalTitle}>Cadastre-se</Text>

            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>

                {screen == 0 &&
                <>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={email => setEmail(email)}
                    value={email}                    
                />

                    <View style={styles.inputSenhaGeral}>

                        <TextInput
                            style={styles.inputSenha}
                            placeholder="Senha"
                            onChangeText={password => setPassword(password)}
                            value={password}
                            secureTextEntry={hidePass}
                        />
                        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                            {hidePass ? (
                                <Animatable.Image
                                    style={styles.OlhoFiltro}
                                    source={require('../../assets/eye-off.png')}
                                        
                                />
                            ) : (
                                <Animatable.Image
                                        style={styles.OlhoFiltro}
                                        source={require('../../assets/eye.png')}
                                        
                                />
                            )}
                        </TouchableOpacity>
                    </View>           

                    <TextInput
                        style={styles.input}
                        placeholder="Nome Completo"
                        onChangeText={nome => setNome(nome)}
                        value={nome}
                    />

                    <TextInputMask
                        style={styles.input}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        placeholder="Data de Nascimento"
                        onChangeText={dataNasc => setDataNasc(dataNasc)}
                        value={dataNasc} />         

                    <TouchableOpacity onPress={() => {setScreen(screen+1)}} style={styles.button}>
                        <Text style={styles.buttonText}>Avançar</Text>
                    </TouchableOpacity>
                    </>
                }

                {screen == 1 && 
                <>
                    <Dropdown
                        style={styles.input}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={itemsGenero}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Gênero"
                        searchPlaceholder="Pesquisar..."
                        value={genero}
                        onChange={item => {
                            setGenero(item.value);
                        }}
                    /*renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    )} */
                    />   

                    <Dropdown
                        style={styles.input}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={itemsCor}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Cor"
                        searchPlaceholder="Pesquisar..."
                        value={cor}
                        onChange={item => {
                            setCor(item.value);
                        }}
                    />

                    <Dropdown
                        style={styles.input}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={itemsEscolaridade}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Grau de Escolaridade"
                        searchPlaceholder="Pesquisar..."
                        value={escolaridade}
                        onChange={item => {
                            setEscolaridade(item.value);
                        }}
                    />

                    <Dropdown
                        style={styles.input}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={itemsCidade}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Região Administrativa"
                        searchPlaceholder="Pesquisar..."
                        value={cidade}
                        onChange={item => {
                            setCidade(item.value);
                        }}
                    />

                    <TextInputMask
                        style={styles.input}
                        type={'custom'}
                        options={{
                            mask: '99999-999'
                        }}
                        placeholder="CEP"
                        onChangeText={CEP => setCEP(CEP)}
                        value={CEP} />

                    <TouchableOpacity onPress={() => {setScreen(screen+1)}} style={styles.button}>
                        <Text style={styles.buttonText}>Avançar</Text>
                    </TouchableOpacity>
                        
                </>
                }

                { screen == 2  && 
                <>
                     <View style={styles.radioContainer}>
                        <RadioInput
                            selected={selected}
                            options={['Público Geral', 'Gestor FUP', 'Gestor Escola Pública']}
                            horizontal={true}
                            onChangeSelect={(opt, index) => {
                                setSelected(index);
                                setTypeUser(opt);
                            }} />
                    </View>

                    {typeUser == "Gestor FUP" &&

                        <>
                            <TextInput
                                style={styles.input}
                                placeholder="Matrícula"
                                onChangeText={matricula => setMatricula(matricula)}
                                value={matricula}
                            />

                            <Dropdown
                                style={styles.input}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={itemsArea}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Área"
                                searchPlaceholder="Pesquisar..."
                                value={area}
                                onChange={item => {
                                    setArea(item.value);
                                }}
                            />
                        </>

                    }

                    {typeUser == "Gestor Escola Pública" &&

                        <>
                            <TextInputMask
                                style={styles.input}
                                type={'custom'}
                                options={{
                                    mask: '999.999.999-99'
                                }}
                                placeholder="CPF"
                                onChangeText={CPF => setCPF(CPF)}
                                value={CPF} />

                            <TextInput
                                style={styles.input}
                                placeholder="Nome da Instituição"
                                onChangeText={instituicao => setInstituicao(instituicao)}
                                value={instituicao}
                            />
                        </>

                    }

                    <TouchableOpacity onPress={registerFirebase} style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </>
                }

            </Animatable.View>
        </View>
    );
};