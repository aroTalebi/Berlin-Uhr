const counters5LightsHours = [
    { id: 1, light: 0 },
    { id: 2, light: 0 },
    { id: 3, light: 0 },
    { id: 4, light: 0 }
];

const counters1LightsHours= [
    { id: 1, light: 0 },
    { id: 2, light: 0 },
    { id: 3, light: 0 },
    { id: 4, light: 0 }
];

const counters5LightsMinutes= [
    { id: 1, light: 0 },
    { id: 2, light: 0 },
    { id: 3, light: 0 },
    { id: 4, light: 0 },
    { id: 5, light: 0 },
    { id: 6, light: 0 },
    { id: 7, light: 0 },
    { id: 8, light: 0 },
    { id: 9, light: 0 },
    { id: 10, light: 0 },
    { id: 11, light: 0 }
];

const counters1LightsMinutes= [
    { id: 1, light: 0 },
    { id: 2, light: 0 },
    { id: 3, light: 0 },
    { id: 4, light: 0 }
];

export function get5HoursLights(){
    return counters5LightsHours;
};

export function get1HoursLights(){
    return counters1LightsHours;
};

export function get5MinutesLights(){
    return counters5LightsMinutes;
};

export function get1MinutesLights(){
    return counters1LightsMinutes;
}
