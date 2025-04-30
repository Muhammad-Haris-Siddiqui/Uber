import { InputFieldProps } from "@/app/types/type";
import { KeyboardAvoidingView, TouchableWithoutFeedback, View, StyleSheet, Text, Image, TextInput, Platform, Keyboard } from "react-native";

const InputField = ({ 
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconsStyle,
  className,
  ...props 
}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={styles.input} >
        <Text style={styles.txt} className={'${labelStyle}'} >{label}</Text>
        <View style={styles.div} className={'${containerStyle}'} >
          {icon && (<Image source={icon} style={styles.img} className={'${iconStyle}'} /> )}
          <TextInput className={ 'rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left ' } //style txt2
          secureTextEntry={secureTextEntry}
          {...props}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
  input:{
    marginTop: 8,
    marginBottom: 8,
    width: "100%",
  },
  txt: {
    fontWeight: "200",
    fontFamily: "JakartaSemiBold, sans-serif",
    marginBottom: 12,
  },
  div: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center',
    backgroundColor: "neutral-100",
    borderRadius: 9999,
    borderColor: "neutral-100",
  },
  img: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  // txt2: {
  // borderRadius: 9999,
  // padding: 16,
  // fontFamily: "JakartaSemiBold, sans-serif",
  // flex: 1,
  // },

})

export default InputField;