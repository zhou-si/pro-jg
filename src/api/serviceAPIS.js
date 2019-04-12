
import {httpGet,httpPost} from './config'

const APIS = {};
/**
 * 登录接口
 * @type {string}
 */
APIS.login = (params = {}) => httpGet({ url: 'v2/movie/in_theaters', params });

APIS.save = (data) => {
    return httpPost({
        url: 'apps/wechat/api/save_member',
        data
    })
};


/**
 * 客户联系人接口 get
 * @type {string}
 */
export { APIS };
