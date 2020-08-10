import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                style={styles.avatar}
                source={{uri: 'https://avatars3.githubusercontent.com/u/29843724?s=460&v=4'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Leonardo Salmento</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>

                <Text style={styles.bio}>
                    Só testando uma coisa, pq tem muita coisa para ser dita
                </Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>
                        Preço/Hora {'  '}
                        <Text style={styles.priceValue}>R$ 20,00</Text>
                    </Text>

                    <View style={styles.buttonsContainer}>
                        <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutlineIcon} />*/}
                        <Image source={unfavoriteIcon} />
                        </RectButton>

                        <RectButton
                            style={styles.contactButton}
                        >
                            <Image source={whatsappIcon} />
                            <Text style={styles.contactButtonText}>Entrar em contato</Text>
                        </RectButton>
                    </View>
                </View>
        </View>
    )
}


export default TeacherItem;