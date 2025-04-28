import { TouchableOpacity, Text, StyleSheet, Button, ButtonProps } from "react-native";

const getBgTextVariantStyle = (variant : ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary": 
      return "text-black";
    case "secondary": 
      return "text-gray-100";
    case "danger": 
      return "text-red-100";
    case "success": 
      return "text-green-100";
    default:
      return "text-white";
  }
};
const getBgVariantStyle = (variant : ButtonProps["bgVariant"]) => {
    switch (variant) {
      case "secondary": 
        return "bg-gray-500";
      case "danger": 
        return "bg-red-500";
      case "success": 
        return "bg-green-500";
      case "outline": 
        return "bg-transparent border-neutral-300 border-[0.5px]";
      default:
        return "bg-[#0286ff]";
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
  <TouchableOpacity onPress={onPress} style={styles.button} >
    {IconLeft && <IconLeft />}
      <Text style={styles.text} >{title}</Text>
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
    // ${getBgVariantStyle(bgVariant)},
    // ${className},
  },
  text: {
    fontWeight: "bold",
    // ${getTextVariantStyle(textVariant)},
  },
});
export default CustomButton;