declare global {
    export interface ImageInfo {
        mimeType: string,
        data: any,
    }

    export interface ClassificationInfo {
        classification: number
        similarities: ImageInfo[]
    }
}

export {};