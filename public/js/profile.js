document.addEventListener('DOMContentLoaded', () => {
  // update Character Button
  const charUpdateHandler = async (event, characterId) => {
    event.preventDefault();
    console.log('charUpdateHandler clicked for character ID:', characterId);
    
    const container = event.target.closest('.card');
    const level = container.querySelector('.level').value;
    const health = container.querySelector('.health').value;
    const armor = container.querySelector('.armor').value;
    const speed = container.querySelector('.speed').value;

    const strength = container.querySelector('.strength').value;
    const dexterity = container.querySelector('.dexterity').value.trim();
    const constitution = container.querySelector('.constitution').value.trim();
    const intelligence = container.querySelector('.intelligence').value.trim();
    const wisdom = container.querySelector('.wisdom').value.trim();
    const charisma = container.querySelector('.charisma').value.trim();
    // ... Other updated values ...

    try {
      const response = await fetch(`/api/characters/${characterId}`, {
        method: 'PUT',
        body: JSON.stringify({
          level,
          health,
          armor,
          speed,
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/profile'); // Redirect to the profile page
        alert(`Character updated successfully!`);
      } else {
        alert('Failed to update character.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the character.');
    }
  };

  // delete character button
  const charDeleteHandler = async (event, characterId) => {
    event.preventDefault();
    console.log('charDeleteHandler clicked for character ID:', characterId);
    
    try {
      const response = await fetch(`/api/characters/${characterId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/profile'); // Redirect to the profile page
        alert(`Character deleted successfully!`);
      } else {
        alert('Failed to delete character.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while deleting the character.');
    }
  };

  document.addEventListener('click', async (event) => {
    if (event.target.matches('.charUpdate')) {
      const characterId = event.target.getAttribute('data-character-id');
      charUpdateHandler(event, characterId);
    } else if (event.target.matches('.charDelete')) {
      const characterId = event.target.getAttribute('data-character-id');
      charDeleteHandler(event, characterId);
    }
  });
});
