'use client';
import {sendDelete, sendPut, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import React from "react";
import {Column} from "primereact/column";
import Table from "@/app/(core)/ui/Table";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {
    faCheck, faCoins,
    faEye,
    faLink,
    faList,
    faPlus,
    faTrashAlt,
    faWarning,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "@/app/(core)/ui/ConfirmationModal";

export default function Liste()
{
    const [data] = useGet(API_URL+"annonces/en-attente");

    async function Refuser(id: string) {
        await sendPut(`${API_URL}annonces/${id}/refuser`, {});
        window?.location?.reload();
    }

    async function Valider(id: string) {
        await sendPut(`${API_URL}annonces/${id}/valider`, {});
        window?.location?.reload();
    }

    function Voiture(row: any) {
        return (
            <>
                {row.voiture.sortieVoiture.modele.voiture}
                <a href={`/voitures/${row.voiture.id}`} className="btn btn-icon btn-pill btn-outline-info btn-sm ms-2"
                    target="_blank">
                    Details
                    <FaIcon icon={faLink}/>
                </a>
            </>
        );
    }


    function Actions(row: any) {
        return (
            <>
                <p className="p-buttonset">
                    <button className={"btn btn-success btn-icon mx-1"} onClick={()=>{Valider(row.id)}}>
                        <FaIcon icon={faCheck}/>
                    </button>
                    <button data-bs-target={`#/annonces/refuser/${row.id}`} className={"btn btn-danger btn-icon mx-1"}
                            data-bs-toggle="modal">
                        <FaIcon icon={faXmark}/>
                    </button>
                </p>
                <ConfirmationModal id={`/annonces/refuser/${row.id}`}
                                   title={"Confirmer le refus de l'annonce"}
                                   message={"L'utilisateur sera notifié et l'annonce se mettra en archive"}
                                   type="danger" icon={faWarning}
                                   action={()=>{Refuser(row.id)}}
                                   actionButton={"Refuser"} />
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
                                Les annonces en attente de validation
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-header">
                            <a href="/annonces" className={"btn btn-primary"}>
                                Liste des annonces
                                <FaIcon icon={faList}/>
                            </a>
                            <a href="/commissions" className={"btn btn-info mx-2"} target={"_blank"}>
                                Voir/modifier commissions
                                <FaIcon icon={faCoins}/>
                            </a>
                        </div>
                        <div className="card-body overflow-hidden">
                            <Table data={data}>
                                <Column field="date" header="Date de demande" sortable filter/>
                                <Column filterField="voiture.sortieVoiture.modele.voiture"
                                        body={Voiture}
                                        header="Voiture" sortable filter/>
                                <Column field="prix" header="Prix" align={"right"} dataType={"numeric"} sortable
                                        filter/>
                                <Column field="commission.pourcentage" header="Commission (%)" align={"right"}
                                        dataType={"numeric"} sortable filter/>
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