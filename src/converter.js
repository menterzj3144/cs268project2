import Vex from 'vexflow';

const VF = Vex.Flow;

export function convertStaves(staves) {
    var temp = [];
    temp.push(new VF.Stave().addClef("treble").addTimeSignature("4/4"));

    var i;
    for (i = 1; i < staves.length; i++) {
        temp.push(new VF.Stave());
    }

    return temp;
}

export function convertNotes(completedBars, barInProgress) {
    var vexNotes = [];
    var temp = [];

    console.log(completedBars)

    var i;
    var j;
    if (completedBars.length !== 0) {
        for (i = 0; i < completedBars.length; i++) {
            for (j = 0; j < 4; j++) {
                console.log("i = ", i, "j = ", j);
                var note = new VF.StaveNote({keys: [`${completedBars[i][j]}/4`], duration: "q"});
                temp.push(note);
            }
            vexNotes.push(temp);
        }
    }

    temp = [];

    if (barInProgress.length !== 0) {
        for (i = 0; i < barInProgress.length; i++) {
            var note1 = new VF.StaveNote({keys: [`${barInProgress[i]}/4`], duration: "q"});
            temp.push(note1);
        }
        vexNotes.push(temp);
    }   

    return vexNotes;
}