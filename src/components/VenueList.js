
    //Dublin 
    export const dublinVenues = [
        { name: 'Vicar Street' , website: 'https://www.vicarstreet.com/' },
        { name: 'The Button Factory' , website: 'https://buttonfactory.ie/' },
        { name: 'The Academy' , website: 'https://www.theacademydublin.com/' },
        { name: 'Whelans' , website: 'https://www.whelanslive.com/' },
        { name: 'Sin e' , website: 'https://sin-e.ie/' },
    ];

    export const renderedDublinVenues = dublinVenues.map((venue) => {

        return (
            <div key={venue.name} className="py-4">
                <a href={venue.website}>
                    - {venue.name}
                </a>
            </div>
        )
    });


    //Cork 
    export const corkVenues = [
        { name: 'The Cork Opera House' , website: 'https://www.corkoperahouse.ie/' },
        { name: 'Cyprus Avenue' , website: 'https://www.cyprusavenue.ie/' },
        { name: 'The Crane Lane' , website: 'https://www.cranelanetheatre.ie/' },
    ];

    export const renderedCorkVenues = corkVenues.map((venue) => {

        return (
            <div key={venue.name} className="py-4">
                <a href={venue.website}>
                    - {venue.name}
                </a>
            </div>
        )
    });

    //Vancouver
    export const vanVenues = [
        { name: 'Commodore Ballroom' , website: 'https://www.commodoreballroom.com/' },
        { name: 'Rickshaw Theatre' , website: 'https://rickshawtheatre.com/' },
        { name: 'Biltmore Cabaret' , website: 'https://biltmorecabaret.com/' },
        { name: 'Imperial' , website: 'https://imperialvancouver.com/' },
    ];

    export const renderedVanVenues = vanVenues.map((venue) => {

        return (
            <div key={venue.name} className="py-4">
                <a href={venue.website}>
                    - {venue.name}
                </a>
            </div>
        )
    });

    //Stockholm
    export const stockholmVenues = [
        { name: 'Nalen' , website: 'https://www.nalen.com/' },
        { name: 'Stampen' , website: 'https://www.stampen.se/' },
        { name: 'Fasching' , website: 'https://www.fasching.se/?date=0&artist=all&view=default&c=1' },
    ];

    export const renderedStockholmVenues = stockholmVenues.map((venue) => {

        return (
            <div key={venue.name} className="py-4">
                <a href={venue.website}>
                    - {venue.name}
                </a>
            </div>
        )
    });