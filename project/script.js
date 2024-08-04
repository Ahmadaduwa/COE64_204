function showPage(pageId) {
    document.querySelectorAll('.container > div').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}