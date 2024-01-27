'use client'
import {useEffect, useState} from "react";
import {sendPostConnexion} from "@/app/(core)/utils/hooks";
import Image from "next/image";
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faLaptop} from "@fortawesome/free-solid-svg-icons";

export default function Connexion()
{
    const [data,setData] =useState(
        {
            email:'',
            motDePasse:''
        }
    )

    function showPassword() {
        let passwordInput = document.getElementById("password");
        if(passwordInput == null)
            return;
        if(passwordInput.getAttribute("type") == "password") {
            passwordInput.setAttribute("type", "text")
        } else {
            passwordInput.setAttribute("type", "password")
        }
    }

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        await sendPostConnexion(data);
        submitButton.classList.remove("btn-loading");
    }

    useEffect(() => {
        if(localStorage?.getItem('token') != null)
            window.location.href = "/";
    }, []);

    return (
        <>
            <div className="page page-center">
                <div className="container container-normal py-4">
                    <div className="row align-items-center g-4">
                        <div className="col-lg">
                            <div className="container-tight">
                                <div className="text-center mb-4">
                                    <a href=".." className="navbar-brand navbar-brand-autodark"><img
                                        src="/static/logo.svg" height="36" alt=""/></a>
                                </div>
                                <div className="card card-md">
                                    <div className="card-body">
                                        <h2 className="h2 text-center mb-4">Page d&apos;administration</h2>
                                        <form method="post" id="form" onSubmit={submit}>
                                            <div className="mb-3">
                                                <label className="form-label">Adresse email</label>
                                                <input type="email" className="form-control"
                                                       onChange={(e) => setData({...data, email: e.target.value})}
                                                       placeholder="votre@email.com" />
                                            </div>
                                            <div className="mb-2">
                                                <label className="form-label">
                                                    Mot de passe
                                                </label>
                                                <div className="input-group input-group-flat">
                                                    <input type="password" className="form-control"
                                                           placeholder="xxxxxxxx" id="password"
                                                              onChange={(e) => setData({...data, motDePasse: e.target.value})}
                                                           />
                                                    <span className="input-group-text">
                                                      <a href="#" className="link-secondary" title="Afficher mot de passe"
                                                         data-bs-toggle="tooltip" onClick={showPassword}>
                                                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                                               viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                               strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"
                                                                                                                  fill="none"/><path
                                                              d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path
                                                              d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>
                                                      </a>
                                                    </span>
                                                </div>
                                            </div>
                                            {/*
                                            <div className="mb-2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <span className="form-check-label">Enregistrer la connexion</span>
                                                </label>
                                            </div>*/}
                                            <div className="form-footer">
                                                <button type="submit" className="btn btn-primary w-100" id="submit">
                                                    Se connecter
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="hr-text">OU</div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col"><a href="/" className="btn w-100">
                                                Page publique
                                                <FaIcon icon={faLaptop}/>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg d-none d-lg-block">
                            <Image src="/static/illustrations/undraw_secure_login_pdn4.svg" height="300" width="300"
                                   className="d-block mx-auto" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}