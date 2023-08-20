// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

const deleteButtonHandler = async (event) => {
    const characterId = event.target.getAttribute('data-character-id');
    console.log(characterId);
    try {
      const response = await fetch(`/api/characters/${characterId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete character');
      }
    } catch (error) {
      console.error(error);
      alert('An error occured while deleting character');
    }
};

// document
//   .querySelectorAll('.update-character-form')
//   .forEach(form => {
//     form.addEventListener('submit', updateFormHandler);
//   });

document.querySelector('.delete-character-btn').addEventListener('click', deleteButtonHandler);
