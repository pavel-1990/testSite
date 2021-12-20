import axios from "axios";

export const backendUrl = '/backend/';

export async function fetchPost(linkFetch, body) {
    try {
        const response = await axios({
            method: "post",
            url: `${backendUrl}${linkFetch}`,
            data: body,
        });
        console.log(response.data);
        if (response.data.status) {
            return true;
        } else {
            alert("Ошибка отправки данных");
            return false;

        }
    } catch (e) {
        alert("Ошибка отправки данных" + e);
        return false;
    }

}

export async function fetchGet(linkFetch) {
    try {
        const response = await axios(`${backendUrl}${linkFetch}`);
        if (response.data.status) {
            return response.data;
        } else {
            console.log("Ошибка получения данных данных");
            return false;

        }
    } catch (e) {
        console.log("Ошибка получения данных" + e);
        return false;
    }

}