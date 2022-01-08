import { useEffect } from 'react'
import './index.scss'
import { lerp } from 'canvas-sketch-util/math'
import palette from 'nice-color-palettes'
import random from 'canvas-sketch-util/random'


function About(){

    const createGrid = () =>{
        const point = []
        const count = 30
        const palettes=random.shuffle(random.pick(palette))
        for (let x = 0; x < count; x++) {
            for (let y = 0; y < count; y++) {
                const u = x / (count - 1)
                const v = y / (count - 1)
                const radius = Math.abs(random.noise2D(u , v)) * 0.15
                point.push({
                    position: [u,v],
                    color: random.pick(palettes),
                    rotation: 0,
                    radius
                })
            }
        }

        return point
    }

    

    const createCanvas = () =>{
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const width = 400
        const height = 400
        const margin = 50
        canvas.width=width
        canvas.height=height
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);

        const points = createGrid().filter(()=>random.value()<0.5)

        
        points.forEach(data =>{
            const {
                position,
                rotation,
                color,
                radius
            }=data
            const [ u , v ] = position

            const x = lerp(margin, width - margin, u)
            const y = lerp(margin, height - margin, v)
            
            ctx.save()
            ctx.fillStyle = color
            ctx.rotate(rotation)
            ctx.translate(x, y)
            ctx.font = `${radius * width}px Helvetica`
            ctx.fillText('=', 0, 0)
            ctx.restore()
        })
    }



    useEffect(()=>{
        createCanvas()
    },[])


    return (
        <div className='aboutPage'>
            <div className='canvasBox'>
                <canvas id='canvas'>
                    
                </canvas>
            </div>
        </div>
    )
}

export default About