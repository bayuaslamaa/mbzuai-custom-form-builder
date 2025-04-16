'use client';

import { FormField } from '../../types/form';

const JSONViewer = ({ fields }: { fields: FormField[] }) => {
    return (
        <pre className="text-xs bg-gray-900 text-white p-2 overflow-auto">
            {JSON.stringify(fields, null, 2)}
        </pre>
    );
};

export default JSONViewer; 
