import React, { useEffect } from 'react';
import Vex from 'vexflow';
import {useSelector} from 'react-redux';
import { convertStaves, convertNotes } from './converter';

const VF = Vex.Flow;

export function Staff() {
    const staves = useSelector(state => state.staves);
    const completedBars = useSelector(state => state.completedBars);
    const barInProgress = useSelector(state => state.barInProgress);


    useEffect(() => {
        var vexStaves = convertStaves(staves);
        var vexNotes = convertNotes(completedBars, barInProgress);

        if (staves[0] != null) {
            const canvas = document.getElementById("staff");
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.clientWidth, canvas.height);
    
            var i;
            for(i = 0; i < vexStaves.length; i++) {
                vexStaves[i].draw();
                if (vexNotes[i] != null) {
                    VF.Formatter.FormatAndDraw(vexStaves[i].context, vexStaves[i], vexNotes[i]);
                }
            }
        }
    });
    
    return (
            <canvas id="staff"></canvas>
    )
}