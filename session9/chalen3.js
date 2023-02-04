const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Subtitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Subtitution'],
    [64, '🟨 Yellow card'],
    [69, '🟥 Red card'],
    [70, '🔁 Subtitution'],
    [72, '🔁 Subtitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow card'],
]);



// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
    `An event happened, on average, every ${90 /
    gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time /
    gameEvents.size} minutes`
);

// 4. 
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}