"use client";

import Link from "next/link";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faList, faSave} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {sendPost} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";

export default function AjouterOption() {
    const [data, setData] = useState({
        designation: '',
        valeurs:'',
        typeValeur:'string'
    });

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        await sendPost(API_URL + 'options', data);
        submitButton.classList.remove("btn-loading");
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Ajouter une option
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <form className="card" id="form" onSubmit={submit}>
                        <div className="card-header">
                            <Link href="/options" className="btn btn-primary">
                                Liste des options <FaIcon icon={faList}/>
                            </Link>
                        </div>
                        <div className="card-body overflow-hidden">
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className="form-label">Designation</label>
                                    <input type="text" className="form-control" placeholder="mode" required
                                           onChange={(e) => {
                                               setData({...data, designation: e.target.value,})
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label className="form-label">Type de valeur</label>
                                    <select className="form-select" required value="string"
                                            onChange={(e) => {
                                                setData({...data, typeValeur: e.target.value,})
                                            }}>
                                        <option value="string">Texte</option>
                                        <option value="number">Nombre</option>
                                    </select>
                                </div>
                                <div className="col-9">
                                    <label className="form-label">Valeurs possible</label>
                                    <input type="text" className="form-control" placeholder="sport,eco,normal" required
                                           pattern={"[a-zA-Z0-9,]+"}
                                           onChange={(e) => {
                                               setData({...data, valeurs: e.target.value,})
                                           }}
                                    />
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