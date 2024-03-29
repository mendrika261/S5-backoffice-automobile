'use client';

import {useParams} from "next/navigation";
import {sendPost, sendPut, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import Link from "next/link";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faList, faPencilAlt, faSave} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";

export default function ModifierPays(){
    const params = useParams<{id:string}>();
    const [data, setData] = useGet(API_URL+ 'pays/' + params.id);

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        await sendPut(API_URL + 'pays/' + params.id, data);
        submitButton.classList.remove("btn-loading");
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Modifier un pays
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
                                <Link href="/pays" className="btn btn-primary">
                                    Liste des pays <FaIcon icon={faList}/>
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
                                               value={data.nom}
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
                                               value={data.code}
                                               minLength={2}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-end">
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