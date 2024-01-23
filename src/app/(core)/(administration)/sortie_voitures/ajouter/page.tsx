"use client";

import Link from "next/link";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faList, faSave} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {sendPost, useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";

export default function Ajouter() {
    const [modeles, setModeles] = useGet(API_URL+"modeles");
    const [energies, setEnergies] = useGet(API_URL+"energies");
    const [boiteVitesses, setBoiteVitesses] = useGet(API_URL+"boite_vitesses");
    const [paysList, setPaysList] = useGet(API_URL+"pays");
    const [data, setData] = useState({
        modele: '',
        energie: '',
        boiteVitesse: '',
        pays: '',
        annee: '',
        vitesseMax: '',
        consommation: '',
        puissance: '',
        nbrPlace: '',
        nbrPorte: '',
    });

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        await sendPost(API_URL + 'sortie_voitures', data);
        submitButton.classList.remove("btn-loading");
    }

    return (
        <>
            <div className="page-header d-print-none">
                <div className="container-xl">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <h2 className="page-title">
                                Ajouter une sortie de voiture
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <form className="card" id="form" onSubmit={submit}>
                        <div className="card-header">
                            <Link href="/sortie_voitures" className="btn btn-primary">
                                Liste des sorties de voiture <FaIcon icon={faList}/>
                            </Link>
                        </div>
                        <div className="card-body overflow-hidden">
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className="form-label">Modèle</label>
                                    <select className="form-select select2"
                                            onChange={(e) =>
                                                setData({...data, modele: e.target.value})}>
                                        <option>Choisir un modèle</option>
                                        {modeles && modeles.map((modele: any) => (
                                            <option key={modele.id} value={modele.id}>
                                                {modele.marque.nom} - {modele.nom}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">Energie</label>
                                    <select className="form-select select2"
                                            onChange={(e) =>
                                                setData({...data, energie: e.target.value})}>
                                        <option>Choisir une énergie</option>
                                        {energies && energies.map((energie: any) => (
                                            <option key={energie.id} value={energie.id}>
                                                {energie.nom}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Boite de vitesse</label>
                                    <select className="form-select select2"
                                            onChange={(e) =>
                                                setData({...data, boiteVitesse: e.target.value})}>
                                        <option>Choisir une boite de vitesse</option>
                                        {boiteVitesses && boiteVitesses.map((boiteVitesse: any) => (
                                            <option key={boiteVitesse.id} value={boiteVitesse.id}>
                                                {boiteVitesse.nom}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">Pays</label>
                                    <select className="form-select select2"
                                            onChange={(e) =>
                                                setData({...data, pays: e.target.value})}>
                                        <option>Choisir un pays</option>
                                        {paysList && paysList.map((pays: any) => (
                                            <option key={pays.id} value={pays.id}>
                                                {pays.nom}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Année</label>
                                    <input type="number" className="form-control" placeholder="2000" required
                                           min={1900} max={new Date().getFullYear()}
                                           onChange={(e) => {
                                               setData({...data, annee: e.target.value,})
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">Nombre de places</label>
                                    <input type="number" className="form-control" placeholder="5" required
                                           min={1}
                                           onChange={(e) => {
                                               setData({...data, nbrPlace: e.target.value,})
                                           }}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Nombre de portes</label>
                                    <input type="number" className="form-control" placeholder="5" required
                                           min={1}
                                           onChange={(e) => {
                                               setData({...data, nbrPorte: e.target.value,})
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label className="form-label">Vitesse max</label>
                                    <input type="number" className="form-control" placeholder="200" required
                                           min={0}
                                           onChange={(e) => {
                                               setData({...data, vitesseMax: e.target.value,})
                                           }}
                                    />
                                </div>
                                <div className="col-4">
                                    <label className="form-label">Consommation (L/100km)</label>
                                    <input type="number" className="form-control" placeholder="5.5" required
                                           min={0} step={0.01}
                                           onChange={(e) => {
                                               setData({...data, consommation: e.target.value,})
                                           }}
                                    />
                                </div>
                                <div className="col-4">
                                    <label className="form-label">Puissance (chevaux)</label>
                                    <input type="number" className="form-control" placeholder="200" required
                                           min={0}
                                           onChange={(e) => {
                                               setData({...data, puissance: e.target.value,})
                                           }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end">
                            <button type="submit" className="btn btn-success" id="submit">
                                Enregistrer <FaIcon icon={faSave}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}