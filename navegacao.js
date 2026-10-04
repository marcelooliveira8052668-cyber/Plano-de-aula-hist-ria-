// Cria e injeta o HTML e o Estilo dos botões automaticamente na página
document.addEventListener("DOMContentLoaded", function() {
    if (typeof paginaAnterior === 'undefined') paginaAnterior = "";
    if (typeof paginaProxima === 'undefined') paginaProxima = "";

    const navHTML = `
    <div class="page-navigator">
      <button id="prevBtn" class="nav-btn-flutuante" onclick="irParaAnterior()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        Anterior
      </button>
      
      <span class="page-indicator">Navegação</span>

      <button id="nextBtn" class="nav-btn-flutuante" onclick="irParaProxima()">
        Próxima
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>

    <style>
      .page-navigator {
        position: fixed; bottom: 25px; left: 50%; transform: translateX(-50%);
        display: flex; align-items: center; gap: 15px;
        background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px); padding: 10px 22px; border-radius: 50px;
        box-shadow: 0 8px 30px rgba(18, 53, 91, 0.25); border: 1px solid #d9e2e8;
        z-index: 999999; font-family: Arial, Helvetica, sans-serif;
      }
      .nav-btn-flutuante {
        display: flex; align-items: center; gap: 6px; background: #12355b; color: #ffffff;
        border: none; padding: 9px 18px; border-radius: 25px; font-size: 14px;
        font-weight: bold; cursor: pointer; transition: all 0.25s ease;
        box-shadow: 0 4px 12px rgba(18, 53, 91, 0.25);
      }
      .nav-btn-flutuante:hover { background: #1f5f8b; transform: translateY(-2px); }
      .page-indicator { font-size: 13px; font-weight: bold; color: #263238; min-width: 80px; text-align: center; }
    </style>`;

    document.body.insertAdjacentHTML('beforeend', navHTML);

    if (!paginaAnterior) {
        const prev = document.getElementById("prevBtn");
        if(prev) { prev.style.opacity = "0.3"; prev.style.pointerEvents = "none"; }
    }
    if (!paginaProxima) {
        const next = document.getElementById("nextBtn");
        if(next) { next.style.opacity = "0.3"; next.style.pointerEvents = "none"; }
    }
});

function irParaAnterior() { if (typeof paginaAnterior !== 'undefined' && paginaAnterior) window.location.href = paginaAnterior; }
function irParaProxima() { if (typeof paginaProxima !== 'undefined' && paginaProxima) window.location.href = paginaProxima; }