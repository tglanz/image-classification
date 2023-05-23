import { BACKEND_ENDPOINT } from "../services/config";

// Remove. Leftovers from first alternatives.
// export const classifyImageEndpoint = `${BACKEND_ENDPOINT}/api/classify/image`;

export async function classifyImage(file: File): Promise<ClassificationInfo> {
    const formData = new FormData();
    formData.append("image", file, file.name);

    const response = await fetch(`${BACKEND_ENDPOINT}/api/classify/image`, {
        method: "POST",
        body: formData
    });

    const json = await response.json();
    
    return {
        classification: json.classification,
        similarities: json.similarities as ImageInfo[],
    };
}