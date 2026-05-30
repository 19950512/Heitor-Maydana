// Lightbox para galeria das imagens do Heitor
const lightbox = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

const captions = {
  '01.png': 'Heitor sorrindo, arte infantil feita no Gemini',
  '02.png': 'Heitor com chapéu de Minecraft, arte infantil feita no Gemini',
};

document.querySelectorAll('.heitor-img-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.dataset.img;
    lightboxImg.src = img;
    lightboxCaption.textContent = captions[img] || '';
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.focus();
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
  lightbox.setAttribute('aria-hidden', 'true');
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) closeLightbox();
});
// Copiar endereço do servidor pro clipboard
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback simples
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(ta);
    }
    const original = btn.textContent;
    btn.textContent = '✅ Copiado!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 1800);
  });
});

// Surpresinha: clicar nos blocos do hero faz "explodir" (rotação rápida)
document.querySelectorAll('.logo-block .block').forEach((block) => {
  block.style.cursor = 'pointer';
  block.addEventListener('click', () => {
    block.animate(
      [
        { transform: 'rotate(0deg) scale(1)' },
        { transform: 'rotate(360deg) scale(1.3)' },
        { transform: 'rotate(720deg) scale(1)' },
      ],
      { duration: 600, easing: 'ease-out' }
    );
  });
});
