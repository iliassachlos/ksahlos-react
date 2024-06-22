import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import Spinner from '../../spinner/spinner';
import InfoAlert from '../../shared/alerts/info/infoAlert';

function NewPhotoBlock() {
    const [imageTitle, setImageTitle] = useState('');
    const [imageDescription, setImageDescription] = useState('');
    const [imageCategory, setImageCategory] = useState('Conceptual');
    const [image, setImage] = useState(null);
    const [imageNumber, setImageNumber] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadFinishedAlert, setUploadFinishedAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    const storage = getStorage();

    function handleImageUploadChange(e) {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    }

    async function handleSubmit() {
        if (image) {
            setIsUploading(true);
            try {
                const storageRef = ref(storage, `${imageCategory}/${imageTitle}`);
                await uploadBytes(storageRef, image);
                const downloadURL = await getDownloadURL(storageRef);

                const category = imageCategory.toLowerCase();
                const galleryRef = collection(db, `photos/gallery/${category}`);
                await addDoc(galleryRef, {
                    url: downloadURL,
                    title: imageTitle,
                    desc: imageDescription,
                    number: parseInt(imageNumber),
                });

                setIsUploading(false);
                setUploadFinishedAlert(true);
                clearInputs();
            } catch (error) {
                console.error('Error Msg:', error);
                setIsUploading(false);
                setErrorAlert(true);
            }
        }
    }

    function clearInputs() {
        setImageTitle('');
        setImageDescription('');
        setImageCategory('Conceptual');
        setImageNumber(0);
    }

    return (
        <div className="flex flex-col">
            {isUploading && <Spinner />}
            {uploadFinishedAlert && <InfoAlert message="Image was added successfully!" />}
            {errorAlert && <div className="my-4 bg-red-200 rounded shadow-md p-3">An Error Occurred!</div>}
            <p className="text-sm">Image Title</p>
            <input
                className="mb-5 border-2 rounded shadow-md p-2"
                type="text"
                value={imageTitle}
                onChange={(e) => setImageTitle(e.target.value)}
                required
            />
            <p className="text-sm">Select A Category</p>
            <select
                className="mb-5 border-2 rounded shadow-md p-2"
                value={imageCategory}
                onChange={(e) => setImageCategory(e.target.value)}
                required
            >
                <option value="Conceptual">Etherial (Old Illusion / Conceptual)</option>
                <option value="Black-And-White">Escape (Old Black And White)</option>
                <option value="Stories">Illusion (Old Dramatic / Stories)</option>
                <option value="Local-art">Local-Art</option>
                <option value="Essential">Essential</option>
            </select>
            <p className="text-sm">Image Number</p>
            <input
                className="mb-5 border-2 rounded shadow-md p-2"
                type="text"
                value={imageNumber}
                onChange={(e) => setImageNumber(e.target.value)}
                required
            />
            <p className="text-sm">Image Description</p>
            <textarea
                className="mb-5 border-2 rounded shadow-md p-2"
                value={imageDescription}
                onChange={(e) => setImageDescription(e.target.value)}
                required
            />
            <input className="my-6" type="file" onChange={handleImageUploadChange} required />
            <button className="bg-black text-white rounded shadow-md p-2 mx-14" onClick={handleSubmit}>
                Submit Photo
            </button>
        </div>
    );
}

export default NewPhotoBlock;
