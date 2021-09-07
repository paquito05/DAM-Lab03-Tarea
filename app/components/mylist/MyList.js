import React,{Component} from "react";
import { View,FlatList, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class App extends Component{
    constructor(props){   
        super(props)
        this.state = {
            lista: [
                {
                    nombre:'Tigre',
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tigre.jpg/1200px-Tigre.jpg'
                },
                {
                    nombre:'Leon',
                    img: 'https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__340.jpg'
                },
                {
                    nombre:'Elefante',
                    img: 'https://elcomercio.pe/resizer/W2tyIue7gpqYSMcDO6IIeWUpEy4=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SS4BLRBBGFC5BEQEU67TBGHSUE.jpg'
                },
                {
                    nombre:'Gato',
                    img: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg'
                },
                {
                    nombre:'Perro',
                    img: 'http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg'
                },
                {
                    nombre:'pantera',
                    img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Jaguar-schwarzer-panther-zoologie.de-nk0005.JPG'
                },
            ]
        }
    }

    renderItem = ({item}) => (
        <TouchableOpacity>
            <View style={styles.itemContainer}>
                <Image
                style={styles.itemImg}
                source={{uri: item.img}}
                />
                <Text style={styles.itemName}>{item.nombre}</Text>
            </View>
        </TouchableOpacity>
    )

    keyExtractor = (item, index) => index.toString()

    FlatListSeparador = () => {
        return(
            <View style={{height:1, width: '100%', backgroundColor: 'black'}}/>
        )

    }


    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                    keyExtractor={this.keyExtractor}
                    data= {this.state.lista}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.FlatListSeparador}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        marginTop: 20,
    },

    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        justifyContent: 'flex-start',
        margin: 15,
    },

    itemName: {

        marginLeft: 20,
        fontSize:20,
    },

    itemImg: {
        width:100, 
        height:100, 
        borderRadius:50,
    }

});
