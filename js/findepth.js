const pdfViewer = document.getElementById('pdf-viewer');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');

let currentPage = 1;
const totalPages = pdfViewer.contentDocument.body.childElementCount;

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        pdfViewer.contentWindow.scrollTo(0, (currentPage - 1) * pdfViewer.clientHeight);
    }
});

nextPageButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        pdfViewer.contentWindow.scrollTo(0, (currentPage - 1) * pdfViewer.clientHeight);
    }
});