import { Fragment, useState, useEffect, useRef } from "react";
import './index.scss'

const Magnifier = ({url, magnifierSize, imageSizes, zoom}) => {

    const [ imgSrc, setImgSrc ] = useState(url);
    const [ nativeWid, setNativeWid ] = useState(0);
    const [ nativeHei, setNativeHei ] = useState(0);
    const [ largeVisible, setLargeVisible ] = useState(false);
    const [ px, setPx ] = useState(0);
    const [ py, setPy ] = useState(0);
    const [ magnifierWid, setMagnifierWid ] = useState(magnifierSize);
    const [ imageSize, setImageSize ] = useState(imageSizes);
    const [ bgp, setBgp ] = useState('');
    let smallImg = useRef();

    useEffect(() => {
        const  imgObj = new Image();
        imgObj.src = imgSrc;
        setNativeHei(imgObj.height);
        setNativeWid(imgObj.width);
    }, [imgSrc])

    const handleMouseEnter = (e) => {
        console.log('mouse enter');
        setLargeVisible(true);
    }

    const handleMouseLeave = (e) => {
        console.log('mouse leave');
        setLargeVisible(false);
    }

    const handleMouseMove = (e) => {
        if(!nativeHei || !nativeWid){
            return;
        }else{
            const mX = e.clientX;
            const mY = e.clientY;
            const smallImage = smallImg
            const rx = Math.round((mX / smallImage.width) * nativeWid * zoom - magnifierWid / 2) * -1;
            const ry = Math.round((mY / smallImage.height) * nativeHei * zoom - magnifierWid / 2) * -1;

            const bgp = `${rx}px ${ry}px`;
            const px = mX - magnifierWid / 2;
            const py = mY - magnifierWid / 2;
            setBgp(bgp);
            setPx(px);
            setPy(py);
        }
    }

  return (
    <Fragment>
      <div className="magnify" onMouseMove={(e)=>handleMouseMove(e)} onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>handleMouseLeave(e)}>
        <div className={`large ${largeVisible ? 'visible' : 'hidden'}`} style={{
            left: px,
            top: py,
            backgroundPosition: bgp,
            backgroundImage: `url(${imgSrc})`,
            backgroundRepeat: 'no-repeat',
            width: magnifierWid,
            height: magnifierWid,
            backgroundSize: `${nativeWid * zoom}px ${nativeHei * zoom}px`
        }}>
            <img ref={el => smallImg = el } className='small' src={imgSrc} alt="" width={imageSize} />
        </div>
      </div>
    </Fragment>
  );
}
export default Magnifier;