const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#word-title').value.trim();
  const description = document.querySelector('#word-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/newword`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create Word');
    }
  }
};

document
  .querySelector('.new-word-form')
  .addEventListener('submit', newFormHandler);
