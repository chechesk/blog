import { useState } from 'react'
import { Camera, Lock } from 'lucide-react'

export default function Component() {
  const [imageUrl, setImageUrl] = useState("/placeholder.svg?height=100&width=100")

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImageUrl(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
          Perfil de Usuario
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <div className="px-4 py-5 sm:p-6 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <img
                className="h-24 w-24 rounded-full object-cover"
                src={imageUrl}
                alt="Profile picture"
              />
              <label
                htmlFor="picture"
                className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md cursor-pointer hover:bg-gray-100"
              >
                <Camera className="w-5 h-5 text-gray-600" />
                <input
                  type="file"
                  id="picture"
                  className="sr-only"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </label>
            </div>
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 focus:outline-none">
              Cambiar imagen
            </button>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="tu@email.com"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
        <button
          type="button"
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Lock className="w-4 h-4 mr-2" />
          Actualizar Contraseña
        </button>
      </div>
    </div>
  )
}