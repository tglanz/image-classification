import { ChangeEvent } from "react";

import * as api from "../services/api";

export interface Props {
    onClassification: (classification: ClassificationInfo) => void
}

export default function UploadFileForm({ onClassification }: Props) {
    async function onFileChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        const files = e.target?.files;
        if (files == null || files.length === 0) {
            console.log("no files");
            return;
        }

        const file = files[0];
        const result = await api.classifyImage(file);
        onClassification(result);
    }

    return (
        <form
            method="post"
            encType="multipart/form-data">
            <input type="file" onChange={onFileChange} name="image"/>
        </form>
    )

    // return (
    //     <form
    //         action={api.classifyImageEndpoint}
    //         method="post" encType="multipart/form-data">
    //         <input type="file" name="image"/>
    //         <input type="submit" value="Submit" />
    //     </form>
    // )
}