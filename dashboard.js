// dashboard.js
const nameEl = document.getElementById('name');
const referralCodeEl = document.getElementById('referralCode');
const donationsEl = document.getElementById('donations');
const rewardsList = document.getElementById('rewards');

// ✅ Fetch dashboard data from your live backend!
fetch('https://intern-dashboard-backend-jz14.onrender.com/api/dashboard')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    nameEl.textContent = data.name;
    referralCodeEl.textContent = data.referralCode;
    donationsEl.textContent = data.totalDonations;

    // Clear old rewards (if any) before adding new
    rewardsList.innerHTML = '';

    data.rewards.forEach(reward => {
      const li = document.createElement('li');
      li.textContent = reward;
      rewardsList.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching dashboard data:', error));
