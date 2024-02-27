import React from "react";
import logo from "../../assets/all-images/logo.ico";
import {Link} from "react-router-dom";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="flex flex-col flex-grow text-gray-400 bg-gray-800">
            <div className="grid grid-cols-3 gap-4 m-4 md:flex md:justify-center">
                <div className="m-4 md:flex-1">
                    <div className="">
                        <Link to="/home" className="flex items-center font-sans lg:flex-1 text-sky-500">
                            <img src={logo} alt=""/>
                            <img src="/dev.ico" alt=""/>
                            <span className="pt-3 text-xl capitalize"
                                  style={{color: '#11F6FD', fontFamily: 'Dancing Script, cursive'}}>
                        recruit
                    </span>
                        </Link>
                    </div>

                    <p className="text-justify">
                        Bienvenue chez DevRecruit, votre partenaire de confiance pour répondre à tous vos
                        besoins en matière de recrutement de développeurs exceptionnels. Forts de notre engagement
                        envers l'excellence, nous nous efforçons de mettre en relation les entreprises innovantes
                        avec des talents informatiques hautement qualifiés. Notre équipe dévouée de professionnels
                        du recrutement comprend l'importance cruciale d'avoir des développeurs qui non seulement
                        maîtrisent les dernières technologies, mais qui s'intègrent également parfaitement à la
                        culture de votre entreprise. Chez DevRecruit, nous croyons que le succès d'une
                        entreprise repose sur la qualité de son équipe. Faites confiance à notre expertise pour vous
                        aider à bâtir l'avenir de votre entreprise avec les meilleurs talents du secteur.
                    </p>
                </div>
                <div className="pt-16 m-4 md:flex-2">
                    <h5 className="mb-1 text-white">Siège Social</h5>
                    <p className="mb-4">Av. Hassan 2, Résidence Saada Appt 6 Rabat - Maroc</p>

                    <h5 className="mb-1 text-white">Téléphone:</h5>
                    <p className="mb-4">+212 5 37 78 15 11</p>

                    <p className="mb-1 text-white">Email:</p>
                    <p className="mb-4">DevRecruit@gmail.com</p>

                    <h5 className="mb-1 text-white">Horaire de Travail:</h5>
                    <p className="mb-4">
                        - du lundi au vendredi : 9h à 18h30 <br/>
                        - Samedi matin : 9h à 13h <br/>
                    </p>
                </div>
                <div className="pt-16 m-4 md:flex-2">
                    <h5 className="mb-1 text-white">Abonnez-vous à Nos Emails </h5>
                    <div className="">
                        <input type="email" placeholder="Email"/>
                        <span>
                </span>
                    </div>
                </div>
            </div>
            <div className="col-span-3 m-4 text-center md:col-span-2 md:mx-auto">
                <p className="text-white">
                    droits d'auteur {year}, Developpé par SRMC-Group. tous droits réservés .
                </p>
            </div>
        </footer>

    )
};

export default Footer;