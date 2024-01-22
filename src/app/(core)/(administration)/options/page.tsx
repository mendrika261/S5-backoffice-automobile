'use client';
import {sendDelete, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import React from "react";
import {Column} from "primereact/column";
import Table from "@/app/(core)/ui/Table";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faEdit, faPlus, faTrashAlt, faWarning} from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "@/app/(core)/ui/ConfirmationModal";

export default function Options()
{
    const [data] = useGet(API_URL+"options");

    async function Delete(id: string) {
        await sendDelete(`${API_URL}options/${id}`);
        window?.location?.reload();
    }

    function ValeurTemplate(row: any) {
        return (
            <>
                {row.valeurs.split(",").map((valeur: any, index: number) => (
                    <span key={index} className="badge badge-outline text-azure me-1">{valeur}</span>
                ))}
            </>
        );
    }

    function Actions(row: any) {
        return (
            <>
                <p className="p-buttonset">
                    <a href={`/options/modifier/${row.id}`} className={"btn btn-warning btn-icon mx-1"}>
                        <FaIcon icon={faEdit}/>
                    </a>
                    <button data-bs-target={`#/options/supprimer/${row.id}`} className={"btn btn-danger btn-icon mx-1"}
                            data-bs-toggle="modal">
                        <FaIcon icon={faTrashAlt}/>
                    </button>
                </p>
                <ConfirmationModal id={`/options/supprimer/${row.id}`}
                                   title={"Confirmer la suppression"}
                                   message={"Supprimer l'option supprimera toutes les données qui lui sont liées."}
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
                                Les options dans une voiture
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-header">
                            <a href="/options/ajouter" className={"btn btn-primary"}>
                                Ajouter une option
                                <FaIcon icon={faPlus} />
                            </a>
                        </div>
                        <div className="card-body overflow-hidden">
                            <Table data={data}>
                                <Column field="designation" header="Designation" sortable filter/>
                                <Column header="Valeurs possible" body={ValeurTemplate} sortable filter/>
                                <Column field="typeValeur" header="Type" sortable filter/>
                                <Column header="Actions" body={Actions} style={{width: "10%"}}/>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}