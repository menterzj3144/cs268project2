import React from 'react';
import Vex from 'vexflow';
import {addNote, addRest, deleteNote, clearBar} from './piano'

const VF = Vex.Flow;
var WorkspaceInformation;
var renderer;
var context;
var position;

function createStaff(staves) {
    position = 410;

    WorkspaceInformation = {
        canvas: document.getElementById("staff"),
        canvasWidth: window.innerWidth,
        canvasHeight: 120
    };
    document.getElementById("staff").style.visibility = "visible";
    document.getElementById("button").disabled = true;    

    renderer = new VF.Renderer(
        WorkspaceInformation.canvas,
        VF.Renderer.Backends.CANVAS
    );

    renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);

    context = renderer.getContext();

    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    const stave = new VF.Stave(10, 0, 400);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();
    staves[0] = stave;
}

export function addBar(staves) {
    const stave = new VF.Stave(position, 0, 400)
    stave.setContext(context).draw();
    position = position + 400;
    staves.push(stave);
}

export function Staff(props) {
    return (
        <div className="staff-block">
            <canvas id="staff"></canvas>
            <button id="button" onClick={() => createStaff(props.staves)}>Create Staff</button>
            <button onClick={() => addNote(props.staves)}>Add Note</button>
            <button onClick={() => addRest(props.staves)}>Add Rest</button>
            <button onClick={() => deleteNote(props.staves)}>Delete Last Note</button>
            <button onClick={() => clearBar(props.staves)}>Clear Bar</button>
            <span id="note-add">Note Added!</span>
            <span id="rest-add">Rest Added!</span>
            <span id="delete">No notes to delete.</span>
        </div>
    )
}