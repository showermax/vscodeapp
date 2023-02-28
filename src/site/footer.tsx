
type FooterTitleType = {
    titleForFooter: string
}
export const Footer = (props: FooterTitleType) => {
    return (
        <div>
            {props.titleForFooter}
        </div>
    )
}