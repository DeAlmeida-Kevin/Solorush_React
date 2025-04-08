import './header.css';

function Header() {

    const banniere = [
        {
            id: "1",
            src: "src/components/headercarroussel/1.jpg",
            alt: "image de banniere"
        },

        {
            id: "2",
            src: "src/components/headercarroussel/2.jpg",
            alt: "image de banniere"
        },

        {
            id: "3",
            src: "src/components/headercarroussel/3.jpg",
            alt: "image de banniere"
        },

        {
            id: "4",
            src: "src/components/headercarroussel/4.jpg",
            alt: "image de banniere"
        },

        {
            id: "5",
            src: "src/components/headercarroussel/5.jpg",
            alt: "image de banniere"
        },

        {
            id: "6",
            src: "src/components/headercarroussel/6.jpg",
            alt: "image de banniere"
        },
        {
            id: "7",
            src: "src/components/headercarroussel/1.jpg",
            alt: "image de banniere"
        },

        {
            id: "8",
            src: "src/components/headercarroussel/2.jpg",
            alt: "image de banniere"
        },

        {
            id: "9",
            src: "src/components/headercarroussel/3.jpg",
            alt: "image de banniere"
        },

        {
            id: "10",
            src: "src/components/headercarroussel/4.jpg",
            alt: "image de banniere"
        },

        {
            id: "11",
            src: "src/components/headercarroussel/5.jpg",
            alt: "image de banniere"
        },

        {
            id: "12",
            src: "src/components/headercarroussel/6.jpg",
            alt: "image de banniere"
        }
    ]

    return (
        <div className='containerCarrousel'>
            <div className='carrouselWrapper'>
                <ul className='carrousel'>
                    {banniere.map((image) => (
                        <li key={image.id}>
                            <img src={image.src} alt={image.alt} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header;

