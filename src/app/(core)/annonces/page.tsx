'use client';
import {sendDelete, sendPut, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import React from "react";
import {Column} from "primereact/column";
import Table from "@/app/(core)/ui/Table";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {
    faBullhorn,
    faCheck,
    faEye, faHourglassEnd,
    faLink,
    faList,
    faPlus,
    faTrashAlt, faUpRightFromSquare,
    faWarning,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "@/app/(core)/ui/ConfirmationModal";

export default function Liste()
{
    const [data] = useGet(API_URL+"annonces");

    async function Terminer(id: string) {
        await sendPut(`${API_URL}annonces/${id}/terminer`, {});
        window?.location?.reload();
    }

    async function Supprimer(id: string) {
        await sendDelete(`${API_URL}annonces/${id}`);
        window?.location?.reload();
    }

    function Voiture(row: any) {
        return (
            <>
                {row.voiture.sortieVoiture.modele.voiture}
                <a href={`/voitures/${row.voiture.id}`} className="btn btn-icon btn-pill btn-outline-info btn-sm ms-2"
                    target="_blank">
                    <FaIcon icon={faUpRightFromSquare}/>
                </a>
            </>
        );
    }

    function Etat(row: any) {
        return (
            <>
                {row.etatLibelle.toLowerCase().includes("en attente") ? (
                    <>
                        <span className="badge bg-yellow text-yellow-fg">{row.etatLibelle}</span>
                    </>
                ) : (
                    <>
                        {row.etatLibelle.toLowerCase().includes("validé") ? (
                            <>
                                <span className="badge bg-green text-green-fg">
                                    {row.etatLibelle}</span> par {row.validateur.nomComplet}
                            </>
                        ) : (
                            <>
                                {row.etatLibelle.toLowerCase().includes("expiré") ? (
                                    <span className="badge bg-purple text-purple-fg">{row.etatLibelle}</span>
                                ) : (
                                    <>
                                        {row.etatLibelle.toLowerCase().includes("refusé") ? (
                                            <>
                                                <span className="badge bg-red text-red-fg">
                                                {row.etatLibelle}
                                                </span> par {row.validateur.nomComplet}
                                            </>
                                        ) : (
                                            <span className="badge bg-cyan text-cyan-fg">{row.etatLibelle}</span>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </>
                )}
            </>
        );
    }

    function DateEtat(row: any) {
        return (
            <>
                {row.etatLibelle.toLowerCase().includes("en attente") ? (
                    <span className="badge badge-outline text-yellow">
                        {new Date(row.date).toLocaleString()}
                    </span>
                ) : (
                    <>
                        {row.etatLibelle.toLowerCase().includes("validé") ? (
                            <>
                                <span className="badge badge-outline text-green">
                                    {new Date(row.dateValidation).toLocaleString()}
                                </span>
                            </>
                        ) : (
                            <>
                                {row.etatLibelle.toLowerCase().includes("expiré") ? (
                                    <span className="badge badge-outline text-purple">
                                        {new Date(row.dateFin).toLocaleString()}
                                    </span>
                                ) : (
                                    <>
                                        {row.etatLibelle.toLowerCase().includes("refusé") ? (
                                            <>
                                                <span className="badge badge-outline text-red">
                                                    {new Date(row.dateValidation).toLocaleString()}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="badge badge-outline text-cyan">Inconnu</span>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </>
                )}
            </>
        );
    }


    function Actions(row: any) {
        return (
            <>
                <p className="p-buttonset">
                    <button data-bs-target={`#/annonces/terminer/${row.id}`} className={"btn btn-warning btn-icon mx-1"}
                            data-bs-toggle="modal">
                        <FaIcon icon={faHourglassEnd}/>
                    </button>
                    <button data-bs-target={`#/annonces/supprimer/${row.id}`} className={"btn btn-danger btn-icon mx-1"}
                            data-bs-toggle="modal">
                        <FaIcon icon={faTrashAlt}/>
                    </button>
                </p>
                <ConfirmationModal id={`/annonces/terminer/${row.id}`}
                                   title={"Terminer l'annonce"}
                                   message={"L'annonce se mettra en état expirée mais ne sera pas supprimée"}
                                   type="warning" icon={faWarning}
                                   action={()=>{Terminer(row.id)}}
                                   actionButton={"Terminer"} />
                <ConfirmationModal id={`/annonces/supprimer/${row.id}`}
                                   title={"Confirmer le refus de l'annonce"}
                                   message={"L'annonce sera retirée et supprimée définitivement"}
                                   type="danger" icon={faWarning}
                                   action={()=>{Supprimer(row.id)}}
                                   actionButton={"Supprimer"} />
            </>
        );
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Les annonces
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-header">
                            <a href="/annonces/en-attente" className={"btn btn-cyan"}>
                                Régulation des annonces
                                <FaIcon icon={faBullhorn}/>
                            </a>
                        </div>
                        <div className="card-body overflow-hidden">
                            <Table data={data}>
                                <Column header="Date" sortable
                                        body={DateEtat} />
                                <Column filterField="etatLibelle" header="Etat" sortable filter
                                    body={Etat} />
                                <Column filterField="voiture.sortieVoiture.modele.voiture"
                                        body={Voiture}
                                        header="Voiture" sortable filter/>
                                <Column field="prix" header="Prix" align={"right"} dataType={"numeric"} sortable
                                        filter/>
                                <Column field="valeurCommission" header="Valeur commission" align={"right"}
                                        dataType={"numeric"} sortable filter/>
                                <Column header="Actions" body={Actions} style={{width: "10%"}}/>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}