'use client';

import {useParams} from "next/navigation";
import {sendPost, sendPut, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import Link from "next/link";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faList, faPencilAlt, faSave} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";

export default function Modifier(){
    const params = useParams<{id:string}>();
    const [data, setData] = useGet(API_URL+ 'paiements/' + params.id);

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        await sendPut(API_URL + 'paiements/' + params.id, data);
        submitButton.classList.remove("btn-loading");
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Modifier un mode de paiement
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
                                <Link href="/paiements" className="btn btn-primary">
                                    Liste des états de paiement <FaIcon icon={faList} />
                                </Link>
                            </div>
                            <div className="card-body overflow-hidden">
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <label className="form-label">Désignation</label>
                                        <input type="text" className="form-control" placeholder="chèque" required
                                               onChange={(e) => {
                                                   setData({...data, designation: e.target.value,})}}
                                               value={data.designation}
                                        />
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