import { useEffect, useState } from "react"
import PhotosTable from "./photosTable"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../../../firebase/firebase"

function EditPhotosBlock() {
    const [imageCategory, setImageCategory] = useState("Conceptual")
    
    //Photo categories
    //etherial
    const [conceptualPhotos, setConceptualPhotos] = useState([])

    //escape
    const [blackAndWhitePhotos, setBlackAndWhitePhotos] = useState([])

    //illusion
    const [dramaticPhotos, setDramaticPhotos] = useState([])

    const [localArtPhotos, setLocalArtPhotos] = useState([])
    const [essentialPhotos, setEssentialPhotos] = useState()


    useEffect(() => {
        getEtherialPhotos()
        getEscapePhotos()
        getIllusionPhotos()
        getLocalArtPhotos()
        getEssentialPhotos()
    }, [])

    //Warning: Etherial indexes to conceptual in database
    async function getEtherialPhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "conceptual"))
        const photosData = querySnapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id }))
        const sortedPhotos = photosData.sort((a, b) => a.number - b.number)
        setConceptualPhotos(sortedPhotos)
    }

    //Warning: Escape indexes to black-and-white in database
    async function getEscapePhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "black-and-white"))
        const photosData = querySnapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id }))
        const sortedPhotos = photosData.sort((a, b) => a.number - b.number)
        setBlackAndWhitePhotos(sortedPhotos)
    }

    //Warning: Illusion indexes to stories collection in database
    async function getIllusionPhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "stories"))
        const photosData = querySnapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id }))
        const sortedPhotos = photosData.sort((a, b) => a.number - b.number)
        setDramaticPhotos(sortedPhotos)
    }

    async function getLocalArtPhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "local-art"))
        const photosData = querySnapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id }))
        const sortedPhotos = photosData.sort((a, b) => a.number - b.number)
        setLocalArtPhotos(sortedPhotos)
    }

    async function getEssentialPhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "essential"))
        const photosData = querySnapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id }))
        const sortedPhotos = photosData.sort((a, b) => a.number - b.number)
        setEssentialPhotos(sortedPhotos)
    }

    function handleImageCategoryChange(e) {
        setImageCategory(e.target.value)
    }

    return (
        <div>
            <select
                className="flex  mx-auto mb-5 border-2 rounded shadow-md p-2"
                value={imageCategory}
                onChange={handleImageCategoryChange}
                required
            >
                <option value="Conceptual" defaultChecked defaultValue>
                    Etherial (Old Illusion / Conceptual)
                </option>
                <option value="Black-And-White">Escape (Old Black And White)</option>
                <option value="Stories">Illusion (Old Dramatic / Stories)</option>
                <option value="Local-Art">Local-Art</option>
                <option value="Essential">Essential</option>
            </select>

            {imageCategory === "Conceptual" && (
                <div>
                    <PhotosTable photos={conceptualPhotos} imageCategory={imageCategory} />
                </div>
            )}
            {imageCategory === "Local-Art" && (
                <div>
                    <PhotosTable photos={localArtPhotos} imageCategory={imageCategory} />
                </div>
            )}
            {imageCategory === "Black-And-White" && (
                <div>
                    <PhotosTable photos={blackAndWhitePhotos} imageCategory={imageCategory} />
                </div>
            )}
            {imageCategory === "Stories" && (
                <div>
                    <PhotosTable photos={dramaticPhotos} imageCategory={imageCategory} />
                </div>
            )}
            {imageCategory === "Essential" && (
                <div>
                    <PhotosTable photos={essentialPhotos} imageCategory={imageCategory} />
                </div>
            )}
        </div>
    )
}

export default EditPhotosBlock
