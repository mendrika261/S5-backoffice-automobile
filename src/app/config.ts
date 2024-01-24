import {
    faBullhorn,
    faCarSide,
    faChartLine, faNetworkWired,
    faUserTie
} from "@fortawesome/free-solid-svg-icons";

export const API_URL = "http://localhost:8080/";

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
                link: '',
            },
            {
                name: 'Paiement',
                link: '',
            },
            {
                name: 'Voiture',
                link: '',
            },
            {
                name: 'Fichier',
                link: '/fichiers',
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
                link: '',
            },
        ],
    },
    {
        name: 'Caractéristique',
        icon: faNetworkWired,
        childrenNav: [
            {
                name: 'Boite de vitesse',
                link: '/boite_vitesses',
            },
            {
                name: 'Couleur',
                link: '/couleurs',
            },
            {
                name: 'Energie',
                link: '/energies',
            },
            {
                name: 'Etat de voiture',
                link: '',
            },
            {
                name: 'Options',
                link: '/options',
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