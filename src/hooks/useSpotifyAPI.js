import { useState, useEffect } from 'react';
const crypto = require('crypto');
const querystring = require('querystring');

const useSpotifyAPI = () => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const codeVerifier = generateCodeVerifier();
        const codeChallenge = generateCodeChallenge(codeVerifier);
        const authorizationCode = getAuthorizationCode(codeChallenge);
        const retrievedAccessToken = getAccessToken(authorizationCode, codeVerifier);
        setAccessToken(retrievedAccessToken);
    }, []);

    const generateCodeVerifier = () => { crypto.randomBytes(32).toString('hex'); };
    const generateCodeChallenge = (codeVerifier) => { crypto.createHash('sha256').update(codeVerifier).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, ''); };

    const getAuthorizationCode = async (codeChallenge) => {
        const params = querystring.stringify({
            client_id: 'REACT_APP_SPOTIFY_CLIENT_ID', // TODO: Change this to the actual client ID
            response_type: 'code',
            redirect_uri: 'REACT_APP_SPOTIFY_REDIRECT_URI', // TODO: Change this to the actual redirect URI
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
            scope: 'playlist-read-private'
        });

        // Redirect the user to the Spotify authorization page
        // Depends on environment, but this is for the browser
        window.location.href = `https://accounts.spotify.com/authorize?${params}`;

        // The user is redirected back to your specified redirect_uri after authorization
        // The redirect_uri will contain a "code" query parameter
        // Use this code to obtain an access token
        return window.location.search.split('=')[1];
    };

    const getAccessToken = async (authorizationCode, codeVerifier) => {
        const params = querystring.stringify({
            grant_type: 'authorization_code',
            code: authorizationCode,
            redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
            code_verifier: codeVerifier
        });

        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json().accessToken;
    }

    const getPlaylist = async (playlistId) => {
        if (!accessToken) {
            throw new Error('Access token is not set.');
        }
        try {
            const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            // Handle errors (e.g., network issues, access token expired)
            console.error('Error fetching playlist:', error);
        }
    };

    return { getPlaylist };
};

export default useSpotifyAPI;
