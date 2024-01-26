'use client';

import {Dispatch, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "@/app/(core)/utils/storage";
import {API_URL} from "@/app/config";
const AXIOS = require('axios').default;
const DEFAULT_ERROR_MESSAGE = "Vérifier votre connexion internet";

export function useGet(url: string, childrenObjectOnlyId?: boolean): [any, Dispatch<any>] {
    const [data, setData] = useState(null);

    useEffect(() => {
        if(window?.localStorage?.getItem('token')===null)
            window?.location?.replace('/connexion');
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

export async function sendPostConnexion(form: any) {
    await AXIOS.post(API_URL+'connexion', form,{
        headers: {
            'Authorization': 'Bearer ' + window?.localStorage?.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(function (response:any):void {
            console.log(response);
            if(response.data.data != null && response.data.data.value!==undefined && response.data.data.value!==null)
                window?.localStorage?.setItem('token', response.data.data.value);
            if (response.data.message !== undefined && response.data.message !== null)
                toast(response.data.message, {type: response.data.status});
            if(window?.localStorage?.getItem('token')!==null)
                window?.location?.replace('/');
        })
        .catch(function (error:any) {
            console.log(error)
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


function isImage(file: File): boolean {
    const extension = file.name.split('.').pop();
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    return allowedExtensions.includes(<string>extension);
}


export async function upload_photo({file, nom}: { file: File, nom: any }) {
    // Votre configuration Firebase

    if (!isImage(file)) {
        toast.error("le fichier n'est pas une image");
        return null;
    }
    const imageRef=ref(storage,nom);

    const uploadTask = uploadBytesResumable(imageRef, file)
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        (error) => {
            console.log(error);
            // Handle unsuccessful uploads
            toast.error(error.message);
        },
        () => {
            // Handle successful uploads on complete
            console.log('Upload completed successfully');
            toast.done('Upload completed successfully')
        }
    );
}



