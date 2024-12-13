
import { categories } from "../data/categories"
import { ChangeEvent, FormEvent, useState } from "react"
import { Activity } from "../types"

export default function Form() {
    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const isNumnerField = ['category', 'calories'].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id]: isNumnerField ? +e.target.value : e.target.value
        })
    }

    //validacion del formulario 
    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    
    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg"
        onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría: </label>
                <select id="category" className="border border-slate-200 p-2 rounded-lg w-full bg-white"
                    value={activity.category}
                    onChange={e => handleChange}>
                    {categories.map(category => (
                        <option
                            key={category.id}>
                            {category.name}</option>
                    )
                    )}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input type="text"
                    id="name"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Calorías:</label>
                <input type="number"
                    id="name"
                    className="border border-slate-300 p-2 rounded-lg"
                    value={activity.calories}
                    onChange={handleChange} />
            </div>

            <input type="submit" name="" id="" className="bg-gray-700 hover:bg-gray-800 p-2 font-bold uppercase text-white cursor-pointer w-full"
                value="Guardar"
                disabled={!isValidActivity()}
            />

        </form>
    )
}
