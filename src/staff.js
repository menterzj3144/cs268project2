import React from 'react';
import Vex from 'vexflow';

const createStaff = () => {
    const VF = Vex.Flow;

    const WorkspaceInformation = {
        canvas: document.getElementById("staff"),
        canvasWidth: 1000,
        canvasHeight: 100
    };

    const renderer = new VF.Renderer(
        WorkspaceInformation.canvas,
        VF.Renderer.Backends.CANVAS
    );

    renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);

    const context = renderer.getContext();

    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");


    const stave = new VF.Stave(10, 0, 100);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();

    const stave2 = new VF.Stave(110, 0, 100);
    stave2.setContext(context).draw();

    const stave3 = new VF.Stave(210, 0, 100);
    stave3.setContext(context).draw();
}

export function Staff() {
    return (
        <div className="staff-block">
            <canvas id="staff"></canvas>
            <button onClick={createStaff}>Create Staff</button>
        </div>
    )
}