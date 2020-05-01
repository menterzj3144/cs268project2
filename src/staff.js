import React from 'react';
import Vex from 'vexflow';

const VF = Vex.Flow;
var WorkspaceInformation;
var renderer;
var context;
var position;

function createStaff() {
    position = 410;

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

    const stave = new VF.Stave(10, 0, 400);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();


    var notes = [
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"})
    ];

    notes[0] = new VF.StaveNote({keys: ["b/4"], duration: "q"});

    var voice = new VF.Voice({num_beats:4,  beat_value: 4});
    voice.addTickables(notes);
    new VF.Formatter().joinVoices([voice]).format([voice], 400);
    voice.draw(context, stave);
}

function addBar() {
    const stave = new VF.Stave(position, 0, 400)
    stave.setContext(context).draw();
    position = position + 400;
}

export function Staff() {
    return (
        <div className="staff-block">
            <canvas id="staff"></canvas>
            <button onClick={() => createStaff()}>Create Staff</button>
            <button onClick={() => addBar()}>Add Bar</button>
        </div>
    )
}