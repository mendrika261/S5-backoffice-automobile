"use client";

import Link from "next/link";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {
    faArrowRight,
    faCalendarDay,
    faCaretRight,
    faClockRotateLeft, faEdit,
    faList,
    faSave
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {sendPost} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";

export default function Modifier() {
    const [data, setData] = useState({
        maxPrix: "",
        minPrix: "",
        pourcentage: "",
        dateApplication: ""
    });

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        await sendPost(API_URL + 'commissions', data);
        submitButton.classList.remove("btn-loading");
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Modifier une commission
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <form className="card" id="form" onSubmit={submit}>
                        <div className="card-header">
                            <a href="/commissions" className={"btn btn-info"}>
                                Commission actuelle
                                <FaIcon icon={faCalendarDay}/>
                            </a>
                            <a href="/commissions/historique" className={"btn btn-secondary mx-2"}>
                                Historiques des changements
                                <FaIcon icon={faClockRotateLeft}/>
                            </a>
                        </div>
                        <div className="card-body overflow-hidden">
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label className="form-label">Prix minimum</label>
                                    <input type="number" className="form-control" placeholder="0" required
                                           min={0} step={0.01}
                                           onChange={(e) => {
                                               setData({...data, minPrix: e.target.value,})
                                           }}
                                    />
                                </div>
                                <div className="col-4">
                                    <label className="form-label">Prix maximum</label>
                                    <input type="number" className="form-control" placeholder="0" required
                                           min={0} step={0.01}
                                           onChange={(e) => {
                                               setData({...data, maxPrix: e.target.value,})
                                           }}
                                    />
                                </div>
                                <div className="col-4">
                                    <label className="form-label">Pourcentage</label>
                                    <input type="number" className="form-control" placeholder="0" required
                                           min={0} step={0.01}
                                           onChange={(e) => {
                                               setData({...data, pourcentage: e.target.value,})
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className="form-label">Date d&apos;application</label>
                                    <input type="datetime-local" className="form-control" placeholder="0" required
                                           onChange={(e) => {
                                               setData({...data, dateApplication: e.target.value,})
                                           }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end">
                            <button type="submit" className="btn btn-success" id="submit">
                                Enregistrer <FaIcon icon={faEdit}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}