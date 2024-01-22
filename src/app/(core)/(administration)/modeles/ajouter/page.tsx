"use client";

import Link from "next/link";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faList, faSave} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {sendPost, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";

export default function AjouterModele() {
    const [data, setData] = useState({
        nom: '',
        marque:'',
    });
    const [marques,setMarques] = useGet(API_URL+"marques");

    function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        sendPost(API_URL + 'modeles', data);
        submitButton.classList.remove("btn-loading");
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Ajouter une marque
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <form className="card" id="form" onSubmit={submit}>
                        <div className="card-header">
                            <Link href="/modeles" className="btn btn-primary">
                                Liste des modeles <FaIcon icon={faList}/>
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
                            </div>
                        </div>
                        <div className="card-body overflow-hidden">
                            <div className="row mb-3">
                                <div className="col-6">
                                <label className="form-label">Marque</label>
                                    <select className="form-select" name="produit"
                                            onChange={(e) => setData({...data, marque: e.target.value})}>
                                        <option  value=''>
                                            Aucune
                                        </option>
                                        {marques && marques.map((marque: any) => (
                                            <option key={marque.id} value={marque.id}>
                                                {marque.nom}
                                            </option>
                                        ))}
                                    </select>
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