import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { S3Client } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  const { filename, contentType } = await request.json();

  try {
    // Check if AWS_REGION and AWS_BUCKET_NAME are defined
    if (!process.env.AWS_REGION || !process.env.AWS_BUCKET_NAME) {
      throw new Error('AWS_REGION or AWS_BUCKET_NAME not defined in environment variables.');
    }

    const client = new S3Client({ region: process.env.AWS_REGION });
    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: uuidv4(),
      Conditions: [
        ['content-length-range', 0, 10485760], // up to 10 MB
        ['starts-with', '$Content-Type', contentType],
      ],
      Fields: {
        acl: 'public-read',
        'Content-Type': contentType,
      },
      Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    });

    return Response.json({ url, fields });
  } catch (error) {
    const errorMessage = (error as Error).message; // Type assertion
    return Response.json({ error: errorMessage });
  }
}
