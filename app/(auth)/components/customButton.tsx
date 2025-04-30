import { TouchableOpacity, Text, StyleSheet, Button, ButtonProps } from "react-native";

const getTextVariantStyle = (variant) => {
  switch (variant) {
    case "primary":
      return { color: "black" };
    case "secondary":
      return { color: "#f3f4f6" }; // gray-100
    case "danger":
      return { color: "#fecaca" }; // red-100
    case "success":
      return { color: "#bbf7d0" }; // green-100
    default:
      return { color: "white" };
  }
};

const getBgVariantStyle = (variant) => {
  switch (variant) {
    case "secondary":
      return { backgroundColor: "#6b7280" }; // gray-500
    case "danger":
      return { backgroundColor: "#ef4444" }; // red-500
    case "success":
      return { backgroundColor: "#22c55e" }; // green-500
    case "outline":
      return { 
        backgroundColor: "transparent", 
        borderColor: "#d1d5db", 
        borderWidth: 0.5 
      };
    default:
      return { backgroundColor: "#0286ff" }; // primary blue
  }
};
const CustomButton = ({ 
  onPress,
  title,
  bgVariant="primary",
  textVariant="default",
  IconLeft,
  IconRight,
  className,
  ...props
 } : ButtonProps ) => ( 
  <TouchableOpacity onPress={onPress} style={styles.button} {...props} className={'${getBgVariantStyle(bgVariant)}, ${className}'} >
    {IconLeft && <IconLeft />}
      <Text style={styles.text} className={'${getTextVariantStyle(textVariant)}'} >{title}</Text>
    {IconRight && <IconRight />}
   </TouchableOpacity> 
 );

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 9999,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    color: "blue",
    // ${getBgVariantStyle(bgVariant)},
    // ${className},
  },
  text: {
    fontWeight: "bold",
    // ${getTextVariantStyle(textVariant)},
  },
});
export default CustomButton;