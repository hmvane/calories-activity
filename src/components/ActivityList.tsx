import { Activity } from "../types"

type ActivityListProps = {
    activities : Activity[]
}


export default function ActivityList({activities} : ActivityListProps) {
    return (
        <>
            <h1 className="text-4xl font-bold text-slate-600 text-center"> Comida y Acividades</h1>
            {activities.map(activity => (
                <div key={activity.id} className="px-5 py-10 bg-lime-50 mt-5 flex justify-between">
                    <div className="space-y-2 relative">
                        <p className="">{activity.category}</p>
                        <p className="text-black font-bold pt-5">{activity.name}</p>
                        <p className="font-black text-4xl text-lime-500">
                            {activity.calories} {''}
                            <span>Calorías</span>
                        </p>
                    </div>

                </div>
            ))}
        </>
    )
}
