import packageJSON from "../../../package.json";

export default function Footer() {
    return (
        <footer className="main-footer">
            <strong>
                <span>Copyright © 2023 </span>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    DENTAL MEDICAL RECORD
                </a>
                <span>.</span>
            </strong>
            <div className="float-right d-none d-sm-inline-block">
                <b>Versi</b>
                <span>&nbsp;{packageJSON.version}</span>
            </div>
        </footer>
    );
}