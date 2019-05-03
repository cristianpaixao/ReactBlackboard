import React from 'react';
import {init, showHideOptions, color, save, erase} from './ControlBlackBoard';

class BlackBoard extends React.Component {
    componentDidMount() {
        init();
    }
    render() {
        return(
            <>
                <div className="options-container">
                    <div className="show-hide" onMouseOver={showHideOptions}>
                        Mostrar/Ocultar opções
                    </div>
                    <div className="options" id="blackBoardOptions"  onMouseOut={showHideOptions}>
                        <div className="colorContainer">
                            <div className="colorPalette">
                                <div className="color white" id="white" onClick={(e) => {color(e.target)}}></div>
                                <div className="color light-grey" id="light-grey" onClick={(e) => {color(e.target)}} ></div>
                                <div className="color blue" id="blue" onClick={(e) => {color(e.target)}} ></div>
                                <div className="color dark-blue" id="dark-blue" onClick={(e) => {color(e.target)}}></div>
                                <div className="color purple" id="purple" onClick={(e) => {color(e.target)}}></div>
                                <div className="color pink" id="pink" onClick={(e) => {color(e.target)}}></div>
                                <div className="color red" id="red" onClick={(e) => {color(e.target)}}></div>
                                <div className="color orange" id="orange" onClick={(e) => {color(e.target)}}></div>
                                <div className="color yellow" id="yellow" onClick={(e) => {color(e.target)}}></div>
                                <div className="color green" id="green" onClick={(e) => {color(e.target)}}></div>
                                <div className="color dark-green" id="dark-green" onClick={(e) => {color(e.target)}}></div>
                                <div className="color eraser" id="eraser" onClick={(e) => {color(e.target)}}></div>
                                <div className="option" onClick={save}>salvar</div>
                                <div className="option" onClick={erase}>limpar</div>
                            </div>
                        </div>
                    </div>
                </div>
                <canvas id="mainCanvas"></canvas>
            </>
        )
    }
}

export default BlackBoard;