'use client'

import FaIcon from "@/app/(core)/ui/FaIcon";
import {faList, faPlus, faSave} from "@fortawesome/free-solid-svg-icons";
import React, {ChangeEvent, useEffect, useState} from "react";
import {getFile, sendPost, upload_file} from "@/app/(core)/utils/hooks";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Fichiers()
{
    const [file, setFile] = useState<File | null>(null);
    const [type, setType] = useState<string>("");
    const [loading, setLoading] = useState(0);
    const [data, setData] = useState({
        etat: 0,
        lien: '',
    });
    const [url, setUrl] = useState("");

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;

        submitButton.classList.add("btn-loading");
        if(file!=null)
        {
            const {lien, type} = await upload_file(file, data, setLoading);
            setUrl(await getFile(lien));
            setType(type);
        }
        submitButton.classList.remove("btn-loading");
    }

    return <>
        <div className="page-header d-print-none">
            <div className="container-xl">
                <div className="row g-2 align-items-center">
                    <div className="col">
                        <h2 className="page-title">
                            Ajouter un fichier
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="page-body">
            <div className="container-xl">
                <form className="card" id="form" onSubmit={submit}>
                    <div className="card-body overflow-hidden">
                        <div className="alert alert-info" role="alert">
                            <div className="d-flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon alert-icon" width="24"
                                         height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                        <path d="M12 9h.01"></path>
                                        <path d="M11 12h1v4h1"></path>
                                    </svg>
                                </div>
                                <div>
                                    Vous pouvez ajouter un fichier ici et recevoir son lien publique pour l&apos;inclure
                                    dans d&apos;autres pages.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fichier</label>
                            <input type="file" className="form-control" required
                                   onChange={(e) => {setFile(e.target.files![0])}}/>
                        </div>
                        <div className="progress mb-2">
                            <div className="progress-bar" style={{width: `${loading}%`}} role="progressbar">
                                <span className="visually-hidden">{loading}% Complete</span>
                            </div>
                        </div>
                        {(url != null && url != "") &&
                            <>
                                <div className="mb-2">
                                    <div className="input-icon">
                                        <label className="form-label">Type: {type}</label>
                                        <input type="text" value={url}
                                               className="form-control" placeholder="Search…" readOnly={true}/>
                                        <span className="input-icon-addon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24"
                                                 height="24"
                                                 viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                 strokeLinecap="round" strokeLinejoin="round"><path stroke="none"
                                                                                                    d="M0 0h24v24H0z"
                                                                                                    fill="none"></path><path
                                                d="M15 3v4a1 1 0 0 0 1 1h4"></path><path
                                                d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"></path><path
                                                d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-2 h-100">
                                    { type.startsWith("image") &&
                                        <Image
                                        src={url}
                                        alt="image"
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                    />}
                                </div>
                            </>
                        }
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <button type="submit" className="btn btn-success" id="submit">
                            Enregistrer <FaIcon icon={faSave}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>;
}