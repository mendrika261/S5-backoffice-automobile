'use client';
import {sendDelete, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import React from "react";
import {Column} from "primereact/column";
import Table from "@/app/(core)/ui/Table";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faEdit, faEye, faPlus, faTrashAlt, faWarning} from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "@/app/(core)/ui/ConfirmationModal";

export default function Liste()
{
    const [data] = useGet(API_URL+"sortie_voitures");

    async function Delete(id: string) {
        await sendDelete(`${API_URL}sortie_voitures/${id}`);
        window?.location?.reload();
    }

    function Pays(row: any) {
        return (
            <>
                {row.pays.nom}
                <span className={`mx-2 flag flag-country-${row.pays.code}`} style={{height:"20px"}}></span>
            </>
        );
    }


    function Actions(row: any) {
        return (
            <>
                <p className="p-buttonset">
                    <a href={`/sortie_voitures/modifier/${row.id}`} className={"btn btn-primary btn-icon mx-1"}>
                        <FaIcon icon={faEye}/>
                    </a>
                    <button data-bs-target={`#/sortie_voitures/supprimer/${row.id}`} className={"btn btn-danger btn-icon mx-1"}
                            data-bs-toggle="modal">
                        <FaIcon icon={faTrashAlt}/>
                    </button>
                </p>
                <ConfirmationModal id={`/sortie_voitures/supprimer/${row.id}`}
                                   title={"Confirmer la suppression"}
                                   message={"Supprimer la sortie de voiture supprimera toutes les données qui lui sont liées."}
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
                                Les sorties de voitures
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-header">
                            <a href="/sortie_voitures/ajouter" className={"btn btn-primary"}>
                                Ajouter une sortie de voiture
                                <FaIcon icon={faPlus} />
                            </a>
                        </div>
                        <div className="card-body overflow-hidden">
                            <Table data={data}>
                                <Column field="annee" header="Année" sortable filter/>
                                <Column field="modele.marque.nom" header="Marque" sortable filter/>
                                <Column field="modele.nom" header="Modèle" sortable filter/>
                                <Column field="pays.nom" header="Pays" body={Pays} sortable filter/>
                                <Column field="boiteVitesse.nom" header="Boite de vitesse" sortable filter/>
                                <Column field="energie.nom" header="Energie" sortable filter/>
                                <Column field="nbrPlace" header="Place" sortable filter/>
                                <Column header="Actions" body={Actions} style={{width: "10%"}}/>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}