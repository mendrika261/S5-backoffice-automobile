"use client";

import React, {useEffect, useState} from "react";
import {remove_file, sendDelete, sendPost, sendPut, upload_file, useGet, useGetFile} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import {toast} from "react-toastify";

export default function Modifier() {
    const [file, setFile] = useState<File | null>();
    const [loading, setLoading] = useState(0);
    const [data, setData] = useState<any>();
    const [photo, setPhoto] = useGetFile(data?.photo?.lien);
    const [mdpChange, setMdpChange] = useState({
        "motDePasse":"",
        "nouveauMotDePasse":""
    });

    async function supprimerPhoto() {
        const submitButton = document.getElementById('removePhoto') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        const result2 = await sendDelete(API_URL + 'utilisateurs/' + data?.id + '/photo/' + data?.photo?.id);
        if(result2 != null) {
            await remove_file(result2.lien);
            localStorage?.setItem("utilisateur", JSON.stringify(result2));
            setData({...data, photo: null});
        }
        submitButton.classList.remove("btn-loading");
    }

    async function modifyPhoto(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submitPhoto') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        if(file!=null && file.type.includes("image")) {
            const {id, lien, type} = await upload_file(file, setLoading);
            if(id != null) {
                const result = await sendPut(API_URL + 'utilisateurs/' + data.id + '/photo/' + id, {});
                if (result != null) {
                    localStorage?.setItem("utilisateur", JSON.stringify(result));
                    setData({...data, photo: {id, lien, type}});
                }
            }
        } else {
            toast.error("Veuillez choisir une photo");
        }
        submitButton.classList.remove("btn-loading");
    }

    async function changerMotDePasse() {
        const submitButton = document.getElementById('submitMdp') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        await sendPut(API_URL + 'utilisateurs/' + data.id + '/mot-de-passe', mdpChange);
        submitButton.classList.remove("btn-loading");
    }

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        data.photo = data?.photo?.id;
        const utilisateur = await sendPut(API_URL + 'utilisateurs/' + data.id, data);
        if(utilisateur != null)
            localStorage?.setItem("utilisateur", JSON.stringify(utilisateur));
        submitButton.classList.remove("btn-loading");
    }

    useEffect(() => {
        // @ts-ignore
        setData(JSON.parse(localStorage?.getItem("utilisateur")));
    }, []);

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Paramètres
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-3 d-none d-md-block border-end">
                                <div className="card-body">
                                    <h4 className="subheader">Mon compte</h4>
                                    <div className="list-group list-group-transparent">
                                        <a href=""
                                           className="list-group-item list-group-item-action d-flex align-items-center active">
                                            Mon profil</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex flex-column">
                                { data &&
                                    <div className="card-body">
                                        <h2 className="mb-4">{data.nomComplet}</h2>
                                        <h3 className="card-title">Mon photo de profil</h3>
                                        <div className="row align-items-center">
                                            <div className="col-auto"><span className="avatar avatar-xl"
                                                                            style={{backgroundImage: `url(${photo})`}}></span>
                                            </div>
                                            <div className="col-auto">
                                                <input type="file" className="form-control w-auto"
                                                       onChange={(e) => {
                                                              setFile(e.target.files![0])
                                                       }}
                                                       />
                                            </div>
                                            <div className="col-auto"><button className="btn"
                                                onClick={modifyPhoto} id="submitPhoto">
                                                Changer
                                            </button></div>
                                            {data?.photo &&
                                            <div className="col-auto">
                                                <button className="btn btn-ghost-danger" onClick={supprimerPhoto} id="removePhoto">
                                                Supprimer
                                            </button></div>}
                                        </div>

                                        <h3 className="card-title mt-4">Mot de passe</h3>
                                        <p className="card-subtitle">Penser à changer régulièrement votre mot de
                                            passe</p>
                                        <div>
                                        <div className="row g-2">
                                                <div className="col-auto">
                                                    <label className="form-label">Votre mot de passe</label>
                                                    <input type="password" className="form-control w-auto"
                                                              onChange={(e) => {
                                                                setMdpChange({...mdpChange, motDePasse: e.target.value,})
                                                              }}
                                                              value={mdpChange.motDePasse}/>
                                                </div>
                                                <div className="col-auto">
                                                    <label className="form-label">Nouveau mot de passe</label>
                                                    <input type="text" className="form-control w-auto"
                                                                onChange={(e) => {
                                                                    setMdpChange({...mdpChange, nouveauMotDePasse: e.target.value,})
                                                                }}
                                                                value={mdpChange.nouveauMotDePasse}/>
                                                </div>
                                                <div className="col-auto">
                                                    <label className="form-label">x</label>
                                                    <button className="btn" onClick={changerMotDePasse} id="submitMdp">
                                                        Changer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="card-title mt-4">Informations</h3>
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <label className="form-label">Nom</label>
                                                <input type="text" className="form-control" placeholder="Rakoto"
                                                       required
                                                       onChange={(e) => {
                                                           setData({...data, nom: e.target.value,})
                                                       }}
                                                       value={data.nom}
                                                />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Prénom</label>
                                                <input type="text" className="form-control" placeholder="Bema" required
                                                       onChange={(e) => {
                                                           setData({...data, prenom: e.target.value,})
                                                       }}
                                                       value={data.prenom}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" placeholder="xxxx@test.com"
                                                   required
                                                   onChange={(e) => {
                                                       setData({...data, email: e.target.value,})
                                                   }}
                                                   value={data.email}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Contact</label>
                                            <input type="text" className="form-control" placeholder="03x xx xxx xx"
                                                   required
                                                   pattern={"[0-9]{3} [0-9]{2} [0-9]{3} [0-9]{2}"}
                                                   onChange={(e) => {
                                                       setData({...data, contact: e.target.value,})
                                                   }}
                                                   value={data.contact}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Level</label>
                                            <input type="number" className="form-control" required min={0}
                                                   onChange={(e) => {
                                                       setData({...data, level: e.target.value,})
                                                   }}
                                                   value={data.level}
                                            />
                                        </div>
                                    </div>
                                }
                                <div className="card-footer bg-transparent mt-auto">
                                    <div className="btn-list justify-content-end">
                                        <a href="/parametres" className="btn">
                                            Annuler
                                        </a>
                                        <button onClick={submit} className="btn btn-warning" id="submit">
                                            Modifier
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}