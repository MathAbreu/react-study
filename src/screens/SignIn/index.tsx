/*Estrutura da minha interface TSX por ter componentes a serem renderizados*/
import React from 'react';
import {
    View,
     Text, 
     Image
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon/Index';
import IllustrationImg from '../../assets/IllustrationImg.png';
import { styles } from './styles';

export function SignIn(){
     return(
         <View style={styles.container}>
             <Image 
             source={IllustrationImg}
             style={styles.image}
             resizeMode='stretch'
             /> 
         
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'} 
                    e organize suas {'\n'}  
                    jogatinas
                </Text>

                <Text style={styles.subtitle}> 
                    Crie grupos para jogar seus games {'\n'}  favoritos com os seus amigos
                </Text>

                <ButtonIcon 
                title="Entrar com Discord"
                activeOpacity={0.7}/>

            </View>
         
         </View>
     );
}