import { VStack,FormControl,FormControlLabelText, HStack, Input, InputIcon, Icon, SearchIcon, Button, ButtonIcon, ButtonText, InputField } from "@gluestack-ui/themed"
import { StyleSheet } from "react-native"
const Form = props => {
    const {onInputChange} = props
  return (

      <VStack space={2} width='100%' p={5} my={10}>
        <FormControl isRequired>
            <FormControl.Label fontSize='sm'>
                <FormControlLabelText>Ingredient Search</FormControlLabelText>
            </FormControl.Label>
        </FormControl>
        <HStack width='100%' space={2}>
            <Input mr={10} px={5} style={styles.inputStyle}>
            <InputIcon>
            <Icon as={SearchIcon} size="sm"/>
            </InputIcon>
            <InputField
            
             onChangeText={value => {
                onInputChange(value)
            }}
            placeholder="Enter an ingerdient ..." />
            </Input>
            <Button>
                <ButtonIcon as={SearchIcon} mr={2} />
                <ButtonText>Search</ButtonText>
            </Button>
        </HStack>
      </VStack>
   
  )
}

const styles = StyleSheet.create({
    inputStyle:{flex:1, alignItems:"center"}
})

export default Form
