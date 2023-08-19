const charCreateHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('.name').value.trim();
  const class_id = document.querySelector('#class-id').value;
  const race = document.querySelector('#race').value;

  const level = document.querySelector('.level').value;
  const health = document.querySelector('.health').value;
  const armor = document.querySelector('.armor').value;
  const speed = document.querySelector('.speed').value;

  const strength = document.querySelector('.strength').value;
  const dexterity = document.querySelector('.dexterity').value.trim();
  const constitution = document.querySelector('.constitution').value.trim();
  const intelligence = document.querySelector('.intelligence').value.trim();
  const wisdom = document.querySelector('.wisdom').value.trim();
  const charisma = document.querySelector('.charisma').value.trim();  
    try {
      const response = await fetch('/api/characters', {
        method: 'POST',
        body: JSON.stringify({
          character_name: name,
          class_id,
          race,
          level,
          health,
          armor,
          speed,
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile'); // Redirect to the profile page
        alert(`${name} enters the world!`);
      } else {
        alert('Failed to create character.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while creating the character.');
    }
  };
  
  document.querySelector('.charCreate').addEventListener('click', charCreateHandler);
  