import React from 'react';
import Vex from 'vexflow';

const VF = Vex.Flow;
var WorkspaceInformation;
var renderer;
var context;
var position = 10;

const createStaff = () => {
    WorkspaceInformation = {
        canvas: document.getElementById("staff"),
        canvasWidth: 1000,
        canvasHeight: 120
    };

    renderer = new VF.Renderer(
        WorkspaceInformation.canvas,
        VF.Renderer.Backends.CANVAS
    );

    renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);

    context = renderer.getContext();

    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    const stave = new VF.Stave(position, 0, 100);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();

    position = position + 100;

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
            <button onClick={createStaff}>Create Staff</button>
            <button onClick={addBar}>Add Bar</button>
        </div>
    )
}