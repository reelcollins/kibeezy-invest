'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addObjectUrls } from '@/redux/features/objectUrlsSlice';

import styles from '@/styles/Map.module.css';
export default function Page() {
  const [mainPhoto, setMainPhoto] = useState<File | null>(null);
  const [additionalPhotos, setAdditionalPhotos] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [objectUrls, setObjectUrls] = useState<string[]>([]);
  const router = useRouter();
  const dispatch = useDispatch();

  
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();

    if (!mainPhoto) {
      alert('Please select a main photo to upload.');
      return;
    }

    setUploading(true);

    try {
      // Upload main photo
      const mainPhotoUrl = await uploadFile(mainPhoto);
      setObjectUrls([mainPhotoUrl]);

      // Upload additional photos
      const additionalPhotoUrls = await Promise.all(
        additionalPhotos.map(async (file) => uploadFile(file))
      );
      setObjectUrls((prevUrls) => [...prevUrls, ...additionalPhotoUrls]);

      alert('All uploads successful!');

      
      
      const objectUrls = [mainPhotoUrl, ...additionalPhotoUrls];
      
      dispatch(addObjectUrls(objectUrls));
      console.log(objectUrls)
      
      router.push('/realtor/upload');


    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + '/api/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      }
    );

    if (response.ok) {
      const { url, fields } = await response.json();

      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      formData.append('file', file);

      const uploadResponse = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (uploadResponse.ok) {
        // alert('Upload successful!');

        const objectKey = fields.key;
        const objectUrl = `${url}${objectKey}`;
        return objectUrl

      } else {
        console.error('S3 Upload Error:', uploadResponse);
        alert('Upload failed.');
        throw new Error('Upload failed.');
      }
    } else {
      console.error('Failed to get pre-signed URL.');
      alert('Failed to get pre-signed URL.');
      throw new Error('Failed to get pre-signed URL.');
    }
  };

  // Pass objectUrls to Property upload page or use them as needed

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Upload Photos to S3</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="mainPhoto">Main Photo:</label>
        <input
          className={styles.input}
          id="mainPhoto"
          type="file"
          onChange={(e) => setMainPhoto(e.target.files?.[0] || null)}
          accept="image/png, image/jpeg"
        />

        <label htmlFor="additionalPhotos">Additional Photos:</label>
        <input
          className={styles.input}
          id="additionalPhotos"
          type="file"
          onChange={(e) => setAdditionalPhotos(Array.from(e.target.files || []))}
          accept="image/png, image/jpeg"
          multiple
        />

        <button className={styles.button} type="submit" disabled={uploading}>
          Upload
        </button>
      </form>
    </main>
  );
}

