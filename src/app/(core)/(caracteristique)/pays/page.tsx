'use client';
import {sendDelete, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import React from "react";
import {Column} from "primereact/column";
import Table from "@/app/(core)/ui/Table";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faEdit, faPlus, faTrashAlt, faWarning} from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "@/app/(core)/ui/ConfirmationModal";
export default function Pays()
{
    const [data] = useGet(API_URL+"pays");

    async function Delete(id: string) {
        await sendDelete(`${API_URL}pays/${id}`);
        window?.location?.reload();
    }

    function DrapeauTemplate(row: any) {
        return (
            <span className={`flag flag-country-${row.code.toLowerCase()}`}></span>
        );
    }

    function Actions(row: any) {
        return (
            <>
                <p className="p-buttonset">
                    <a href={`/pays/modifier/${row.id}`} className={"btn btn-warning btn-icon mx-1"}>
                        <FaIcon icon={faEdit}/>
                    </a>
                    <button data-bs-target={`#/pays/supprimer/${row.id}`} className={"btn btn-danger btn-icon mx-1"}
                            data-bs-toggle="modal">
                        <FaIcon icon={faTrashAlt}/>
                    </button>
                </p>
                <ConfirmationModal id={`/pays/supprimer/${row.id}`}
                                   title={"Confirmer la suppression"}
                                   message={"Supprimer le pays supprimera toutes les données qui lui sont liées."}
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
                                Les pays 
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-header">
                            <a href="/pays/ajouter" className={"btn btn-primary"}>
                                Ajouter un pays
                                <FaIcon icon={faPlus} />
                            </a>
                        </div>
                        <div className="card-body overflow-hidden">
                            <Table data={data}>
                                <Column field="nom" header="Nom" sortable filter/>
                                <Column header="Drapeau" body={DrapeauTemplate}/>
                                <Column header="Actions" body={Actions} style={{width: "10%"}}/>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}