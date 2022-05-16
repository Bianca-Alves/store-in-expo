import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';

// import { Container } from './styles';

const Footer = () => {
  return (
      <View style={styles.footer}>
          <View style={styles.container}>
            <View style={styles.col}>
                <Text style={styles.primaryTitle}>Helpful Links</Text>
                <FlatList style={styles.info}
                    data={[
                    {key: 'Capinhas'},
                    {key: 'Carregadores'},
                    {key: 'Fones'},
                    {key: 'Acessorios Smart'},
                    {key: 'Termos e Condições'}
                    ]}
                    
                    renderItem={({item}) => 
                    <View style={styles.infoWrapper}>
                        <TouchableOpacity>
                            <Text style={styles.item}>
                                {item.key}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    }>
                        
                </FlatList>
            </View>
            <View style={styles.col}>
                <Text style={styles.primaryTitle}>Contato</Text>
                <FlatList style={styles.info}
                    data={[
                    {icon: 'mail',
                    key: 'lorem@contact.com'},
                    {icon: 'call',
                    key: '+55 (11) 9999-9999'},
                    ]}
                    
                    renderItem={({item}) => 
                    <View>
                        <TouchableOpacity style={styles.infoWrapper}>
                            <Ionicons name={item.icon} size={18} color="white" />
                            <Text style={styles.item}>
                                {item.key}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    }>
                        
                </FlatList>
                <Text style={styles.primaryTitle}> Saiba mais</Text>
                <View style={styles.socialMedia}>
                    <TouchableOpacity>
                        <Ionicons name="logo-instagram" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="logo-facebook" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="logo-twitter" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="logo-youtube" size={24} color="white" />
                    </TouchableOpacity>

                </View>
          </View>
        </View>
      </View>
      
  );
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'black',
    },  
    container: {
        width: 200,
        padding: 10,
        justifyContent: 'center', 
        flexDirection: 'row',
    },
    col: {
        width: '100%',
        height: '100%',
        alignItems: 'start',
        flexDirection: 'column',
    },
    primaryTitle: {
        color: 'white',
        textAlign: 'left',
        marginTop: 15,
        marginBottom: 10,
        fontSize: 20,
        textTransform: 'uppercase',
    },  
    socialMedia: {
        flexDirection: 'row',
        gap: 10,
    }, 
    infoWrapper: {
        flexDirection: 'row',
    },
    item: {
        color: 'white',
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 16,
        textAlign: 'left',
        opacity: 0.6,
    },
})