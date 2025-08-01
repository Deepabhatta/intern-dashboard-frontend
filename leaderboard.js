// leaderboard.js
const leaderboardEl = document.getElementById('leaderboard');

// ✅ Fetch leaderboard data from your live backend!
fetch('https://intern-dashboard-backend-jz14.onrender.com/api/leaderboard')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Clear any existing list items to avoid duplicates
    leaderboardEl.innerHTML = '';

    data.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = `${entry.name} — ₹${entry.donations}`;
      leaderboardEl.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching leaderboard:', error));
