import { Fragment } from 'react';
import { SideBySideMagnifier, GlassMagnifier } from 'react-image-magnifiers'
import Magnifier from './Components/Magnifier';
import './App.css';

const App = () => {
  
  const sideExample = {
    alwaysInPlace: false,
    overlayOpacity: .5,
    switchSides: false,
    fillAvailableSpace: true,
    fillAlignTop: false,
    fillGapLeft: 0,
    fillGapRight: 5,
    fillGapTop: 5,
    fillGapBottom: 5,
    zoomContainerBorder: "1px solid #ccc",
    zoomContainerBoxShadow: "0 2px 4px rgba(0,0,0,.5)",
    zoomPosition:"right",
    inPlaceMinBreakpoint:641,
    imageSrc:'https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg',
    largeImageSrc:'https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg',
  }

  const sideExample2 = {
    alwaysInPlace: false,
    magnifierSize: '35%',
    imageSrc:'https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg',
    largeImageSrc:'https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg',
  }

  const magnifierExample = {
    url: 'https://images.unsplash.com/photo-1562694909-3d53309d5e14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    magnifier: 200,
    imageSize: 300,
    zoom:1
  }

  return (
    <Fragment>
      {/* <SideBySideMagnifier {...sideExample} className='input-position' /> */}
      {/* <Magnifier {...magnifierExample} className='input-position' /> */}
      <GlassMagnifier {...sideExample2} className='input-position2' />
    </Fragment>
  );
}

export default App;
