const typewriter = document.querySelector('.typewriter_effect');

const letters = 'PARIS';

function typewriter_effect(word) {
  let i = 0;

  function add_letter() {
    const letter = word[i];
    console.log(letter);
    typewriter.innerHTML += `<span>${letter}</span>`;
    i++;
    
    if (i < word.length) {
      setTimeout(add_letter, 300);
    }
  }

  function delete_letter() {
    typewriter.innerHTML = typewriter.innerHTML.slice(0, -1);
  }

  add_letter();

  setTimeout(delete_letter, 300 * word.length + 500);
}

typewriter_effect(letters);
