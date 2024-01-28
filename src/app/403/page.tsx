"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="border-top-wide border-primary d-flex flex-column">
            <div className="page page-center mt-8">
                <div className="container-tight py-4">
                    <div className="empty">
                        <div className="empty-header">403</div>
                        <p className="empty-title">Accès refusé</p>
                        <p className="empty-subtitle text-secondary">
                            Vous n&apos;avez pas la permission d&apos;accéder à cette page.
                        </p>
                        <div className="empty-action">
                            <button className="btn btn-primary" onClick={() => router.back()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                     viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l14 0"/>
                                    <path d="M5 12l6 6"/>
                                    <path d="M5 12l6 -6"/>
                                </svg>
                                Retourner
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
