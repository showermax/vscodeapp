type BodyTitleType = {
    titleForBody: string
}
export const Body = (props: BodyTitleType) => {
    return (
        <div>
            Where is it???{props.titleForBody}
        </div>
    )
}