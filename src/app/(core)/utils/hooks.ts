'use client';

import {Dispatch, useEffect, useState} from "react";
import {toast} from "react-toastify";

const AXIOS = require('axios').default;
const DEFAULT_ERROR_MESSAGE = "Vérifier votre connexion internet";

export function useGet(url: string, childrenObjectOnlyId?: boolean): [any, Dispatch<any>] {
    const [data, setData] = useState(null);

    useEffect(() => {
        AXIOS.get(url, {
            headers: {
                'Authorization': 'Bearer ' + window?.localStorage?.getItem('token')
            }
        })
            .then(function (response: any) {
                if (childrenObjectOnlyId === true) {
                    Object.keys(response.data.data).map((key: any) => {
                        if (typeof response.data.data[key] === 'object'
                            && response.data.data[key] !== null
                            && response.data.data[key].id !== undefined)
                            response.data.data[key] = response.data.data[key].id;
                    });
                }
                setData(response.data.data);
                if (response.data.message !== undefined && response.data.message !== null)
                    toast(response.data.message, {type: response.data.status});
            })
            .catch(function (error: any) {
                console.log(error);
                if (error?.response?.data?.message !== undefined && error?.response?.data?.message !== null)
                    toast(error?.response?.data?.message, {type: error?.response?.data?.status});
                else
                    toast.error(DEFAULT_ERROR_MESSAGE);
            });
    }, [url, childrenObjectOnlyId]);

    return [data, setData];
}

export async function sendPost(url: string, form: any) {
    await AXIOS.post(url, form, {
        headers: {
            'Authorization': 'Bearer ' + window?.localStorage?.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(function (response: any) {
            if (response.data.message !== undefined && response.data.message !== null)
                toast(response.data.message, {type: response.data.status});
        })
        .catch(function (error: any) {
            console.log(error);
            if (error?.response?.data?.message !== undefined && error?.response?.data?.message !== null)
                toast(error?.response?.data?.message, {type: error?.response?.data?.status});
            else
                toast.error(DEFAULT_ERROR_MESSAGE);
        });
}

export async function sendPut(url: string, form: any) {
    await AXIOS.put(url, form, {
        headers: {
            'Authorization': 'Bearer ' + window?.localStorage?.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(function (response: any) {
            if (response.data.message !== undefined && response.data.message !== null)
                toast(response.data.message, {type: response.data.status});
        })
        .catch(function (error: any) {
            console.log(error);
            if (error?.response?.data?.message !== undefined && error?.response?.data?.message !== null)
                toast(error?.response?.data?.message, {type: error?.response?.data?.status});
            else
                toast.error(DEFAULT_ERROR_MESSAGE);
        });
}

export async function sendDelete(url: string) {
    await AXIOS.delete(url, {
        headers: {
            'Authorization': 'Bearer ' + window?.localStorage?.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(function (response: any) {
            if (response.data.message !== undefined && response.data.message !== null)
                toast(response.data.message, {type: response.data.status});
        })
        .catch(function (error: any) {
            console.log(error);
            if (error?.response?.data?.message !== undefined && error?.response?.data?.message !== null)
                toast(error?.response?.data?.message, {type: error?.response?.data?.status});
            else
                toast.error(DEFAULT_ERROR_MESSAGE);
        });
}