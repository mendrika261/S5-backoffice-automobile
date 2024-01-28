'use client';
import {sendDelete, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import React, {useEffect, useState} from "react";
import {Column} from "primereact/column";
import Table from "@/app/(core)/ui/Table";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {
    faClockRotateLeft,
    faEdit
} from "@fortawesome/free-solid-svg-icons";

function isValidDate(date: any) {
    return !isNaN(date.getTime());
}

export default function Liste()
{
    const [date, setDate] = useState(new Date());
    const [data, setData] = useGet(API_URL + "commissions?dateTime="
        + (isValidDate(date) ? date.toISOString().slice(0,16) : new Date().toISOString().slice(0,16)));

    useEffect(() => {
        setData(null);
    }, [date, setData]);
    
    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Commissions appliquées le {date.toLocaleDateString()} à {date.toLocaleTimeString()}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card mb-3">
                        <div className="card-body">
                            <form>
                                <label>Voir la commission d&apos;une autre date et heure</label>
                                <input type="datetime-local" className="form-control" name="date"
                                       value={date.toISOString().slice(0, 16)}
                                       onChange={(e) => {
                                           setDate(new Date(e.target.value));
                                       }}
                                       required/>
                            </form>
                        </div>
                    </div>

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
                                        body={(rowData: any) => {return (<span>{rowData.minPrix.toLocaleString()}</span>);}}
                                    align="right"/>
                                <Column field="maxPrix" header="Prix max" dataType="numeric" sortable filter
                                        body={(rowData: any) => {return (<span>{rowData.maxPrix.toLocaleString()}</span>);}}
                                    align="right"/>
                                <Column field="pourcentage" header="Pourcentage" dataType="numeric" sortable filter
                                        body={(rowData: any) => {return (<span>{rowData.pourcentage.toLocaleString()}%</span>);}}
                                    align="right"/>
                                <Column header="Commission minimum" dataType="numeric" sortable filter align="right"
                                        body={(rowData: any) => {
                                    return (
                                        <span>{(rowData.minPrix * rowData.pourcentage / 100).toLocaleString()}</span>
                                    );
                                }}/>
                                <Column header="Commission maximum" dataType="numeric" sortable filter align="right"
                                        body={(rowData: any) => {
                                    return (
                                        <span>{(rowData.maxPrix * rowData.pourcentage / 100).toLocaleString()}</span>
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