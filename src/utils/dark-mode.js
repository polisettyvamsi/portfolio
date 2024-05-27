
const darkMode = () => {
    const themetoggleBtns = document.querySelectorAll('#theme-toggle');

    // state
    const theme = localStorage.getItem('theme');

    // On mount
    theme && document.body.classList.add('theme');

    // handler
    const handleThemeHandler = () => {

        document.body.classList.toggle('light-mode');

            if(document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme' ,'light-mode');
            } else {
                localStorage.removeItem('theme');
                document.body.removeAttribute('class');
            }
        
    };

    //Event
    themetoggleBtns.forEach(btn => 
        btn.addEventListener('click' , handleThemeHandler)    
   );
};

export default darkMode;