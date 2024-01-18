'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className=" border-top-wide border-primary d-flex flex-column">
            <div className="page page-center">
                <div className="container-tight py-4">
                    <div className="empty">
                        <div className="empty-img">
                            <Image src="/static/illustrations/undraw_quitting_time_dm8t.svg" height="128" width="128" alt="" />
                        </div>
                        <p className="empty-title">Actuellement indisponible</p>
                        <p className="empty-subtitle text-secondary">
                            Veuillez vérifier votre connexion Internet et puis réessayer.
                            Si le problème persiste, veuillez contacter <Link href={"mailto:mendrika261@icloud.com"}>le support</Link>.
                        </p>
                        <div className="empty-action">
                            <button className="btn btn-primary" onClick={() => reset()}>
                                <FontAwesomeIcon icon={faArrowsRotate} className="icon" width="24" height="24"
                                     strokeWidth="2" stroke="currentColor" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round">
                                </FontAwesomeIcon>
                                Recharger la page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}