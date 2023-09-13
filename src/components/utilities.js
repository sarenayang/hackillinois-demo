import React, { useState, useEffect } from 'react';
import axios from 'axios';
function getEvents() {
    // const url = 'https://corsproxy.io/?' + encodeURIComponent('https://adonix.hackillinois.org/event/');
    // // const url = "https://adonix.hackillinois.org/event/";
    // fetch(url).then(r => r.json()).then(t => console.log(t["events"][0]))

    const url = "https://adonix.hackillinois.org/event/";
    const getEvents2 = async () => {
        return Promise.resolve(axios.get(url));
    }
    return getEvents2();
}

export default getEvents;


