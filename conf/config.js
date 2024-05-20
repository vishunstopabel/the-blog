const conf = {
    endpoint: String(import.meta.env.VITE_APPWRITE_URL),
    projectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionid: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    collectionid2: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID2),
    bucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}


export default conf