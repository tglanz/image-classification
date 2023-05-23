export function encodeBuffer(mimeType: string, data: any) {
    const base64 = btoa(String.fromCharCode(...new Uint8Array(data.data)));
    return `data:${mimeType};base64,${base64}`;
}