'use client';
import {useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import React from "react";
import {Column} from "primereact/column";
import Table from "@/app/(core)/ui/Table";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faEdit, faPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
export default function Marques()
{
    const [data] = useGet(API_URL+"marques");

    function Actions() {
        return (
            <p className="p-buttonset">
                <a href={""} className={"btn btn-warning btn-icon mx-1"}>
                    <FaIcon icon={faEdit} />
                </a>
                <a href={""} className={"btn btn-danger btn-icon mx-1"}>
                    <FaIcon icon={faTrashAlt} />
                </a>
            </p>
        );
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Les marques de voiture
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-header">
                            <a href="/marques/ajouter" className={"btn btn-primary"}>
                                Ajouter une marque
                                <FaIcon icon={faPlus} />
                            </a>
                        </div>
                        <div className="card-body overflow-hidden">
                            <Table data={data}>
                                <Column field="id" header="Id" sortable filter/>
                                <Column field="nom" header="Nom" sortable filter/>
                                <Column header="Actions" body={Actions} style={{width: "10%"}}/>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}