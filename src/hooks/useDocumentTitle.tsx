import { useEffect, useState } from "react";

const APP_NAME = import.meta.env.VITE_APP_NAME;

export default function useDocumentTitle() {
    const [title, setTitle] = useState(APP_NAME);

    useEffect(() => {
        if (title) {
            document.title = title + ' | ' + APP_NAME;
        }
    }, [title]);

    const setDocTitle = (docTitle: string) => {
        useEffect(() => {
            setTitle(docTitle);
        }, [setTitle]);
    } 
    return [title, setDocTitle];
}