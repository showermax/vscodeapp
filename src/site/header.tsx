type HeaderType={
    title:string
}
export const Header = (props: HeaderType) => {
    return (
    <div className="App-header">
        {props.title}
    </div>
    )
}