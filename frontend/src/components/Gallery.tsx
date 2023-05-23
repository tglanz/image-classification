import { encodeBuffer } from "../services/encode-buffer"
import "./Gallery.css";

export interface Props {
    images: ImageInfo[]
}

export default function Gallery({ images }: Props) {
    if (images == null) {
        return <p>No images</p>
    }
    return (
        <div className="Gallery">
            <p>{images.length} Images</p>
            <div className="images">
                {images.map((image, index) => (
                    <img key={index} src={encodeBuffer(image.mimeType, image.data)} alt="" />
                ))}
            </div>
        </div>
    )
}