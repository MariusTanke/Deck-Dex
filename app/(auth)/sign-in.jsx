import { ScrollView, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Redirect, router, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField';


import { images } from '../../constants';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })


  const [isSubmiting, setIsSubmiting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
          />

          <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">Inicia sesion en Deck-<Text className="text-secondary ">Dex</Text></Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Iniciar sesion"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmiting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Y si aun no tienes cuenta</Text>
            <Link href={"/sign-up"} className='text-lg font-semibold text-secondary'>Registrate</Link>
          </View>
          <View className="border-secondary border-2 mt-4"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn