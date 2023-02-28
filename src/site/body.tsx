type BodyTitleType = {
    titleForBody: string
}
export const Body = (props: BodyTitleType) => {
    return (
        <div>
            {props.titleForBody}
        </div>
    )
}