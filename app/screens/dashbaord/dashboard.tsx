import React, { useState, useEffect } from 'react';
import { View, ListRenderItem, ActivityIndicator, Text, Linking, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DashboardHeader from '@components/dashboard-header';
import { getTopNews } from '../../api/services/topnews-api';
import NewsCard from '@components/news-card';
import { COLORS } from '@config/colors';
import { getUser } from '@utils/storage';
import { CONSTANT } from '@utils/constant';
import styles from './styles';

const DashboardView = () => {

    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<Boolean>(false);
    const [userName, setUserName] = useState<String>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const user = await getUser();
                if (user) setUserName(user.firstName);

                const news = await getTopNews();
                setNews(news);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const openURL = async (url: string) => {
        setLoading(true);
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
            setLoading(false);
        } else {
            setLoading(false);
            console.error(`Cannot open URL: ${url}`);
        }
    };

    const renderItem: ListRenderItem<NewsArticle> = ({ item }) => {
        return <NewsCard newsArticle={item} onPress={(news) => openURL(news.url || '')} />;
    };

    return (
        <SafeAreaProvider>
            <View style={styles.dashbaordContainer}>
                <View style={styles.dashboardSubContainer}>
                    <DashboardHeader title={`Hey ${userName}`} />
                    {loading && <ActivityIndicator size="large" color={COLORS.white} />}
                    {error ? <Text style={styles.errorMsg}>{CONSTANT.SOME_THING_WENT_WRONG}</Text> :
                        <FlatList
                            data={news}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                            style={styles.fList}
                        />
                    }
                </View>
            </View>
        </SafeAreaProvider >
    )
}

export default DashboardView;