import React, { useEffect, useReducer } from 'react';
import { useCallOnNextRender } from 'react-use-call-onnext-render';
import Draggable from 'react-draggable';

const canvasStyle = {
  position: 'relative',
  height: '20vh',
  background: 'white',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

const boxStyle = {
  position: 'relative',
  border: '1px #999 solid',
  borderRadius: '10px',
  textAlign: 'center',
  width: '100px',
  height: '30px',
  color: 'black',
};

const DraggableBox = () => {
  const callOnNextRender = useCallOnNextRender();
  useEffect(() => {
    console.log('component did mount');
    callOnNextRender(
      () => {
        console.log('20 renders after mount');
      },
      20,
      true
    );
  }, []);

  useEffect(() => {
    console.log('component has rendered');
  });

  const [, rerender] = useReducer((x) => x + 1, 0);
  return (
    <Draggable onStart={rerender} onDrag={rerender}>
      <div style={boxStyle}>box</div>
    </Draggable>
  );
};

const Example = () => {
  return (
    <React.Fragment>
      <h3>
        <u>Simple Example:</u>
      </h3>
      <p>this box will rerender 20 times after mounting.</p>
      <div style={canvasStyle} id="canvas">
        <DraggableBox />
      </div>
    </React.Fragment>
  );
};

export default Example;
