import React from "react";
import CardData from "./../data/cards-data.js";
import Card from "./card";

function Layout(){

    let data = CardData.map( val => {
        return <Card 
                    image={val.image}
                    title={val.title}
                    starRating={val.starRating}
                    rating={val.rating}
                    year={val.year}
                    genre={val.genre}
                    runtime={val.runtime}
                    cast={val.cast}
                />
    });

    return(
        <div className="cinema mb-10">
            <div className="md:container md:mx-auto">
                <div className="pt-12 pb-3 text-sky-900 text-4xl ml-6 font-bold">Cinema films today</div>
                {data}
            </div>
        </div>
    );
}

export default Layout