import React, { useEffect } from 'react';
import Vex from 'vexflow';
import {useSelector, useDispatch} from 'react-redux';
import { addNote, deleteNote, yeet1 } from './actions';
import { convertStaves, convertNotes } from './converter';

const VF = Vex.Flow;

export function Staff() {
    const dispatch = useDispatch();
    const staves = useSelector(state => state.staves);
    const completedBars = useSelector(state => state.completedBars);
    const barInProgress = useSelector(state => state.barInProgress);

    const onClickAddRest = () => {
        dispatch(addNote("r"));
    };

    const onClickDeleteNote = () => {
        dispatch(deleteNote());
    };

    const yeet = () => {
        dispatch(yeet1());
    };

    useEffect(() => {
        // var numStaves = window.innerWidth / 400;
        // var x = numStaves % 1;
        // numStaves = numStaves - x;
        // x = x * 400;
        // x = x / 2;
        // var xposition = x;
        // var yposition = -10;

        var vexStaves = convertStaves(staves);
        var vexNotes = convertNotes(completedBars, barInProgress);
        
        // WorkspaceInformation = {
        //     canvas: document.getElementById("staff"),
        //     canvasWidth: window.innerWidth,
        //     canvasHeight: 100
        // };
        // document.getElementById("staff").style.visibility = "visible";
    
        // renderer = new VF.Renderer(
        //     WorkspaceInformation.canvas,
        //     VF.Renderer.Backends.CANVAS
        // );
    
        // renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);
    
        // context = renderer.getContext();
    
        // context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // const canvas = document.getElementById("staff");
        // context = canvas.getContext("2d");
        // context.clearRect(0, 0, canvas.clientWidth, canvas.height);

        // var i;
        // for (i = 0; i < vexStaves.length; i++) {
        //     console.log(vexStaves);
        //     if (xposition + 400 > window.innerWidth) {
        //         xposition = x;
        //         yposition += 100;
        //         WorkspaceInformation.canvasHeight += 100;
        //         renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);
        //     }
        //     vexStaves[i].setContext(context).setX(xposition).setY(yposition).setWidth(400).draw();
        //     xposition += 400;
        //     if (vexNotes[i] != null) {
        //         VF.Formatter.FormatAndDraw(vexStaves[i].context, vexStaves[i], vexNotes[i]);
        //     }
        // }
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
        <div className="staff-block">
            <canvas id="staff"></canvas>
            <div id="buttons">
                <button onClick={onClickAddRest}>Add Rest</button>
                <button onClick={onClickDeleteNote}>Delete Last Note</button>
                <button onClick={yeet}>Yeet</button>
            </div>
            <span id="rest-add">Rest Added!</span>
            <span id="delete">No notes to delete.</span>
        </div>
    )
}