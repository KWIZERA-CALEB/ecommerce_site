import { useState } from 'react'
import Navigation from "../components/Navigation/Navigation"
import { Button, Textarea, Input } from "@nextui-org/react"
import AdminMenu from '../components/atoms/AdminMenu'
import { createProduct } from '../services/productservice'

type ImagePreview = {
    id: any,
    src:  string
}

const AdminCreate = () => {
    const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const handleTitleChange = (e: any)=> {
        setTitle(e.target.value)
    }

    const handlePriceChange = (e: any)=> {
        setPrice(e.target.value)
    }

    const handleDescriptionChange = (e: any)=> {
        setDescription(e.target.value)
    }

    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const files = e.target.files ? Array.from(e.target.files) : [];

        const newImagePreviews: ImagePreview[] = []

        files.forEach(file=> {
            const reader = new FileReader()
            reader.onloadend = ()=> {
                if (reader.result && typeof reader.result === 'string') {
                    newImagePreviews.push({ id: file.name, src: reader.result });
                }
                if(newImagePreviews.length === files.length) {
                    setImagePreviews(prevPreviews => [...prevPreviews, ...newImagePreviews])
                }
            }

            reader.readAsDataURL(file)
        })
    }

    const renderedImagePreviews = imagePreviews.map((imagePreview) => (
        <div key={imagePreview.id} className="flex flex-row space-x-[6px]">
          <img src={imagePreview.src} className="w-[170px] rounded-[12px]" alt="Image" />
        </div>
    ));

    const handleAddProduct = async (e: any)=> {
        e.preventDefault()
        const formData = new FormData();
        formData.append('product_name', title);
        formData.append('product_price', price);
        formData.append('description', description);
    
        imagePreviews.forEach((imagePreview, index) => {
          const blob = dataURLtoBlob(imagePreview.src);
          formData.append(`product_image[]`, blob, imagePreview.id);
        })
        try{
            const res = await createProduct(formData)
            console.log(res)
        }catch(error) {
            console.log(`Error adding the product ${error}`)
            throw error
        }
    }

    const dataURLtoBlob = (dataURL: string): Blob => {
        // Split the dataURL at the comma
        const arr = dataURL.split(',');
    
        // Extract the MIME type from the dataURL
        const mime = arr[0].match(/:(.*?);/)![1];
    
        // Decode the base64 string to binary string
        const bstr = atob(arr[1]);
    
        // Convert binary string to an array of 8-bit unsigned integers
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
    
        // Create a Blob from the Uint8Array
        return new Blob([u8arr], { type: mime });
    }
  return (
    <>
        <Navigation />
        <div className="pl-[6px] flex flex-row space-x-[6px] pr-[6px] mt-[30px] md:mt-[80px] md:pl-[40px] md:pr-[40px]">
            <AdminMenu></AdminMenu>
            <div className="p-[0px] w-full md:w-[80%]">
                <div className="flex w-full flex-row items-center p-[30px] border-[2px] border-solid border-gray-300 justify-between">
                    <div className="flex flex-row items-center space-x-[25px]">
                        <div className="w-[50px] h-[50px] rounded-full">
                            <img src="/images/avatar-0.jfif" className="w-full h-full rounded-full object-cover object-center cursor-pointer" title="Avatar" alt="Profile Avatar" />
                        </div>
                        <div className="text-slate-800 font-black select-none text-[18px]"><strong>SPONGE</strong></div>
                    </div>
                    <div>
                        <Button>Edit Account</Button>
                    </div>
                </div>

                <div className="w-full border-[2px] border-solid mt-[20px] border-gray-300 p-[30px]">
                    <div className="text-slate-500 font-black select-none flex justify-center text-[18px]"><strong>Create new Product</strong></div>
                    <div className="mt-[15px]">
                        <form onSubmit={handleAddProduct} encType="multipart/form-data" >
                            <div>
                                <input type="file" className="hidden" id="file" multiple accept="image/*" onChange={handleImagesChange} />
                            </div>

                            <div className="mb-[15px]">
                                <div className="text-slate-500 font-black select-none text-[14px]"><strong>Product Image</strong></div>
                                <label htmlFor="file">
                                    <div className={imagePreviews.length === 0 ? "border-2 border-dotted border-gray-300 p-[30px] flex justify-center" : "border-2 border-dotted border-gray-300 p-[30px] flex justify-start flex-wrap"}>
                                        <div className={imagePreviews.length === 0 ? "text-slate-300 font-black select-none text-[14px]" : "text-slate-300 hidden font-black select-none text-[14px]"}><strong>Select to Choose a file</strong></div>
                                        {renderedImagePreviews}
                                    </div>
                                </label>
                            </div>

                            <div className="mb-[15px]">
                                <div className="text-slate-500 font-black select-none text-[14px]"><strong>Product Title</strong></div>
                                <div>
                                    <Input type="text" label="Product Title" value={title} onChange={handleTitleChange} />
                                </div>
                            </div>
                            <div className="mb-[15px]">
                                <div className="text-slate-500 font-black select-none text-[14px]"><strong>Product Price</strong></div>
                                <div>
                                    <Input type="text" label="Price" value={price} onChange={handlePriceChange} />
                                </div>
                            </div>
                            <div className="mb-[15px]">
                                <div className="text-slate-500 font-black select-none text-[14px]"><strong>Product Description</strong></div>
                                <div>
                                    <Textarea label="Description" placeholder="Enter your description" value={description} onChange={handleDescriptionChange} className="w-full"/>
                                </div>
                            </div>
                            <div>
                                <Button type="submit" className="w-full bg-slate-900 text-white">Add Product</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminCreate
