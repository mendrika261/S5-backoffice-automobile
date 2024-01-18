import {useEffect, useState} from "react";
import {toast} from "react-toastify";

const AXIOS = require('axios').default;
const DEFAULT_ERROR_MESSAGE = "Vérifier votre connexion internet";
const AXIOS_FORM_HEADER = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
};

export function useGet(url: string): [any] {
    const [data, setData] = useState(null);

    useEffect(() => {
        AXIOS.get(url)
            .then(function (response: any) {
                setData(response.data.data);
                if (response.data.message !== undefined && response.data.message !== null)
                    toast(response.data.message, {type: response.data.status});
            })
            .catch(function (error: any) {
                console.log(error);
                toast.error(DEFAULT_ERROR_MESSAGE);
            })
    }, [url]);

    return [data];
}

export function sendPost(url: string, form: any): any {
    AXIOS.post(url, form, AXIOS_FORM_HEADER)
        .then(function (response: any) {
            if (response.data.message !== undefined && response.data.message !== null)
                toast(response.data.message, {type: response.data.status});
        })
        .catch(function (error: any) {
            console.log(error);
            toast.error(DEFAULT_ERROR_MESSAGE);
        })
}