import React from 'react';
import Vex from 'vexflow';

const VF = Vex.Flow;
var WorkspaceInformation;
var renderer;
var context;
var position;

function createStaff() {
    position = 110;
    WorkspaceInformation = {
        canvas: document.getElementById("staff"),
        canvasWidth: window.innerWidth,
        canvasHeight: 100
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

    const stave = new VF.Stave(10, 0, 100);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();
}

const addBar = () => {
    const stave = new VF.Stave(position, 0, 100)
    stave.setContext(context).draw();
    position = position + 100;
}

export function Staff() {
    return (
        <div className="staff-block">
            <canvas id="staff"></canvas>
            <button id="button" onClick={createStaff}>Create Staff</button>
            <button onClick={addBar}>Add Bar</button>
        </div>
    )
}