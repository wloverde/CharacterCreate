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

// Update character form
const updateFormHandler = async (event) => {
  event.preventDefault();

  const characterForm = event.target; // Get the form that triggered the event
  const characterId = characterForm.getAttribute('data-character-id');
  const level = characterForm.querySelector('#character-level').value.trim();
  const armor = characterForm.querySelector('#character-armor').value.trim();
  const speed = characterForm.querySelector('#character-speed').value.trim();
  const dexterity = characterForm.querySelector('#character-dexterity').value.trim();
  const constitution = characterForm.querySelector('#character-constitution').value.trim();
  const intelligence = characterForm.querySelector('#character-intelligence').value.trim();
  const wisdom = characterForm.querySelector('#character-wisdom').value.trim();
  const charisma = characterForm.querySelector('#character-charisma').value.trim();
  const health = characterForm.querySelector('#character-health').value.trim();

  const updatedCharacterData = {
    level,
    armor,
    speed,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    health,
  };

  try {
    const response = await fetch(`/api/characters/${characterId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedCharacterData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update character');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while updating character');
  }
};

// Delete character button handler
const deleteButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-character-id')) {
    const characterId = event.target.getAttribute('data-character-id');

    try {
      const response = await fetch(`/api/characters/${characterid}`, {
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
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

// Update form event listener 
document
  .querySelectorAll('.update-character-form')
  .forEach(form => {
    form.addEventListener('submit', updateFormHandler);
  });

// Delete button event listener
document
  .querySelectorAll('.delete-character-btn')
  forEach(button => {
    button.addEventListener('click', deleteButtonHandler);
  });
