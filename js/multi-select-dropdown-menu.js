// reusable multi-select dropdown menu component

const mdropdowns = document.querySelectorAll('.multiple-dropdown');

mdropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const listitems = dropdown.querySelector('.list-items');
    const items = dropdown.querySelectorAll('.item');
    const selected = dropdown.querySelector('.selected');
    const selectedText = selected.innerText;

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        listitems.classList.toggle('list-items-open');
    })

    items.forEach(item => {
        item.addEventListener('click', () => {
            if (item.id == 'select-all') {
                if (item.classList.contains('checked')) {
                    items.forEach(item => {
                        item.classList.remove('checked');
                    })
                } else {
                    items.forEach(item => {
                        item.classList.add('checked');
                    })
                }
            }
            else {
                item.classList.toggle('checked');
            }

            let checkedItems = dropdown.querySelectorAll('.checked'),
                checkedTexts = new Set();
                for (let i = 0; i < checkedItems.length; i++) {
                    if (checkedItems[i].id != 'select-all') {
                        checkedTexts.add(checkedItems[i].innerText);
                    }
                }
                if (checkedItems && checkedItems.length > 0) {
                    selected.innerText = `${Array.from(checkedTexts).join(', ')}`;
                } else {
                    selected.innerText = selectedText;
                }
        });
    });
})