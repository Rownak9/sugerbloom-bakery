// Welcome message overlay for the home page
window.addEventListener('load', function() {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'rgba(0,0,0,0.6)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 9999;

  const box = document.createElement('div');
  box.style.background = 'white';
  box.style.padding = '25px';
  box.style.borderRadius = '10px';
  box.style.textAlign = 'center';
  box.style.width = '300px';
  box.innerHTML = `
    <h2>Welcome to SweetBakes Bakery!</h2>
    <p>Fresh cakes and pastries baked daily.</p>
  `;

  const btn = document.createElement('button');
  btn.textContent = "Enter";
  btn.style.marginTop = "15px";
  btn.style.padding = "8px 15px";
  btn.style.border = "none";
  btn.style.background = "#f7c6a5";
  btn.style.borderRadius = "6px";
  btn.style.cursor = "pointer";
  btn.onclick = () => overlay.remove();

  box.appendChild(btn);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
});
