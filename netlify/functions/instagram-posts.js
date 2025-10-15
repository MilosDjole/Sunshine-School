// netlify/functions/instagram-posts.js
import fetch from 'node-fetch';

export const handler = async function(event, context) {
    try {
        const mockPosts = [
            {
                media_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop",
                permalink: "https://www.instagram.com/skola_mysunshine/",
                media_type: "IMAGE"
            },
            {
                media_url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=300&h=300&fit=crop",
                permalink: "https://www.instagram.com/skola_mysunshine/", 
                media_type: "IMAGE"
            },
            {
                media_url: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=300&h=300&fit=crop",
                permalink: "https://www.instagram.com/skola_mysunshine/",
                media_type: "IMAGE"
            },
            {
                media_url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&h=300&fit=crop",
                permalink: "https://www.instagram.com/skola_mysunshine/",
                media_type: "IMAGE"
            }
        ];
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(mockPosts)
        };
        
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};