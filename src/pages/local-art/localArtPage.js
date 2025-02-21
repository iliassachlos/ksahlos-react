import MasonryGrid from "../../components/masonryGrid/masonryGrid"
import {useEffect, useState} from "react"
import {getPhotos} from "../../firebase/getPhotos"
import Spinner from "../../components/spinner/spinner"
import PaginationComponent from "../../components/shared/pagination"

function LocalArtPage() {
    const [photosData, setPhotosData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const category = 'local-art'

    const photosPerPage = 15
    const indexOfLastPhoto = currentPage * photosPerPage
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage
    const currentPhotos = photosData.slice(indexOfFirstPhoto, indexOfLastPhoto)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const data = await getPhotos(category)
            setPhotosData(data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <div className="p-2 bg-black">
            {photosData.length > 0 ?
                <>
                    <MasonryGrid photos={currentPhotos}/>
                    <div className="flex justify-center items-center">
                        <PaginationComponent
                            totalItems={photosData.length}
                            itemsPerPage={photosPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </>
                : <div className='flex justify-center items-center w-full h-screen'>
                    <Spinner/>
                </div>
            }
        </div>
    )
}

export default LocalArtPage
