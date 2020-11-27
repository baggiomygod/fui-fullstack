import * as React from 'react'
import utils from './utils'
import * as THREE from 'three'
import './WebVR.styl'
const WebVR = () => {
    // const villaId = "demo";
    // const name_arr =["view1","view2"];//分类地址
    // const load_url = 'images/panorama';//相对根路径

    // let camera, scene, renderer;
    // let texture_placeholder
    // let isUserInteracting = false
    // let onMouseDownMouseX = 0
    // let onMouseDownMouseY = 0
    let lon = 90
    // let onMouseDownLon = 0
    let lat = 0
    // let onMouseDownLat = 0
    // let phi = 0
    // let theta = 0
    const target = new THREE.Vector3()
    // let onPointerDownPointerX
    // let onPointerDownPointerY
    // let onPointerDownLon
    // let onPointerDownLat
    // let mesh_arr = {}
    // let offsetPostion;
    // let index = 0
    // let currentLoadIndex = 0;
    // let currentShowMesh = -1
    // let isRotate = false;
    const rotateAngel = utils.IsPC() ? 180 : 90;

    
    const orienter = (a) => {
        lon = 360 - Math.abs(a.lon);
        lat = a.lat
        console.log(lon, lat, target, rotateAngel)
    }
    const Orienter = require('./orienter_amd')
    const ori = new Orienter()
    ori.orienter = orienter
    return (
        <div className="vr-page-container">
            <div id="vr-container" />
            <div className="bts hidden" style={{ display: 'block' }} />
            <div className="loading hidden" style={{ lineHeight: '568px', display: 'none' }}>
                <span style={{marginTop: '50%'}}>loading...</span>
            </div>
            <div className="rotate hidden " dt-value="1" style={{ display: 'block' }}>自动感应</div>
        </div>
    )
}

export default WebVR