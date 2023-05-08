import { BY_ITEM, NEW_NEWS, json_format } from '../const/Consts';
import Api from './Api'

function getNewNews() {
    return Api.get(NEW_NEWS);
}

function getOneNews(id) {
    return Api.get(BY_ITEM + '/' + id + json_format);
}

const NewsService = {
    getNewNews,
    getOneNews,
}
export default NewsService;