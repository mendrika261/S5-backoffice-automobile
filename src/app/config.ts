import {
    faBullhorn,
    faCarSide,
    faChartLine, faNetworkWired,
    faUserTie
} from "@fortawesome/free-solid-svg-icons";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const NAVBAR_MENU = [
    {
        name: 'Tableau de bord',
        icon: faChartLine,
        link: '/',
    },
    {
        name: 'Annonce',
        icon: faBullhorn,
        link: '/annonces/en-attente',
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
                link: '/commissions',
            },
            {
                name: 'Paiement',
                link: '/paiements',
            },
            {
                name: 'Voiture',
                link: '/voitures',
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
                name: 'Sortie de voiture',
                link: '/sortie_voitures',
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
                link: '/etat_voitures',
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