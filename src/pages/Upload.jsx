import React, { useState } from 'react';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { Addimage } from '../services/operation/imageBar';

export default function Upload() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  
  const userId = user ? user._id : null;
  console.log(userId);

  const dispatch = useDispatch();
  
  // Initialize all necessary form fields, including 'description' and 'fileType'
  const [formData, setFormData] = useState({
    name: "",
    studio: "", // "Studio" or "Free"
    image: null, // File object
    category: "",
    description: "",
    fileType: "", // "PNG", "JPG", or "JPEG"
  });

  const { name, studio, image, category, description, fileType } = formData;

  // Handle changes for text inputs and radio buttons
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(`${name}: ${value}`);
  };

  // Handle file input changes
  const handleOnFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };

  // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Create a new FormData object to send the file and other data
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('studio', studio);
    formDataToSend.append('image', image);
    formDataToSend.append('category', category);
    formDataToSend.append('description', description);
    formDataToSend.append('fileType', fileType);
    formDataToSend.append('userId', userId);
    
    dispatch(Addimage(formDataToSend, token, userId));
    
    // Optional: Log FormData contents for debugging
    for (let pair of formDataToSend.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    // Optional: Reset form after submission
    setFormData({
      name: "",
      studio: "",
      image: null,
      category: "",
      description: "",
      fileType: "",
    });
  };

  return (
    <div>
      <Profile />
      <div>
        <div className='w-[60%] m-auto'>
          <div className='flex mt-10'>
            <form 
              onSubmit={handleOnSubmit} 
              encType="multipart/form-data" 
              className="max-w-lg mx-auto bg-[#3B3B3A] w-[556px] h-[715px] shadow-md rounded-[9px] px-8 pt-6 pb-8 mb-4"
            >
              {/* Image Upload */}
              <div className="mb-4">
                <label 
                  className="block text-[#8F8787] text-sm font-medium mb-2" 
                  htmlFor="image"
                >
                  Image<span className='text-[#b43434]'>*</span>
                </label>
                <input 
                  onChange={handleOnFileChange}
                  className="appearance-none rounded m-auto w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="image"
                  type="file"
                  name="image"
                  required
                />
              </div>

              {/* Name Input */}
              <div className="mb-4 flex flex-col">
                <div className='flex flex-col m-auto'>
                  <label 
                    className="text-[#8F8787] text-sm text-left font-medium mb-2" 
                    htmlFor="name"
                  >
                    Name<span className='text-[#b43434]'>*</span>
                  </label>
                  <input 
                    onChange={handleOnChange}
                    className="shadow appearance-none h-[39px] rounded-[9px] w-[380px] bg-[#1E1E1E] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    value={name}
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>

              {/* Description Textarea */}
              <div className="mb-4 flex flex-col">
                <div className='flex flex-col m-auto'>
                  <label 
                    className="text-[#8F8787] text-sm text-left font-medium mb-2" 
                    htmlFor="description"
                  >
                    Description<span className='text-[#b43434]'>*</span>
                  </label>
                  <textarea 
                    onChange={handleOnChange}
                    className="shadow appearance-none rounded-[9px] w-[380px] bg-[#1E1E1E] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    name="description"
                    rows="4" 
                    value={description}
                    placeholder="Description"
                    required
                  />
                </div>
              </div>

              {/* Category Input */}
              <div className="mb-4 flex flex-col">
                <div className='flex flex-col m-auto'>
                  <label 
                    className="text-[#8F8787] text-sm text-left font-medium mb-2" 
                    htmlFor="category"
                  >
                    Category<span className='text-[#b43434]'>*</span>
                  </label>
                  <input 
                    onChange={handleOnChange}
                    className="shadow appearance-none h-[39px] rounded-[9px] w-[380px] bg-[#1E1E1E] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    name="category"
                    type="text"
                    value={category}
                    placeholder="Category"
                    required
                  />
                </div>
              </div>

              {/* Content Type Radio Buttons */}
              <div className="mb-4 mt-5">
                <div className='flex space-x-5 w-[380px] m-auto'>
                  <p className='text-[#8F8787]'>Content type<span className='text-[#b43434]'>*</span></p>
                  <div className='flex space-x-3'>
                    <div>
                      <input 
                        onChange={handleOnChange}
                        className="leading-tight"
                        id="studio-studio" // Unique ID
                        name="studio"
                        value="Studio"
                        type="radio"
                        checked={studio === "Studio"}
                        required
                      />
                      <label 
                        className="text-[#8F8787] text-sm font-medium mb-2" 
                        htmlFor="studio-studio"
                      >
                        Studio
                      </label>
                    </div>
                    <div>
                      <input 
                        onChange={handleOnChange}
                        className="leading-tight"
                        id="studio-free" // Unique ID
                        name="studio"
                        value="Free"
                        type="radio"
                        checked={studio === "Free"}
                      />
                      <label 
                        className="text-[#8F8787] text-sm font-medium mb-2" 
                        htmlFor="studio-free"
                      >
                        Free
                      </label>
                    </div>
                  </div>
                </div>

                {/* File Type Radio Buttons */}
                <div className='mb-4 mt-4'>
                  <div className='flex space-x-5 w-[380px] m-auto'>
                    <p className='text-[#8F8787]'>File type<span className='text-[#b43434]'>*</span></p>
                    <div className='flex space-x-3'>
                      <div>
                        <input 
                          className=''
                          id='file-type-png' // Unique ID
                          type='radio'
                          name="fileType"
                          value="PNG"
                          onChange={handleOnChange}
                          checked={fileType === "PNG"}
                          required
                        />
                        <label 
                          className='text-[#8F8787]' 
                          htmlFor='file-type-png'
                        >
                          PNG
                        </label>
                      </div>
                      <div>
                        <input 
                          className=''
                          id='file-type-jpg' // Unique ID
                          type='radio'
                          name="fileType"
                          value="JPG"
                          onChange={handleOnChange}
                          checked={fileType === "JPG"}
                        />
                        <label 
                          className='text-[#8F8787]' 
                          htmlFor='file-type-jpg'
                        >
                          JPG
                        </label>
                      </div>
                      <div>
                        <input 
                          className=''
                          id='file-type-jpeg' // Unique ID
                          type='radio'
                          name="fileType"
                          value="JPEG"
                          onChange={handleOnChange}
                          checked={fileType === "JPEG"}
                        />
                        <label 
                          className='text-[#8F8787] text-medium' 
                          htmlFor='file-type-jpeg'
                        >
                          JPEG
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upload Button */}
              <div className="mt-8">
                <button
                  className="bg-[#6BBF59] w-[92px] h-[31px] text-white font px-4 rounded-[7px] focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Upload
                </button>
              </div>
            </form>

            {/* Adjacent Div (As per original structure) */}
            <div className='bg-[#3B3B3A] rounded-[9px] w-[329px] h-[715px]'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
