import "./skeleton.css"

type Props = {
    type: string,
    width?: string, // String so the user can specify the unit as well.
    height?: string
}

export default function Skeleton({type, width, height}: Props) {

    if (type === "list") {
        return (
            <section>
                <div className="skeleton skeleton-list"></div>
                <div className="skeleton skeleton-list"></div>
                <div className="skeleton skeleton-list"></div>
                <div className="skeleton skeleton-list"></div>
                <div className="skeleton skeleton-list"></div>
            </section>
        )
    } else if (type === "section") {
        return (
            <section>
                <div className="skeleton skeleton-section"></div>
            </section>
        )
    } else if (type === "cards") {
        return (
            <section className="skeleton-card-container">
                <div className="skeleton skeleton-cards"></div>
                <div className="skeleton skeleton-cards"></div>
                <div className="skeleton skeleton-cards"></div>
                <div className="skeleton skeleton-cards"></div>
            </section>
        )
    
    } else if (type === "graph") {
        return (
            <section className="skeleton-graph-container">
                <div className="skeleton-graph-content">
                    <div className="skeleton bar-low"></div>
                    <div className="skeleton bar-middle"></div>
                    <div className="skeleton bar-high"></div>
                </div>
            </section>
        )
    
    } else if (type === "reviews") {
        return (
            <section className="skeleton-reviews-container">
                <div className="skeleton skeleton-reviews"></div>
                <div className="skeleton skeleton-reviews"></div>
                <div className="skeleton skeleton-reviews"></div>
                <div className="skeleton skeleton-reviews"></div>
                <div className="skeleton skeleton-reviews"></div>
                <div className="skeleton skeleton-reviews"></div>
                <div className="skeleton skeleton-reviews"></div>
                <div className="skeleton skeleton-reviews"></div>
            </section>
        )

    } else if (type === "image") {
        return (
            <div 
                className="skeleton skeleton-image"
                style={{height: height ? height : "20rem", width: width ? width : "30rem"}}
            ></div>
        )
    } else {
        return (
            <div className="skeleton skeleton-list"></div>
        )
    }
}
