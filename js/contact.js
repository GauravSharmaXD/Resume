const form = document.querySelector('form');
const formUrl = 'https://forms.gle/yxxWZ19n6sX7hmBn8';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const submitUrl = formUrl + `?entry.${FIELD_ID_NAME}=${formData.get('name')}&entry.${FIELD_ID_EMAIL}=${formData.get('email')}&entry.${FIELD_ID_Phone}=${formData.get('phone')}&entry.${FIELD_ID_MESSAGE}=${formData.get('message')}`;
  
  fetch(submitUrl, {mode: 'no-cors'})
    .then(() => alert('Thank you for your message!'))
    .catch(() => alert('Oops! Something went wrong. Please try again later.'));
});
