import React,  { useEffect } from 'react'
import '../styles/Home.css'
import Navbar from './homeComponents/NavBar'
import PostCard from './PostComponents/PostCard'
//import Posts from './Posts'

const Home = () =>{
    //Arreglo de informacion para post (temporal)
    const postsData = [
        {
            id: 1,
            image: 'https://i.ytimg.com/vi/v0xjpkn2izs/maxresdefault.jpg',
            title: 'Título de la publicación 1',
            creator: 'Creador 1',
            description: 'Descripción de la publicación 1.',
        },
        {
            id: 2,
            image: 'https://www.elespectador.com/resizer/akbmjRLEKUnJDchoiQRnAxZTI3g=/968x645/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/LQGRLP3KGFAR5JVP45JSXETKLQ.jpg',
            title: 'Título de la publicación 2',
            creator: 'Creador 2',
            description: 'Descripción de la publicación 2.',
        },
        {
            id: 3,
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/87/55/15/pizzeria-baal.jpg?w=600&h=400&s=1',
            title: 'Título de la publicación 3',
            creator: 'Creador 3',
            description: 'Descripción de la publicación 3.',
        },
       {
            id: 4,
            image: 'https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg',
            title: 'Título de la publicación 4',
            creator: 'Creador 4',
            description: 'Descripción de la publicación 4.',
        },

        {
            id: 5,
            image: 'https://images.ctfassets.net/hrltx12pl8hq/2f1Pq2y8aqUXWgVSCh1cN4/dfe51e204cbef8fdf049b31f89a65e05/food-and-drink-images.jpg?fit=fill&w=600&h=400',
            title: 'Título de la publicación 5',
            creator: 'Creador 5',
            description: 'Descripción de la publicación 5.',
        },
        {
            id: 6,
            image: 'https://s1.abcstatics.com/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg',
            title: 'Título de la publicación 6',
            creator: 'Creador 6',
            description: 'Descripción de la publicación 6.',
        }, 
        {
            id: 7,
            image: 'https://www.upmenu.com/wp-content/uploads/2022/08/comida-rapida-a-domicilo-1200x900.jpg',
            title: 'Título de la publicación 7',
            creator: 'Creador 7',
            description: 'Descripción de la publicación 7.',
        }, 
        {
            id: 8,
            image: 'https://c.files.bbci.co.uk/DBBF/production/_105055265_bandejapaisa.jpg',
            title: 'Título de la publicación 8',
            creator: 'Creador 8',
            description: 'Descripción de la publicación 8.',
        }, 
    ];




    useEffect(() => {
        document.body.classList.add('home-page')

        return () => {
            document.body.classList.remove('home-page')
        }
    }, [])

    return (
        <div  className='home-container' >
            <Navbar />

            <div className='post-container'>
                {postsData.map((post) => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        creator={post.creator}
                        description={post.description}
                        image={post.image}
                    />
                ))}
            </div>
           
        </div>
    )
}

export default Home