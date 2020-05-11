import React from 'react';
import Vex from 'vexflow';
import {addRest, deleteNote, clearBar, clearAndDraw} from './piano'

const VF = Vex.Flow;
var WorkspaceInformation;
var renderer;
var context;
var xposition;
var yposition = -10;
var x;


export function createStaff(staves, notes) {
    x = window.innerWidth / 400;
    x = x % 1;
    x = x * 400;
    x = x / 2;
    xposition = x + 400;

    WorkspaceInformation = {
        canvas: document.getElementById("staff"),
        canvasWidth: window.innerWidth,
        canvasHeight: 100
    };
    document.getElementById("staff").style.visibility = "visible";

    renderer = new VF.Renderer(
        WorkspaceInformation.canvas,
        VF.Renderer.Backends.CANVAS
    );

    renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);

    context = renderer.getContext();

    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    const stave = new VF.Stave(x, yposition, 400);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context);
    staves[0] = stave;
    
    notes[0][0].setStyle({fillStyle: "green", strokeStyle: "green"});
    clearAndDraw(staves, notes);
}


export function addBar(staves) {
    if (xposition + 400 > window.innerWidth) {
        xposition = x;
        yposition += 100;
        WorkspaceInformation.canvasHeight += 100;
        console.log(WorkspaceInformation.canvasHeight);
        renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);
    }

    const stave = new VF.Stave(xposition, yposition, 400)
    stave.setContext(context).draw();
    xposition = xposition + 400;
    staves.push(stave);
}


export function Staff(props) {
    return (
        <div className="staff-block">
            <canvas id="staff"></canvas>
            <div id="buttons">
                <button onClick={() => addRest(props.staves, props.notes)}>Add Rest</button>
                <button onClick={() => deleteNote(props.staves, props.notes)}>Delete Last Note</button>
                <button onClick={() => clearBar(props.staves, props.notes)}>Clear Bar</button>
            </div>
            <span id="rest-add">Rest Added!</span>
            <span id="delete">No notes to delete.</span>
        </div>
    )
}