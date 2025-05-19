import React from 'react';

const Table = ({ className, ...props }) => (
    <div className="relative w-full overflow-auto">
        <table className={`w-full caption-bottom text-sm ${className}`} {...props} />
    </div>
);

const TableHeader = ({ className, ...props }) => (
    <thead className={className} {...props} />
);

const TableBody = ({ className, ...props }) => (
    <tbody className={className} {...props} />
);

const TableFooter = ({ className, ...props }) => (
    <tfoot className={className} {...props} />
);

const TableRow = ({ className, ...props }) => (
    <tr className={`border-b transition-colors hover:bg-gray-50 ${className}`} {...props} />
);

const TableHead = ({ className, ...props }) => (
    <th className={`h-12 px-4 text-left align-middle font-medium text-gray-500 ${className}`} {...props} />
);

const TableCell = ({ className, ...props }) => (
    <td className={`p-4 align-middle ${className}`} {...props} />
);

const TableCaption = ({ className, ...props }) => (
    <caption className={`mt-4 text-sm text-gray-500 ${className}`} {...props} />
);

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
};