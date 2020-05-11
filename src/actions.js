export const Action = Object.freeze({
    DrawStaff: 'DrawStaff',
});

export function drawStaff(staves, notes) {
    return {
        type: Action.DrawStaff,
        staves: staves,
        notes: notes,
    };
}
