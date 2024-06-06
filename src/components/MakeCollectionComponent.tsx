import { fabric } from 'fabric';
import { useEffect, useState } from 'react';
import './style/MakeCollection.scss';

import ButtonComponent from './Button';

function MakeCollection({ categories }) {

    const canvas = new fabric.Canvas('canvas');
    const [images, setImages] = useState([]);

    const categories: Record<string, string[]> = {
        "artick-monkeys": [
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/AM5.png?v=1716418796445",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/AM4.png?v=1716418797026",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/AM3.png?v=1716418797598",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/AM2.png?v=1716418798088",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/AM1.png?v=1716418798765",
        ],
        series: [
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/RM5.png?v=1716418800688",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/RM4.png?v=1716418801419",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/RM3.png?v=1716418802014",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/RM2.png?v=1716418802743",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/RM1.png?v=1716418803440",
        ],
        futbol: [
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/MESSI5.png?v=1716418807541",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/MESSI4.png?v=1716418809245",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/MESSI3.png?v=1716418810991",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/MESSI2.png?v=1716418812710",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/MESSI1.png?v=1716418814323",
        ],
        memes: [
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/MM5.png?v=1716418815883",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/MM4.png?v=1716418817545",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/MM3.png?v=1716418819184",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/MM2.png?v=1716418820719",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/MM1.png?v=1716418822324",
        ],
        animes: [
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/CSM5png.png?v=1716418823951",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/CSM4.png?v=1716418825492",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/CSM1.png?v=1716418792644",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/CSM2.png?v=1716418791943",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/CSM3.png?v=1716418791220",
        ],
        musica: [
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/BB5.png?v=1716418793494",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/BB4.png?v=1716418793983",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/BB3.png?v=1716418794590",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/BB2.png?v=1716418795170",
            "https://cdn.glitch.global/ad284e18-93bd-472c-b6ff-158c814d7227/BB1.png?v=1716418795780",
        ],
    };

    const imagePairs: Map<fabric.Image, fabric.Image> = new Map();

    useEffect(() => {
        const fetchImages = async (category: string) => {
            // Aquí asumimos que categories[category] devuelve una promesa que resuelve a una lista de URLs.
            const urls = await categories[category];
            setImages(urls);
        };

        fetchImages('tu-categoria');
    }, []);

    const addToCanvas = (imageElement: HTMLImageElement) => {
        const imgElement = new Image();
        imgElement.src = imageElement.src;
        imgElement.crossOrigin = 'anonymous';
        imgElement.onload = () => {
            fabric.Image.fromURL(imageElement.src, function (img) {
                const canvasCenterX = canvas.getWidth() / 2;
                const canvasCenterY = canvas.getHeight() / 2;

                img.set({
                    left: canvasCenterX,
                    top: canvasCenterY,
                    scaleX: 0.5,
                    scaleY: 0.5,
                    hasBorders: false,
                    hasControls: true,
                    originX: 'center',
                    originY: 'center',
                    lockUniScaling: true,
                });

                // Rest of the code...

                canvas.add(silhouetteImg);
                canvas.add(img);
                imagePairs.set(img, silhouetteImg);
                updateSilhouette();
                updateSizeTable(img, imgElement);
            });
        };
    };

    // const showCategory = (category: string) => {
    //     const catalog = document.getElementById('catalog');
    //     if (catalog) {
    //         catalog.innerHTML = '';
    //         categories[category].forEach((url: string) => {
    //             const img = document.createElement('img');
    //             img.src = url;
    //             img.alt = 'Imagen de ' + category;
    //             img.className = 'catalog-image';
    //             img.onclick = function () {
    //                 addToCanvas(this as HTMLImageElement);
    //             };
    //             catalog.appendChild(img);
    //         });
    //     }
    // };

    function createSilhouetteImage(imgElement: HTMLImageElement, margin: number = 15): string {
        const offscreenCanvas = document.createElement("canvas");
        offscreenCanvas.width = imgElement.width + margin * 2;
        offscreenCanvas.height = imgElement.height + margin * 2;
        const offscreenCtx = offscreenCanvas.getContext("2d");

        if (offscreenCtx) {
            offscreenCtx.drawImage(imgElement, margin, margin);
            const imageData = offscreenCtx.getImageData(
                margin,
                margin,
                imgElement.width,
                imgElement.height
            );
            const data = imageData.data;

            offscreenCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
            offscreenCtx.lineWidth = margin * 2;

            const silhouetteType = "gradient";
            const selectedColor = "your_selected_color";
            const gradientColor = "your_gradient_color";

            if (silhouetteType === "gradient") {
                const gradient = offscreenCtx.createLinearGradient(
                    0,
                    0,
                    offscreenCanvas.width,
                    offscreenCanvas.height
                );
                gradient.addColorStop(0, selectedColor);
                gradient.addColorStop(1, gradientColor);
                offscreenCtx.strokeStyle = gradient;
            } else {
                offscreenCtx.strokeStyle = selectedColor;
            }

            const isEdge = (data: Uint8ClampedArray, x: number, y: number): boolean => {
                // Your implementation of the isEdge function
                return false; // Add a return statement here
            };

            const edgePoints = [];
            for (let y = 1; y < imgElement.height - 1; y++) {
                for (let x = 1; x < imgElement.width - 1; x++) {
                    const alpha = data[(y * imgElement.width + x) * 4 + 3];
                    if (alpha > 0 && isEdge(data, x, y)) {
                        edgePoints.push([x + margin, y + margin]);
                    }
                }
            }

            offscreenCtx.beginPath();
            edgePoints.forEach(([x, y]) => {
                offscreenCtx.moveTo(x, y);
                offscreenCtx.arc(x, y, margin / 2, 0, 2 * Math.PI);
            });
            offscreenCtx.stroke();
        }

        return offscreenCanvas.toDataURL();
    }

    const updateSizeTable = (img: fabric.Image, imgElement: HTMLImageElement) => {
        const imageName = document.getElementById("image-name");
        const imageWidth = document.getElementById("image-width");
        const imageHeight = document.getElementById("image-height");
        const imageWidthCm = document.getElementById("image-width-cm");
        const imageHeightCm = document.getElementById("image-height-cm");

        const pixelsPerCm = 37.8;

        if (img && imageName && imageWidth && imageHeight && imageWidthCm && imageHeightCm) {
            const boundingBox = getNonTransparentBoundingBox(imgElement);
            const scaleX = img.scaleX || 1;
            const scaleY = img.scaleY || 1;
            const widthPx = Math.round(boundingBox.width * scaleX);
            const heightPx = Math.round(boundingBox.height * scaleY);
            const widthCm = (widthPx / pixelsPerCm).toFixed(2);
            const heightCm = (heightPx / pixelsPerCm).toFixed(2);

            imageName.innerText = img.getSrc().split("/").pop()?.split("?")[0] || "N/A";
            imageWidth.innerText = String(widthPx);
            imageHeight.innerText = String(heightPx);
            imageWidthCm.innerText = widthCm;
            imageHeightCm.innerText = heightCm;
        } else if (imageName && imageWidth && imageHeight && imageWidthCm && imageHeightCm) {
            imageName.innerText = "N/A";
            imageWidth.innerText = "N/A";
            imageHeight.innerText = "N/A";
            imageWidthCm.innerText = "N/A";
            imageHeightCm.innerText = "N/A";
        }
    };

    function getNonTransparentBoundingBox(imgElement: HTMLImageElement) {
        const offscreenCanvas = document.createElement("canvas");
        offscreenCanvas.width = imgElement.width;
        offscreenCanvas.height = imgElement.height;
        const offscreenCtx = offscreenCanvas.getContext("2d");
        if (offscreenCtx) {
            offscreenCtx.drawImage(imgElement, 0, 0);
            const imageData = offscreenCtx.getImageData(
                0,
                0,
                imgElement.width,
                imgElement.height
            );
            const data = imageData.data;

            let minX = imgElement.width,
                minY = imgElement.height,
                maxX = 0,
                maxY = 0;

            let foundPixel = false;

            for (let y = 0; y < imgElement.height; y++) {
                for (let x = 0; x < imgElement.width; x++) {
                    const alpha = data[(y * imgElement.width + x) * 4 + 3];
                    if (alpha > 0) {
                        foundPixel = true;
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            if (!foundPixel) return { width: 0, height: 0 };
            return {
                width: maxX - minX + 1,
                height: maxY - minY + 1,
            };
        }
        let minX = imgElement.width;
        let maxX = 0;

        let minY = imgElement.height;
        let maxY = 0;
        return {
            width: maxX - minX + 1,
            height: maxY - minY + 1,
        };
    }


    const silhouetteImg = new fabric.Image('', {
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        scaleX: 1,
        scaleY: 1,
        originX: 'center',
        originY: 'center',
        selectable: false,
        evented: false,
        angle: 0,
        flipX: false,
        flipY: false,
    });


    const updateSilhouette = () => {
        const img = imagePairs.get(silhouetteImg);
        const imgElement = img?.getElement() as HTMLImageElement;
        if (img && imgElement) {
            const scaleX = img.scaleX || 1;
            const scaleY = img.scaleY || 1;
            const margin = 12 / Math.max(scaleX, scaleY); // tamaño inicial de la silueta
            const silhouetteDataURL = createSilhouetteImage(imgElement, margin);
            fabric.Image.fromURL(silhouetteDataURL, function (newSilhouetteImg) {
                silhouetteImg.setElement(newSilhouetteImg.getElement());
                silhouetteImg.set({
                    left: silhouetteImg.left,
                    top: silhouetteImg.top,
                    angle: silhouetteImg.angle,
                    scaleX: scaleX,
                    scaleY: scaleY,
                    flipX: silhouetteImg.flipX,
                    flipY: silhouetteImg.flipY,
                });
                canvas.renderAll();
            });
        }
    };

    return (
        <section className="container">
            <div className="content">
                <canvas id="canvas" width="567" height="794"></canvas>
            </div>
            <div>
                <div className="catalog-container">
                    <div className="catalog-categories">

                        <ButtonComponent text="Artick Monkeys" onClick={() => showCategory('artick-monkeys')} variant='outlined' />
                        <ButtonComponent text="Series" onClick={() => showCategory('series')} variant='outlined' />
                        <ButtonComponent text="Futbol" onClick={() => showCategory('futbol')} variant='outlined' />
                        <ButtonComponent text="Memes" onClick={() => showCategory('memes')} variant='outlined' />
                        <ButtonComponent text="Animes" onClick={() => showCategory('animes')} variant='outlined' />
                        <ButtonComponent text="Música" onClick={() => showCategory('musica')} variant='outlined' />
                    </div>
                    <div id="catalog">
                        {images.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Imagen de tu-categoria`}
                                className="catalog-image"
                                onClick={() => addToCanvas(url)}
                            />
                        ))}
                    </div>
                </div>
                <div className="table-container">
                    <table id="size-table">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Ancho (px)</th>
                                <th>Alto (px)</th>
                                <th>Ancho (cm)</th>
                                <th>Alto (cm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="image-name">N/A</td>
                                <td id="image-width">N/A</td>
                                <td id="image-height">N/A</td>
                                <td id="image-width-cm">N/A</td>
                                <td id="image-height-cm">N/A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="delete-btn" id="delete-btn" disabled>Eliminar Imagen</button>
                <div className="color-picker-container">
                    <label htmlFor="silhouette-type">Tipo de Silueta:</label>
                    <select id="silhouette-type" className="color-picker">
                        <option value="solid">Sólido</option>
                        <option value="gradient">Degradado</option>
                    </select>
                    <input type="color" id="color-picker" className="color-picker" value="#ffffff" />
                    <input type="color" id="gradient-color-picker" className="color-picker" value="#000000" style={{ display: "none" }} />
                    <button id="update-silhouette-thickness-btn">Actualizar Grosor de Silueta</button>
                </div>
            </div>
        </section>
    );
}

export default MakeCollection;