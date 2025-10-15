// netlify/functions/facebook-posts.js
import fetch from 'node-fetch';

export const handler = async function(event, context) {
    try {
        const mockPost = {
            message: "Naši učenici uživaju na časovima engleskog! 🎉 Pogledajte kako se zabavljaju dok uče kroz interaktivne aktivnosti i igre.",
            image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&h=300&fit=crop",
            created_time: new Date().toISOString(),
            likes: 24,
            comments: 8,
            permalink: "https://www.facebook.com/skola.sunshine/",
            is_video: false
        };
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(mockPost)
        };
        
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};