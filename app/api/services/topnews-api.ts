import { ENV } from "@config/env";
import axiosInstance from "../axios-instance";
import API_ENDPOINTS from "../endpoints";

export const getTopNews = async (): Promise<NewsArticle[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GENERAL_NEWS(ENV.API_TOKEN));
        return response.data.map((item: NewsArticle) => ({
            category: item.category,
            datetime: item.datetime,
            headline: item.headline,
            id: item.id,
            image: item.image,
            related: item.related,
            source: item.source,
            summary: item.summary,
            url: item.url,
        }));
    } catch (error) {
        throw error;
    }
};
