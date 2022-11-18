// reusable single-select dropdown menu component

const dropdowns = document.querySelectorAll('.single-dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const subselects = dropdown.querySelectorAll('.sub-select');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });


    subselects.forEach(subselect => {
        subselect.addEventListener('click', () => {
            const subcaret = subselect.querySelector('.sub-caret'); 
            const submenu = subselect.querySelector('.sub-menu');
            const options = submenu.querySelectorAll('.sub-menu li');

            subselect.classList.toggle('sub-select-clicked');
            submenu.classList.toggle('sub-menu-open');
            subcaret.classList.toggle('sub-caret-rotate');
            
            
            options.forEach(option => {
                option.addEventListener('click', () => {
                    selected.innerText = option.innerText;
                    select.classList.remove('sub-select-clicked');
                    select.classList.remove('sub-caret-rotate');
                    select.classList.remove('sub-menu-open');
                    options.forEach(option => {
                        option.classList.remove('active');
                    });
                    option.classList.add('active');
                });
            }); 
        });
    });
});





