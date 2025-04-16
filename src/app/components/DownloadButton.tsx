'use client';

import { FormField } from '../../types/form';

const DownloadButton = ({ fields }: { fields: FormField[] }) => {
    // Function to handle the download of the JSON file
    const downloadJSON = () => {
        // Create a new Blob object with the JSON string of the fields array
        const blob = new Blob([JSON.stringify(fields, null, 2)], {
            type: 'application/json', // Set the MIME type to application/json
        });
        // Create a URL for the Blob object
        const url = URL.createObjectURL(blob);
        // Create a temporary anchor element
        const a = document.createElement('a');
        a.href = url;
        a.download = 'form.json';
        a.click();
        // Revoke the Blob URL to free up memory
        URL.revokeObjectURL(url);
    };

    return (
        <button onClick={downloadJSON} className="mt-2 p-2 bg-blue-500 text-white rounded">
            Download JSON
        </button>
    );
};

export default DownloadButton;
