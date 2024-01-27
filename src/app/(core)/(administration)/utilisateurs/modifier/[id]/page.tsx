'use client';

import {useParams} from "next/navigation";
import {getFile, remove_file, sendDelete, sendPost, sendPut, useGet, useGetFile} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import Link from "next/link";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faList, faPencilAlt, faSave, faTrashAlt, faWarning} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import Image from "next/image";
import ConfirmationModal from "@/app/(core)/ui/ConfirmationModal";

export default function ModifierUtilisateur(){
    const params = useParams<{id:string}>();
    const [data, setData] = useGet(API_URL+ 'utilisateurs/' + params.id);
    const [photo, setPhoto] = useGetFile(data?.photo?.lien);

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        data.photo = data?.photo?.id;
        await sendPut(API_URL + 'utilisateurs/' + params.id, data);
        submitButton.classList.remove("btn-loading");
    }

    async function Delete(id: string) {
        const utilisateur = await sendDelete(`${API_URL}utilisateurs/${id}`);
        if(utilisateur != null && utilisateur.photo != null)
            await remove_file(utilisateur.photo.lien);
        setTimeout(()=> {
            window?.location?.replace("/utilisateurs");
        }, 1200)
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Modifier un utilisateur
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            {data &&
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
                                           onChange={(e) => {setData({...data, nom: e.target.value,})}}
                                           value={data.nom}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Prénom</label>
                                    <input type="text" className="form-control" placeholder="Bema" required
                                           onChange={(e) => {setData({...data, prenom: e.target.value,})}}
                                           value={data.prenom}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="xxxx@test.com" required
                                       onChange={(e) => {setData({...data, email: e.target.value,})}}
                                       value={data.email}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contact</label>
                                <input type="text" className="form-control" placeholder="03x xx xxx xx" required
                                       pattern={"[0-9]{3} [0-9]{2} [0-9]{3} [0-9]{2}"}
                                       onChange={(e) => {setData({...data, contact: e.target.value,})}}
                                       value={data.contact}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Level</label>
                                <input type="number" className="form-control" required min={0}
                                       onChange={(e) => {setData({...data, level: e.target.value,})}}
                                       value={data.level}
                                />
                            </div>
                            {photo &&
                            <div className="mb-3">
                                <label className="form-label">Photo de profil</label>
                                <div className="mb-2" style={{maxHeight: "500px"}}>
                                    <Image
                                        src={photo}
                                        alt="image"
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                            }
                        </div>
                        <div className="card-footer d-flex justify-content-end">
                            <a data-bs-target={`#/utilisateurs/supprimer/${data.id}`}
                                    className={"btn btn-danger mx-3"}
                                    data-bs-toggle="modal">
                                Supprimer
                                <FaIcon icon={faTrashAlt}/>
                            </a>
                            <ConfirmationModal id={`/utilisateurs/supprimer/${data.id}`}
                                               title={"Confirmer la suppression"}
                                               message={"Supprimer l'utilisateur supprimera toutes les données qui lui sont liées."}
                                               type="danger" icon={faWarning}
                                               action={()=>{Delete(data.id)}}
                                               actionButton={"Supprimer"} />
                            <button type="submit" className="btn btn-warning" id="submit">
                                Modifier <FaIcon icon={faPencilAlt}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            }
        </>
    )
}