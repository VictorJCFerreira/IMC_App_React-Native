import React, {useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import ResultIMC from "./ResultIMC/resultIMC";
import styles from "./style";

export default function Form(){
    
const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageIMC, setMessageIMC] = useState('Preencha os valores correspondentes')
const [IMC, setIMC] = useState(null)
const [textButton, setTextButton]= useState('Calcular')

function Calculator() {
    return setIMC((weight/(height*height)).toFixed(2))
}
    
function validationIMC(){
    if(weight != null && height != null){
        Calculator()
        setHeight(null)
        setWeight(null)
        setMessageIMC(`Seu IMC é Igual a `)
        setTextButton('Calcular Novamente')
        return
    }
    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha os valores correspondentes")
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text  style={styles.formLabel} >Altura</Text>
                <TextInput
                style={styles.imput}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text style={styles.formLabel} >Peso</Text>
                <TextInput
                style={styles.imput}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 71.3"
                keyboardType="numeric"
                />
                
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={()=>{
                    validationIMC()
                }}
                >
                    <Text style={styles.textButtonCalculator} >{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC}/>
        </View>
    );
}