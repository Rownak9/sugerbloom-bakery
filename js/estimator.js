// Simple price calculator for cakes
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('calcBtn');
  if (!button) return; // Safety check if element doesn't exist

  button.addEventListener('click', function() {
    const qty = parseInt(document.getElementById('qty').value) || 0;
    const price = 500; // ¥500 per cake
    const total = qty * price;

    document.getElementById('total').textContent =
      "Total Price: ¥" + total.toLocaleString();
  });
});