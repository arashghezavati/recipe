import { Center } from "@gluestack-ui/themed";
import Form from '../forms/Form';
import { useState } from "react";


const RecipeContainer = () => {
    const[ingerdient,setIngredient]= useState(null)

    const handleInputChange = ingredient =>{
        setIngredient(ingredient)
        console.log('ingredient', ingerdient)
    }
  return (
    <Center px={4}>
        <Form onInputChange={handleInputChange}/>
    </Center>
  )
}

export default RecipeContainer
