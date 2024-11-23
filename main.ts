
document.getElementById('pdfInput')?.addEventListener('change', (e) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];

    if(file && file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = (event) => {
            const embed = document.getElementById('pdfViewer') as HTMLEmbedElement;
            embed.src = event.target?.result as string;
            embed.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }else{
        alert('Choose pdf file.');
    }
});