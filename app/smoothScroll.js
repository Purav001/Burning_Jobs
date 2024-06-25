// useSmoothScroll.js
import { useEffect } from 'react';

function smoothScroll(delay = 300) {
    useEffect(() => {
        const handleClick = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, delay);
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener('click', handleClick);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleClick);
            });
        };
    }, [delay]);
}

export default smoothScroll;
