import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
    newsArticle: NewsArticle;
    onPress: (newsArticle: NewsArticle) => void;
}

const NewsCard: React.FC<Props> = ({ newsArticle, onPress }) => {

    const hasValidImage = newsArticle.image && newsArticle.image.trim() !== '';

    return (
        <TouchableOpacity onPress={() => onPress(newsArticle)}>
            <View style={styles.newsCardContainer}>
                <View style={styles.newsImageView}>
                    {hasValidImage ? <Image source={{ uri: newsArticle.image }} style={styles.newsImage} /> :
                        <Image style={styles.newsImage} source={require('../../../assets/images/defalut-logo.png')} />
                    }
                </View>
                <View style={styles.newsDescriptionView}>
                    <Text style={styles.source}> {newsArticle.source}</Text>
                    <Text style={styles.headLine} numberOfLines={3}>{newsArticle.headline}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default NewsCard;