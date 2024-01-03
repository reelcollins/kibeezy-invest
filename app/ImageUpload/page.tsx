'use client'

import { useState } from 'react'
// import styles from '@/styles/uploadimage.css';

export default function Page() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!file) {
      alert('Please select a file to upload.')
      return
    }

    setUploading(true)

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + '/api/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      }
    )

    if (response.ok) {
      const { url, fields } = await response.json()
      console.log(url)

      const formData = new FormData()
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string)
      })
      formData.append('file', file)
      console.log(formData)

      const uploadResponse = await fetch(url, {
        method: 'POST',
        body: formData,
      })

      // Inside the if (uploadResponse.ok) block
      if (uploadResponse.ok) {
        alert('Upload successful!');
        
        // Construct the object URL based on your S3 URL format
        const objectKey = fields.key; // Assuming 'key' is the field returned by S3
        const objectUrl = `${url}${objectKey}`;
        console.log('Object URL:', objectUrl);
        
        // Now you can use the 'objectUrl' as needed (e.g., store it in state, display it, etc.).
      } else {
        console.error('S3 Upload Error:', uploadResponse);
        alert('Upload failed.');
      }

      
    } else {
      alert('Failed to get pre-signed URL.')
    }

    setUploading(false)
  }

  return (
    <main>
      <h1>Upload a File to S3</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="file"
          type="file"
          onChange={(e) => {
            const files = e.target.files
            if (files) {
              setFile(files[0])
            }
          }}
          accept="image/png, image/jpeg"
        />
        <button type="submit" disabled={uploading}>
          Upload
        </button>
      </form>
    </main>
  )
}
