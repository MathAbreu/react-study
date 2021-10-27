/*Estrutura da minha interface TSX por ter componentes a serem renderizados*/
import React from 'react';
import {
    View,
     Text, 
     Image,
     StatusBar
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon/Index';
import IllustrationImg from '../../assets/IllustrationImg.png';
import { styles } from './styles';

export function SignIn(){
     return(
         <View style={styles.container}>

             <StatusBar
             barStyle="light-content"
             backgroundColor="transparent"
             translucent
             />

             <Image 
             source={IllustrationImg}
             style={styles.image}
             resizeMode='stretch'
             /> 
         
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize suas Jogatinas facilmente
                </Text>

                <Text style={styles.subtitle}> 
                    Crie grupos para jogar seus games favoritos com os seus amigos
                </Text>

                <ButtonIcon 
                title="Entrar com Discord"
                activeOpacity={0.7}/>

            </View>
         
         </View>
     );
}