document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById("hamburger");
    if (hamburger) {
        hamburger.addEventListener("click", function () {
            const navMenu = document.getElementById("nav-menu");
            navMenu.classList.toggle("active");
        });
    }

    const dropdownToggle = document.getElementById("dropdown-toggle");
    if (dropdownToggle) {
        dropdownToggle.addEventListener("click", function () {
            const dropdownContainer = this.parentElement;
            dropdownContainer.classList.toggle("active");
        });
    }

    if (document.querySelector('#activityTable tbody')) {
        if (window.location.pathname.includes('index.html')) {
            displayActivities(5);
        } else {
            displayActivities();
        }
    }

    function displayActivities(limit = null) {
        const logs = JSON.parse(localStorage.getItem('activityLogs')) || [];
        const tableBody = document.querySelector('#activityTable tbody');

        logs.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

        tableBody.innerHTML = '';

        const recordsToShow = limit ? logs.slice(0, limit) : logs;

        recordsToShow.forEach((log) => {
            const row = document.createElement('tr');

            const dateTimeCell = document.createElement('td');
            dateTimeCell.textContent = log.dateTime;
            row.appendChild(dateTimeCell);

            const activityCell = document.createElement('td');
            activityCell.textContent = log.activity;
            row.appendChild(activityCell);

            const durationCell = document.createElement('td');
            durationCell.textContent = `${log.duration} hrs`;
            row.appendChild(durationCell);

            tableBody.appendChild(row);
        });
    }

    const logForm = document.getElementById('log-form');
    if (logForm) {
        logForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const dateTime = document.getElementById('dateTime').value;
            const activity = document.getElementById('activity').value;
            const duration = document.getElementById('duration').value;
            
            const activityLog = {
                dateTime: dateTime,
                activity: activity,
                duration: duration
            };
            
            let logs = JSON.parse(localStorage.getItem('activityLogs')) || [];
            
            logs.push(activityLog);
            
            localStorage.setItem('activityLogs', JSON.stringify(logs));
            
            document.getElementById('log-form').reset();
            
            alert('Activity logged successfully!');

            window.location.href = 'myprogress.html'
            
        });
    }
});