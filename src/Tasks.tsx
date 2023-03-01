type DataType = {
    title: string
    tasks: Array<TasksType>
    students: Array<string>
}

type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}

export const Tasks = (props: DataType) => {
    return (
        <div className="list">
            <h3>{props.title}</h3>
            <ul>
            {props.tasks.map(el => <li key={el.taskId}><input type="checkbox" checked={el.isDone}/> {el.title}</li>)}
            </ul>
            <ul>
            {props.students.map((el,i) => <li key={i}>{el}</li>)}
            </ul>

        </div>
    )
}