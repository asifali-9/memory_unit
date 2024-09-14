import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native'
import React, {useState} from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

let unitValues = [];

const Home = () => {

    let unitOptions = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB'];
  

    [inputValue, setInputValue] = useState('');  // for text input value use only inputBox
    [inputType, setInputType] = useState('GB');  // for unitOptions
    [isInputTypeOptionShow, setIsInputTypeOptionShow] = useState(false); // for option menu show or hide
    [unit, setUnit] = useState([]);  // for storing all unit results
    [inputUnitValue, setInputUnitValue] = useState(''); // for text input value use in the result section
    [isWarningShow, setIsWarningShow] = useState(false);



    const handleInputTypeButton = ()=> {
        setIsInputTypeOptionShow(!isInputTypeOptionShow);
    }

    const handleInputType = (item)=> {
      setIsInputTypeOptionShow(false);
      setInputType(item)
    }

    // This function set AllUnits in unit state
    const getUnits = ()=> {

      if(inputValue <= 0){
        setIsWarningShow(true)
        return
      }

        if(inputType === 'ZB'){
          unitValues.push((inputValue*1024).toLocaleString('en-IN')+" EB")  // EB
          unitValues.push((inputValue*1024*1024).toLocaleString('en-IN')+" PB") // PB
          unitValues.push((inputValue*1024*1024*1024).toLocaleString('en-IN')+" TB") // TB
          unitValues.push((inputValue*1024*1024*1024*1024).toLocaleString('en-IN')+" GB") // GB
          unitValues.push((inputValue*1024*1024*1024*1024*1024).toLocaleString('en-IN')+" MB") // MB
          unitValues.push((inputValue*1024*1024*1024*1024*1024*1024).toLocaleString('en-IN')+" KB") // KB
          unitValues.push((inputValue*1024*1024*1024*1024*1024*1024*1024).toLocaleString('en-IN')+" Bytes") // Byte

          setUnit(unitValues);
          setInputUnitValue(inputValue);
          unitValues.map((item)=> console.log(item))
          unitValues = []

        }

        if(inputType === 'EB'){
          unitValues.push((inputValue*1024).toLocaleString('en-IN')+" PB") // PB
          unitValues.push((inputValue*1024*1024).toLocaleString('en-IN')+" TB") // TB
          unitValues.push((inputValue*1024*1024*1024).toLocaleString('en-IN')+" GB") // GB
          unitValues.push((inputValue*1024*1024*1024*1024).toLocaleString('en-IN')+" MB") // MB
          unitValues.push((inputValue*1024*1024*1024*1024*1024).toLocaleString('en-IN')+" KB") // KB
          unitValues.push((inputValue*1024*1024*1024*1024*1024*1024).toLocaleString('en-IN')+" Bytes") // Byte

          setUnit(unitValues);
          setInputUnitValue(inputValue);
          unitValues.map((item)=> console.log(item))
          unitValues = []

        }

        if(inputType === 'PB'){
          unitValues.push((inputValue*1024).toLocaleString('en-IN')+" TB") // TB
          unitValues.push((inputValue*1024*1024).toLocaleString('en-IN')+" GB") // GB
          unitValues.push((inputValue*1024*1024*1024).toLocaleString('en-IN')+" MB") // MB
          unitValues.push((inputValue*1024*1024*1024*1024).toLocaleString('en-IN')+" KB") // KB
          unitValues.push((inputValue*1024*1024*1024*1024*1024).toLocaleString('en-IN')+" Bytes") // Byte

          setUnit(unitValues);
          setInputUnitValue(inputValue);
          unitValues.map((item)=> console.log(item))
          unitValues = []

        }

        if(inputType === 'TB'){
          unitValues.push((inputValue*1024).toLocaleString('en-IN')+" GB") // GB
          unitValues.push((inputValue*1024*1024).toLocaleString('en-IN')+" MB") // MB
          unitValues.push((inputValue*1024*1024*1024).toLocaleString('en-IN')+" KB") // KB
          unitValues.push((inputValue*1024*1024*1024*1024).toLocaleString('en-IN')+" Bytes") // Byte

          setUnit(unitValues);
          setInputUnitValue(inputValue);
          unitValues.map((item)=> console.log(item))
          unitValues = []

        }

        if(inputType === 'GB'){
          unitValues.push((inputValue*1024).toLocaleString('en-IN')+" MB") // MB
          unitValues.push((inputValue*1024*1024).toLocaleString('en-IN')+" KB") // KB
          unitValues.push((inputValue*1024*1024*1024).toLocaleString('en-IN')+" Bytes") // Byte

          setUnit(unitValues);
          setInputUnitValue(inputValue);
          unitValues.map((item)=> console.log(item))
          unitValues = []

        }

        if(inputType === 'MB'){
          unitValues.push((inputValue*1024).toLocaleString('en-IN')+" KB") // KB
          unitValues.push((inputValue*1024*1024).toLocaleString('en-IN')+" Bytes") // Byte

          setUnit(unitValues);
          setInputUnitValue(inputValue);
          unitValues.map((item)=> console.log(item))
          unitValues = []

        }

         if(inputType === 'KB'){
          unitValues.push((inputValue*1024).toLocaleString('en-IN')+" Bytes") // Byte

          setUnit(unitValues);
          setInputUnitValue(inputValue);
          unitValues.map((item)=> console.log(item))
          unitValues = []

        }
        
    }
   

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput keyboardType='number-pad' style={{fontSize: 18, flex: 1,}} placeholder={"Enter number in "+ inputType} value={inputValue} onChangeText={(e)=> setInputValue(e)} />
          <TouchableOpacity style={{padding: 10,}} onPress={()=> handleInputTypeButton()}>
            <AntDesign name="down" size={20} color="teal" />
          </TouchableOpacity>
        </View>
      </View>

      {
        isInputTypeOptionShow ? 
        <View style={styles.optionContainer}>
          {
            unitOptions.map((item, index)=> {
              return(
                <TouchableOpacity onPress={()=> handleInputType(item)} style={[styles.option, {backgroundColor: inputType === item ? 'purple' : 'lightblue'}]} key={index}>
                  <Text style={{fontSize: 20, color: 'white'}}>{item}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
        :
        null
      }

      <View style={styles.unitContainer}>
        {
          unit.map((item, index)=> {
            return(
              <View key={index} style={styles.unit}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{inputUnitValue + ' ' + inputType + ' = ' + item}</Text>
              </View>
            )
          })
        }
      </View>

      <TouchableOpacity onPress={()=> getUnits()} style={{height: 50, width: 150, zIndex: 1000, alignItems: 'center', justifyContent: 'center', borderRadius: 30, elevation: 2, position: 'absolute', bottom: 30, backgroundColor: 'skyblue'}}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>GET UNITS</Text>
      </TouchableOpacity>

      {/* Warning custom modal */}
      {
        isWarningShow ?
        <View style={styles.customModalContainer}>
          <View style={styles.customModal}>
            <Text style={{fontSize: 35, fontWeight: 'bold', color: 'yellow'}}>Warning</Text>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>Please enter number more than 0</Text>
            <TouchableOpacity onPress={()=> setIsWarningShow(false)} style={styles.customModalBtn}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: 'teal'}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
        : 
        null
      }

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
    flex: 1,
    // backgroundColor: 'grey',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  inputContainer:{
    height: 150,
    width: '90%',
    // alignItems: "center",
    marginTop: 50,
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  input:{
    height: 50,
    width: '100%',
    borderWidth: 2,
    borderRadius: 2,
    flexDirection: 'row',
    borderColor: 'teal',
    alignItems: 'center',
    // elevation: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  optionContainer:{
    width: 150,
    position: 'absolute',
    top: 150,
    right: 20,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    zIndex: 100,
  },
  option:{
    height: 40,
    width: '80%',
    marginVertical: 5,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },

  unitContainer:{
    width: '90%',
    // height: 500,
    alignItems: 'center',
    // paddingVertical: 5,
    // backgroundColor: 'skyblue'
  },
  unit:{
    height: 45,
    width: '95%',
    marginVertical: 7,
    borderRadius: 5,
    elevation: 1,
    // alignItems: 'stretch',
    paddingHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: 'skyblue'
  },

  customModalContainer:{
    height: '100%', 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute', 
    backgroundColor: "rgba(18, 3, 3, 0.7)",
    zIndex: 5000
  },
  customModal:{
    height: 150, 
    width: 250, 
    borderRadius: 8, 
    alignItems: 'center', 
    backgroundColor: 'teal', 
    elevation: 1
  },
  customModalBtn:{
    height: 35, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginVertical: 5, 
    borderRadius: 25, 
    width: 120, 
    backgroundColor: 'white'
  }
})