import React from 'react';
import PostCard from './PostComponents/PostCard';

const Posts = () => {
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
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/87/55/15/pizzeria-baal.jpg?w=600&h=400&s=1',
            title: 'Título de la publicación 5',
            creator: 'Creador 5',
            description: 'Descripción de la publicación 5.',
        },
        {
            id: 6,
            image: 'https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg',
            title: 'Título de la publicación 6',
            creator: 'Creador 6',
            description: 'Descripción de la publicación 6.',
        },
    ];

    return (
        <div>
            {postsData.map((post, index) => (
                // Agrupa las tarjetas en pares
                index % 2 === 0 ? (
                    <div key={post.id} className="post-card-group">
                        <PostCard
                            image={post.image}
                            title={post.title}
                            creator={post.creator}
                            description={post.description}
                            addRightMargin={index === 0}
                        />
                        {postsData[index + 1] && (
                            <PostCard
                                key={postsData[index + 1].id}
                                image={postsData[index + 1].image}
                                title={postsData[index + 1].title}
                                creator={postsData[index + 1].creator}
                                description={postsData[index + 1].description}
                                addRightMargin // Agrega una prop para indicar el margen derecho
                            />
                        )}
                    </div>
                ) : null
            ))}
        </div>
    );
};

export default Posts;
