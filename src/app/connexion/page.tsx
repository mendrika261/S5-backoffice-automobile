'use client'
import {useState} from "react";
import {sendPost, sendPostConnexion} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";

export default function Connexion()
{
    const [data,setData] =useState(
        {
            email:'test@test.com',
            motDePasse:'testtest'
        }
    )

    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;
        submitButton.classList.add("btn-loading");
        await sendPostConnexion(data);
        submitButton.classList.remove("btn-loading");
    }

    return <>
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="text-center mb-4">
                    {/*<a href="." className="navbar-brand navbar-brand-autodark"><img src="./static/logo.svg" height="36" alt=""></a>*/}
                </div>
                <div className="card card-md">
                    <div className="card-body">
                        <h2 className="h2 text-center mb-4">Login to your account</h2>
                        <form onSubmit={submit} id="form">
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control"  placeholder="your@email.com" value={data.email} onChange={(e) => {
                                    setData({...data, email: e.target.value})
                                    //console.log('Updated email: ', e.target.value);
                                }} />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">
                                    Password
                                    <span className="form-label-description">
                    <a href="#">I forgot password</a>
                  </span>
                                </label>
                                <div className="input-group input-group-flat">
                                    <input type="password" className="form-control"  placeholder="Your password"  value={data.motDePasse} onChange={(e) => {
                                        setData({...data, motDePasse: e.target.value})
                                        //console.log('Updated motDePasse: ', e.target.value);
                                    }}
                                    />
                  <span className="input-group-text">
                    <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                    </a>
                  </span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="form-check">
                                    <input type="checkbox" className="form-check-input"/>
                                    <span className="form-check-label">Remember me on this device</span>
                                </label>
                            </div>
                            <div className="form-footer">
                                <button type="submit" className="btn btn-primary w-100">Sign in</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="text-center text-muted mt-3">
                    Don t have account yet? <a href="#" id="submit">Sign up</a>
                </div>
            </div>
        </div>
    </>
}