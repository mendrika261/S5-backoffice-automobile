'use client';
import {addLocale} from "primereact/api";
import frPrimeReact from "@/app/(core)/ui/fr.json";
import {useEffect, useState} from "react";


export default function PrimeConfig() {
    addLocale("fr", frPrimeReact);
    useEffect(() => {
        window.onload = () => {
            const theme = localStorage?.getItem("tablerTheme");
            if (theme === "dark") {
                // @ts-ignore
                import("primereact/resources/themes/lara-dark-blue/theme.css")
            } else {
                // @ts-ignore
                import("primereact/resources/themes/lara-light-blue/theme.css")
            }

            // @ts-ignore
            $('#form').parsley({
                errorClass: 'is-invalid',
                successClass: 'is-valid is-valid-lite',
                errorsWrapper: '<span class="invalid-feedback"></span>',
                errorTemplate: '<span></span>',
                trigger: 'change'
            });

            // @ts-ignore
            $('#loader-div').fadeOut(300);
        }
        // @ts-ignore
        $('#loader-div').fadeOut(300);
    });
    return(<>
    </>);
}
