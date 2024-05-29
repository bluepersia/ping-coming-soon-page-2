const inputEl = document.getElementById ('input-container');
document.getElementById ('form').addEventListener ('submit', handleSubmit);


function handleSubmit (e)
{
    e.preventDefault ();
    
    const input = inputEl.querySelector ('#input');

    inputEl.classList.remove ('invalid');

    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test (input.value))
        return;

    inputEl.classList.add ('invalid');
}