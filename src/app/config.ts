import {
    faBullhorn,
    faCarSide,
    faChartLine, faNetworkWired,
    faUserTie
} from "@fortawesome/free-solid-svg-icons";

export const API_URL = 'http://localhost:8080/';

export const NAVBAR_MENU = [
    {
        name: 'Tableau de bord',
        icon: faChartLine,
        link: '/',
    },
    {
        name: 'Annonce',
        icon: faBullhorn,
        link: '/annonces',
    },
    {
        name: 'Administration',
        icon: faUserTie,
        childrenNav: [
            {
                name: 'Compte d\'utilisateur',
                link: '/utilisateurs',
            },
            {
                name: 'Commission',
                link: '/modeles',
            },
            {
                name: 'Paiement',
                link: '/marques',
            },
            {
                name: 'Voiture',
                link: '/pays',
            },
            {
                name: 'Fichier',
                link: '/pays',
            },
        ],
    },
    {
        name: 'Voiture',
        icon: faCarSide,
        childrenNav: [
            {
                name: 'Marque',
                link: '/marques',
            },
            {
                name: 'Modèle',
                link: '/modeles',
            },
            {
                name: 'Sortie',
                link: '/modeles',
            },
        ],
    },
    {
        name: 'Caractéristique',
        icon: faNetworkWired,
        childrenNav: [
            {
                name: 'Boite de vitesse',
                link: '/pays',
            },
            {
                name: 'Couleur',
                link: '/pays',
            },
            {
                name: 'Energie',
                link: '/pays',
            },
            {
                name: 'Etat de voiture',
                link: '/pays',
            },
            {
                name: 'Options',
                link: '/pays',
            },
            {
                name: 'Pays',
                link: '/pays',
            },
        ],
    },
];
export const SOURCE_CODE_URL = "";
export const DOCUMENTATION_URL = "";