import Vex from 'vexflow';

const VF = Vex.Flow;
var WorkspaceInformation;
var renderer;
var context;


export function convertStaves(staves) {
    var x;
    var xposition;
    x = window.innerWidth / 400;
    x = x % 1;
    x = x * 400;
    x = x / 2;
    xposition = 420;
    var yposition = -10;

    WorkspaceInformation = {
        canvas: document.getElementById("staff"),
        canvasWidth: window.innerWidth - (x * 2) + 40,
        canvasHeight: 100
    };
    renderer = new VF.Renderer(
        WorkspaceInformation.canvas,
        VF.Renderer.Backends.CANVAS
    );
    renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);
    context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    var vexStaves = [];

    var staff = new VF.Stave(20, yposition, 400);
    staff.addClef("treble").addTimeSignature("4/4");
    staff.setContext(context);
    vexStaves.push(staff);

    var i;
    for (i = 1; i < staves.length; i++) {
        if (xposition + 400 > WorkspaceInformation.canvasWidth) {
            xposition = 20;
            yposition += 100;
            WorkspaceInformation.canvasHeight += 100;
            renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);
        }
        staff = new VF.Stave(xposition, yposition, 400);
        staff.setContext(context);
        vexStaves.push(staff);
        xposition = xposition + 400;
    }
    return vexStaves;
}


export function convertNotes(completedBars, barInProgress) {
    var vexNotes = [];
    var temp = [];

    var i;
    var j;
    var note;
    if (completedBars.length !== 0) {
        for (i = 0; i < completedBars.length; i++) {
            for (j = 0; j < 4; j++) {
                if (completedBars[i][j].length === 2) {
                    note = new VF.StaveNote({keys: [`${completedBars[i][j].charAt(0)}/4`], duration: "q"}).addAccidental(0, new VF.Accidental("#"));
                } else if (completedBars[i][j] === "r") {
                    note = new VF.StaveNote({keys: ["b/4"], duration: "qr"});
                } else {
                    note = new VF.StaveNote({keys: [`${completedBars[i][j]}/4`], duration: "q"});
                }
                temp.push(note);
            }
            vexNotes.push(temp);
            temp = [];
        }
    }

    if (barInProgress.length !== 0) {
        for (i = 0; i < barInProgress.length; i++) {
            if (barInProgress[i].length === 2) {
                note = new VF.StaveNote({keys: [`${barInProgress[i].charAt(0)}/4`], duration: "q"}).addAccidental(0, new VF.Accidental("#"));
            } else if (barInProgress[i] === "r") {
                note = new VF.StaveNote({keys: ["b/4"], duration: "qr"});
            } else {
                note = new VF.StaveNote({keys: [`${barInProgress[i]}/4`], duration: "q"});
            }
            temp.push(note);
        }
        vexNotes.push(temp);
    }   

    return vexNotes;
}