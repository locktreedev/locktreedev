const form = document.getElementById('form');

form.addEventListener('submit', async(event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    await fetch('https://discord.com/api/webhooks/1339518923145744435/Owhhz9KL8gIQk9G4TWZQ6TJVtVPCcGGDuhgaZ68v2FieiMndylFcpnPC0zFboN4Fedag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `**Naam:** ${name.value}\n**Email:** ${email.value}\n\n**Bericht verstuurd:** "${message.value}"`
        })
    });

    name.value = null;
    email.value = null;
    message.value = null;
});