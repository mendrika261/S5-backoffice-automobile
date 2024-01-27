"use client";

import GlobalNumber from "@/app/(core)/(stats)/ui/globalNumber";
import {Chart} from "primereact/chart";
import React, {useEffect, useState} from "react";
import GlobalNumberIcon from "@/app/(core)/(stats)/ui/globalNumberIcon";
import {
    faBullhorn,
    faCar,
    faCarBurst,
    faCashRegister,
    faHistory,
    faUser,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import Table from "@/app/(core)/ui/Table";
import {Column} from "primereact/column";
import {useGet} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import FaIcon from "@/app/(core)/ui/FaIcon";

export default function Home() {
    const [chartOptions, setChartOptions] = useState({});
    const [commission] = useGet(API_URL+"commissions");
    const [chiffreAffaire] = useGet(API_URL+"voitures/chiffre-affaires/stats");
    const [annonceData] = useGet(API_URL+"voitures/annonces/stats");
    const [marqueData] = useGet(API_URL+"voitures/marques/stats");
    const [modeleData] = useGet(API_URL+"voitures/modeles/stats");
    const [anneeData] = useGet(API_URL+"voitures/annees/stats");
    const [paysData] = useGet(API_URL+"voitures/pays/stats");
    const [etatData] = useGet(API_URL+"voitures/etat/stats");
    const [couleurData] = useGet(API_URL+"voitures/couleurs/stats");
    const [boiteData] = useGet(API_URL+"voitures/boite-vitesses/stats");
    const [energiesData] = useGet(API_URL+"voitures/energies/stats");
    const [enLigneData] = useGet(API_URL+"utilisateurs/en-ligne/stats");
    const [enAttenteData] = useGet(API_URL+"annonces/en-attente/stats");
    const [venteData] = useGet(API_URL+"voitures/ventes/stats");
    const [expireData] = useGet(API_URL+"annonces/expire/stats");
    const [utilisateurNbData] = useGet(API_URL+"utilisateurs/stats/nombre");
    const [voitureNbData] = useGet(API_URL+"voitures/stats/nombre");
    const [annonceNbData] = useGet(API_URL+"annonces/stats/nombre");
    const [venteNbData] = useGet(API_URL+"ventes/stats/nombre");

    useEffect(() => {
        setChartOptions({});
    }, []);

  return (
      <>
          <div className="page-header d-print-none">
              <div className="container-xl">
                  <div className="row g-2 align-items-center">
                      <div className="col">
                          <div className="page-pretitle">
                              Statistiques
                          </div>
                          <h2 className="page-title">
                              Vue globale
                          </h2>
                      </div>
                      <div className="col-auto ms-auto d-print-none">
                      </div>
                  </div>
              </div>
          </div>
          <div className="page-body">
              <div className="container-xl">
                  <div className="row row-cards">
                      {enLigneData &&
                      <GlobalNumber
                          titre={"Utilisateur"} pourcentage={enLigneData[2]} description="En ligne"
                          nombre={enLigneData[0]} nombreTotal={enLigneData[1]}
                      />
                      }
                      {enAttenteData &&
                      <GlobalNumber
                          titre={"Annonce"} pourcentage={enAttenteData[2]} description="En attente"
                          nombre={enAttenteData[0]} nombreTotal={enAttenteData[1]}
                      />
                      }
                      {venteData &&
                      <GlobalNumber
                          titre={"Vente"} pourcentage={venteData[2]} description={"Annonce conclue"}
                          nombre={venteData[0]} nombreTotal={venteData[1]}
                      />
                      }
                      {expireData &&
                      <GlobalNumber
                          titre={"Validation annonce"} pourcentage={expireData[2]} description={"Validé"}
                          nombre={expireData[0]} nombreTotal={expireData[1]}
                      />}


                      {voitureNbData &&
                      <GlobalNumberIcon
                              titre={`${voitureNbData[1]} voitures`} description={`${voitureNbData[0]} nouvelles voitures (première main)`}
                              icon={faCar} color={"yellow"}
                      />}
                      {utilisateurNbData &&
                      <GlobalNumberIcon
                          titre={`${utilisateurNbData[1]} utilisateurs`} description={`${utilisateurNbData[0]} profil vendeurs (avec voiture)`}
                          icon={faUsers} color={"green"}
                      />}
                      {annonceNbData &&
                      <GlobalNumberIcon
                          titre={`${annonceNbData[1]} annonces`} description={`${annonceNbData[0]} en cours`}
                          icon={faBullhorn} color={"info"}
                      />}
                      {venteNbData &&
                      <GlobalNumberIcon
                          titre={`${venteNbData[0]} ventes établies`} description={`Commission de MGA ${venteNbData[1]}`}
                          icon={faCashRegister} color={"purple"}
                      />
                      }


                      <div className="col-4">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Plage de commission actuelle MGA</h3>
                                  <div className="card-actions">
                                      <a href="/commissions" className="btn btn-info btn-icon">
                                          <FaIcon icon={faHistory}/>
                                      </a>
                                  </div>
                              </div>
                              <div className="card-body card-body-scrollable card-body-scrollable-shadow">
                                  <Table data={commission} props={{paginator: false}}>
                                      <Column field="minPrix" header="Prix min" dataType="numeric" sortable
                                              align="right"/>
                                      <Column field="maxPrix" header="Prix max" dataType="numeric" sortable
                                              align="right"/>
                                      <Column field="pourcentage" header="Pourcentage" dataType="numeric" sortable
                                              align="right"/>
                                  </Table>
                              </div>
                          </div>
                      </div>
                      <div className="col-8">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Chiffres d&apos;affaire 12 derniers mois</h3>
                              </div>
                              <div className="card-body">
                                  <Chart type="bar" data={chiffreAffaire} options={chartOptions}/>
                              </div>
                          </div>
                      </div>


                      <div className="col-12">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Nombre d&apos;annonces affichés 30 derniers jours</h3>
                              </div>
                              <div className="card-body">
                                  <Chart type="line" data={annonceData} options={chartOptions}/>
                              </div>
                          </div>
                      </div>

                      <div className="col-4">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Top 10 marques présents</h3>
                              </div>
                              <div className="card-body">
                                  <Chart type="pie" data={marqueData} options={chartOptions}/>
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Top 10 modèles présents</h3>
                              </div>
                              <div className="card-body">
                                  <Chart type="pie" data={modeleData} options={chartOptions}/>
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Top 10 années de sortie des voitures</h3>
                              </div>
                              <div className="card-body">
                                  <Chart type="pie" data={anneeData} options={chartOptions}/>
                              </div>
                          </div>
                      </div>


                      <div className="col-9">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Pays de provenance des voitures</h3>
                              </div>
                              <div className="card-body">
                                  <Chart type="bar" data={paysData} options={chartOptions}/>
                              </div>
                          </div>
                      </div>
                      <div className="col-3">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Etats des voitures</h3>
                              </div>
                              <div className="card-body">
                                  <Chart type="pie" data={etatData} options={chartOptions}/>
                              </div>
                          </div>
                      </div>


                      <div className="col-4">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Boite de vitesse des voitures</h3>
                              </div>
                              <div className="card-body">
                                  <Chart type="doughnut" data={boiteData} options={chartOptions}/>
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Couleur des voitures</h3>
                              </div>
                              <div className="card-body">
                                  <Chart type="polarArea" data={couleurData} options={chartOptions}/>
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Energie des voitures</h3>
                              </div>
                              <div className="card-body">
                                  <Chart type="pie" data={energiesData} options={chartOptions}/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
