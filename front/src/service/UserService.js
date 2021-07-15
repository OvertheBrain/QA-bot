import config from 'config';
import {postRequest} from "../utils/ajax";

export const Send = (message,userId,BotId,callback) => {
    const data={
        message:message,
        userId:userId,
        BotId:BotId,
    }
    const url = `${config.apiUrl}/SendMsg`;
    postRequest(url, data, callback);
};
