"use client";

import Link from "next/link";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faList, faSave} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {sendPost} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";

export default function AjouterPays() {
    const [data, setData] = useState({
        nom: '',
        code: '',
    });

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        await sendPost(API_URL + 'pays', data);
        submitButton.classList.remove("btn-loading");
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Ajouter un pays
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <form className="card" id="form" onSubmit={submit}>
                        <div className="card-header">
                            <Link href="/pays" className="btn btn-primary">
                                Liste des pays <FaIcon icon={faList} />
                            </Link>
                        </div>
                        <div className="card-body overflow-hidden">
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className="form-label">Nom</label>
                                    <input type="text" className="form-control" placeholder="Madagascar" required
                                           onChange={(e) => {
                                               setData({...data, nom: e.target.value,})
                                           }}
                                           minLength={6}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-1">
                                    <label className="form-label">Drapeau</label>
                                    <span className={`flag flag-country-${data.code.toLowerCase()}`}></span>
                                </div>
                                <div className="col-11">
                                    <label className="form-label">Code</label>
                                    <input type="text" className="form-control" placeholder="mg" required
                                           onChange={(e) => {
                                               setData({...data, code: e.target.value,})
                                           }}
                                           minLength={2}/>
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