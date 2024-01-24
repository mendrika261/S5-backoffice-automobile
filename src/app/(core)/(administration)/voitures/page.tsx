'use client';
import {sendDelete, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import React from "react";
import {Column} from "primereact/column";
import Table from "@/app/(core)/ui/Table";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faEye, faTrashAlt, faWarning} from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "@/app/(core)/ui/ConfirmationModal";

export default function Liste()
{
    const [data] = useGet(API_URL+"voitures");

    async function Delete(id: string) {
        await sendDelete(`${API_URL}voitures/${id}`);
        window?.location?.reload();
    }

    function Etat(row: any) {
        return (
            <>
                {row.etatVoiture.designation.toLowerCase().includes("bonne") ? (
                    <span className="badge badge-outline text-success">{row.etatVoiture.designation}</span>
                ) : (
                    <>
                        {row.etatVoiture.designation.toLowerCase().includes("mauvaise") ? (
                            <span className="badge badge-outline text-danger">{row.etatVoiture.designation}</span>
                        ) : (
                            <span className="badge badge-outline text-secondary">{row.etatVoiture.designation}</span>
                        )}
                    </>
                )}
            </>
        );
    }

    function Pays(row: any) {
        return (
            <>
                {row.sortieVoiture.pays.nom}
                <span className={`mx-2 flag flag-country-${row.sortieVoiture.pays.code}`} style={{height:"20px"}}></span>
            </>
        );
    }


    function Actions(row: any) {
        return (
            <>
                <p className="p-buttonset">
                    <a href={`/voitures/${row.id}`} className={"btn btn-primary btn-icon mx-1"}>
                        <FaIcon icon={faEye}/>
                    </a>
                    <button data-bs-target={`#/voitures/supprimer/${row.id}`} className={"btn btn-danger btn-icon mx-1"}
                            data-bs-toggle="modal">
                        <FaIcon icon={faTrashAlt}/>
                    </button>
                </p>
                <ConfirmationModal id={`/voitures/supprimer/${row.id}`}
                                   title={"Confirmer la suppression"}
                                   message={"Supprimer la voiture supprimera l'annonce associée"}
                                   type="danger" icon={faWarning}
                                   action={()=>{Delete(row.id)}}
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
                                Les voitures des utilisateurs
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-body overflow-hidden">
                            <Table data={data}>
                                <Column field="sortieVoiture.annee" header="Année" dataType={"numeric"} sortable filter/>
                                <Column header="Voiture" sortable filter field="sortieVoiture.modele.voiture" />
                                <Column field="sortieVoiture.pays.nom" header="Pays" body={Pays} sortable filter
                                        filterField="sortieVoiture.pays.nom" />
                                <Column header="Etat" sortable filter body={Etat} filterField="etatVoiture.designation" />
                                <Column header="Propriétaire" sortable filter field="utilisateur.nomComplet" />
                                <Column header="Actions" body={Actions} style={{width: "10%"}}/>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}