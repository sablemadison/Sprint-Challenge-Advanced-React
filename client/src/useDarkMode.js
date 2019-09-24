import {useEffect, useState} from 'react';

export default () => {

    const [darkMode, setDarkMode] = useDarkMode('false');
}

const toggle = event => {
    setDarkMode(!darkMode)
}