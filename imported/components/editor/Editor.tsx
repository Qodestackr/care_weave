import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { Button } from '../ui/button';
import parse from 'html-react-parser';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export default function CustomQuillEditor() {
    const [content, setContent] = useState('');

    const quillModules = {
        toolbar: [
            [{ header: [1, false] }],
            [
                'bold',
                // 'italic',
                // 'underline',
                // 'strike',
                // 'blockquote'
            ],
            [{ list: 'ordered' },
            { list: 'bullet' }
            ],
            // ['link', 'image'],
            // [{ align: [] }],
            // [{ color: [] }],
            // ['code-block'],
            // ['clean'],
        ],
    };

    const quillFormats = [
        'header',
        'bold',
        // 'italic',
        // 'underline',
        // 'strike',
        // 'blockquote',
        'list',
        'bullet',
        // 'link',
        // 'image',
        // 'align',
        // 'color',
        // 'code-block',
    ];

    const handleEditorChange = (newContent: React.SetStateAction<string>) => {
        setContent(newContent);
    };
    const handleSubmit = () => {
        // Access the content of the Quill editor from the 'content' state
        console.log('Content:', content);
        // Here you can proceed to use or submit the content as needed
    };

    const theHtmlObj = { __html: content };

    return (
        <main>
            <div className="h-full w-[420px]">
                <QuillEditor
                    value={content}
                    onChange={handleEditorChange}
                    modules={quillModules}
                    formats={quillFormats}
                    className="w-full h-[70%] mt-10 bg-white"
                />
                <Button className='mt-2 mb-1' onClick={handleSubmit}>Done</Button>
            </div>

            <div dangerouslySetInnerHTML={theHtmlObj} />

            the other..
            {

                parse(content.trim())
            }
        </main>
    );
}