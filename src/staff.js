import React, { useEffect } from 'react';
import Vex from 'vexflow';
import {useSelector, useDispatch} from 'react-redux';
import { addBar, addRest, deleteNote, deleteBar } from './actions';

const VF = Vex.Flow;
var WorkspaceInformation;
var renderer;
var context;

export function Staff() {
    const dispatch = useDispatch();
    const staves = useSelector(state => state.staves);
    const notes = useSelector(state => state.notes);

    const onClickAddBar = () => {
        dispatch(addBar());
    };

    const onClickAddRest = () => {
        dispatch(addRest());
    };

    const onClickDeleteNote = () => {
        dispatch(deleteNote());
    };

    const onClickDeleteBar = () => {
        dispatch(deleteBar());
    };

    useEffect(() => {
        
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


        const canvas = document.getElementById("staff");
        context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.clientWidth, canvas.height);

        var i;
        for (i = 0; i < staves.length; i++) {
            staves[i].setContext(context).draw();

            if (notes[i] != null) {
                VF.Formatter.FormatAndDraw(staves[i].context, staves[i], notes[i]);
            }

        }
    });
    
    return (
        <div className="staff-block">
            <canvas id="staff"></canvas>
            <div id="buttons">
                <button onClick={onClickAddBar}>Add Bar</button>
                <button onClick={onClickAddRest}>Add Rest</button>
                <button onClick={onClickDeleteNote}>Delete Last Note</button>
                <button onClick={onClickDeleteBar}>Delete Bar</button>
            </div>
            <span id="rest-add">Rest Added!</span>
            <span id="delete">No notes to delete.</span>
        </div>
    )
}