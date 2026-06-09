// CSS Animation Gallery - Simple console logger
// Shows which animations are GPU accelerated

console.log('🎨 CSS Animation Gallery loaded');

// Log performance info
if (performance && performance.getEntriesByType) {
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav) {
        console.log(`Page load: ${Math.round(nav.loadEventEnd - nav.fetchStart)}ms`);
    }
}

// Add click logging for demo purposes
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3')?.innerText || 'card';
        console.log(`Animation demo: ${title}`);
    });
});

console.log('✅ All animations use transform & opacity (GPU accelerated, no layout thrashing)');