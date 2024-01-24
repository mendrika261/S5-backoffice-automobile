'use client';
import {sendDelete, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import React from "react";
import {Column} from "primereact/column";
import Table from "@/app/(core)/ui/Table";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faCalendarDay, faEdit} from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "@/app/(core)/ui/ConfirmationModal";
export default function Historique()
{
    const [data] = useGet(API_URL+"commission_historiques");

    function Status(rowData: any) {
        if (new Date(rowData.dateApplication) < new Date()) {
            return (
                <span className="badge badge-outline text-green">Appliquée</span>
            );
        }
        return (
            <span className="badge badge-outline text-yellow">En attente</span>
        );
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Historique des changements de commissions
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-header">
                            <a href="/commissions" className={"btn btn-primary"}>
                                Commission actuelle
                                <FaIcon icon={faCalendarDay}/>
                            </a>
                            <a href="/commissions/modifier" className={"btn btn-warning mx-2"}>
                                Modifier la commission
                                <FaIcon icon={faEdit}/>
                            </a>
                        </div>
                        <div className="card-body overflow-hidden">
                            <Table data={data}>
                                <Column header="Status" body={Status} />
                                <Column field="dateApplication" header="Date d'application" dataType="date" sortable filter/>
                                <Column field="minPrix" header="Prix min" dataType="numeric" sortable filter/>
                                <Column field="maxPrix" header="Prix max" dataType="numeric" sortable filter/>
                                <Column field="pourcentage" header="Pourcentage" dataType="numeric" sortable filter/>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}