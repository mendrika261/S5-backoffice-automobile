'use client';
import {sendDelete, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import React from "react";
import {Column} from "primereact/column";
import Table from "@/app/(core)/ui/Table";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {
    faClockRotateLeft,
    faEdit
} from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "@/app/(core)/ui/ConfirmationModal";
export default function Liste()
{
    const [data] = useGet(API_URL+"commissions");

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Commissions appliquées actuellement
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-header">
                            <a href="/commissions/historique" className={"btn btn-secondary"}>
                                Historiques des changements
                                <FaIcon icon={faClockRotateLeft}/>
                            </a>
                            <a href="/commissions/modifier" className={"btn btn-warning mx-2"}>
                                Modifier la commission
                                <FaIcon icon={faEdit}/>
                            </a>
                        </div>
                        <div className="card-body overflow-hidden">
                            <Table data={data}>
                                <Column field="minPrix" header="Prix min" dataType="numeric" sortable filter
                                    align="right"/>
                                <Column field="maxPrix" header="Prix max" dataType="numeric" sortable filter
                                    align="right"/>
                                <Column field="pourcentage" header="Pourcentage" dataType="numeric" sortable filter
                                    align="right"/>
                                <Column header="Commission minimum" dataType="numeric" sortable filter align="right"
                                        body={(rowData: any) => {
                                    return (
                                        <span>{rowData.minPrix * rowData.pourcentage / 100}</span>
                                    );
                                }}/>
                                <Column header="Commission maximum" dataType="numeric" sortable filter align="right"
                                        body={(rowData: any) => {
                                    return (
                                        <span>{rowData.maxPrix * rowData.pourcentage / 100}</span>
                                    );
                                }}/>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}