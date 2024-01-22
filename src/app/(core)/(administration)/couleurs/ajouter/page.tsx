"use client";

import Link from "next/link";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faArrowRight, faCaretRight, faList, faSave} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {sendPost} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";

export default function AjouterBoiteVitesse() {
    const [data, setData] = useState({
        nom: '',
        codeCouleur:''
    });

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        await sendPost(API_URL + 'couleurs', data);
        submitButton.classList.remove("btn-loading");
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Ajouter une couleur
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <form className="card" id="form" onSubmit={submit}>
                        <div className="card-header">
                            <Link href="/couleurs" className="btn btn-primary">
                                Liste des couleurs <FaIcon icon={faList} />
                            </Link>
                        </div>
                        <div className="card-body overflow-hidden">
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">Nom</label>
                                    <input type="text" className="form-control" placeholder="blanc" required
                                           onChange={(e) => {
                                               setData({...data, nom: e.target.value,})
                                           }}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Code couleur</label>
                                    <input type="text" className="form-control" placeholder="#000000" required
                                           pattern={"^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$" }
                                           onChange={(e) => {
                                               setData({...data, codeCouleur: e.target.value,})
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className={"col-12"}>
                                    <label className="form-label">Aperçu</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FaIcon icon={faCaretRight} />
                                        </span>
                                        <div className="form-control" style={{backgroundColor: data.codeCouleur}}></div>
                                    </div>
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