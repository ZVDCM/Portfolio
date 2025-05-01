import { Download } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

export default function DownloadResume() {
    return (
        <Button variant="outline" className="w-fit">
            <Download /> Download Resume
        </Button>
    );
}
