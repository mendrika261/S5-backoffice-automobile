"use client";

import Link from "next/link";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faList, faSave} from "@fortawesome/free-solid-svg-icons";
import React, {ChangeEvent, useState} from "react";
import {getFile, sendPost, upload_file} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import {uuidv4} from "@firebase/util";

export default function AjouterUtilisateur() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(0);
    const [data, setData] = useState({
        nom: '',
        prenom: '',
        motDePasse: '',
        email: '',
        contact: '',
        level: '0',
        photo: '',
    });

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        if(file!=null && file.type.includes("image"))
        {
            const {id} = await upload_file(file, setLoading);
            if(id!=null)
                data.photo = id;
            else return;
        }
        await sendPost(API_URL + 'utilisateurs', data);
        submitButton.classList.remove("btn-loading");
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Ajouter un utilisateur
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <form className="card" id="form" onSubmit={submit}>
                        <div className="card-header">
                            <Link href="/utilisateurs" className="btn btn-primary">
                                Liste des utilisateurs <FaIcon icon={faList} />
                            </Link>
                        </div>
                        <div className="card-body overflow-hidden">
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">Nom</label>
                                    <input type="text" className="form-control" placeholder="Rakoto" required
                                           onChange={(e) => {
                                               setData({...data, nom: e.target.value,})
                                           }}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Prénom</label>
                                    <input type="text" className="form-control" placeholder="Bema" required
                                           onChange={(e) => {
                                               setData({...data, prenom: e.target.value,})
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mot de passe</label>
                                <input type="text" className="form-control" placeholder="xxxxxxx" required minLength={6}
                                       onChange={(e) => {
                                           setData({...data, motDePasse: e.target.value,})
                                       }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="xxxx@test.com" required
                                       onChange={(e) => {
                                           setData({...data, email: e.target.value,})
                                       }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contact</label>
                                <input type="text" className="form-control" placeholder="03x xx xxx xx" required
                                       pattern={"[0]{1}[3]{1}[0-9]{1} [0-9]{2} [0-9]{3} [0-9]{2}"}
                                       onChange={(e) => {
                                           setData({...data, contact: e.target.value,})
                                       }}
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
                            <div className="mb-3">
                                <label className="form-label">Photo de profil</label>
                                <input type="file" className="form-control"
                                       onChange={(e) => {
                                           setFile(e.target.files![0])
                                       }}
                                />
                            </div>
                            <div className="progress mb-2">
                                <div className="progress-bar" style={{width: `${loading}%`}} role="progressbar">
                                    <span className="visually-hidden">{loading}% Complete</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end">
                            <button type="submit" className="btn btn-success" id="submit">
                                Enregistrer <FaIcon icon={faSave}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}