// Goal: Automatically open work tab when Telegram is opened.
console.log("Page loaded! (my custom chrome extension)❤️");

setTimeout(() => {
    const element = [...document.querySelectorAll('#FoldersSidebar *')].find(el => el.textContent?.trim() === 'WORK');
    console.log("🚀 ~ element?", element);

    if (element) {
        const events = ['mousedown', 'mouseup', 'click'];

        events.forEach(eventType => {
            const event = new MouseEvent(eventType, {
                view: window,
                bubbles: true, // Crucial for apps that use event delegation
                cancelable: true,
                buttons: 1 // Left mouse button
            });
            element.dispatchEvent(event);
        });
    } else {
        alert('Element not found in DOM.');
    }


}, 1_500);

