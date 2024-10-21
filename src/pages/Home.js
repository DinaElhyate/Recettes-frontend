import React from 'react';
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QouteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";
import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer"; // Assurez-vous que ce chemin est correct
import NewsletterSection from "../components/NewsletterSection";

const recipes = [
    {
        title: "Spaghetti and Meatballs",
        image: "/img/gallery/img_4.jpg",
        authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/img/gallery/img_10.jpg",
        authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chiefs/img_5.jpg",
    }
].sort(() => Math.random() - 0.5)

export default function Home() {
    // Remplacez par l'ID de la vidéo YouTube que vous souhaitez intégrer
    const videoId = "https://www.youtube.com/watch?v=sEtRGXU-Mbg"; // Exemple d'ID de vidéo pour des pancakes fluffy
    const videoUrl = `https://www.youtube.com/embed/${videoId}`; // Formatez l'URL correctement

    return (
        <div>
            <div style={{ marginBottom: '7em' }}>
                <Header />
            </div>
            <HeroSection />
            <ImproveSkills />
            <QouteSection />
            {/* Passer l'URL de la vidéo au composant VideoPlayer */}
            <VideoPlayer videoUrl={videoUrl} />
            <ChiefsSection />
            <NewsletterSection />
        </div>
    );
}
