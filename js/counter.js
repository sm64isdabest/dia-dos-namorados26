const startDate = new Date('2026-05-02T20:49:00');

const elements = {
    years: document.getElementById('years'),
    months: document.getElementById('months'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

function getTimeSince(date) {
    const diffMs = Date.now() - date.getTime();

    const yearMs = 365.25 * 24 * 60 * 60 * 1000;
    const monthMs = 30.44 * 24 * 60 * 60 * 1000;
    const dayMs = 24 * 60 * 60 * 1000;
    const hourMs = 60 * 60 * 1000;
    const minuteMs = 60 * 1000;

    const years = Math.floor(diffMs / yearMs);
    const months = Math.floor((diffMs % yearMs) / monthMs);
    const days = Math.floor((diffMs % monthMs) / dayMs);
    const hours = Math.floor((diffMs % dayMs) / hourMs);
    const minutes = Math.floor((diffMs % hourMs) / minuteMs);
    const seconds = Math.floor((diffMs % minuteMs) / 1000);

    return { years, months, days, hours, minutes, seconds };
}

function updateCounter() {
    const timeSince = getTimeSince(startDate);

    elements.years.textContent = String(timeSince.years);
    elements.months.textContent = String(timeSince.months);
    elements.days.textContent = String(timeSince.days);
    elements.hours.textContent = String(timeSince.hours);
    elements.minutes.textContent = String(timeSince.minutes);
    elements.seconds.textContent = String(timeSince.seconds);
}

updateCounter();
setInterval(updateCounter, 1000);
